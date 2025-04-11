
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ConversationInterface } from '@/components/conversation/ConversationInterface';
import { ApiKeyInput } from '@/components/conversation/ApiKeyInput';
import { useTheme } from '@/components/ThemeProvider';
import { isHumeConfigured, refreshApiKey } from '@/integrations/hume/humeClient';

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
          <div className="h-[75vh]">
            <ConversationInterface />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
