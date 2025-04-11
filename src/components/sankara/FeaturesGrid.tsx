
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

export const FeaturesGrid: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className={cn(
      "py-20 px-6 md:px-16 lg:px-24",
      theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
    )}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 max-w-7xl mx-auto">
        {/* Feature 1 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Redefining Mental Health Diagnostics</h2>
          <p className={cn(
            "text-base md:text-lg leading-relaxed",
            theme === 'dark' ? "text-white/80" : "text-black/80"
          )}>
            Sankara represents a paradigm shift in mental health
            diagnostics, combining cutting-edge AI technology
            with compassionate human-centered design. Our
            vision is to make accurate mental health assessments
            accessible to everyone, everywhere.
          </p>
        </div>
        
        {/* Feature 2 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Precision</h2>
          <p className={cn(
            "text-base md:text-lg leading-relaxed",
            theme === 'dark' ? "text-white/80" : "text-black/80"
          )}>
            Our revolutionary diagnostic platform harnesses the
            power of artificial intelligence to detect and analyze
            patterns associated with over 400 recognized mental
            health conditions, providing unprecedented accuracy
            in assessment and guidance.
          </p>
        </div>
        
        {/* Feature 3 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ethical Learning, Absolute Privacy</h2>
          <p className={cn(
            "text-base md:text-lg leading-relaxed",
            theme === 'dark' ? "text-white/80" : "text-black/80"
          )}>
            Built on a foundation of anonymized data ethically
            collected through our free therapeutic assistant Wiinta,
            Sankara learns continuously to improve its diagnostic
            capabilities while maintaining absolute privacy and
            security for all users.
          </p>
        </div>
        
        {/* Feature 4 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare Equality</h2>
          <p className={cn(
            "text-base md:text-lg leading-relaxed",
            theme === 'dark' ? "text-white/80" : "text-black/80"
          )}>
            Sankara aims to democratize mental healthcare by
            removing financial barriers to professional-grade
            diagnostics. We envision a world where early detection
            and intervention become universal rights rather than
            privileges.
          </p>
        </div>
      </div>
    </section>
  );
};
