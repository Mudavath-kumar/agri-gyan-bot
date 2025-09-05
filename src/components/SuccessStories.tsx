import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      id: 1,
      title: "500% Yield Increase in Kenya",
      description: "Smallholder farmers increased maize yield from 2 tons/hectare to 12 tons/hectare using AI crop recommendations.",
      metrics: { yield: "500%", farmers: "2,500+", timeframe: "6 months" },
      icon: TrendingUp,
      color: "primary"
    },
    {
      id: 2,
      title: "Drought-Resistant Farming in India",
      description: "AI-powered water management helped farmers maintain 85% yield during severe drought conditions.",
      metrics: { yield: "85%", farmers: "10,000+", timeframe: "1 season" },
      icon: Zap,
      color: "accent"
    },
    {
      id: 3,
      title: "Organic Revolution in Brazil",
      description: "Transition to sustainable organic farming increased profit margins by 300% while reducing chemical usage.",
      metrics: { yield: "300%", farmers: "5,000+", timeframe: "1 year" },
      icon: Users,
      color: "cta"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-card-glass backdrop-blur-xl rounded-full px-6 py-3 border border-primary/30 mb-6">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm font-medium text-foreground">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Transforming Lives Through
            <span className="block electric-gradient bg-clip-text text-transparent">AI Agriculture</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real farmers, real results. Discover how our AI platform is revolutionizing agriculture 
            and creating sustainable prosperity worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <Card 
              key={story.id}
              className="brutalist-card group cursor-pointer hover-electric"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-${story.color}/10 flex items-center justify-center mb-6 group-hover:animate-magnetic`}>
                  <story.icon className={`w-8 h-8 text-${story.color}`} />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {story.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {story.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className={`text-2xl font-display font-bold text-${story.color} mb-1`}>
                      {story.metrics.yield}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-foreground mb-1">
                      {story.metrics.farmers}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">Farmers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-foreground mb-1">
                      {story.metrics.timeframe}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">Timeline</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Global Impact Stats */}
        <div className="glass-card p-12 text-center">
          <h3 className="text-3xl font-display font-bold text-foreground mb-8">
            Global Impact Dashboard
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-4xl font-display font-bold electric-gradient bg-clip-text text-transparent mb-2 group-hover:animate-pulse-glow">
                2.5M+
              </div>
              <div className="text-sm font-medium text-muted-foreground">Farmers Empowered</div>
            </div>
            
            <div className="group">
              <div className="text-4xl font-display font-bold harvest-gradient bg-clip-text text-transparent mb-2 group-hover:animate-pulse-glow">
                850%
              </div>
              <div className="text-sm font-medium text-muted-foreground">Average Yield Increase</div>
            </div>
            
            <div className="group">
              <div className="text-4xl font-display font-bold text-success mb-2 group-hover:animate-pulse-glow">
                $2.8B
              </div>
              <div className="text-sm font-medium text-muted-foreground">Economic Impact</div>
            </div>
            
            <div className="group">
              <div className="text-4xl font-display font-bold text-accent mb-2 group-hover:animate-pulse-glow">
                Carbon-
              </div>
              <div className="text-sm font-medium text-muted-foreground">Negative Farming</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;