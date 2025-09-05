import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Users } from 'lucide-react';

const CTAFooter: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 255, 183, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 184, 0, 0.2) 0%, transparent 50%)
          `
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-bounce-gentle" />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-cta/25 rounded-full blur-lg animate-pulse-glow" />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card-glass backdrop-blur-xl rounded-full px-6 py-3 border border-primary/30 mb-6">
            <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="font-mono text-sm font-medium text-foreground">
              Ready to Transform Your Farm?
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
            Join the
            <span className="block electric-gradient bg-clip-text text-transparent">
              Agricultural Revolution
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Start your journey with AI-powered farming today. Get personalized crop recommendations, 
            real-time monitoring, and join a global community of innovative farmers.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-holographic group">
              <Zap className="w-6 h-6 mr-3 group-hover:animate-magnetic" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-glass group">
              <Users className="w-6 h-6 mr-3" />
              Schedule Demo Call
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card group">
              <div className="text-3xl mb-3">🚀</div>
              <div className="font-display font-bold text-foreground mb-2">Launch in 5 Minutes</div>
              <div className="text-sm text-muted-foreground">No complex setup required</div>
            </div>
            
            <div className="glass-card group">
              <div className="text-3xl mb-3">🛡️</div>
              <div className="font-display font-bold text-foreground mb-2">Enterprise Security</div>
              <div className="text-sm text-muted-foreground">Bank-level data protection</div>
            </div>
            
            <div className="glass-card group">
              <div className="text-3xl mb-3">🎯</div>
              <div className="font-display font-bold text-foreground mb-2">24/7 AI Support</div>
              <div className="text-sm text-muted-foreground">Always-on agricultural assistance</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Links */}
      <footer className="mt-24 pt-12 border-t border-border/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-display font-bold text-foreground mb-4">AgriTech Visionary</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Revolutionizing agriculture through AI-powered insights and sustainable farming practices.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Crop Recommendations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Disease Detection</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Weather Intelligence</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Market Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/20">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 AgriTech Visionary. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CTAFooter;