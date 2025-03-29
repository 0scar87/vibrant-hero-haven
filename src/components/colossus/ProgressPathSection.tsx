import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const ProgressPathSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background dark:bg-black py-12 md:py-20 px-4 md:px-8 animate-fade-in-delay-1">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Our path of progress
            </h2>
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed mt-4 md:mt-0">
              We're moving toward a future where we will harness our cluster's full power to solve
              intractable problems. What's one seemingly impossible question you'd answer for humanity?
            </p>
          </div>
        </div>
        
        {/* Timeline section */}
        <div className="mt-16 md:mt-24 relative">
          {/* Timeline labels */}
          <div className="flex justify-between text-xs text-gray-500 uppercase mb-6">
            <div>AUG 2024</div>
            <div className={isMobile ? "hidden" : "block"}>NOV 2024</div>
            <div>FEB 2025</div>
          </div>
          
          {/* Timeline horizontal bar */}
          <div className="w-full h-px bg-gray-300 dark:bg-gray-800 relative">
            {/* Timeline dots */}
            <div className="absolute top-0 left-0 -translate-y-1.5 flex justify-between w-full">
              {[...Array(isMobile ? 3 : 9)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-3 w-3 rounded-full ${
                    (isMobile && i === 2) || (!isMobile && i === 8) 
                      ? 'border-2 border-yellow-500 p-0.5 bg-transparent' 
                      : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                >
                  {((isMobile && i === 2) || (!isMobile && i === 8)) && 
                    <div className="h-full w-full rounded-full bg-yellow-500"></div>
                  }
                </div>
              ))}
            </div>
          </div>
          
          {/* Current milestone */}
          <div className="absolute right-0 mt-8 md:mt-10">
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">
              17 FEB
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-4">
              Today
            </h3>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-[200px] md:max-w-none">
              Running jobs with 80k+ GPUs and 99% uptime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
