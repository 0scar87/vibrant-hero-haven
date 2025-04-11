
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

export const FeaturesSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className={cn(
      "py-20 px-4 md:px-12 lg:px-24",
      theme === 'dark' ? "bg-white/5" : "bg-black/5"
    )}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={cn(
            "p-6 rounded-xl",
            theme === 'dark' ? "bg-white/5" : "bg-black/5"
          )}>
            <h3 className="text-xl font-bold mb-3">Adaptive Intelligence</h3>
            <p>Learns from your interactions to provide increasingly personalized support tailored to your unique needs.</p>
          </div>
          
          <div className={cn(
            "p-6 rounded-xl",
            theme === 'dark' ? "bg-white/5" : "bg-black/5"
          )}>
            <h3 className="text-xl font-bold mb-3">Emotional Recognition</h3>
            <p>Advanced algorithms that understand the nuances of human emotion through text and voice interactions.</p>
          </div>
          
          <div className={cn(
            "p-6 rounded-xl",
            theme === 'dark' ? "bg-white/5" : "bg-black/5"
          )}>
            <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
            <p>Always there when you need support, regardless of time or place.</p>
          </div>
          
          <div className={cn(
            "p-6 rounded-xl",
            theme === 'dark' ? "bg-white/5" : "bg-black/5"
          )}>
            <h3 className="text-xl font-bold mb-3">Evidence-Based Techniques</h3>
            <p>Incorporates proven therapeutic approaches backed by scientific research.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
