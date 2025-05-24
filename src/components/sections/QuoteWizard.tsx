import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import AuditWizard from '../forms/AuditWizard';

declare global {
  interface Window {
    WindsurfWidget?: {
      init: (config: any) => void;
      createLead: (data: any) => Promise<any>;
    };
  }
}

const QuoteWizard: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isWindsurfLoaded, setIsWindsurfLoaded] = useState(false);

  useEffect(() => {
    // Load the Windsurf Widget script
    const script = document.createElement('script');
    script.src = 'https://widget.windsurf.ai/loader.js';
    script.async = true;
    script.onload = () => {
      if (window.WindsurfWidget) {
        setIsWindsurfLoaded(true);
      }
    };
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleOpenWizard = () => {
    setIsWizardOpen(true);
  };

  const handleCloseWizard = () => {
    setIsWizardOpen(false);
  };

  return (
    <section id="audit" className="py-20 bg-gradient-to-b from-black to-dark-canvas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-headline font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get Your <span className="text-accent">Free AI Audit</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-smoke max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Answer a few questions and receive a personalized assessment of how AI can transform your business
          </motion.p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Embedded Audit Wizard Form */}
          <AuditWizard 
            isOpen={true} 
            onClose={handleCloseWizard} 
            embedded={true} 
          />
        </div>

        {/* Modal version for CTAs throughout the site */}
        <AuditWizard 
          isOpen={isWizardOpen && !isInView} 
          onClose={handleCloseWizard} 
          embedded={false} 
        />
      </div>
    </section>
  );
};

export default QuoteWizard;
