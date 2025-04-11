
import React from 'react';
import { Header } from '@/components/Header';
import { HomeHero } from '@/components/HomeHero';
import { TrendingTopics } from '@/components/TrendingTopics';
import { UsageTracker } from '@/components/UsageTracker';
import { HomeFooter } from '@/components/HomeFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HomeHero />
      <TrendingTopics />
      <UsageTracker />
      <HomeFooter />
    </div>
  );
};

export default Index;
