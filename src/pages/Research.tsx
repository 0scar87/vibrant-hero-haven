
import React from 'react';
import { Header } from '@/components/Header';
import { useTheme } from '@/components/ThemeProvider';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Lightbulb, Microscope, Users, Book, Cloud, ChartLine } from 'lucide-react';
import { researchTopics } from '@/data/researchTopics';

const Research = () => {
  const { theme } = useTheme();
  
  // Get topic IDs from researchTopics
  const topicIds = Object.keys(researchTopics);
  
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
          {/* Topic 1 - CBT */}
          <div className={`col-span-1 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1494368308039-ed3393ead79c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Cognitive Behavioral Therapy" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Brain className="mr-2 h-5 w-5" /> Cognitive Behavioral Therapy
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Exploring new frontiers in CBT applications for anxiety disorders and depression.
            </p>
            <Link to="/research/cognitive-behavioral-therapy" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Topic 2 - Neuroimaging */}
          <div className={`col-span-1 md:col-span-2 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Neuroimaging Studies" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Microscope className="mr-2 h-5 w-5" /> Neuroimaging Studies on Mental Health
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Our comprehensive review of recent advancements in neuroimaging techniques for understanding mental health disorders and developing targeted treatments.
            </p>
            <Link to="/research/neuroimaging-studies" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Topic 3 - Mindfulness */}
          <div className={`col-span-1 md:col-span-2 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1513325646077-122a362d1393?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Mindfulness Research" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Heart className="mr-2 h-5 w-5" /> The Science of Mindfulness
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Evidence-based research on how mindfulness practices are transforming mental health treatment and prevention strategies.
            </p>
            <Link to="/research/science-of-mindfulness" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Topic 4 - Digital Therapeutics */}
          <div className={`col-span-1 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Digital Therapeutics" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Cloud className="mr-2 h-5 w-5" /> Digital Therapeutics
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Next-generation mental health interventions delivered through technology.
            </p>
            <Link to="/research/digital-therapeutics" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Topic 5 - Trauma-Informed Care */}
          <div className={`col-span-1 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Trauma-Informed Care" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Users className="mr-2 h-5 w-5" /> Trauma-Informed Care
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Developing comprehensive approaches to care that recognize the widespread impact of trauma.
            </p>
            <Link to="/research/trauma-informed-care" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Topic 6 - Nature and Mental Health */}
          <div className={`col-span-1 md:col-span-2 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Nature and Mental Health" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Lightbulb className="mr-2 h-5 w-5" /> Nature and Mental Health
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Studying the therapeutic effects of nature exposure on depression, anxiety, and overall psychological well-being.
            </p>
            <Link to="/research/nature-and-mental-health" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Topic 7 - Psychedelic Therapy */}
          <div className={`col-span-1 md:col-span-2 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Psychedelic Therapy" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <ChartLine className="mr-2 h-5 w-5" /> Psychedelic-Assisted Therapy
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Examining the therapeutic potential of substances like psilocybin and MDMA for treatment-resistant mental health conditions.
            </p>
            <Link to="/research/psychedelic-assisted-therapy" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Topic 8 - Sleep Research */}
          <div className={`col-span-1 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1517330112565-0b16ce3dd31d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Sleep Research" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Brain className="mr-2 h-5 w-5" /> Sleep and Mental Health
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Investigating the bidirectional relationship between sleep disorders and mental health conditions.
            </p>
            <Link to="/research/sleep-and-mental-health" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Topic 9 - Social Media Impact */}
          <div className={`col-span-1 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Social Media Impact" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Cloud className="mr-2 h-5 w-5" /> Social Media and Mental Health
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Assessing the psychological impacts of social media use on adolescents and adults.
            </p>
            <Link to="/research/social-media-and-mental-health" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Topic 10 - Epigenetics */}
          <div className={`col-span-1 md:col-span-2 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Epigenetics" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Microscope className="mr-2 h-5 w-5" /> Epigenetics and Mental Health
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Understanding how environmental factors influence gene expression and impact mental health across generations.
            </p>
            <Link to="/research/epigenetics-and-mental-health" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Topic 11 - Group Therapy */}
          <div className={`col-span-1 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Group Therapy" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Users className="mr-2 h-5 w-5" /> Group Therapy Innovations
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              New approaches to group therapy that enhance outcomes for various mental health conditions.
            </p>
            <Link to="/research/group-therapy-innovations" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Topic 12 - Telehealth */}
          <div className={`col-span-1 md:col-span-2 p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Telehealth" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Book className="mr-2 h-5 w-5" /> Telehealth Mental Health Services
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Evaluating the efficacy, accessibility, and future of remote mental health care delivery systems.
            </p>
            <Link to="/research/telehealth-mental-health-services" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
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
