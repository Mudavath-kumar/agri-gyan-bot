import React from 'react';

const AboutPlatform: React.FC = () => {
  const features = [
    {
      icon: '🌱',
      title: 'Soil Intelligence',
      description: 'AI analyzes pH, moisture, nutrients and organic matter to understand your soil health',
      gradient: 'earth-gradient'
    },
    {
      icon: '🌦️',
      title: 'Weather Forecasts',
      description: 'Hyperlocal weather predictions with rainfall, temperature and humidity patterns',
      gradient: 'sky-gradient'
    },
    {
      icon: '🔄',
      title: 'Smart Rotation',
      description: 'Crop rotation history analysis for sustainable farming and soil preservation',
      gradient: 'warm-gradient'
    },
    {
      icon: '📈',
      title: 'Market Insights',
      description: 'Real-time market demand, price trends and profit optimization guidance',
      gradient: 'hero-gradient'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            AI-Powered Platform for 
            <span className="text-primary"> Smart Agriculture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Our advanced AI system combines multiple data sources to provide personalized crop recommendations 
            that increase yield, reduce costs, and promote sustainable farming practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`earth-card p-8 text-center group cursor-pointer hover:scale-105 ${feature.gradient}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-6 group-hover:animate-bounce-gentle">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4 font-display">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;