"use client";

import Hero from '@/components/sections/Hero';
import ProblemSection from '@/components/sections/ProblemSection';
import ServiceTeaser from '@/components/sections/ServiceTeaser';
import SocialProof from '@/components/sections/SocialProof';
import CtaBanner from '@/components/sections/CtaBanner';

export default function Home() {
  const handleScrollDown = () => {
    // Scroll to the services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero onScrollDown={handleScrollDown} />
      <ProblemSection />
      <ServiceTeaser />
      <SocialProof />
    </>
  );
}
