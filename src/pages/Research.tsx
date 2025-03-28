
import React from 'react';
import { Header } from '@/components/Header';
import { useTheme } from '@/components/ThemeProvider';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Research = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      
      <main className="flex-1 px-6 md:px-16 lg:px-24 py-12 md:py-20">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Research — Mental Wellness Intelligence</h1>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed">
              Discover groundbreaking studies reshaping mental health care, 
              powered by innovative neural networks that blend insight, 
              empathy, and scientific thinking into research you'll feel, trust,
              and understand.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Mental health research" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
        
        <Separator className={`my-12 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`} />
        
        {/* Research Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`col-span-1 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1494368308039-ed3393ead79c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Cognitive Behavioral Therapy" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Cognitive Behavioral Therapy</h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Exploring new frontiers in CBT applications for anxiety disorders and depression.
            </p>
            <Link to="#" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className={`col-span-1 md:col-span-2 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Neuroimaging Studies" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Neuroimaging Studies on Mental Health</h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Our comprehensive review of recent advancements in neuroimaging techniques for understanding mental health disorders and developing targeted treatments.
            </p>
            <Link to="#" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className={`col-span-1 md:col-span-2 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1513325646077-122a362d1393?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Mindfulness Research" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">The Science of Mindfulness</h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Evidence-based research on how mindfulness practices are transforming mental health treatment and prevention strategies.
            </p>
            <Link to="#" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className={`col-span-1 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Digital Therapeutics" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Digital Therapeutics</h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Next-generation mental health interventions delivered through technology.
            </p>
            <Link to="#" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center my-16">
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            We know you wonder. Wonder too. Read more and lets explore mental wellness together
          </p>
          <Link 
            to="/login" 
            className={`inline-flex mt-8 items-center justify-center rounded-full px-6 py-3 text-sm transition-all
              ${theme === 'dark' 
              ? "bg-white text-black hover:bg-white/90" 
              : "bg-black text-white hover:bg-black/90"} 
              border ${theme === 'dark' ? "border-white/20" : "border-black/20"}`}
          >
            Join Our Research Community
          </Link>
        </div>
      </main>
      
      {/* Footer */}
      <footer className={`px-6 md:px-16 lg:px-24 py-6 text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
        <Separator className={`mb-6 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`} />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>Wiinta, Inc © 2025</div>
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
