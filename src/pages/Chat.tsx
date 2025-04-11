
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { ConversationInterface } from '@/components/conversation/ConversationInterface';
import { useTheme } from '@/components/ThemeProvider';
import { toast } from '@/components/ui/use-toast';

const Chat = () => {
  const { theme } = useTheme();
  
  // Show a toast on component mount if the Hume API key is missing
  useEffect(() => {
    // Check if we have a Hume API key in the environment
    const hasApiKey = Boolean(import.meta.env.VITE_HUME_API_KEY);
    
    // Log the API key status for developers
    console.info('Hume Chat Info:', {
      apiKeyConfigured: hasApiKey,
      usingMockResponses: !hasApiKey && import.meta.env.PROD,
      environment: import.meta.env.PROD ? 'production' : 'development'
    });
    
    if (!hasApiKey && import.meta.env.PROD) {
      toast({
        title: "Configuration Notice",
        description: "Hume AI API key is not configured. The chat will use mock responses.",
        variant: "destructive"
      });
    }
  }, []);
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      
      <div className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="h-[calc(100vh-180px)]">
          <ConversationInterface />
        </div>
      </div>
    </div>
  );
};

export default Chat;
