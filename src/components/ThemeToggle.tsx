
import React from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        isMobile 
          ? "bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20" 
          : "hover:bg-gray-200 dark:hover:bg-white/10"
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className={`${isMobile ? "h-6 w-6" : "h-5 w-5"} text-white`} />
      ) : (
        <Moon className={`${isMobile ? "h-6 w-6" : "h-5 w-5"} text-black`} />
      )}
    </button>
  );
}
