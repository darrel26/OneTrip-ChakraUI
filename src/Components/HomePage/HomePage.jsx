import React from 'react';
import HeroSection from '../HomePage/Section/Hero/HeroSection';
import AboutUsSection from './Section/AboutUs/AboutUsSection';
import CTASection from './Section/CTA/CTASection';
import FeaturesSection from './Section/Features/FeaturesSection';

export default function HomePage() {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutUsSection />
      <FeaturesSection />
      <CTASection />
    </React.Fragment>
  );
}
