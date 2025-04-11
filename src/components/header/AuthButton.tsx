
import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

interface AuthButtonProps {
  isMobile: boolean;
  handleSignIn: () => void;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  isMobile,
  handleSignIn
}) => {
  const { theme } = useTheme();
  
  // This button is only shown when user is not logged in and not on mobile
  if (isMobile) return null;
  
  return (
    <Button 
      onClick={handleSignIn}
      variant="ghost" 
      size="sm"
      className={cn(
        "flex items-center gap-1.5",
        theme === 'dark' ? 'text-white' : 'text-black'
      )}
    >
      <LogIn className="h-4 w-4" />
      <span>Sign In</span>
    </Button>
  );
};

export const TryButton: React.FC = () => {
  const { theme } = useTheme();
  
  return (
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
  );
};
