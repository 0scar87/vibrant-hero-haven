
import React, { useState, useRef } from 'react';
import { Mic, MicOff, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ConversationInputProps {
  onSendText: (text: string) => void;
  onStartRecording: () => void;
  onStopRecording: () => void;
  isRecording: boolean;
  isLoading: boolean;
}

export const ConversationInput: React.FC<ConversationInputProps> = ({
  onSendText,
  onStartRecording,
  onStopRecording,
  isRecording,
  isLoading
}) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (text.trim() && !isLoading) {
      onSendText(text);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      onStopRecording();
    } else {
      onStartRecording();
    }
  };

  return (
    <div className="border-t border-border p-4 bg-background w-full">
      <div className="flex items-end gap-2 max-w-full">
        <div className="flex-1">
          <Textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="resize-none min-h-[80px] w-full"
            disabled={isLoading}
          />
        </div>
        
        <div className="flex flex-col space-y-2 flex-shrink-0">
          <Button 
            type="button"
            size="icon"
            onClick={toggleRecording}
            disabled={isLoading}
            variant={isRecording ? "destructive" : "secondary"}
          >
            {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          
          <Button 
            type="button"
            size="icon"
            onClick={handleSend}
            disabled={!text.trim() || isLoading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
