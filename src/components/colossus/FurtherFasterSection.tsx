
import React from 'react';

export const FurtherFasterSection = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-black py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 md:mb-8">
              We go further, faster
            </h2>
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              We were told it would take 24 months to build. So 
              we took the project into our own hands, questioned 
              everything, removed whatever was unnecessary, 
              and accomplished our goal in four months.
            </p>
          </div>
        </div>
        
        {/* Image section */}
        <div className="w-full mt-8 md:mt-10">
          <div className="relative">
            <img 
              src="/lovable-uploads/cf1a0985-41a5-4b1e-8207-a0ba33c477e2.png" 
              alt="Colossus facility aerial view" 
              className="w-full h-auto"
            />
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8">
              <p className="text-xs uppercase tracking-widest mb-1 text-gray-400">
                ■ CONSTRUCTION TIME
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                122 DAYS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
