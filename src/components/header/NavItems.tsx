
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

type NavItem = {
  label: string;
  href: string;
};

interface NavItemsProps {
  navItems: NavItem[];
  className?: string;
}

export const NavItems: React.FC<NavItemsProps> = ({ 
  navItems,
  className
}) => {
  const { theme } = useTheme();
  
  return (
    <nav className={cn("hidden md:flex items-center space-x-10", className)}>
      {navItems.map((item) => (
        item.href.startsWith('/') ? (
          <Link
            key={item.label}
            to={item.href}
            className={cn(
              "text-sm hover:opacity-100 transition-colors",
              theme === 'dark' 
                ? "text-white/80 hover:text-white" 
                : "text-black/80 hover:text-black"
            )}
          >
            {item.label}
          </Link>
        ) : (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "text-sm hover:opacity-100 transition-colors",
              theme === 'dark' 
                ? "text-white/80 hover:text-white" 
                : "text-black/80 hover:text-black"
            )}
          >
            {item.label}
          </a>
        )
      ))}
    </nav>
  );
};
