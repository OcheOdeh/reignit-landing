import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

type Step = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: 'Discovery & Audit',
    description: 'We analyze your business needs and identify AI opportunities with our free audit.',
    icon: '🔍'
  },
  {
    id: 2,
    title: 'Strategy & Design',
    description: 'Our team creates a tailored AI implementation plan aligned with your goals.',
    icon: '📝'
  },
  {
    id: 3,
    title: 'Development & Testing',
    description: 'We build and rigorously test your custom AI solution to ensure optimal performance.',
    icon: '⚙️'
  },
  {
    id: 4,
    title: 'Deployment & Growth',
    description: 'Launch your AI solution and continuously optimize for maximum ROI.',
    icon: '🚀'
  }
];

const HowItWorks: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-dark-canvas to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-headline font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            How It <span className="text-accent">Works</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-smoke max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our streamlined four-step process takes you from concept to implementation
          </motion.p>
        </div>

        <div ref={ref} className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 last:mb-0`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Step number with connecting line */}
              <div className="relative flex-shrink-0 mb-6 md:mb-0">
                <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-gradient-start to-primary-gradient-end text-white text-2xl font-bold z-10 relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-accent hidden md:block"></div>
                )}
              </div>

              {/* Content */}
              <div className={`glass-card p-6 rounded-lg flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{step.icon}</span>
                  <h3 className="text-2xl font-headline font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-neutral-smoke">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
