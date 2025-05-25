"use client";

import { useState, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import ServicesCarousel from '@/components/sections/ServicesCarousel';
import HowItWorks from '@/components/sections/HowItWorks';
import ProofCounters from '@/components/sections/ProofCounters';
import QuoteWizard from '@/components/sections/QuoteWizard';
// CreativePlayground removed as requested
// Testimonials section removed
import CtaBanner from '@/components/sections/CtaBanner';

export default function Home() {
  const [allAccordionsExpanded, setAllAccordionsExpanded] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    // Scroll to the services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Hero onScrollDown={handleScrollDown} />
      <ServicesCarousel allExpanded={allAccordionsExpanded} onToggleAll={setAllAccordionsExpanded} />
      <HowItWorks />
      <ProofCounters />
      <QuoteWizard />
      {/* CreativePlayground removed as requested */}
      {/* Testimonials section removed */}
      <CtaBanner />
    </Layout>
  );
}
