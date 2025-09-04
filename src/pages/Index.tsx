import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutPlatform from '@/components/AboutPlatform';
import HowItWorks from '@/components/HowItWorks';
import DiseaseDetection from '@/components/DiseaseDetection';
import FarmingInsights from '@/components/FarmingInsights';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import MarketDashboard from '@/components/MarketDashboard';
import VoiceSupport from '@/components/VoiceSupport';
import FarmersTestimonials from '@/components/FarmersTestimonials';
import GlobalImpact from '@/components/GlobalImpact';
import SuccessStories from '@/components/SuccessStories';
import CTAFooter from '@/components/CTAFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutPlatform />
      <FarmingInsights />
      <HowItWorks />
      <DiseaseDetection />
      <TechnologyShowcase />
      <MarketDashboard />
      <VoiceSupport />
      <FarmersTestimonials />
      <GlobalImpact />
      <SuccessStories />
      <CTAFooter />
    </div>
  );
};

export default Index;