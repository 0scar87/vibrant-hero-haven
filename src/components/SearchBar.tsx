
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function SearchBar() {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', query);
    // Handle search functionality here
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in-delay-1 opacity-0">
      <form onSubmit={handleSubmit} className="relative">
        <div className="search-bar flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask Wiinta anything"
            className="w-full bg-transparent border-0 text-white placeholder-white/40 px-6 py-4 focus:outline-none focus:ring-0"
            aria-label="Search"
          />
          <button
            type="submit"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-black mr-1 transition-transform hover:scale-105"
            aria-label="Search"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
