
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const HowItWorksSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className={cn(
      "py-20 px-6 md:px-16 lg:px-24",
      theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
    )}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-7xl mx-auto">
        {/* Left side - Image placeholder */}
        <div className="flex items-center justify-center">
          <div className={cn(
            "w-full aspect-video max-w-lg",
            theme === 'dark' ? "border border-white" : "border border-black"
          )}>
            <img 
              src="/lovable-uploads/5f1eeca8-f35e-4d94-954c-12b763e166ec.png" 
              alt="How Sankara Works" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Right side - Text content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">How Sankara works</h2>
          
          <p className="text-base md:text-lg leading-relaxed mb-10">
            Sankara's revolutionary diagnostic capability is
            built through a unique, privacy-first approach to
            machine learning. Our free therapeutic assistant,
            Wiinta, provides supportive conversations to those
            seeking mental wellness guidance. With explicit
            consent, these interactions—completely
            anonymized and stripped of identifying
            information—contribute to Sankara's growing
            understanding of how mental health conditions
            manifest in language and thought patterns.
          </p>
          
          <div className="flex justify-start">
            <Button
              variant="outline"
              className={cn(
                "rounded-full",
                theme === 'dark' 
                  ? "border border-white text-white hover:bg-white/10" 
                  : "border border-black text-black hover:bg-black/10"
              )}
            >
              Try Wiinta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
