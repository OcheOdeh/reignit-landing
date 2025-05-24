import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

type FloatingPillProps = {
  onExpand: () => void;
};

const FloatingPill: React.FC<FloatingPillProps> = ({ onExpand }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the services section is in view
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsAccordionVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    onExpand();
    // Hide the pill after clicking
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && !isAccordionVisible && (
        <motion.div
          className="floating-pill"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={handleClick}
          role="button"
          aria-label="See full specifications"
          tabIndex={0}
        >
          <span>See full specs</span>
          <ArrowRightIcon className="h-4 w-4" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingPill;
