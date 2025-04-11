import React from 'react';
import { Header } from '@/components/Header';
import { useTheme } from '@/components/ThemeProvider';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Sankara = () => {
  const { theme } = useTheme();
  
  const scrollToContent = () => {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
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
          <img 
            src="/lovable-uploads/af5100a0-b0cd-4af6-ae8e-074301b2ebd9.png" 
            alt="Sankara Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
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
      <section className={cn(
        "py-20 px-6 md:px-16 lg:px-24",
        theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
      )}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Redefining Mental Health Diagnostics</h2>
            <p className={cn(
              "text-base md:text-lg leading-relaxed",
              theme === 'dark' ? "text-white/80" : "text-black/80"
            )}>
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
            <p className={cn(
              "text-base md:text-lg leading-relaxed",
              theme === 'dark' ? "text-white/80" : "text-black/80"
            )}>
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
            <p className={cn(
              "text-base md:text-lg leading-relaxed",
              theme === 'dark' ? "text-white/80" : "text-black/80"
            )}>
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
            <p className={cn(
              "text-base md:text-lg leading-relaxed",
              theme === 'dark' ? "text-white/80" : "text-black/80"
            )}>
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
      <section id="content" className={cn(
        "py-20 px-4 md:px-12 lg:px-24",
        theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
      )}>
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
      <section className={cn(
        "py-20 px-4 md:px-12 lg:px-24",
        theme === 'dark' ? "bg-white/5" : "bg-black/5"
      )}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={cn(
              "p-6 rounded-xl",
              theme === 'dark' ? "bg-white/5" : "bg-black/5"
            )}>
              <h3 className="text-xl font-bold mb-3">Adaptive Intelligence</h3>
              <p>Learns from your interactions to provide increasingly personalized support tailored to your unique needs.</p>
            </div>
            
            <div className={cn(
              "p-6 rounded-xl",
              theme === 'dark' ? "bg-white/5" : "bg-black/5"
            )}>
              <h3 className="text-xl font-bold mb-3">Emotional Recognition</h3>
              <p>Advanced algorithms that understand the nuances of human emotion through text and voice interactions.</p>
            </div>
            
            <div className={cn(
              "p-6 rounded-xl",
              theme === 'dark' ? "bg-white/5" : "bg-black/5"
            )}>
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p>Always there when you need support, regardless of time or place.</p>
            </div>
            
            <div className={cn(
              "p-6 rounded-xl",
              theme === 'dark' ? "bg-white/5" : "bg-black/5"
            )}>
              <h3 className="text-xl font-bold mb-3">Evidence-Based Techniques</h3>
              <p>Incorporates proven therapeutic approaches backed by scientific research.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Section: Duplicate of the template shown in the image with 3 blocks instead of 2 */}
      <section className={cn(
        "py-20 px-6 md:px-16 lg:px-24",
        theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
      )}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20 max-w-7xl mx-auto">
          {/* Left Item */}
          <div>
            <div className={cn(
              "w-full aspect-video mb-6",
              theme === 'dark' ? "border border-white" : "border border-black"
            )}></div>
            <p className="text-base md:text-lg leading-relaxed">
              Sankara continuously learns from anonymized 
              interactions with our therapeutic assistant Wiinta, 
              refining its diagnostic capabilities across 400+ 
              mental health conditions while adapting to 
              diverse presentation patterns.
            </p>
          </div>
          
          {/* Middle Item */}
          <div>
            <div className={cn(
              "w-full aspect-video mb-6",
              theme === 'dark' ? "border border-white" : "border border-black"
            )}></div>
            <p className="text-base md:text-lg leading-relaxed">
              Our advanced algorithms detect subtle linguistic 
              and vocal patterns associated with specific 
              mental health conditions, enabling early 
              identification of conditions that might otherwise 
              remain undiagnosed for years.
            </p>
          </div>
          
          {/* Right Item */}
          <div>
            <div className={cn(
              "w-full aspect-video mb-6",
              theme === 'dark' ? "border border-white" : "border border-black"
            )}></div>
            <p className="text-base md:text-lg leading-relaxed">
              Sankara's diagnostic protocol combines multi-modal
              assessment techniques with contextual analysis,
              providing clinicians with comprehensive insights
              that enhance treatment planning and improve
              patient outcomes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Vision Section */}
      <section className={cn(
        "py-20 px-6 md:px-16 lg:px-24",
        theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
      )}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-7xl mx-auto">
          {/* Left side - Image placeholder */}
          <div className="flex items-center justify-center">
            <div className={cn(
              "w-full aspect-video max-w-lg",
              theme === 'dark' ? "border border-white" : "border border-black"
            )}>
              <img 
                src="/lovable-uploads/a298352c-b723-441e-ac55-af3adf835757.png" 
                alt="Sankara Vision" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
            
            <p className="text-base md:text-lg leading-relaxed">
              At Sankara, we envision a world where every person has access to accurate mental health 
              diagnostics regardless of their financial situation or geographic location. By removing 
              the barriers that traditionally limit access to professional assessment, we empower 
              individuals to take informed control of their mental wellness journey from the earliest stages.
            </p>
          </div>
        </div>
      </section>
      
      {/* How Sankara Works Section */}
      <section className={cn(
        "py-20 px-6 md:px-16 lg:px-24",
        theme === 'dark' ? "bg-black text-white" : "bg-white text-black"
      )}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-7xl mx-auto">
          {/* Left side - Image placeholder */}
          <div className="flex items-center justify-center">
            <div className={cn(
              "w-full aspect-video max-w-lg",
              theme === 'dark' ? "border border-white" : "border border-black"
            )}>
              <img 
                src="/lovable-uploads/5f1eeca8-f35e-4d94-954c-12b763e166ec.png" 
                alt="How Sankara Works" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">How Sankara works</h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-10">
              Sankara's revolutionary diagnostic capability is
              built through a unique, privacy-first approach to
              machine learning. Our free therapeutic assistant,
              Wiinta, provides supportive conversations to those
              seeking mental wellness guidance. With explicit
              consent, these interactions—completely
              anonymized and stripped of identifying
              information—contribute to Sankara's growing
              understanding of how mental health conditions
              manifest in language and thought patterns.
            </p>
            
            <div className="flex justify-start">
              <Button
                variant="outline"
                className={cn(
                  "rounded-full",
                  theme === 'dark' 
                    ? "border border-white text-white hover:bg-white/10" 
                    : "border border-black text-black hover:bg-black/10"
                )}
              >
                Try Wiinta
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom Footer */}
      <div className={cn(
        "py-8 px-6 md:px-16 lg:px-24 border-t",
        theme === 'dark' 
          ? "bg-black text-white border-white/20" 
          : "bg-white text-black border-black/20"
      )}>
        <div className={cn(
          "flex flex-col sm:flex-row justify-center items-center gap-4 text-sm",
          theme === 'dark' ? "text-white/60" : "text-black/60"
        )}>
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
      </div>
      
      {/* Footer */}
      <footer className={cn(
        "py-6 px-6 md:px-16 lg:px-24 text-center text-sm border-t",
        theme === 'dark' 
          ? "border-white/20 text-white/60" 
          : "border-black/20 text-black/60"
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

export default Sankara;
