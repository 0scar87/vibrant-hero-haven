
import React from 'react';
import { Header } from '@/components/Header';
import { ConversationInterface } from '@/components/conversation/ConversationInterface';
import { useTheme } from '@/components/ThemeProvider';

const Chat = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      
      <div className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="h-[75vh]">
          <ConversationInterface />
        </div>
      </div>
    </div>
  );
};

export default Chat;
