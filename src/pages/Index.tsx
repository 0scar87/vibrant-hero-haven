
import React from 'react';
import { Header } from '@/components/Header';
import { HomeHero } from '@/components/HomeHero';
import { TrendingTopics } from '@/components/TrendingTopics';
import { UsageTracker } from '@/components/UsageTracker';
import { HomeFooter } from '@/components/HomeFooter';
import { useTheme } from '@/components/ThemeProvider';

const Index = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <Header />
      <HomeHero />
      <TrendingTopics />
      <UsageTracker />
      <HomeFooter />
    </div>
  );
};

export default Index;
