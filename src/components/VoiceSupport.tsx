import React from 'react';
import { Button } from "@/components/ui/button";

const VoiceSupport: React.FC = () => {
  const languages = [
    { name: 'English', native: 'English', flag: '🇺🇸' },
    { name: 'Hindi', native: 'हिंदी', flag: '🇮🇳' },
    { name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { name: 'Bengali', native: 'বাংলা', flag: '🇧🇩' },
    { name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
    { name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Voice & Language 
              <span className="text-primary"> Support</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ask questions in your local language using voice commands. Our AI understands and responds 
              in multiple Indian languages, making farming advice accessible to everyone.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mt-1">
                  <span className="text-white text-lg">🎤</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Voice Commands</h4>
                  <p className="text-muted-foreground">Speak naturally in your preferred language</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mt-1">
                  <span className="text-white text-lg">💬</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Smart Chat</h4>
                  <p className="text-muted-foreground">Text-based conversations with instant responses</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-cta flex items-center justify-center mt-1">
                  <span className="text-white text-lg">🔊</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Audio Responses</h4>
                  <p className="text-muted-foreground">Listen to advice in your local accent</p>
                </div>
              </div>
            </div>
            
            <Button className="btn-earth text-lg px-8 py-4">
              🎤 Try Voice Assistant
            </Button>
          </div>
          
          {/* Languages Grid */}
          <div className="slide-in-left">
            <div className="earth-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Supported Languages
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-card-soft rounded-lg hover:bg-secondary transition-colors cursor-pointer group"
                  >
                    <span className="text-2xl group-hover:animate-bounce">{lang.flag}</span>
                    <div>
                      <div className="font-medium text-foreground">{lang.name}</div>
                      <div className="text-sm text-muted-foreground">{lang.native}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Voice Demo */}
              <div className="mt-8 p-6 warm-gradient rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                    <span className="text-2xl">🎤</span>
                  </div>
                  <div className="text-foreground">
                    <div className="font-medium">Try asking:</div>
                    <div className="text-sm opacity-75">"मेरे खेत के लिए कौन सी फसल सबसे अच्छी होगी?"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceSupport;