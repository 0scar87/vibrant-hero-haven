
import React from 'react';

const specs = [
  { label: 'NUMBER OF GPUS', value: '200K', unit: 'GPUs' },
  { label: 'TOTAL MEMORY BANDWIDTH', value: '194', unit: 'Petabytes/s' },
  { label: 'NETWORK BANDWIDTH PER SERVER', value: '3.6', unit: 'Terabits/s' },
  { label: 'STORAGE CAPACITY', value: '>1', unit: 'Exabyte' }
];

export const UnprecedentedScaleSection = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-black py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Unprecedented scale
            </h2>
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed mt-4 md:mt-0">
              We doubled our compute at an unprecedented rate, with a roadmap to 1M GPUs. Progress in AI is driven by compute and no one has come close to building at this magnitude and speed.
            </p>
          </div>
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 mt-16 md:mt-24 border-t border-gray-300 dark:border-gray-800">
          {specs.map((spec, index) => (
            <div 
              key={index} 
              className={`py-8 md:py-12 px-4 md:px-6 border-b border-r border-gray-300 dark:border-gray-800 md:border-b-0 ${
                index === 3 ? 'md:border-r-0' : ''
              }`}
            >
              <p className="text-xs text-gray-500 uppercase mb-6 md:mb-12">{spec.label}</p>
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl lg:text-6xl font-medium mr-2">{spec.value}</span>
                <span className="text-xs md:text-sm text-gray-500">{spec.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
