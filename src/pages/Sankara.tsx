
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
    <div className={`min-h-screen bg-background text-foreground`}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/af5100a0-b0cd-4af6-ae8e-074301b2ebd9.png" 
            alt="Sankara Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        </div>
        
        <div className="text-center max-w-4xl mx-auto z-10 text-white">
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
      
      {/* Grid Section with introduction cards */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Card 1 */}
            <div className="p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Introducing</h2>
              <p className="text-base md:text-lg opacity-80">
                Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Introducing</h2>
              <p className="text-base md:text-lg opacity-80">
                Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Introducing</h2>
              <p className="text-base md:text-lg opacity-80">
                Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Introducing</h2>
              <p className="text-base md:text-lg opacity-80">
                Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id.
              </p>
            </div>
          </div>
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
      <footer className="py-6 px-4 text-center text-xs sm:text-sm border-t border-black/10 dark:border-white/10 text-black/60 dark:text-white/60">
        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-2 sm:gap-4">
          <span>Metacophen Inc © 2025</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy & Legal</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Use</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Visit us on X</a>
        </div>
      </footer>
    </div>
  );
};

export default Sankara;
