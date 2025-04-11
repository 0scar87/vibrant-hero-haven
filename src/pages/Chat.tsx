
import React from 'react';
import { Header } from '@/components/Header';
import { ConversationInterface } from '@/components/conversation/ConversationInterface';
import { useTheme } from '@/components/ThemeProvider';
import { isHumeConfigured } from '@/integrations/hume/humeClient';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const Chat = () => {
  const { theme } = useTheme();
  const apiConfigured = isHumeConfigured();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      
      <div className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        {!apiConfigured && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>API Key Required</AlertTitle>
            <AlertDescription>
              To use the chat functionality, you need to add a Hume API key to your project. 
              In the Lovable environment, add it via Project Settings. For local development, 
              create a .env file with VITE_HUME_API_KEY=your_key.
            </AlertDescription>
          </Alert>
        )}
        
        <div className="h-[75vh]">
          <ConversationInterface />
        </div>
      </div>
    </div>
  );
};

export default Chat;
