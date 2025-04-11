
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ConversationInterface } from '@/components/conversation/ConversationInterface';
import { ApiKeyInput } from '@/components/conversation/ApiKeyInput';
import { useTheme } from '@/components/ThemeProvider';
import { isHumeConfigured, refreshApiKey } from '@/integrations/hume/humeClient';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from 'lucide-react';

const Chat = () => {
  const { theme } = useTheme();
  const [apiConfigured, setApiConfigured] = useState(isHumeConfigured());
  
  // Check API key on component mount
  useEffect(() => {
    setApiConfigured(refreshApiKey());
  }, []);
  
  const handleApiKeySet = () => {
    setApiConfigured(refreshApiKey());
  };
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      
      <div className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        {!apiConfigured ? (
          <ApiKeyInput onApiKeySet={handleApiKeySet} />
        ) : (
          <div className="space-y-4">
            <Alert className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
              <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle>Serverless Mode</AlertTitle>
              <AlertDescription>
                The chat is now configured to use serverless functions for API calls to Hume AI. 
                This allows you to deploy to Vercel without CORS issues. Your API key is stored 
                locally and securely used only for authentication with the Hume API.
              </AlertDescription>
            </Alert>
            
            <div className="h-[75vh]">
              <ConversationInterface />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
