import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TechnologyShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      name: 'Computer Vision AI',
      description: 'Advanced image recognition for disease detection and crop health monitoring',
      features: [
        'Real-time plant disease identification',
        'Pest detection and classification',
        'Crop maturity assessment',
        'Yield prediction analysis'
      ],
      accuracy: '96%',
      icon: '👁️'
    },
    {
      name: 'Satellite & Drone Integration',
      description: 'Aerial monitoring and precision agriculture through remote sensing',
      features: [
        'NDVI crop health mapping',
        'Irrigation zone optimization',
        'Field boundary detection',
        'Growth pattern analysis'
      ],
      accuracy: '94%',
      icon: '🛰️'
    },
    {
      name: 'Weather Intelligence',
      description: 'Hyperlocal weather predictions with agricultural focus',
      features: [
        '10-day detailed forecasts',
        'Rainfall probability mapping',
        'Temperature stress alerts',
        'Frost warning system'
      ],
      accuracy: '91%',
      icon: '⛈️'
    },
    {
      name: 'Market Analytics',
      description: 'AI-powered market trend analysis and price predictions',
      features: [
        'Price trend forecasting',
        'Demand-supply analytics',
        'Best selling time recommendations',
        'Export opportunity identification'
      ],
      accuracy: '88%',
      icon: '📈'
    }
  ];

  return (
    <section className="py-20 earth-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Cutting-Edge 
            <span className="text-primary"> Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Our platform integrates the latest AI and remote sensing technologies to provide 
            farmers with unprecedented insights and precision in agricultural decision-making.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <Button
              key={index}
              variant={activeTab === index ? "default" : "outline"}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-primary text-primary-foreground shadow-glow' 
                  : 'hover:bg-primary/10'
              }`}
            >
              <span className="mr-2 text-lg">{tech.icon}</span>
              {tech.name}
            </Button>
          ))}
        </div>

        {/* Active Technology Details */}
        <Card className="earth-card p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{technologies[activeTab].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground font-display">
                    {technologies[activeTab].name}
                  </h3>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-muted-foreground mr-3">Accuracy:</span>
                    <span className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-semibold">
                      {technologies[activeTab].accuracy}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-body">
                {technologies[activeTab].description}
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground font-display">Key Capabilities:</h4>
                {technologies[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-foreground font-body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="slide-in-left">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-8 border border-primary/20">
                  <div className="text-center mb-6">
                    <div className="text-8xl mb-4 animate-float">{technologies[activeTab].icon}</div>
                    <div className="text-4xl font-bold text-primary font-display">{technologies[activeTab].accuracy}</div>
                    <div className="text-muted-foreground font-body">Average Accuracy</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-card/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-success">24/7</div>
                      <div className="text-sm text-muted-foreground font-body">Monitoring</div>
                    </div>
                    <div className="bg-card/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-cta">Real-time</div>
                      <div className="text-sm text-muted-foreground font-body">Analysis</div>
                    </div>
                    <div className="bg-card/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent">Multi-lingual</div>
                      <div className="text-sm text-muted-foreground font-body">Support</div>
                    </div>
                    <div className="bg-card/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-warning">Cloud</div>
                      <div className="text-sm text-muted-foreground font-body">Powered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TechnologyShowcase;