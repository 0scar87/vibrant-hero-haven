import React from 'react';
import { Header } from "@/components/Header";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
      
      {/* Third section - Our path of progress */}
      <div className="min-h-screen bg-black py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight">
                Our path of progress
              </h2>
            </div>
            <div>
              <p className="text-base md:text-lg leading-relaxed">
                We're moving toward a future where we will harness our cluster's full power to solve
                intractable problems. What's one seemingly impossible question you'd answer for humanity?
              </p>
            </div>
          </div>
          
          {/* Updated Timeline section to match the template */}
          <div className="mt-24 relative">
            {/* Timeline labels */}
            <div className="flex justify-between text-xs text-gray-500 uppercase mb-6">
              <div>AUG 2024</div>
              <div>NOV 2024</div>
              <div>FEB 2025</div>
            </div>
            
            {/* Timeline horizontal bar */}
            <div className="w-full h-px bg-gray-800 relative">
              {/* Timeline dots */}
              <div className="absolute top-0 left-0 -translate-y-1.5 flex justify-between w-full">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-3 w-3 rounded-full ${i === 8 ? 'border-2 border-yellow-500 p-0.5 bg-transparent' : 'bg-gray-600'}`}
                  >
                    {i === 8 && <div className="h-full w-full rounded-full bg-yellow-500"></div>}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Current milestone */}
            <div className="absolute right-0 mt-10">
              <div className="text-sm text-gray-400 mb-1">
                17 FEB
              </div>
              <h3 className="text-xl font-medium mb-4">
                Today
              </h3>
              <p className="text-base text-gray-300">
                Running jobs with 80k+ GPUs and 99% uptime
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fourth section - Unprecedented scale */}
      <div className="min-h-screen bg-black py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight">
                Unprecedented scale
              </h2>
            </div>
            <div>
              <p className="text-base md:text-lg leading-relaxed">
                We doubled our compute at an unprecedented rate, with a roadmap to 1M GPUs. Progress in AI is driven by compute and no one has come close to building at this magnitude and speed.
              </p>
            </div>
          </div>

          {/* Specs grid - updated to use lines instead of bordered containers */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mt-24 border-t border-gray-800">
            {/* Spec 1 */}
            <div className="py-12 px-6 border-b border-r border-gray-800 md:border-b-0">
              <p className="text-xs text-gray-500 uppercase mb-12">NUMBER OF GPUS</p>
              <div className="flex items-baseline">
                <span className="text-6xl font-medium mr-2">200K</span>
                <span className="text-sm text-gray-500">GPUs</span>
              </div>
            </div>
            
            {/* Spec 2 */}
            <div className="py-12 px-6 border-b border-r border-gray-800 md:border-b-0">
              <p className="text-xs text-gray-500 uppercase mb-12">TOTAL MEMORY BANDWIDTH</p>
              <div className="flex items-baseline">
                <span className="text-6xl font-medium mr-2">194</span>
                <span className="text-sm text-gray-500">Petabytes/s</span>
              </div>
            </div>
            
            {/* Spec 3 */}
            <div className="py-12 px-6 border-b border-r border-gray-800 md:border-b-0">
              <p className="text-xs text-gray-500 uppercase mb-12">NETWORK BANDWIDTH PER SERVER</p>
              <div className="flex items-baseline">
                <span className="text-6xl font-medium mr-2">3.6</span>
                <span className="text-sm text-gray-500">Terabits/s</span>
              </div>
            </div>
            
            {/* Spec 4 */}
            <div className="py-12 px-6 border-b border-gray-800 md:border-b-0 md:border-r-0">
              <p className="text-xs text-gray-500 uppercase mb-12">STORAGE CAPACITY</p>
              <div className="flex items-baseline">
                <span className="text-6xl font-medium mr-2">{'>'}1</span>
                <span className="text-sm text-gray-500">Exabyte</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colossus;
