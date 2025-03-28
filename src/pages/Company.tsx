
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { useTheme } from '@/components/ThemeProvider';

const Company = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col`}>
      <Header />
      
      <div className="flex-1 flex flex-col">
        {/* Mission Statement Section */}
        <section className="mt-16 md:mt-28 mb-12 md:mb-16 text-center px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-12 animate-fade-in">Our mission.</h2>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-10 md:mb-16 animate-fade-in">
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Redefining human potential
              <br className="hidden sm:block" /> through mental wellness.
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-8 md:mt-12 animate-fade-in">
            <Link 
              to="/login" 
              className={`inline-flex items-center justify-center border ${theme === 'dark' ? 'border-white/20' : 'border-black/20'} rounded-full px-6 sm:px-8 py-3 ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-all`}
            >
              Try Wiinta on Web
            </Link>
            <button className={`inline-flex items-center justify-center border ${theme === 'dark' ? 'border-white/20' : 'border-black/20'} rounded-full px-6 sm:px-8 py-3 ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-all`}>
              IOS Coming soon
            </button>
            <button className={`inline-flex items-center justify-center border ${theme === 'dark' ? 'border-white/20' : 'border-black/20'} rounded-full px-6 sm:px-8 py-3 ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-all`}>
              Playstore coming soon
            </button>
          </div>
        </section>
        
        {/* Divider */}
        <div className={`w-full border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} my-6 md:my-8`}></div>
        
        {/* Cosmic Neural Network Section */}
        <section className="px-4 md:px-8 lg:px-16 py-8 md:py-12 max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center animate-fade-in">
            Cosmic Neural Network: <span className="font-normal">Represents the infinite potential of merging minds and machines.</span>
          </h2>
          
          <div className="space-y-8 md:space-y-12 mt-10 md:mt-16">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 animate-fade-in">
              <div className={`w-12 h-12 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'} rounded-full flex-shrink-0 mx-auto sm:mx-0 mb-2 sm:mb-0 sm:mt-1`}></div>
              <p className="text-base md:text-lg lg:text-xl text-center sm:text-left">
                A universe of connections, where stars of insight align to illuminate pathways to deeper understanding and emotional wellness.
              </p>
            </div>
            
            <div className={`border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} w-full my-4`}></div>
            
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 animate-fade-in">
              <div className={`w-12 h-12 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'} rounded-full flex-shrink-0 mx-auto sm:mx-0 mb-2 sm:mb-0 sm:mt-1`}></div>
              <p className="text-base md:text-lg lg:text-xl text-center sm:text-left">
                A galaxy within your reach, intelligently mapping emotional constellations to empower your journey toward self-discovery and growth.
              </p>
            </div>
            
            <div className={`border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} w-full my-4`}></div>
            
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 animate-fade-in">
              <div className={`w-12 h-12 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'} rounded-full flex-shrink-0 mx-auto sm:mx-0 mb-2 sm:mb-0 sm:mt-1`}></div>
              <p className="text-base md:text-lg lg:text-xl text-center sm:text-left">
                An ever-evolving nebula of compassion, intuitively syncing with your emotions, bringing clarity and comfort in moments of uncertainty.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className={`py-6 px-4 text-center text-xs sm:text-sm ${theme === 'dark' ? 'text-white/60 border-white/10' : 'text-black/60 border-black/10'} border-t`}>
        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-2 sm:gap-4">
          <span>Metacophen Inc © 2025</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'} transition-colors`}>Privacy & Legal</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'} transition-colors`}>Terms of Use</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'} transition-colors`}>Visit us on X</a>
        </div>
      </footer>
    </div>
  );
};

export default Company;
