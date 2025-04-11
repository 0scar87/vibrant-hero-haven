
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

export const VisionSection: React.FC = () => {
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
              src="/lovable-uploads/a298352c-b723-441e-ac55-af3adf835757.png" 
              alt="Sankara Vision" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Right side - Text content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
          
          <p className="text-base md:text-lg leading-relaxed">
            At Sankara, we envision a world where every person has access to accurate mental health 
            diagnostics regardless of their financial situation or geographic location. By removing 
            the barriers that traditionally limit access to professional assessment, we empower 
            individuals to take informed control of their mental wellness journey from the earliest stages.
          </p>
        </div>
      </div>
    </section>
  );
};
