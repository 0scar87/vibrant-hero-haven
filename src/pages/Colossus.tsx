
import React from 'react';
import { Header } from "@/components/Header";
import { ChevronDown } from "lucide-react";

const Colossus = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header className="absolute top-0 left-0 right-0 z-50" />
      
      {/* First section - Hero */}
      <div className="h-screen flex flex-col items-center justify-center relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-gray-400 mb-20 tracking-wider text-sm md:text-base uppercase font-light text-center">
            [ OUR GIGAFACTORY OF COMPUTE ]
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-20 text-center">
            <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
              COLOSSUS
            </span>
          </h1>
          
          <div className="flex justify-between items-end mt-48">
            <div className="invisible md:visible">
              <ChevronDown size={32} strokeWidth={1} className="animate-bounce" />
            </div>
            
            <div className="w-full md:w-1/2 pr-4 md:pr-0 text-right">
              <p className="text-sm md:text-base leading-relaxed">
                We're running the world's biggest supercomputer, Colossus. Built in 122 days—outpacing every estimate—it was the most powerful AI training system yet. Then we doubled it in 92 days to 200k GPUs. This is just the beginning.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second section - We go further, faster */}
      <div className="min-h-screen bg-black py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">
                We go further, faster
              </h2>
            </div>
            <div>
              <p className="text-base md:text-lg leading-relaxed">
                We were told it would take 24 months to build. So 
                we took the project into our own hands, questioned 
                everything, removed whatever was unnecessary, 
                and accomplished our goal in four months.
              </p>
            </div>
          </div>
          
          {/* Image section */}
          <div className="w-full mt-10">
            <div className="relative">
              <img 
                src="/lovable-uploads/cf1a0985-41a5-4b1e-8207-a0ba33c477e2.png" 
                alt="Colossus facility aerial view" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-widest mb-1 text-gray-400">
                  ■ CONSTRUCTION TIME
                </p>
                <p className="text-3xl md:text-4xl font-medium">
                  122 DAYS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colossus;
