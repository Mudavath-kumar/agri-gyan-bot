import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutPlatform from '@/components/AboutPlatform';
import AICropRecommendations from '@/components/AICropRecommendations';
import AIDiseaseScanner from '@/components/AIDiseaseScanner';
import HowItWorks from '@/components/HowItWorks';
import DiseaseDetection from '@/components/DiseaseDetection';
import FarmingInsights from '@/components/FarmingInsights';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import MarketDashboard from '@/components/MarketDashboard';
import VoiceAssistant from '@/components/VoiceAssistant';
import FarmersTestimonials from '@/components/FarmersTestimonials';
import GlobalImpact from '@/components/GlobalImpact';
import SuccessStories from '@/components/SuccessStories';
import CTAFooter from '@/components/CTAFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutPlatform />
      <AICropRecommendations />
      <AIDiseaseScanner />
      <FarmingInsights />
      <HowItWorks />
      <DiseaseDetection />
      <TechnologyShowcase />
      <MarketDashboard />
      <VoiceAssistant />
      <FarmersTestimonials />
      <GlobalImpact />
      <SuccessStories />
      <CTAFooter />
    </div>
  );
};

export default Index;