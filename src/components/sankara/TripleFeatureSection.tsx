
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

export const TripleFeatureSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className={cn(
      "py-20 px-6 md:px-16 lg:px-24",
      theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
    )}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20 max-w-7xl mx-auto">
        {/* Left Item */}
        <div>
          <div className={cn(
            "w-full aspect-video mb-6",
            theme === 'dark' ? "border border-white" : "border border-black"
          )}></div>
          <p className="text-base md:text-lg leading-relaxed">
            Sankara continuously learns from anonymized 
            interactions with our therapeutic assistant Wiinta, 
            refining its diagnostic capabilities across 400+ 
            mental health conditions while adapting to 
            diverse presentation patterns.
          </p>
        </div>
        
        {/* Middle Item */}
        <div>
          <div className={cn(
            "w-full aspect-video mb-6",
            theme === 'dark' ? "border border-white" : "border border-black"
          )}></div>
          <p className="text-base md:text-lg leading-relaxed">
            Our advanced algorithms detect subtle linguistic 
            and vocal patterns associated with specific 
            mental health conditions, enabling early 
            identification of conditions that might otherwise 
            remain undiagnosed for years.
          </p>
        </div>
        
        {/* Right Item */}
        <div>
          <div className={cn(
            "w-full aspect-video mb-6",
            theme === 'dark' ? "border border-white" : "border border-black"
          )}></div>
          <p className="text-base md:text-lg leading-relaxed">
            Sankara's diagnostic protocol combines multi-modal
            assessment techniques with contextual analysis,
            providing clinicians with comprehensive insights
            that enhance treatment planning and improve
            patient outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
