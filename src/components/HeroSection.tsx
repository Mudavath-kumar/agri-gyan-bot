import React from 'react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(43, 122, 75, 0.4), rgba(43, 122, 75, 0.6)), url('/src/assets/hero-farm.jpg')`
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Smart AI Crop Guidance 
            <span className="block text-accent-bright">for Every Farmer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get real-time crop advice using soil, weather, and market data – 
            <span className="font-semibold text-accent-bright"> in your own language</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-cta text-lg px-10 py-6 min-w-64">
              🌾 Get Crop Recommendations
            </Button>
            <Button className="btn-soft text-lg px-10 py-6 min-w-64 bg-white/20 text-white hover:bg-white/30">
              📸 Upload Crop Image (Disease Check)
            </Button>
          </div>
        </div>
        
        {/* Floating Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-gentle">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;