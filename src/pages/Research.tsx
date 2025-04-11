
import React from 'react';
import { Header } from '@/components/Header';
import { useTheme } from '@/components/ThemeProvider';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Research = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 px-6 md:px-16 lg:px-24 py-12 md:py-20">
        {/* Hero Section */}
        <div className="flex flex-row gap-8 items-center mb-16">
          <div className="w-5/12">
            <div className="bg-gray-300 rounded-md aspect-[4/3] flex items-center justify-center text-black text-xl">
              article with image
            </div>
          </div>
          <div className="w-7/12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">News — Cosmic Intelligence Unveiled</h1>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed">
              Discover groundbreaking stories reshaping reality, 
              powered by Cosmic neural networks that blend insight, 
              empathy, and visionary thinking into news you'll feel, trust,
              and understand.
            </p>
          </div>
        </div>
        
        <Separator className="my-12 bg-white/20" />
        
        {/* Articles Grid */}
        <div className="grid grid-cols-12 gap-4 mb-12">
          {/* Article 1 */}
          <div className="col-span-4">
            <div className="relative">
              <div className="bg-gray-300 rounded-md aspect-square flex items-center justify-center text-black text-2xl">
                article
              </div>
              <div className="absolute bottom-4 left-4">
                <button className="bg-black hover:bg-black/80 text-white text-sm px-4 py-1.5 rounded-full border border-white/20">
                  Read more
                </button>
              </div>
            </div>
          </div>
          
          {/* Article 2 */}
          <div className="col-span-8">
            <div className="relative">
              <div className="bg-gray-300 rounded-md aspect-[2/1] flex items-center justify-center text-black text-2xl">
                article
              </div>
              <div className="absolute bottom-4 left-4">
                <button className="bg-black hover:bg-black/80 text-white text-sm px-4 py-1.5 rounded-full border border-white/20">
                  Read more
                </button>
              </div>
            </div>
          </div>
          
          {/* Article 3 */}
          <div className="col-span-8">
            <div className="relative">
              <div className="bg-gray-300 rounded-md aspect-[2/1] flex items-center justify-center text-black text-2xl">
                article
              </div>
              <div className="absolute bottom-4 left-4">
                <button className="bg-black hover:bg-black/80 text-white text-sm px-4 py-1.5 rounded-full border border-white/20">
                  Read more
                </button>
              </div>
            </div>
          </div>
          
          {/* Article 4 */}
          <div className="col-span-4">
            <div className="relative">
              <div className="bg-gray-300 rounded-md aspect-square flex items-center justify-center text-black text-2xl">
                article
              </div>
              <div className="absolute bottom-4 left-4">
                <button className="bg-black hover:bg-black/80 text-white text-sm px-4 py-1.5 rounded-full border border-white/20">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center my-16">
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            We know you wonder. Wonder too. Read more and lets explore to mind together
          </p>
          <Link 
            to="/login" 
            className="inline-flex mt-8 items-center justify-center rounded-full px-6 py-3 text-sm transition-all
              bg-black text-white border border-white/20"
          >
            Try Wiinta
          </Link>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="px-6 md:px-16 lg:px-24 py-6 text-sm text-white/60">
        <Separator className="mb-6 bg-white/20" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>Metaplanet Inc © 2025</div>
          <div className="flex space-x-6">
            <Link to="#" className="hover:underline">Privacy & Legal</Link>
            <Link to="#" className="hover:underline">Terms of Use</Link>
            <Link to="#" className="hover:underline">Visit us on X</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Research;
