
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

export const ContentSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="content" className={cn(
      "py-24 px-4 md:px-12 lg:px-24",
      theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
    )}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <Badge 
              variant="outline"
              className={cn(
                "px-4 py-1.5 text-sm rounded-full",
                theme === 'dark' ? "border-white/20 text-white/90" : "border-black/20 text-black/80"
              )}
            >
              About Sankara
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">What is Sankara?</h2>
            
            <div className="space-y-5 text-lg">
              <p className={cn(
                "leading-relaxed",
                theme === 'dark' ? "text-white/80" : "text-black/80"
              )}>
                Sankara represents our innovative approach to mental wellness technology. 
                It combines advanced AI with human-centered design to create experiences that 
                truly understand and respond to your emotional needs.
              </p>
              
              <p className={cn(
                "leading-relaxed",
                theme === 'dark' ? "text-white/80" : "text-black/80"
              )}>
                With Sankara, we're redefining what's possible in digital mental health support,
                creating a companion that grows with you, learns from you, and helps you navigate 
                life's challenges with greater resilience and self-awareness.
              </p>
              
              <p className={cn(
                "leading-relaxed",
                theme === 'dark' ? "text-white/80" : "text-black/80"
              )}>
                Our team of experts in psychology, neuroscience, and artificial intelligence have 
                collaborated to develop this groundbreaking technology that adapts to your unique 
                needs and provides personalized support when you need it most.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className={cn(
              "rounded-2xl overflow-hidden border",
              theme === 'dark' ? "border-white/20" : "border-black/10"
            )}>
              <AspectRatio ratio={4/3}>
                <img 
                  src="/lovable-uploads/cf1a0985-41a5-4b1e-8207-a0ba33c477e2.png" 
                  alt="Sankara Technology"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
