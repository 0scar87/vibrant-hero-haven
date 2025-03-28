
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { researchTopics } from '@/data/researchTopics';
import { useTheme } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingTopics } from '@/components/TrendingTopics';
import { Button } from '@/components/ui/button';

const ResearchTopic = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { theme } = useTheme();
  
  const topic = topicId ? researchTopics[topicId] : null;
  
  if (!topic) {
    return (
      <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <Header />
        <main className="flex-1 px-6 md:px-16 lg:px-24 py-12 md:py-20 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Topic Not Found</h1>
          <p className="mb-8">The research topic you're looking for couldn't be found.</p>
          <Link to="/research" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Research
          </Link>
        </main>
      </div>
    );
  }

  const IconComponent = topic.icon;
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      
      <main className="flex-1 px-6 md:px-16 lg:px-24 py-12 md:py-20">
        {/* Breadcrumb Navigation */}
        <div className="flex mb-8">
          <Link to="/research" className={`flex items-center text-sm ${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}>
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Research
          </Link>
        </div>
        
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <IconComponent className={`h-6 w-6 ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`} />
            <h1 className="text-3xl md:text-5xl font-bold">{topic.title}</h1>
          </div>
          
          <img 
            src={topic.imageSrc} 
            alt={topic.title} 
            className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
          />
          
          <div className="text-gradient-heading text-xl md:text-3xl font-medium mb-12 max-w-4xl mx-auto text-center leading-relaxed">
            Mars is just a simple stop.<br/>
            The mind is the final frontier.
          </div>
          
          <p className={`text-lg md:text-xl leading-relaxed mb-8 ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>
            {topic.fullDescription}
          </p>
        </div>
        
        {/* Key Findings Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topic.keyFindings.map((finding, index) => (
              <Card key={index} className={`${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                <CardContent className="p-6">
                  <p className={`${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>{finding}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Related Topics Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Related Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topic.relatedTopics.map((relatedTopicId) => {
              const relatedTopic = researchTopics[relatedTopicId];
              if (!relatedTopic) return null;
              
              const RelatedIcon = relatedTopic.icon;
              
              return (
                <Link key={relatedTopicId} to={`/research/${relatedTopicId}`}>
                  <div className={`h-full p-6 rounded-xl transition-all hover:scale-[1.02] ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
                    <img 
                      src={relatedTopic.imageSrc} 
                      alt={relatedTopic.title} 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <RelatedIcon className="mr-2 h-5 w-5" /> {relatedTopic.title}
                    </h3>
                    <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {relatedTopic.shortDescription}
                    </p>
                    <div className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        
        {/* Trending Topics */}
        <div className="mb-16">
          <TrendingTopics />
        </div>
        
        {/* CTA Section */}
        <div className="text-center my-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Research Community</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Get access to our latest research findings, participate in studies, and connect with mental wellness researchers and enthusiasts.
          </p>
          <Button
            asChild
            className={`rounded-full px-8 py-6 text-base ${theme === 'dark' 
              ? "bg-white text-black hover:bg-white/90" 
              : "bg-black text-white hover:bg-black/90"}`}
          >
            <Link to="/signup">
              Join the Community
            </Link>
          </Button>
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

export default ResearchTopic;
