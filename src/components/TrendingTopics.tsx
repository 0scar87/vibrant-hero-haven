
import React from 'react';
import { Link } from 'react-router-dom';

const topics = [
  { name: 'Topics', id: 'science-of-mindfulness' },
  { name: 'Topics', id: 'cognitive-behavioral-therapy' },
  { name: 'Topics', id: 'sleep-and-mental-health' },
  { name: 'Topics', id: 'anxiety-management' }
];

export function TrendingTopics() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-6">
      <p className="text-white/80 text-sm text-center mb-6">Trending</p>
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {topics.map((topic, index) => (
          <Link to={`/research/${topic.id}`} key={index}>
            <button
              className="px-8 py-2 rounded-full text-sm bg-white/10 hover:bg-white/20 transition-all"
            >
              {topic.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
