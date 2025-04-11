
import React from 'react';
import { Header } from '@/components/Header';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

const JobPosition = ({ title }: { title: string }) => {
  const { theme } = useTheme();
  
  return (
    <div className={cn(
      "w-full py-8 border-t transition-colors cursor-pointer",
      theme === 'dark' 
        ? "border-white/20 hover:bg-white/5" 
        : "border-black/20 hover:bg-black/5"
    )}>
      <h3 className={cn(
        "text-2xl md:text-3xl font-light tracking-wide",
        theme === 'dark' ? "text-white" : "text-black"
      )}>
        {title}
      </h3>
    </div>
  );
};

const Careers = () => {
  const { theme } = useTheme();
  
  const scrollToPositions = () => {
    const positionsElement = document.getElementById('positions');
    if (positionsElement) {
      positionsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={cn(
      "min-h-screen",
      theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
    )}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4">
        <div className="absolute inset-0 z-0">
          <div className={cn(
            "absolute inset-0",
            theme === 'dark' ? "bg-black" : "bg-white"
          )}></div>
        </div>
        
        <div className={cn(
          "text-center max-w-5xl mx-auto z-10",
          theme === 'dark' ? "text-white" : "text-black"
        )}>
          <h1 className="text-6xl md:text-8xl font-light mb-6 animate-fade-in leading-tight">
            Join the revolution
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Be part of a team that is brining wellness to all of humanity.
          </p>
          
          <button 
            onClick={scrollToPositions}
            className="mt-32 flex flex-col items-center justify-center animate-fade-in-delay-1"
            aria-label="Explore positions"
          >
            <span className="mb-2 text-xl">Explore</span>
            <ArrowDown className={cn(
              "animate-bounce",
              theme === 'dark' ? "text-white" : "text-black"
            )} />
          </button>
        </div>
      </section>
      
      {/* Job Positions Section */}
      <section id="positions" className={cn(
        "py-20 px-6 md:px-16 lg:px-24",
        theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
      )}>
        <div className="max-w-5xl mx-auto">
          <div className="space-y-0">
            <JobPosition title="AI/ML ENGINEERS" />
            <JobPosition title="FULL-STACK DEVELOPERS" />
            <JobPosition title="UI/UX DESIGNER" />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={cn(
        "fixed bottom-0 left-0 right-0 py-6 px-6 md:px-16 lg:px-24 text-center text-sm border-t",
        theme === 'dark' 
          ? "bg-black border-white/20 text-white/60" 
          : "bg-white border-black/20 text-black/60"
      )}>
        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4">
          <span>Metacophen Inc © 2025</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={cn(
            "transition-colors",
            theme === 'dark' ? "hover:text-white" : "hover:text-black"
          )}>Privacy & Legal</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={cn(
            "transition-colors",
            theme === 'dark' ? "hover:text-white" : "hover:text-black"
          )}>Terms of Use</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={cn(
            "transition-colors",
            theme === 'dark' ? "hover:text-white" : "hover:text-black"
          )}>Visit us on X</a>
        </div>
      </footer>
    </div>
  );
};

export default Careers;
