import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutPlatform from '@/components/AboutPlatform';
import HowItWorks from '@/components/HowItWorks';
import DiseaseDetection from '@/components/DiseaseDetection';
import MarketDashboard from '@/components/MarketDashboard';
import VoiceSupport from '@/components/VoiceSupport';
import SuccessStories from '@/components/SuccessStories';
import CTAFooter from '@/components/CTAFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutPlatform />
      <HowItWorks />
      <DiseaseDetection />
      <MarketDashboard />
      <VoiceSupport />
      <SuccessStories />
      <CTAFooter />
    </div>
  );
};

export default Index;