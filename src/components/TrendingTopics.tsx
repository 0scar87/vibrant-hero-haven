
import React from 'react';

const topics = ['Mental Wellness', 'Mindfulness', 'Anxiety Relief', 'Deep Sleep'];

export function TrendingTopics() {
  return (
    <div className="w-full mt-8 animate-fade-in-delay-2 opacity-0">
      <p className="text-black/60 dark:text-white/60 text-sm text-center mb-4">Trending</p>
      <div className="flex flex-wrap justify-center gap-3">
        {topics.map((topic) => (
          <button
            key={topic}
            className="px-4 py-2 rounded-full text-sm bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 transition-all"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}
