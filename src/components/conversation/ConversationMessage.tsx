
import React from 'react';
import { Message } from '@/hooks/use-hume-conversation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2 } from 'lucide-react';

interface ConversationMessageProps {
  message: Message;
}

export const ConversationMessage: React.FC<ConversationMessageProps> = ({ message }) => {
  const isUser = message.type === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-start max-w-3xl ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <Avatar className={`${isUser ? 'ml-3' : 'mr-3'} flex-shrink-0`}>
          {isUser ? (
            <>
              <AvatarFallback>U</AvatarFallback>
              <AvatarImage src="/placeholder.svg" alt="User" />
            </>
          ) : (
            <>
              <AvatarFallback>W</AvatarFallback>
              <AvatarImage src="/placeholder.svg" alt="Wiinta" />
            </>
          )}
        </Avatar>
        
        <div className={`${isUser 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-secondary text-secondary-foreground'
        } px-4 py-3 rounded-lg`}>
          {message.isProcessing ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Thinking...</span>
            </div>
          ) : (
            <p className="whitespace-pre-wrap">{message.text}</p>
          )}
        </div>
      </div>
    </div>
  );
};
