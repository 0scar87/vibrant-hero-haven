
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
            className="topic-button"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}
