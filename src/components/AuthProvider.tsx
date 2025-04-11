
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up the auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('👉 Auth state changed:', event, session?.user?.email || 'No user');
        
        if (event === 'SIGNED_IN') {
          console.log('✅ User signed in successfully:', session?.user?.email);
        } else if (event === 'SIGNED_OUT') {
          console.log('🚪 User signed out successfully');
        }
        
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      
      if (session?.user) {
        console.log('📝 Existing session found for user:', session.user.email);
      } else {
        console.log('📝 No existing session found');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    console.log('🔐 Attempting to sign out user:', user?.email || 'No user');
    try {
      // Clear local state first
      setUser(null);
      setSession(null);
      
      // Then attempt to sign out from Supabase
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('❌ Error signing out from Supabase:', error);
        // Even if there's an error with Supabase, we've already cleared the local state
      } else {
        console.log('✅ Sign out successful from Supabase');
      }
    } catch (error) {
      console.error('❌ Exception in signOut function:', error);
      // Even if there's an exception, we've already cleared the local state
    }
  };

  const value = {
    session,
    user,
    loading,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
