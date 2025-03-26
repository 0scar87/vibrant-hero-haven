
import React from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Research', href: '#research' },
  { label: 'Company', href: '#company' },
  { label: 'Neurolense', href: '#neurolense' },
  { label: 'Careers', href: '#careers' },
];

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header({ className, ...props }: HeaderProps) {
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
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
      
      <div className="flex items-center">
        <a
          href="#try"
          className="inline-flex items-center justify-center rounded-full border border-black/20 dark:border-white/20 bg-transparent px-5 py-2 text-sm text-black dark:text-white transition-all hover:bg-black/10 dark:hover:bg-white/10"
        >
          Try Wiinta
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
