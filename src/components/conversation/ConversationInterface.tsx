
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ConversationMessage } from './ConversationMessage';
import { ConversationInput } from './ConversationInput';
import { useHumeConversation } from '@/hooks/use-hume-conversation';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

export const ConversationInterface: React.FC = () => {
  const { 
    messages, 
    isLoading, 
    isRecording, 
    sendText, 
    startRecording, 
    stopRecording, 
    clearConversation,
    initConversation
  } = useHumeConversation();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize conversation
  useEffect(() => {
    initConversation();
  }, [initConversation]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  return (
    <Card className="h-full flex flex-col overflow-hidden w-full">
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <CardTitle>Conversation with Wiinta</CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearConversation}
            disabled={messages.length <= 1 || isLoading}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ConversationMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      
      <CardFooter className="p-0">
        <ConversationInput 
          onSendText={sendText}
          onStartRecording={startRecording}
          onStopRecording={stopRecording}
          isRecording={isRecording}
          isLoading={isLoading}
        />
      </CardFooter>
    </Card>
  );
};
