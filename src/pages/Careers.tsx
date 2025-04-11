
import React from 'react';
import { Header } from '@/components/Header';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobPosition = ({ title }: { title: string }) => (
  <div className="w-full py-8 border-t border-white/20 hover:bg-white/5 transition-colors cursor-pointer">
    <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide">{title}</h3>
  </div>
);

const Careers = () => {
  const scrollToPositions = () => {
    const positionsElement = document.getElementById('positions');
    if (positionsElement) {
      positionsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        
        <div className="text-center max-w-5xl mx-auto z-10 text-white">
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
            <ArrowDown className="animate-bounce" />
          </button>
        </div>
      </section>
      
      {/* Job Positions Section */}
      <section id="positions" className="py-20 px-6 md:px-16 lg:px-24 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-0">
            <JobPosition title="AI/ML ENGINEERS" />
            <JobPosition title="FULL-STACK DEVELOPERS" />
            <JobPosition title="UI/UX DESIGNER" />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-6 px-6 md:px-16 lg:px-24 text-center text-sm bg-black border-t border-white/20 text-white/60">
        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4">
          <span>Metacophen Inc © 2025</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy & Legal</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-white transition-colors">Visit us on X</a>
        </div>
      </footer>
    </div>
  );
};

export default Careers;
