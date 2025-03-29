
import React from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Toggle } from '@/components/ui/toggle';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  const isDark = theme === 'dark';
  
  return (
    <Toggle
      pressed={isDark}
      onPressedChange={toggleTheme}
      className={`rounded-full transition-colors ${
        isMobile 
          ? "bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20" 
          : "hover:bg-gray-200 dark:hover:bg-white/10"
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className={`${isMobile ? "h-6 w-6" : "h-5 w-5"} text-white`} />
      ) : (
        <Moon className={`${isMobile ? "h-6 w-6" : "h-5 w-5"} text-black`} />
      )}
    </Toggle>
  );
}
