
import React from 'react';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { TrendingTopics } from './TrendingTopics';
import { UsageTracker } from './UsageTracker';

export function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-hidden">
      <Header />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-light text-center max-w-3xl mb-16 leading-tight animate-fade-in opacity-0">
          Mental Health, Reinvented for a Limitless You.
        </h1>
        
        <SearchBar />
        <TrendingTopics />
        <UsageTracker />
      </div>
    </div>
  );
}
