
import React from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  
  // For desktop, render inline
  if (!isMobile) {
    return (
      <button
        onClick={toggleTheme}
        className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-white" />
        ) : (
          <Moon className="h-5 w-5 text-black" />
        )}
      </button>
    );
  }
  
  // For mobile, render sticky button at bottom left
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md shadow-md hover:bg-black/20 dark:hover:bg-white/20 transition-all border border-black/10 dark:border-white/10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-white" />
      ) : (
        <Moon className="h-5 w-5 text-black" />
      )}
    </button>
  );
}
