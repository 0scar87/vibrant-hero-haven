
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from './AuthProvider';
import { navItems } from './header/HeaderConstants';
import { Logo } from './header/Logo';
import { NavItems } from './header/NavItems';
import { MobileMenu } from './header/MobileMenu';
import { UserMenu } from './header/UserMenu';
import { AuthButton, TryButton } from './header/AuthButton';

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

  const handleSignIn = () => {
    navigate('/login');
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
  
  return (
    <header
      className={cn(
        'w-full px-6 py-6 flex items-center justify-between',
        theme === 'dark' ? 'text-white' : 'text-black',
        className
      )}
      {...props}
    >
      <Logo />
      
      <NavItems navItems={navItems} />
      
      <div className="flex items-center space-x-2">
        {/* Always show theme toggle for all devices */}
        <ThemeToggle />
        
        {/* Auth button when user is not logged in (non-mobile) */}
        {!user && !isMobile && <AuthButton isMobile={isMobile} handleSignIn={handleSignIn} />}
        
        {/* Mobile menu for small screens */}
        {isMobile && <MobileMenu 
          navItems={navItems} 
          user={user} 
          getInitials={getInitials} 
          handleSignOut={handleSignOut}
        />}
        
        {/* User dropdown or Try button */}
        {user ? (
          <UserMenu user={user} getInitials={getInitials} handleSignOut={handleSignOut} />
        ) : (
          !isMobile && <TryButton />
        )}
      </div>
    </header>
  );
}
