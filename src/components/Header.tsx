
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Research', href: '/research' },
  { label: 'Company', href: '/company' },
  { label: 'Sankara', href: '#sankara' },
  { label: 'Careers', href: '#careers' },
];

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header({ className, ...props }: HeaderProps) {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  
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
      
      <div className="flex items-center space-x-2">
        {isMobile ? (
          <>
            <Sheet>
              <SheetTrigger asChild>
                <button 
                  className="p-2 md:hidden text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  aria-label="Open menu"
                >
                  <Menu size={20} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="py-6 flex flex-col gap-6">
                  <h2 className="text-lg font-semibold mb-2">Navigation</h2>
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      item.href.startsWith('/') ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="text-sm py-2 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          className="text-sm py-2 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      )
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
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
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </header>
  );
}
