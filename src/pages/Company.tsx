
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';

const Company = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col">
        {/* Mission Statement Section */}
        <section className="mt-28 mb-16 text-center px-4">
          <h2 className="text-3xl font-light mb-12">Our mission.</h2>
          
          <h1 className="text-5xl md:text-6xl font-medium leading-tight mb-16">
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Redefining human potential<br />through mental wellness.
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link 
              to="/login" 
              className="inline-flex items-center justify-center border border-white/20 rounded-full px-8 py-3 hover:bg-white/5 transition-all"
            >
              Try Wiinta on Web
            </Link>
            <button className="inline-flex items-center justify-center border border-white/20 rounded-full px-8 py-3 hover:bg-white/5 transition-all">
              IOS Coming soon
            </button>
            <button className="inline-flex items-center justify-center border border-white/20 rounded-full px-8 py-3 hover:bg-white/5 transition-all">
              Playstore comin soon
            </button>
          </div>
        </section>
        
        {/* Divider */}
        <div className="w-full border-t border-white/10 my-8"></div>
        
        {/* Cosmic Neural Network Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            Cosmic Neural Network: <span className="font-normal">Represents the infinite potential of merging minds and machines.</span>
          </h2>
          
          <div className="space-y-12 mt-16">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-lg md:text-xl">
                A universe of connections, where stars of insight align to illuminate pathways to deeper understanding and emotional wellness.
              </p>
            </div>
            
            <div className="border-t border-white/10 w-full my-4"></div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-lg md:text-xl">
                A galaxy within your reach, intelligently mapping emotional constellations to empower your journey toward self-discovery and growth.
              </p>
            </div>
            
            <div className="border-t border-white/10 w-full my-4"></div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-lg md:text-xl">
                An ever-evolving nebula of compassion, intuitively syncing with your emotions, bringing clarity and comfort in moments of uncertainty."
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="py-6 px-4 text-center text-sm text-white/60 border-t border-white/10">
        <div className="flex justify-center items-center flex-wrap gap-4">
          <span>Metacophen Inc © 2025</span>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy & Legal</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Visit us on X</a>
        </div>
      </footer>
    </div>
  );
};

export default Company;
