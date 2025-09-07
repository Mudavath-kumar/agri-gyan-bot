import React from 'react';
import { Button } from "@/components/ui/button";
import ThreeDBackground from '@/components/3DBackground';
import { Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Animated Background */}
      <ThreeDBackground />
      
      {/* Futuristic Background Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Holographic Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 183, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 183, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-accent/30 rounded-full blur-lg animate-bounce-gentle" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cta/25 rounded-full blur-md animate-pulse-glow" />
      
      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <div className="fade-in-up space-y-8">
          {/* Neo-Brutalist Badge */}
          <div className="inline-flex items-center gap-2 bg-card-glass backdrop-blur-xl rounded-full px-6 py-3 border border-primary/30 mb-8">
            <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="font-mono text-sm font-medium text-foreground">
              AgriTech Visionary Platform
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground mb-8 leading-tight">
            Future of 
            <span className="relative inline-block mx-2 sm:mx-4">
              <span className="electric-gradient bg-clip-text text-transparent">
                Smart Farming
              </span>
              <div className="absolute -inset-2 electric-gradient opacity-20 blur-lg animate-pulse-glow" />
            </span>
            <span className="block sm:inline">is Here</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-body px-4 sm:px-0">
            Revolutionary AI-powered crop recommendations using 
            <span className="font-semibold text-primary"> real-time data fusion</span>, 
            predictive analytics, and 
            <span className="font-semibold text-accent"> personalized insights</span>
          </p>
          
          {/* Holographic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
            <Link to="/soil-analysis" className="w-full sm:w-auto">
              <button className="btn-holographic group w-full text-sm sm:text-base">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-magnetic" />
                Start Crop Analysis
                <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
              </button>
            </Link>
            
            <Link to="/dashboard" className="w-full sm:w-auto">
              <button className="btn-magnetic group w-full text-sm sm:text-base">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce-gentle" />
                View Live Demo
                <div className="absolute inset-0 rounded-2xl bg-cta/20 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              </button>
            </Link>
          </div>
          
          {/* Floating Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="glass-card group p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-display font-bold text-primary mb-2">98.7%</div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground">Prediction Accuracy</div>
              <div className="w-8 sm:w-12 h-1 bg-primary rounded-full mt-3 group-hover:animate-pulse-glow" />
            </div>
            
            <div className="glass-card group p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-display font-bold text-accent mb-2">50M+</div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground">Crops Analyzed</div>
              <div className="w-8 sm:w-12 h-1 bg-accent rounded-full mt-3 group-hover:animate-pulse-glow" />
            </div>
            
            <div className="glass-card group p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-display font-bold text-cta mb-2">180+</div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground">Countries Served</div>
              <div className="w-8 sm:w-12 h-1 bg-cta rounded-full mt-3 group-hover:animate-pulse-glow" />
            </div>
          </div>
        </div>
        
        {/* Magnetic Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 magnetic-hover">
          <div className="glass-card w-12 h-12 flex items-center justify-center cursor-pointer">
            <div className="w-1 h-6 electric-gradient rounded-full animate-bounce-gentle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;