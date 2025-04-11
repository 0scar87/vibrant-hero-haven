
import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { useTheme } from '@/components/ThemeProvider';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

// Mock article data
const mockArticles = {
  '1': {
    title: 'The Future of Neural Networks',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  '2': {
    title: 'Breakthroughs in Cosmic Intelligence',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  '3': {
    title: 'How AI is Reshaping Mental Health Research',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  '4': {
    title: 'The Mind as the Final Frontier',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
};

const ArticleDetail = () => {
  const { theme } = useTheme();
  const { articleId } = useParams<{ articleId: string }>();
  
  // Check if article exists
  const article = articleId ? mockArticles[articleId as keyof typeof mockArticles] : null;
  
  // If article doesn't exist, redirect to 404
  if (!article) {
    return <Navigate to="/not-found" />;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 px-6 md:px-16 lg:px-24 py-12 md:py-20">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/research" className="text-white/70 hover:text-white text-sm flex items-center">
            ← Back to Research
          </Link>
        </div>
        
        {/* Article Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-8">{article.title}</h1>
        
        {/* Main Article Image */}
        <div className="w-full mb-16">
          <div className="bg-gray-300 rounded-md aspect-[5/2] flex items-center justify-center text-black text-3xl">
            article image
          </div>
        </div>
        
        {/* Article Content */}
        <div className="mb-24">
          <p className="text-lg leading-relaxed mb-8">
            {article.content}
          </p>
        </div>
        
        {/* Gradient Text Banner */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-green-300 to-blue-500 bg-clip-text text-transparent">
              Mars is just a simple stop.
            </span>
          </h2>
          <h2 className="text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              The mind is the final frontier.
            </span>
          </h2>
          
          <Link 
            to="/login" 
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm 
              bg-black text-white border border-white/20 hover:bg-black/80 transition-all"
          >
            Try Wiinta
          </Link>
        </div>
        
        {/* Related Articles Grid */}
        <div className="mt-24">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative">
                <div className="bg-gray-300 rounded-md aspect-square flex flex-col items-center justify-center text-black p-4">
                  <div className="mt-auto mb-2">Article with image</div>
                  <button className="bg-white/70 text-black text-xs px-3 py-1 rounded-full">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Middle row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[4, 5, 6].map((item) => (
              <div key={item} className="relative">
                <div className="bg-gray-300 rounded-md aspect-square flex flex-col items-center justify-center text-black p-4">
                  <div className="mt-auto mb-2">Article with image</div>
                  <button className="bg-white/70 text-black text-xs px-3 py-1 rounded-full">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[7, 8].map((item) => (
              <div key={item} className="relative">
                <div className="bg-gray-300 rounded-md aspect-[7/4] flex flex-col items-center justify-center text-black p-4">
                  <div className="mt-auto mb-2">Article with image</div>
                  <button className="bg-white/70 text-black text-xs px-3 py-1 rounded-full">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="px-6 md:px-16 lg:px-24 py-6 text-sm text-white/60">
        <Separator className="mb-6 bg-white/20" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>Metaplanet Inc © 2025</div>
          <div className="flex space-x-6">
            <Link to="#" className="hover:underline">Privacy & Legal</Link>
            <Link to="#" className="hover:underline">Terms of Use</Link>
            <Link to="#" className="hover:underline">Visit us on X</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetail;
