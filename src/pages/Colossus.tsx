
import React from 'react';
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/colossus/HeroSection";
import { FurtherFasterSection } from "@/components/colossus/FurtherFasterSection";
import { ProgressPathSection } from "@/components/colossus/ProgressPathSection";
import { UnprecedentedScaleSection } from "@/components/colossus/UnprecedentedScaleSection";
import { LatestUpdatesSection } from "@/components/colossus/LatestUpdatesSection";

const Colossus = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header className="absolute top-0 left-0 right-0 z-50" />
      
      {/* First section - Hero */}
      <HeroSection />
      
      {/* Second section - We go further, faster */}
      <FurtherFasterSection />
      
      {/* Third section - Our path of progress */}
      <ProgressPathSection />
      
      {/* Fourth section - Unprecedented scale */}
      <UnprecedentedScaleSection />
      
      {/* Fifth section - Latest Updates */}
      <LatestUpdatesSection />
    </div>
  );
};

export default Colossus;
