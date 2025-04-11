
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { ConversationInterface } from '@/components/conversation/ConversationInterface';
import { useTheme } from '@/components/ThemeProvider';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Chat = () => {
  const { theme } = useTheme();
  
  // Show a toast on component mount if the Hume API key is missing
  useEffect(() => {
    // Check if we have a Hume API key in the environment
    const hasApiKey = Boolean(import.meta.env.VITE_HUME_API_KEY);
    
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
        <div className="space-y-4">
          <Alert className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
            <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Wiinta Chat</AlertTitle>
            <AlertDescription>
              This chat is powered by Hume AI and uses Vercel serverless functions for API calls.
              Users can interact with Wiinta without needing their own API keys.
            </AlertDescription>
          </Alert>
          
          <div className="h-[75vh]">
            <ConversationInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
