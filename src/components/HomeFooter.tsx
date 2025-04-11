
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';

export function HomeFooter() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <footer className={`py-6 px-6 md:px-16 lg:px-24 text-center text-sm ${
      isDark ? 'text-white/60' : 'text-gray-500'
    }`}>
      <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4">
        <span>Metacophen Inc © 2025</span>
        <span className="hidden sm:inline">|</span>
        <Link to="#" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
          Privacy & Legal
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link to="#" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
          Terms of Use
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link to="#" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
          Visit us on X
        </Link>
      </div>
    </footer>
  );
}
