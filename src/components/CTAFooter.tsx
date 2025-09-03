import React from 'react';
import { Button } from "@/components/ui/button";

const CTAFooter: React.FC = () => {
  return (
    <footer className="relative">
      {/* Main CTA Section */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Farming Smarter 
              <span className="block text-accent-bright">Starts Today</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Join thousands of farmers who are already increasing their yields and profits with AI-powered crop recommendations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button className="btn-cta text-lg px-10 py-6 min-w-64 bg-white text-primary hover:bg-white/90">
                📱 Download Mobile App
              </Button>
              <Button className="btn-soft text-lg px-10 py-6 min-w-64 bg-white/20 text-white hover:bg-white/30">
                🚀 Try Demo
              </Button>
            </div>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-2">🌾</div>
                <div className="text-sm opacity-75">Smart Crops</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-sm opacity-75">Market Data</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎤</div>
                <div className="text-sm opacity-75">Voice Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🌍</div>
                <div className="text-sm opacity-75">Local Language</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Links */}
      <section className="py-12 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-light">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Our Mission</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">How it Works</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-light">Dashboard</h3>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Crop Recommendations</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Disease Scanner</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Market Prices</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-light">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Help Center</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">WhatsApp Support</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Field Officers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-light">Languages</h3>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">English • हिंदी</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">ਪੰਜਾਬੀ • বাংলা</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">तमिल • తెలుగు</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="opacity-75">
              © 2024 AI Crop Advisory Platform. Empowering farmers with smart technology.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Data Usage</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default CTAFooter;