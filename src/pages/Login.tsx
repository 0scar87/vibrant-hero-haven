
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/Header';
import { useTheme } from '@/components/ThemeProvider';
import { supabase } from '@/integrations/supabase/client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  // Check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        console.log('🔄 User already logged in, redirecting to home');
        navigate('/');
      }
    };
    
    checkSession();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      console.log('❌ Login attempt failed: Missing email or password');
      toast({
        title: "Error",
        description: "Please enter both email and password.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setLoading(true);
      console.log('🔐 Attempting to sign in user:', email);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        console.error('❌ Login failed:', error.message);
        throw error;
      }
      
      if (data.user) {
        console.log('✅ Login successful for user:', data.user.email);
        toast({
          title: "Success",
          description: "You have been logged in successfully.",
        });
        navigate('/');
      }
    } catch (error: any) {
      console.error('❌ Login error:', error.message);
      toast({
        title: "Login failed",
        description: error.message || "An error occurred during login.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTryWiinta = () => {
    console.log('👋 User clicked Try Wiinta, redirecting to chat page');
    navigate('/chat');
  };

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      
      <div className="flex flex-1">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-wider">WIINTA</h1>
            <p className={`mt-6 text-lg ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
              Today is a new day. It's your day. You shape it.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@gmail.com"
                className={`${theme === 'dark' ? 'bg-white/5 border-white/10 text-white placeholder:text-white/40' : 'bg-black/5 border-black/10 text-black placeholder:text-black/40'}`}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className={`${theme === 'dark' ? 'bg-white/5 border-white/10 text-white placeholder:text-white/40' : 'bg-black/5 border-black/10 text-black placeholder:text-black/40'}`}
                required
                disabled={loading}
              />
            </div>

            <div className="flex justify-end">
              <Link to="#" className={`text-sm ${theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`}>
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className={`w-full ${theme === 'dark' ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'} transition-colors`}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleTryWiinta}
              className={`w-full ${theme === 'dark' ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/20 text-black hover:bg-black/10'}`}
            >
              Try Wiinta without signing up
            </Button>

            <div className={`flex items-center gap-4 py-2 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
              <div className={`h-px flex-1 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}></div>
              <span className="text-sm">Or</span>
              <div className={`h-px flex-1 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}></div>
            </div>

            <div className={`text-center text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
              Don't you have an account?{" "}
              <Link to="/signup" className={`${theme === 'dark' ? 'text-white hover:underline' : 'text-black hover:underline'}`}>
                Sign up
              </Link>
            </div>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block lg:w-1/2 h-screen">
          <img
            src="https://static.vecteezy.com/system/resources/previews/030/711/972/large_2x/beautiful-girl-wearing-headset-generative-ai-free-photo.jpg"
            alt="Person with headphones"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
