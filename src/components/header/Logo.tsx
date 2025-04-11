
import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();
  
  return (
    <div className={cn("flex items-center", className)}>
      <a 
        href="/" 
        className={cn(
          "text-xl font-bold tracking-wider",
          theme === 'dark' ? 'text-white' : 'text-black'
        )}
      >
        WIINTA
      </a>
    </div>
  );
};
