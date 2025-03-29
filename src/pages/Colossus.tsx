
import React from 'react';
import { Header } from "@/components/Header";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Colossus = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header className="absolute top-0 left-0 right-0 z-50" />
      
      {/* First section - Hero */}
      <div className="h-screen flex flex-col items-center justify-center relative px-4 md:px-0">
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
      
      {/* Second section - We go further, faster */}
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
      
      {/* Third section - Our path of progress */}
      <div className="min-h-screen bg-background dark:bg-black py-12 md:py-20 px-4 md:px-8">
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
          
          {/* Updated Timeline section to match the template */}
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
      
      {/* Fourth section - Unprecedented scale */}
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

          {/* Specs grid - updated to use lines instead of bordered containers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 mt-16 md:mt-24 border-t border-gray-300 dark:border-gray-800">
            {/* Spec 1 */}
            <div className="py-8 md:py-12 px-4 md:px-6 border-b border-r border-gray-300 dark:border-gray-800 md:border-b-0">
              <p className="text-xs text-gray-500 uppercase mb-6 md:mb-12">NUMBER OF GPUS</p>
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl lg:text-6xl font-medium mr-2">200K</span>
                <span className="text-xs md:text-sm text-gray-500">GPUs</span>
              </div>
            </div>
            
            {/* Spec 2 */}
            <div className="py-8 md:py-12 px-4 md:px-6 border-b border-r border-gray-300 dark:border-gray-800 md:border-b-0">
              <p className="text-xs text-gray-500 uppercase mb-6 md:mb-12">TOTAL MEMORY BANDWIDTH</p>
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl lg:text-6xl font-medium mr-2">194</span>
                <span className="text-xs md:text-sm text-gray-500">Petabytes/s</span>
              </div>
            </div>
            
            {/* Spec 3 */}
            <div className="py-8 md:py-12 px-4 md:px-6 border-b border-r border-gray-300 dark:border-gray-800 md:border-b-0">
              <p className="text-xs text-gray-500 uppercase mb-6 md:mb-12">NETWORK BANDWIDTH PER SERVER</p>
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl lg:text-6xl font-medium mr-2">3.6</span>
                <span className="text-xs md:text-sm text-gray-500">Terabits/s</span>
              </div>
            </div>
            
            {/* Spec 4 */}
            <div className="py-8 md:py-12 px-4 md:px-6 border-b border-gray-300 dark:border-gray-800 md:border-b-0 md:border-r-0">
              <p className="text-xs text-gray-500 uppercase mb-6 md:mb-12">STORAGE CAPACITY</p>
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl lg:text-6xl font-medium mr-2">{'>'}1</span>
                <span className="text-xs md:text-sm text-gray-500">Exabyte</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fifth section - Latest Updates */}
      <div className="min-h-screen bg-background dark:bg-black py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
            {/* Card 1 */}
            <div className="flex flex-col space-y-4">
              <div className="relative aspect-square overflow-hidden mb-4">
                <div 
                  className="w-full h-full bg-gradient-to-br from-red-600 via-red-500 to-yellow-500 flex items-center justify-center"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  <div className="bg-black px-3 py-1.5 md:px-4 md:py-2 text-white text-sm md:text-base font-medium z-10">
                    COLOSSUS 3
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-medium">Colossus 3 Beta — The Age of Parallel Acceleration</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                We are thrilled to unveil an early preview of Colossus 3, 
                our most advanced compute cluster yet, blending superior 
                acceleration with extensive parallel processing capabilities.
              </p>
              
              <div className="flex items-center justify-between mt-4 md:mt-6">
                <span className="text-xs md:text-sm text-gray-500">FEBRUARY 19, 2025</span>
                <Button variant="outline" size={isMobile ? "sm" : "default"} className="rounded-full border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10">
                  READ
                </Button>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="flex flex-col space-y-4">
              <div className="relative aspect-square overflow-hidden mb-4">
                <div 
                  className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 flex items-center justify-center"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  <div className="bg-black px-3 py-1.5 md:px-4 md:py-2 text-white text-sm md:text-base font-medium z-10">
                    SERIES C
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-medium">Wiinta raises $6B Series C</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                We are partnering with A16Z, Blackrock, Fidelity
                Management & Research Company, Kingdom
                Holdings, Lightspeed, MGX, Morgan Stanley, and others.
              </p>
              
              <div className="flex items-center justify-between mt-4 md:mt-6">
                <span className="text-xs md:text-sm text-gray-500">DECEMBER 23, 2024</span>
                <Button variant="outline" size={isMobile ? "sm" : "default"} className="rounded-full border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10">
                  READ
                </Button>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="flex flex-col space-y-4">
              <div className="relative aspect-square overflow-hidden mb-4">
                <div 
                  className="w-full h-full bg-gradient-to-br from-red-500 via-purple-500 to-yellow-500 flex items-center justify-center"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  <div className="bg-black px-3 py-1.5 md:px-4 md:py-2 text-white text-sm md:text-base font-medium z-10">
                    COLOSSUS FOR ALL
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-medium">Bringing Colossus to Everyone</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                Colossus is now faster, sharper, and has improved 
                multilingual support. It is available to everyone on 
                the x platform.
              </p>
              
              <div className="flex items-center justify-between mt-4 md:mt-6">
                <span className="text-xs md:text-sm text-gray-500">DECEMBER 12, 2024</span>
                <Button variant="outline" size={isMobile ? "sm" : "default"} className="rounded-full border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10">
                  READ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colossus;
