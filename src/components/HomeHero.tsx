
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HomeHero() {
  const navigate = useNavigate();
  
  const handleStartConversation = () => {
    navigate('/chat');
  };
  
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 md:py-32">
      <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light text-center max-w-5xl mb-16 leading-tight">
        Healing, reimagined. Powered by <br className="hidden md:block" />
        empathy, guided by You.
      </h1>
      
      <button
        onClick={handleStartConversation}
        className="flex items-center gap-4 bg-transparent border border-white/20 text-white rounded-full px-8 py-4 hover:bg-white/10 transition-colors"
      >
        <span className="text-lg">Start conversation</span>
        <div className="bg-white rounded-full p-2">
          <ArrowRight className="h-5 w-5 text-black" />
        </div>
      </button>
    </div>
  );
}
