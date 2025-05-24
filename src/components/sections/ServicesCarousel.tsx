import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  gifUrl: string;
};

const services: ServiceItem[] = [
  {
    id: 'cx-ai',
    title: 'CX AI',
    description: 'Enhance customer experience with AI-powered solutions that understand and anticipate customer needs.',
    bullets: [
      'Reduce response time by 80%',
      'Increase customer satisfaction by 45%',
      'Automate up to 70% of routine inquiries'
    ],
    gifUrl: '/images/cx-ai.gif'
  },
  {
    id: 'workflow-ai',
    title: 'Workflow AI',
    description: 'Streamline operations and automate complex workflows with intelligent AI systems.',
    bullets: [
      'Cut operational costs by 35%',
      'Reduce manual tasks by 60%',
      'Improve process accuracy by 90%'
    ],
    gifUrl: '/images/workflow-ai.gif'
  },
  {
    id: 'product-studio',
    title: 'Product Studio',
    description: 'Build innovative digital products with our expert team using cutting-edge AI technologies.',
    bullets: [
      'Launch products 40% faster',
      'Reduce development costs by 30%',
      'Achieve 95% user adoption rates'
    ],
    gifUrl: '/images/product-studio.gif'
  },
  {
    id: 'deep-ai',
    title: 'Deep AI',
    description: 'Leverage advanced AI models for complex problem-solving and predictive analytics.',
    bullets: [
      'Improve forecasting accuracy by 65%',
      'Uncover hidden patterns in your data',
      'Make decisions based on 99.7% reliable insights'
    ],
    gifUrl: '/images/deep-ai.gif'
  }
];

type ServiceCardProps = {
  service: ServiceItem;
  isExpanded: boolean;
  onClick: () => void;
  isAllExpanded: boolean;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isExpanded, onClick, isAllExpanded }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  // Load the GIF when expanded or on hover
  const shouldLoadGif = isExpanded || isHovered || isAllExpanded;

  return (
    <div 
      className="bg-dark-canvas rounded-lg overflow-hidden shadow-lg border border-gray-800 transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={onClick}
        role="button"
        aria-expanded={isExpanded}
        aria-controls={`content-${service.id}`}
        tabIndex={0}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-headline font-bold text-white">{service.title}</h3>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRightIcon className="h-6 w-6 text-accent" />
          </motion.div>
        </div>
        
        {!isExpanded && (
          <p className="mt-2 text-sm text-gray-400">Click to reveal ROI & timeline</p>
        )}
      </div>

      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: isExpanded || isAllExpanded ? `${contentHeight}px` : '0px' }}
        id={`content-${service.id}`}
      >
        <div ref={contentRef} className="p-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-neutral-smoke mb-4">{service.description}</p>
              
              <h4 className="text-lg font-headline font-semibold text-accent mb-2">ROI Impact</h4>
              <ul className="space-y-2">
                {service.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-neutral-smoke">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative aspect-video bg-gray-900 rounded overflow-hidden">
              {shouldLoadGif && (
                <img 
                  src={service.gifUrl} 
                  alt={`${service.title} demonstration`}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                />
              )}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-gray-400">Loading demonstration...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type ServicesCarouselProps = {
  allExpanded: boolean;
  onToggleAll: (expanded: boolean) => void;
};

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ allExpanded, onToggleAll }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    if (allExpanded) {
      setExpandedId(null); // Clear individual expanded state when all are expanded
    }
  }, [allExpanded]);

  return (
    <section id="services" className="py-20 bg-dark-canvas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-white mb-4">
            Explore our <span className="text-accent">AI Service Suite</span>
          </h2>
          <p className="text-xl text-neutral-smoke max-w-2xl mx-auto">
            Discover how our AI solutions can transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              service={service}
              isExpanded={expandedId === service.id}
              onClick={() => handleToggle(service.id)}
              isAllExpanded={allExpanded}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
