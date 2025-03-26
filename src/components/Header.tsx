
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Research', href: '#research' },
  { label: 'Company', href: '/company' },
  { label: 'Neurolense', href: '#neurolense' },
  { label: 'Careers', href: '#careers' },
];

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header({ className, ...props }: HeaderProps) {
  const { theme } = useTheme();
  
  return (
    <header
      className={cn('w-full px-6 py-4 flex items-center justify-between animate-fade-in opacity-0', className)}
      {...props}
    >
      <div className="flex items-center">
        <a href="/" className="text-black dark:text-white text-xl font-bold tracking-wider">
          WIINTA
        </a>
      </div>
      
      <nav className="hidden md:flex items-center space-x-10">
        {navItems.map((item) => (
          item.href.startsWith('/') ? (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          )
        ))}
      </nav>
      
      <div className="flex items-center">
        <Link
          to="/login"
          className={cn(
            "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm transition-all",
            theme === 'dark' 
              ? "bg-white text-black hover:bg-white/90" 
              : "bg-black text-white hover:bg-black/90",
            "border border-black/20 dark:border-white/20"
          )}
        >
          Try Wiinta
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
