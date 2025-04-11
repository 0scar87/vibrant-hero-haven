
/**
 * Hume AI API Client for text and speech conversations
 */

// Retrieve API key based on environment
// This works in both Lovable environment and local development with .env file
const HUME_API_KEY = import.meta.env.VITE_HUME_API_KEY || '';

// Check if API key is available
const isHumeKeyAvailable = Boolean(HUME_API_KEY);

export interface HumeTextRequest {
  text: string;
}

export interface HumeSpeechRequest {
  audioData: string; // base64 encoded audio
}

export interface HumeResponse {
  text: string;
  audioUrl?: string;
}

/**
 * Send text to Hume AI and get a response
 */
export const sendTextToHume = async (request: HumeTextRequest): Promise<HumeResponse> => {
  try {
    console.log('📤 Sending text to Hume AI:', request.text);
    
    // If API key is not available, return a message prompting for API key configuration
    if (!isHumeKeyAvailable) {
      console.warn('⚠️ Hume API key not configured');
      return {
        text: "API key not configured. Please add your Hume API key in the project settings or .env file."
      };
    }
    
    // This is a placeholder implementation - replace with actual Hume API call
    const response = await fetch('https://api.hume.ai/v0/text/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUME_API_KEY}`
      },
      body: JSON.stringify({
        text: request.text,
        model: 'hume-chat-v1', // Replace with the correct model name from Hume
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Hume API error:', errorData);
      throw new Error(errorData.message || 'Failed to get response from Hume AI');
    }
    
    const data = await response.json();
    console.log('📥 Received response from Hume AI:', data);
    
    return {
      text: data.text || 'Sorry, I could not process your request.',
    };
  } catch (error) {
    console.error('❌ Error sending text to Hume AI:', error);
    return {
      text: 'Sorry, there was an error processing your request. Please try again later.'
    };
  }
};

/**
 * Send speech to Hume AI and get a response
 */
export const sendSpeechToHume = async (request: HumeSpeechRequest): Promise<HumeResponse> => {
  try {
    console.log('🎤 Sending audio to Hume AI');
    
    // If API key is not available, return a message prompting for API key configuration
    if (!isHumeKeyAvailable) {
      console.warn('⚠️ Hume API key not configured');
      return {
        text: "API key not configured. Please add your Hume API key in the project settings or .env file."
      };
    }
    
    // This is a placeholder implementation - replace with actual Hume API call
    const response = await fetch('https://api.hume.ai/v0/speech/transcribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUME_API_KEY}`
      },
      body: JSON.stringify({
        audio: request.audioData,
        model: 'hume-speech-v1', // Replace with the correct model name from Hume
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Hume API error:', errorData);
      throw new Error(errorData.message || 'Failed to get response from Hume AI');
    }
    
    const transcriptionData = await response.json();
    console.log('🎤 Transcribed speech:', transcriptionData);
    
    // Now send the transcribed text to the text API
    const textResponse = await sendTextToHume({ text: transcriptionData.text });
    
    // Optional: Convert the text response back to speech
    // This would require another API call to Hume's text-to-speech endpoint
    
    return {
      text: textResponse.text,
      // audioUrl: responseData.audioUrl, // If Hume provides an audio URL
    };
  } catch (error) {
    console.error('❌ Error sending speech to Hume AI:', error);
    return {
      text: 'Sorry, there was an error processing your audio. Please try again later.'
    };
  }
};

// Export function to check if API key is configured
export const isHumeConfigured = () => isHumeKeyAvailable;
