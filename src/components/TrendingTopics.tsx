
import React from 'react';
import { Link } from 'react-router-dom';

const topics = [
  { name: 'Mental Wellness', id: 'science-of-mindfulness' },
  { name: 'Mindfulness', id: 'science-of-mindfulness' },
  { name: 'Anxiety Relief', id: 'cognitive-behavioral-therapy' },
  { name: 'Deep Sleep', id: 'sleep-and-mental-health' }
];

export function TrendingTopics() {
  return (
    <div className="w-full mt-8 animate-fade-in-delay-2 opacity-0">
      <p className="text-black/60 dark:text-white/60 text-sm text-center mb-4">Trending</p>
      <div className="flex flex-wrap justify-center gap-3">
        {topics.map((topic) => (
          <Link to={`/research/${topic.id}`} key={topic.name}>
            <button
              className="px-4 py-2 rounded-full text-sm bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 transition-all"
            >
              {topic.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
