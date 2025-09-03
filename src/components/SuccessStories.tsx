import React from 'react';
import farmersTechImg from '@/assets/farmers-tech.jpg';

const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      name: 'राज कुमार',
      location: 'Punjab',
      crop: 'Wheat',
      improvement: '35% increase in yield',
      quote: 'AI की सलाह से मेरी फसल की पैदावार 35% बढ़ गई है। अब मैं सही समय पर सही फसल लगाता हूँ।',
      translation: 'With AI advice, my crop yield increased by 35%. Now I plant the right crop at the right time.',
      avatar: '👨‍🌾'
    },
    {
      name: 'Priya Sharma',
      location: 'Maharashtra',
      crop: 'Cotton',
      improvement: '₹50,000 more profit',
      quote: 'Market price predictions helped me sell at the right time. Earned ₹50,000 extra this season!',
      translation: 'बाज़ार की भविष्यवाणी से सही समय पर बेच सकी। इस सीज़न ₹50,000 ज्यादा कमाए!',
      avatar: '👩‍🌾'
    },
    {
      name: 'अमित पटेल',
      location: 'Gujarat',
      crop: 'Groundnut',
      improvement: 'Saved 40% on pesticides',
      quote: 'Disease detection से सही समय पर इलाज मिला। कीटनाशक में 40% बचत हुई।',
      translation: 'Early disease detection helped get timely treatment. Saved 40% on pesticides.',
      avatar: '👨‍🌾'
    }
  ];

  return (
    <section className="py-20 warm-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Success Stories from 
            <span className="text-primary"> Real Farmers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thousands of farmers across India are already transforming their harvests with AI-powered insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((story, index) => (
            <div 
              key={index}
              className="earth-card p-8 hover-glow slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl mr-4">
                  {story.avatar}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground">{story.name}</h4>
                  <p className="text-muted-foreground">{story.location} • {story.crop}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {story.improvement}
                </div>
              </div>
              
              <blockquote className="text-foreground mb-4 italic leading-relaxed">
                "{story.quote}"
              </blockquote>
              
              <p className="text-sm text-muted-foreground italic">
                "{story.translation}"
              </p>
            </div>
          ))}
        </div>
        
        {/* Hero Image */}
        <div className="text-center fade-in-up">
          <div className="earth-card p-8 max-w-4xl mx-auto">
            <img 
              src={farmersTechImg}
              alt="Farmers using technology"
              className="rounded-lg w-full h-80 object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Join 10,000+ Farmers Already Using AI
            </h3>
            <p className="text-lg text-muted-foreground">
              Experience the future of farming with personalized AI guidance in your local language
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;