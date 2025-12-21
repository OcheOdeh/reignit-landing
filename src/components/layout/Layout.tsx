"use client";

import { useState, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [allAccordionsExpanded, setAllAccordionsExpanded] = useState(false);
  const servicesRef = useRef<HTMLElement | null>(null);

  const handleExpandAll = () => {
    setAllAccordionsExpanded(true);

    // Find the services section and scroll to it
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />


    </div>
  );
};

export default Layout;
