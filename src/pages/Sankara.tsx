
import React from 'react';
import { Header } from '@/components/Header';
import { useTheme } from '@/components/ThemeProvider';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sankara = () => {
  const { theme } = useTheme();
  
  const scrollToContent = () => {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={`min-h-screen bg-black text-white`}>
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
      
      {/* Features Grid Section based on the new template */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Redefining Mental Health Diagnostics</h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Sankara represents a paradigm shift in mental health
              diagnostics, combining cutting-edge AI technology
              with compassionate human-centered design. Our
              vision is to make accurate mental health assessments
              accessible to everyone, everywhere.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Precision</h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Our revolutionary diagnostic platform harnesses the
              power of artificial intelligence to detect and analyze
              patterns associated with over 400 recognized mental
              health conditions, providing unprecedented accuracy
              in assessment and guidance.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ethical Learning, Absolute Privacy</h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Built on a foundation of anonymized data ethically
              collected through our free therapeutic assistant Wiinta,
              Sankara learns continuously to improve its diagnostic
              capabilities while maintaining absolute privacy and
              security for all users.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare Equality</h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Sankara aims to democratize mental healthcare by
              removing financial barriers to professional-grade
              diagnostics. We envision a world where early detection
              and intervention become universal rights rather than
              privileges.
            </p>
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
      
      {/* New Section: Duplicate of the template shown in the image */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 max-w-7xl mx-auto">
          {/* Left Item */}
          <div>
            <div className="border border-white w-full aspect-video mb-6"></div>
            <p className="text-base md:text-lg text-white leading-relaxed">
              Sankara continuously learns from anonymized 
              interactions with our therapeutic assistant Wiinta, 
              refining its diagnostic capabilities across 400+ 
              mental health conditions while adapting to 
              diverse presentation patterns.
            </p>
          </div>
          
          {/* Right Item */}
          <div>
            <div className="border border-white w-full aspect-video mb-6"></div>
            <p className="text-base md:text-lg text-white leading-relaxed">
              Our advanced algorithms detect subtle linguistic 
              and vocal patterns associated with specific 
              mental health conditions, enabling early 
              identification of conditions that might otherwise 
              remain undiagnosed for years.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-6 px-6 md:px-16 lg:px-24 text-center text-sm border-t border-white/20 text-white/60">
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

export default Sankara;
