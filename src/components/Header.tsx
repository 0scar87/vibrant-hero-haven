
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, LogOut, User as UserIcon, Settings, LogIn } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from './AuthProvider';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Research', href: '/research' },
  { label: 'Company', href: '/company' },
  { label: 'Colossus', href: '/colossus' },
  { label: 'Sankara', href: '/sankara' },
  { label: 'Careers', href: '/careers' },
];

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header({ className, ...props }: HeaderProps) {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getInitials = () => {
    if (!user) return '';
    
    // Try to get initials from the profile if available
    const firstName = user.user_metadata?.first_name || '';
    const lastName = user.user_metadata?.last_name || '';
    
    if (firstName && lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    } else if (firstName) {
      return firstName.charAt(0).toUpperCase();
    } else if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
    
    return 'U';
  };

  const handleSignIn = () => {
    navigate('/login');
  };
  
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
        {/* Always show theme toggle for all devices */}
        <ThemeToggle />
        
        {/* Sign In button when user is not logged in (non-mobile) */}
        {!user && !isMobile && (
          <Button 
            onClick={handleSignIn}
            variant="ghost" 
            size="sm"
            className="flex items-center gap-1.5"
          >
            <LogIn className="h-4 w-4" />
            <span>Sign In</span>
          </Button>
        )}
        
        {isMobile ? (
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
                {user && (
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.user_metadata?.avatar_url} />
                      <AvatarFallback>{getInitials()}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">
                        {user.user_metadata?.first_name 
                          ? `${user.user_metadata.first_name} ${user.user_metadata.last_name || ''}`
                          : user.email}
                      </span>
                      {user.email && <span className="text-xs text-muted-foreground">{user.email}</span>}
                    </div>
                  </div>
                )}
              
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
                  {user ? (
                    <>
                      <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
                      <Link
                        to="/profile"
                        className="flex items-center text-sm py-2 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Profile Settings
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center text-sm py-2 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign out
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      className="flex items-center text-sm py-2 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign in
                    </Link>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        ) : null}
        
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative rounded-full h-10 w-10 p-0 overflow-hidden">
                <Avatar>
                  <AvatarImage src={user.user_metadata?.avatar_url} />
                  <AvatarFallback>{getInitials()}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center justify-start gap-2 p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.user_metadata?.avatar_url} />
                  <AvatarFallback>{getInitials()}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-0.5">
                  <DropdownMenuLabel className="font-medium text-sm p-0">
                    {user.user_metadata?.first_name 
                      ? `${user.user_metadata.first_name} ${user.user_metadata.last_name || ''}`
                      : user.email}
                  </DropdownMenuLabel>
                  {user.email && (
                    <p className="text-xs text-muted-foreground truncate max-w-[140px]">
                      {user.email}
                    </p>
                  )}
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile" className="cursor-pointer flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Profile Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
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
        )}
      </div>
    </header>
  );
};
