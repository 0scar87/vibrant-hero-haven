
import { useState, useRef, useCallback } from 'react';
import { sendTextToHume, sendSpeechToHume, HumeResponse } from '@/integrations/hume/humeClient';

type MessageType = 'user' | 'bot';

export interface Message {
  id: string;
  text: string;
  type: MessageType;
  timestamp: Date;
  isProcessing?: boolean;
}

export const useHumeConversation = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const audioContext = useRef<AudioContext | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  // Initialize conversation with a welcome message
  const initConversation = useCallback(() => {
    const welcomeMessage: Message = {
      id: 'welcome',
      text: 'Hi there! I\'m Wiinta. How can I help you today?',
      type: 'bot',
      timestamp: new Date()
    };
    
    setMessages([welcomeMessage]);
  }, []);

  // Process user text input
  const sendText = useCallback(async (text: string) => {
    if (!text.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      type: 'user',
      timestamp: new Date()
    };
    
    const processingMessage: Message = {
      id: `${Date.now()}-processing`,
      text: '',
      type: 'bot',
      timestamp: new Date(),
      isProcessing: true
    };
    
    setMessages(prev => [...prev, userMessage, processingMessage]);
    setIsLoading(true);
    
    try {
      const response = await sendTextToHume({ text });
      
      setMessages(prev => prev.map(msg => 
        msg.id === processingMessage.id 
          ? { ...msg, text: response.text, isProcessing: false } 
          : msg
      ));
      
      // Optional: If there's audio, play it
      if (response.audioUrl) {
        playAudioResponse(response.audioUrl);
      }
      
    } catch (error) {
      console.error('❌ Error in conversation:', error);
      setMessages(prev => prev.map(msg => 
        msg.id === processingMessage.id 
          ? { 
              ...msg, 
              text: 'Sorry, I encountered an error. Please try again.', 
              isProcessing: false 
            } 
          : msg
      ));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Start recording audio
  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioChunks.current = [];
      
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.addEventListener('dataavailable', (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      });
      
      mediaRecorder.current.addEventListener('stop', async () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
        await processAudioInput(audioBlob);
      });
      
      mediaRecorder.current.start();
      setIsRecording(true);
      
    } catch (error) {
      console.error('❌ Error starting recording:', error);
    }
  }, []);

  // Stop recording audio
  const stopRecording = useCallback(() => {
    if (mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  }, []);

  // Process recorded audio
  const processAudioInput = useCallback(async (audioBlob: Blob) => {
    try {
      setIsLoading(true);
      
      // Convert blob to base64
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      
      reader.onloadend = async () => {
        const base64Audio = reader.result as string;
        // Remove the data:audio/webm;base64, prefix
        const base64Data = base64Audio.split(',')[1];
        
        const processingMessage: Message = {
          id: `${Date.now()}-processing`,
          text: '',
          type: 'bot',
          timestamp: new Date(),
          isProcessing: true
        };
        
        // Add a placeholder message for the processing
        setMessages(prev => [...prev, processingMessage]);
        
        try {
          const response = await sendSpeechToHume({ audioData: base64Data });
          
          setMessages(prev => prev.map(msg => 
            msg.id === processingMessage.id 
              ? { ...msg, text: response.text, isProcessing: false } 
              : msg
          ));
          
          // Optional: Play audio response if available
          if (response.audioUrl) {
            playAudioResponse(response.audioUrl);
          }
          
        } catch (error) {
          console.error('❌ Error processing audio:', error);
          setMessages(prev => prev.map(msg => 
            msg.id === processingMessage.id 
              ? { 
                  ...msg, 
                  text: 'Sorry, I encountered an error processing your audio. Please try again.', 
                  isProcessing: false 
                } 
              : msg
          ));
        } finally {
          setIsLoading(false);
        }
      };
      
    } catch (error) {
      console.error('❌ Error processing audio input:', error);
      setIsLoading(false);
    }
  }, []);

  // Play audio response
  const playAudioResponse = useCallback((audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play().catch(error => {
      console.error('❌ Error playing audio response:', error);
    });
  }, []);

  // Clear conversation
  const clearConversation = useCallback(() => {
    setMessages([]);
    initConversation();
  }, [initConversation]);

  return {
    messages,
    isLoading,
    isRecording,
    sendText,
    startRecording,
    stopRecording,
    clearConversation,
    initConversation
  };
};
