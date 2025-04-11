
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SankaraHeroProps {
  scrollToContent: () => void;
}

export const SankaraHero: React.FC<SankaraHeroProps> = ({ scrollToContent }) => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-4">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/af5100a0-b0cd-4af6-ae8e-074301b2ebd9.png" 
          alt="Sankara Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto z-10 text-white">
        <h2 className="text-xl md:text-2xl mb-6 animate-fade-in">Introducing</h2>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-10 animate-fade-in">
          Sankara
        </h1>
        
        <p className="text-base md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id.
        </p>
        
        <button 
          onClick={scrollToContent}
          className="mt-12 flex flex-col items-center justify-center animate-fade-in-delay-1"
          aria-label="Explore more content"
        >
          <span className="mb-2">Explore</span>
          <ArrowDown className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};
