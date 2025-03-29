
import React from 'react';
import { Header } from "@/components/Header";
import { ChevronDown } from "lucide-react";

const Colossus = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header className="absolute top-0 left-0 right-0 z-50" />
      
      <div className="h-screen flex flex-col items-center justify-center relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gray-400 mb-8 tracking-wider text-sm md:text-base uppercase font-light">
            [ OUR GIGAFACTORY OF COMPUTE ]
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-20 bg-gradient-to-b from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            COLOSSUS
          </h1>
          
          <div className="absolute bottom-32 w-full max-w-xl right-4 md:right-20 text-left">
            <p className="text-sm md:text-base leading-relaxed">
              We're running the world's biggest supercomputer, Colossus. Built in 122 days—outpacing every estimate—it was the most powerful AI training system yet. Then we doubled it in 92 days to 200k GPUs. This is just the beginning.
            </p>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} strokeWidth={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colossus;
