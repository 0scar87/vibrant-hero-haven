
import React from 'react';
import { ArrowDown, Brain, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
        <div className="flex justify-center items-center mb-6">
          <Badge 
            className="px-4 py-1.5 text-sm rounded-full flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white/90"
          >
            <Sparkles className="h-4 w-4" />
            <span>Pioneering Mental Health Technology</span>
          </Badge>
        </div>
        
        <h2 className="text-xl md:text-2xl mb-6 animate-fade-in">Introducing</h2>
        
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold animate-fade-in">
            Sankara
          </h1>
          <span className="ml-4">
            <Brain className="h-8 w-8 md:h-12 md:w-12 text-white/80" />
          </span>
        </div>
        
        <p className="text-base md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in text-white/90">
          A revolutionary approach to mental health diagnostics, combining AI-powered 
          analysis with human-centered design to provide unprecedented accuracy in mental 
          wellness assessment and support.
        </p>
        
        <div className="mt-12 flex justify-center gap-4 animate-fade-in-delay-1">
          <Button 
            onClick={scrollToContent}
            className="rounded-full px-6 py-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white flex items-center gap-2"
          >
            Learn More
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
