
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
  
  // For mobile, render fixed button at bottom left with enhanced visibility
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-[1000] p-4 rounded-full bg-blue-500/90 dark:bg-amber-500/90 backdrop-blur-md shadow-lg hover:bg-blue-600 dark:hover:bg-amber-600 transition-all border-2 border-white/30 dark:border-black/30 animate-pulse-subtle"
      aria-label="Toggle theme"
      style={{ position: 'fixed', bottom: '24px', left: '24px' }}
    >
      {theme === 'dark' ? (
        <Sun className="h-7 w-7 text-white drop-shadow-md" />
      ) : (
        <Moon className="h-7 w-7 text-white drop-shadow-md" />
      )}
    </button>
  );
}
