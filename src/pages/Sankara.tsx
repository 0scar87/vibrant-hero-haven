
import React from 'react';
import { Header } from '@/components/Header';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';
import { SankaraHero } from '@/components/sankara/SankaraHero';
import { FeaturesGrid } from '@/components/sankara/FeaturesGrid';
import { ContentSection } from '@/components/sankara/ContentSection';
import { FeaturesSection } from '@/components/sankara/FeaturesSection';
import { TripleFeatureSection } from '@/components/sankara/TripleFeatureSection';
import { VisionSection } from '@/components/sankara/VisionSection';
import { HowItWorksSection } from '@/components/sankara/HowItWorksSection';
import { SankaraFooter } from '@/components/sankara/SankaraFooter';

const Sankara = () => {
  const { theme } = useTheme();
  
  const scrollToContent = () => {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={cn(
      "min-h-screen",
      theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
    )}>
      <Header />
      
      {/* Hero Section */}
      <SankaraHero scrollToContent={scrollToContent} />
      
      {/* Features Grid Section */}
      <FeaturesGrid />
      
      {/* Content Section */}
      <ContentSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Triple Feature Section */}
      <TripleFeatureSection />
      
      {/* Vision Section */}
      <VisionSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Footer */}
      <SankaraFooter />
    </div>
  );
};

export default Sankara;
