
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

export const ContentSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="content" className={cn(
      "py-20 px-4 md:px-12 lg:px-24",
      theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
    )}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What is Sankara?</h2>
        
        <div className="space-y-6 text-lg">
          <p>
            Sankara represents our innovative approach to mental wellness technology. 
            It combines advanced AI with human-centered design to create experiences that 
            truly understand and respond to your emotional needs.
          </p>
          
          <p>
            With Sankara, we're redefining what's possible in digital mental health support,
            creating a companion that grows with you, learns from you, and helps you navigate 
            life's challenges with greater resilience and self-awareness.
          </p>
          
          <p>
            Our team of experts in psychology, neuroscience, and artificial intelligence have 
            collaborated to develop this groundbreaking technology that adapts to your unique 
            needs and provides personalized support when you need it most.
          </p>
        </div>
      </div>
    </section>
  );
};
