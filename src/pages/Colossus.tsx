
import React from 'react';
import { Header } from "@/components/Header";
import { ChevronDown } from "lucide-react";

const Colossus = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header className="absolute top-0 left-0 right-0 z-50" />
      
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
    </div>
  );
};

export default Colossus;
