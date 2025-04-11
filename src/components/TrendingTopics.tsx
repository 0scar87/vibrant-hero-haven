
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

const topics = [
  { name: 'Science', id: 'science-of-mindfulness' },
  { name: 'Therapy', id: 'cognitive-behavioral-therapy' },
  { name: 'Sleep', id: 'sleep-and-mental-health' },
  { name: 'Anxiety', id: 'anxiety-management' }
];

export function TrendingTopics() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className={cn(
        "text-sm text-center mb-2",
        theme === 'dark' ? 'text-white/80' : 'text-black/80'
      )}>Trending</p>
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {topics.map((topic, index) => (
          <Link to={`/research/${topic.id}`} key={index}>
            <button
              className={cn(
                "px-8 py-2 rounded-full text-sm transition-all hover:bg-opacity-30",
                theme === 'dark' 
                  ? "bg-white/10 hover:bg-white/20" 
                  : "bg-black/10 hover:bg-black/20"
              )}
            >
              {topic.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
