
import React from 'react';
import { Header } from '@/components/Header';
import { HomeFooter } from '@/components/HomeFooter';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TrendingTopics } from '@/components/TrendingTopics';

const News = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-32 md:py-40">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-4">
            News
          </h1>
          <p className="text-lg text-white/80">
            Get all the latest
          </p>
          
          <div className="mt-24 text-white/80 flex flex-col items-center">
            <span className="mb-2">Explore</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </section>
        
        <Separator className="bg-white/10" />
        
        {/* Main News Content */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-center mb-10 max-w-3xl mx-auto">
              1 psychiatrist. 500,000 people. That's the ratio in many African countries. Most get no one.
            </h2>
            
            <Card className="w-full h-64 md:h-80 bg-gray-300 mb-20 rounded-lg overflow-hidden">
              {/* Placeholder for news image */}
            </Card>
            
            <div className="py-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-center mb-6 max-w-3xl mx-auto">
                No More Silence. No More Chains. It's Time to Code liberation. Because mental health isn't a luxury. It's a right.
              </h3>
              
              <div className="flex justify-center mt-10">
                <Link to="/chat">
                  <Button
                    className={cn(
                      "rounded-full px-8 py-2",
                      theme === 'dark' 
                        ? "bg-white text-black hover:bg-white/90" 
                        : "bg-black text-white hover:bg-black/90"
                    )}
                  >
                    Try Wiinta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <Separator className="bg-white/10" />
        
        {/* Press Release Section */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-14">
              Wiinta to Launch Mental Healthcare Platform in Early 2026
            </h2>
            
            <Separator className="bg-white/20 my-8" />
            
            <div className="space-y-8 text-white/90">
              <p className="mb-6">
                <strong>Johannesburg, South Africa – April 11, 2025</strong>
              </p>
              
              <p className="mb-6">
                South African health technology company Wiinta, founded by Karman Kekana, has announced its launch in early 2026. The platform aims to address the critical shortage of mental healthcare professionals across Africa, where the ratio stands at approximately 1 psychiatrist for every 500,000 people – leaving most without any access to care.
              </p>
              
              <p className="mb-6">
                At the core of Wiinta's innovation is "Sankara," a diagnostic accuracy tool that will help identify mental health conditions without requiring expensive consultations with psychologists or psychiatrists. Several essential features will be offered completely free, democratizing access to mental health services.
              </p>
              
              <p className="mb-6">
                "We're starting in Africa where the need is most acute, but our vision is global," explains Kekana. "Mental healthcare accessibility is a worldwide challenge that requires innovative solutions."
              </p>
              
              <p className="mb-6">
                Wiinta represents a significant step toward making quality mental healthcare available to populations that have been historically underserved, with technology bridging the gap where traditional healthcare systems cannot reach.
              </p>
              
              <h3 className="text-xl font-semibold mt-10 mb-4">About Wiinta</h3>
              
              <p className="mb-6">
                Founded in Johannesburg, South Africa, Wiinta develops technology to make mental healthcare accessible, affordable, and culturally responsive worldwide.
              </p>
              
              <p className="mb-6">
                <strong>Contact Information:</strong><br />
                press@wiinta.com
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <NewsFooter />
    </div>
  );
};

// Custom footer for the News page
const NewsFooter = () => {
  return (
    <footer className="py-8 px-6 md:px-16 lg:px-24 text-center text-sm text-white/60 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
          <span>Metacophen Inc © 2025</span>
          <span className="hidden sm:inline">|</span>
          <Link to="#" className="hover:text-white transition-colors">Privacy & Legal</Link>
          <span className="hidden sm:inline">|</span>
          <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
          <span className="hidden sm:inline">|</span>
          <Link to="#" className="hover:text-white transition-colors">Visit us on X</Link>
        </div>
      </div>
    </footer>
  );
};

// Import cn utility
import { cn } from '@/lib/utils';

export default News;
