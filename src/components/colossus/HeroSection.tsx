import React from 'react';
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative px-4 md:px-0 animate-fade-in">
      <div className="w-full max-w-7xl mx-auto">
        <p className="text-gray-400 dark:text-gray-400 mb-10 md:mb-20 tracking-wider text-xs md:text-sm lg:text-base uppercase font-light text-center">
          [ OUR GIGAFACTORY OF COMPUTE ]
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-12 md:mb-20 text-center">
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-200 dark:via-gray-400 dark:to-gray-600 bg-clip-text text-transparent" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1) dark:rgba(255,255,255,0.1)' }}>
            COLOSSUS
          </span>
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-20 md:mt-48">
          <div className="hidden md:block">
            <ChevronDown size={32} strokeWidth={1} className="animate-bounce" />
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-right">
            <p className="text-sm md:text-base leading-relaxed">
              We're running the world's biggest supercomputer, Colossus. Built in 122 days—outpacing every estimate—it was the most powerful AI training system yet. Then we doubled it in 92 days to 200k GPUs. This is just the beginning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
