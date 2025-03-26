
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/Header';
import { useTheme } from '@/components/ThemeProvider';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    // This would normally connect to an authentication service
    console.log('Signup attempt with:', { name, email, password });
    toast({
      title: "Signup Attempted",
      description: "This is a demo. Authentication is not implemented yet.",
    });
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
              Join us today and start your journey with Wiinta.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">Full Name</label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className={`${theme === 'dark' ? 'bg-white/5 border-white/10 text-white placeholder:text-white/40' : 'bg-black/5 border-black/10 text-black placeholder:text-black/40'}`}
                required
              />
            </div>
            
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
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm">Confirm Password</label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className={`${theme === 'dark' ? 'bg-white/5 border-white/10 text-white placeholder:text-white/40' : 'bg-black/5 border-black/10 text-black placeholder:text-black/40'}`}
                required
              />
            </div>

            <Button
              type="submit"
              className={`w-full ${theme === 'dark' ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'} transition-colors`}
            >
              Sign up
            </Button>

            <div className={`flex items-center gap-4 py-2 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
              <div className={`h-px flex-1 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}></div>
              <span className="text-sm">Or</span>
              <div className={`h-px flex-1 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}></div>
            </div>

            <div className={`text-center text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
              Already have an account?{" "}
              <Link to="/login" className={`${theme === 'dark' ? 'text-white hover:underline' : 'text-black hover:underline'}`}>
                Sign in
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

export default Signup;
