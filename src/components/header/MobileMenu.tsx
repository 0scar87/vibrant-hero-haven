
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Settings, LogOut, LogIn } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type NavItem = {
  label: string;
  href: string;
};

interface MobileMenuProps {
  navItems: NavItem[];
  user: any;
  getInitials: () => string;
  handleSignOut: () => Promise<void>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  navItems,
  user,
  getInitials,
  handleSignOut
}) => {
  const { theme } = useTheme();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button 
          className={cn(
            "p-2 md:hidden hover:bg-opacity-10 rounded-md",
            theme === 'dark' 
              ? "text-white hover:bg-gray-400" 
              : "text-black hover:bg-gray-200"
          )}
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
                  className={cn(
                    "text-sm py-2 hover:opacity-100 transition-colors",
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
                    "text-sm py-2 hover:opacity-100 transition-colors",
                    theme === 'dark' 
                      ? "text-white/80 hover:text-white" 
                      : "text-black/80 hover:text-black"
                  )}
                >
                  {item.label}
                </a>
              )
            ))}
            {user ? (
              <>
                <div className={cn(
                  "h-px my-2",
                  theme === 'dark' ? "bg-gray-700" : "bg-gray-200" 
                )}></div>
                <Link
                  to="/profile"
                  className={cn(
                    "flex items-center text-sm py-2 hover:opacity-100 transition-colors",
                    theme === 'dark' 
                      ? "text-white/80 hover:text-white" 
                      : "text-black/80 hover:text-black"
                  )}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Profile Settings
                </Link>
                <button
                  onClick={handleSignOut}
                  className={cn(
                    "flex items-center text-sm py-2 hover:opacity-100 transition-colors",
                    theme === 'dark' 
                      ? "text-white/80 hover:text-white" 
                      : "text-black/80 hover:text-black"
                  )}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className={cn(
                  "flex items-center text-sm py-2 hover:opacity-100 transition-colors",
                  theme === 'dark' 
                    ? "text-white/80 hover:text-white" 
                    : "text-black/80 hover:text-black"
                )}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign in
              </Link>
            )}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
