
import React from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const newsItems = [
  {
    gradient: "from-red-600 via-red-500 to-yellow-500",
    badge: "COLOSSUS 3",
    title: "Colossus 3 Beta — The Age of Parallel Acceleration",
    description: "We are thrilled to unveil an early preview of Colossus 3, our most advanced compute cluster yet, blending superior acceleration with extensive parallel processing capabilities.",
    date: "FEBRUARY 19, 2025"
  },
  {
    gradient: "from-blue-900 via-blue-600 to-blue-400",
    badge: "SERIES C",
    title: "Wiinta raises $6B Series C",
    description: "We are partnering with A16Z, Blackrock, Fidelity Management & Research Company, Kingdom Holdings, Lightspeed, MGX, Morgan Stanley, and others.",
    date: "DECEMBER 23, 2024"
  },
  {
    gradient: "from-red-500 via-purple-500 to-yellow-500",
    badge: "COLOSSUS FOR ALL",
    title: "Bringing Colossus to Everyone",
    description: "Colossus is now faster, sharper, and has improved multilingual support. It is available to everyone on the x platform.",
    date: "DECEMBER 12, 2024"
  }
];

export const LatestUpdatesSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background dark:bg-black py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="relative aspect-square overflow-hidden mb-4">
                <div 
                  className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  <div className="bg-black px-3 py-1.5 md:px-4 md:py-2 text-white text-sm md:text-base font-medium z-10">
                    {item.badge}
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-medium">{item.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mt-4 md:mt-6">
                <span className="text-xs md:text-sm text-gray-500">{item.date}</span>
                <Button variant="outline" size={isMobile ? "sm" : "default"} className="rounded-full border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10">
                  READ
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
