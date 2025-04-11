
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

export const SankaraFooter: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <div className={cn(
        "py-8 px-6 md:px-16 lg:px-24 border-t",
        theme === 'dark' 
          ? "bg-black text-white border-white/20" 
          : "bg-white text-black border-black/20"
      )}>
        <div className={cn(
          "flex flex-col sm:flex-row justify-center items-center gap-4 text-sm",
          theme === 'dark' ? "text-white/60" : "text-black/60"
        )}>
          <span>Metacophen Inc © 2025</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={cn(
            "transition-colors",
            theme === 'dark' ? "hover:text-white" : "hover:text-black"
          )}>Privacy & Legal</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={cn(
            "transition-colors",
            theme === 'dark' ? "hover:text-white" : "hover:text-black"
          )}>Terms of Use</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={cn(
            "transition-colors",
            theme === 'dark' ? "hover:text-white" : "hover:text-black"
          )}>Visit us on X</a>
        </div>
      </div>
      
      <footer className={cn(
        "py-6 px-6 md:px-16 lg:px-24 text-center text-sm border-t",
        theme === 'dark' 
          ? "border-white/20 text-white/60" 
          : "border-black/20 text-black/60"
      )}>
        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4">
          <span>Metacophen Inc © 2025</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={cn(
            "transition-colors",
            theme === 'dark' ? "hover:text-white" : "hover:text-black"
          )}>Privacy & Legal</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={cn(
            "transition-colors",
            theme === 'dark' ? "hover:text-white" : "hover:text-black"
          )}>Terms of Use</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={cn(
            "transition-colors",
            theme === 'dark' ? "hover:text-white" : "hover:text-black"
          )}>Visit us on X</a>
        </div>
      </footer>
    </>
  );
};
