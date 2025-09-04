import React from 'react';
import { Card } from '@/components/ui/card';

const FarmingInsights = () => {
  const insights = [
    {
      title: 'Seasonal Crop Calendar',
      description: 'AI-powered planting schedule based on your location and climate data',
      icon: '📅',
      stats: '92% accuracy',
      color: 'primary'
    },
    {
      title: 'Soil Health Monitoring',
      description: 'Real-time analysis of pH, nutrients, moisture, and organic matter levels',
      icon: '🧪',
      stats: 'Updated daily',
      color: 'success'
    },
    {
      title: 'Market Price Predictions',
      description: 'Forecast crop prices up to 3 months ahead using market trends',
      icon: '📊',
      stats: '87% reliability',
      color: 'cta'
    },
    {
      title: 'Water Management',
      description: 'Optimize irrigation schedules based on weather forecasts and crop needs',
      icon: '💧',
      stats: '30% water saved',
      color: 'accent'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Advanced Farming 
            <span className="text-primary"> Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Leverage cutting-edge AI technology to make data-driven decisions that boost productivity, 
            reduce costs, and ensure sustainable farming practices for generations to come.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <Card 
              key={index}
              className="earth-card p-8 text-center group cursor-pointer hover-glow"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-6xl mb-6 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {insight.icon}
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4 font-display">
                {insight.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 font-body">
                {insight.description}
              </p>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-${insight.color}/10 text-${insight.color}`}>
                {insight.stats}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmingInsights;