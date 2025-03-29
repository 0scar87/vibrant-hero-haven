
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
          
          {/* Timeline section */}
          <div className="mt-24 relative">
            {/* Timeline line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gray-800"></div>
            
            {/* Timeline markers */}
            <div className="flex justify-between relative mb-16">
              <div className="text-sm text-gray-400 absolute left-0 top-4">
                AUG 2024
              </div>
              <div className="text-sm text-gray-400 absolute left-1/3 top-4">
                NOV 2024
              </div>
              <div className="text-sm text-gray-400 absolute left-2/3 top-4">
                FEB 2025
              </div>
            </div>
            
            {/* Timeline dots */}
            <div className="flex mt-16 relative">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-gray-700 mr-10"></div>
              ))}
              
              {/* Active dot */}
              <div className="absolute left-2/3 -mt-1 h-4 w-4 rounded-full border-2 border-yellow-500 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            
            {/* Current milestone */}
            <div className="mt-24 ml-[66.7%]">
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
      
      {/* Fourth section - Latest news */}
      <div className="min-h-screen bg-black py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-20">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight">
              Latest news
            </h2>
            <a href="#" className="border border-white/20 text-white px-6 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
              VIEW ALL
            </a>
          </div>
          
          {/* News cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-red-900 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Colossus reaches 99% uptime</h3>
                <p className="text-gray-400 mb-4">Our engineering team achieved a major milestone in supercomputer reliability.</p>
                <a href="#" className="text-sm text-white/70 hover:text-white">Read more →</a>
              </div>
            </div>
            
            {/* News Card 2 */}
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-blue-900 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">80,000 GPU milestone</h3>
                <p className="text-gray-400 mb-4">We've scaled our infrastructure to support the next generation of AI models.</p>
                <a href="#" className="text-sm text-white/70 hover:text-white">Read more →</a>
              </div>
            </div>
            
            {/* News Card 3 */}
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-purple-900 via-pink-700 to-orange-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Expanding our datacenter</h3>
                <p className="text-gray-400 mb-4">Construction begins on a new facility to house our growing computational resources.</p>
                <a href="#" className="text-sm text-white/70 hover:text-white">Read more →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colossus;
