
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to an authentication service
    console.log('Login attempt with:', { email, password });
    toast({
      title: "Login Attempted",
      description: "This is a demo. Authentication is not implemented yet.",
    });
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-wider">WIINTA</h1>
          <p className="mt-6 text-lg text-white/80">
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
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
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
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              required
            />
          </div>

          <div className="flex justify-end">
            <Link to="#" className="text-sm text-white/60 hover:text-white">
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-white/90 transition-colors"
          >
            Sign in
          </Button>

          <div className="flex items-center gap-4 py-2 text-white/60">
            <div className="h-px flex-1 bg-white/20"></div>
            <span className="text-sm">Or</span>
            <div className="h-px flex-1 bg-white/20"></div>
          </div>

          <div className="text-center text-sm text-white/80">
            Don't you have an account?{" "}
            <Link to="#" className="text-white hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="/lovable-uploads/757a1ce9-ef11-43f2-beba-6c4bb4d7ed23.png"
          alt="Person with headphones"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
