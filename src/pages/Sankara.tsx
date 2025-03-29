
import React from 'react';
import { Header } from '@/components/Header';
import { useTheme } from '@/components/ThemeProvider';
import { ArrowDown } from 'lucide-react';

const Sankara = () => {
  const { theme } = useTheme();
  
  const scrollToContent = () => {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl mb-6 animate-fade-in">Introducing</h2>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-10 animate-fade-in">
            Sankara
          </h1>
          
          <p className="text-base md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id.
          </p>
          
          <button 
            onClick={scrollToContent}
            className="mt-12 flex flex-col items-center justify-center animate-fade-in-delay-1"
            aria-label="Explore more content"
          >
            <span className="mb-2">Explore</span>
            <ArrowDown className="animate-bounce" />
          </button>
        </div>
      </section>
      
      {/* Content Section (to be scrolled to) */}
      <section id="content" className="py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What is Sankara?</h2>
          
          <div className="space-y-6 text-lg">
            <p>
              Sankara represents our innovative approach to mental wellness technology. 
              It combines advanced AI with human-centered design to create experiences that 
              truly understand and respond to your emotional needs.
            </p>
            
            <p>
              With Sankara, we're redefining what's possible in digital mental health support,
              creating a companion that grows with you, learns from you, and helps you navigate 
              life's challenges with greater resilience and self-awareness.
            </p>
            
            <p>
              Our team of experts in psychology, neuroscience, and artificial intelligence have 
              collaborated to develop this groundbreaking technology that adapts to your unique 
              needs and provides personalized support when you need it most.
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-black/5 dark:bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-black/5 dark:bg-white/5">
              <h3 className="text-xl font-bold mb-3">Adaptive Intelligence</h3>
              <p>Learns from your interactions to provide increasingly personalized support tailored to your unique needs.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-black/5 dark:bg-white/5">
              <h3 className="text-xl font-bold mb-3">Emotional Recognition</h3>
              <p>Advanced algorithms that understand the nuances of human emotion through text and voice interactions.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-black/5 dark:bg-white/5">
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p>Always there when you need support, regardless of time or place.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-black/5 dark:bg-white/5">
              <h3 className="text-xl font-bold mb-3">Evidence-Based Techniques</h3>
              <p>Incorporates proven therapeutic approaches backed by scientific research.</p>
            </div>
          </div>
        </div>
      </section>
      
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

export default Sankara;
