import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type CounterItem = {
  id: string;
  value: number;
  suffix: string;
  label: string;
  duration: number;
};

type CaseStudy = {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
};

const counters: CounterItem[] = [
  {
    id: 'clients',
    value: 150,
    suffix: '+',
    label: 'Clients Served',
    duration: 2.5,
  },
  {
    id: 'roi',
    value: 300,
    suffix: '%',
    label: 'Average ROI',
    duration: 3,
  },
  {
    id: 'time',
    value: 60,
    suffix: '%',
    label: 'Time Saved',
    duration: 2,
  },
  {
    id: 'satisfaction',
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    duration: 2.8,
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: 'fintech',
    title: 'AI-Powered Customer Service Transformation',
    company: 'Global FinTech Leader',
    industry: 'Financial Services',
    challenge: 'Handling 10,000+ daily customer inquiries with lengthy response times and inconsistent quality.',
    solution: 'Implemented our CX AI solution with custom knowledge base integration and multi-channel support.',
    results: [
      'Reduced response time by 85%',
      'Increased customer satisfaction by 42%',
      'Saved $1.2M annually in operational costs'
    ],
    testimonial: {
      quote: "The ROI we've seen from Reignit's AI implementation has been nothing short of remarkable. Our customers are happier, and our team is more efficient.",
      author: "Sarah Johnson",
      position: "CTO, Global FinTech"
    }
  },
  {
    id: 'healthcare',
    title: 'Workflow Automation for Medical Records',
    company: 'National Healthcare Provider',
    industry: 'Healthcare',
    challenge: 'Manual processing of patient records leading to delays in care and administrative bottlenecks.',
    solution: 'Deployed Workflow AI to automate document processing, classification, and routing.',
    results: [
      'Processing time reduced from 3 days to 4 minutes',
      '99.7% accuracy in document classification',
      'Staff reallocated to high-value patient care'
    ]
  }
];

const Counter: React.FC<CounterItem & { isInView: boolean }> = ({ value, suffix, label, duration, isInView }) => {
  const [count, setCount] = useState(0);

  // Animate the counter when in view
  if (isInView && count < value) {
    setTimeout(() => {
      setCount(prev => {
        const next = prev + 1;
        return next <= value ? next : value;
      });
    }, (duration * 1000) / value);
  }

  return (
    <div className="text-center p-6 glass-card rounded-lg">
      <div className="text-4xl md:text-5xl font-headline font-bold text-white mb-2">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-neutral-smoke">{label}</div>
    </div>
  );
};

const CaseStudyModal: React.FC<{ study: CaseStudy; onClose: () => void }> = ({ study, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75" onClick={onClose}></div>
      
      <motion.div 
        className="relative bg-dark-canvas rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs bg-primary-gradient-start text-white mb-4">
              {study.industry}
            </span>
            <h3 className="text-2xl font-headline font-bold text-white mb-2">{study.title}</h3>
            <p className="text-accent">{study.company}</p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-lg font-headline font-semibold text-white mb-2">Challenge</h4>
              <p className="text-neutral-smoke">{study.challenge}</p>
            </div>

            <div>
              <h4 className="text-lg font-headline font-semibold text-white mb-2">Solution</h4>
              <p className="text-neutral-smoke">{study.solution}</p>
            </div>

            <div>
              <h4 className="text-lg font-headline font-semibold text-white mb-2">Results</h4>
              <ul className="space-y-2">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-neutral-smoke">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {study.testimonial && (
            <div className="border-t border-gray-800 pt-6 mt-6">
              <blockquote className="italic text-neutral-smoke mb-4">
                "{study.testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-gradient-start flex items-center justify-center text-white font-bold">
                  {study.testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="text-white font-semibold">{study.testimonial.author}</div>
                  <div className="text-sm text-gray-400">{study.testimonial.position}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProofCounters: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="proof" className="py-20 bg-dark-canvas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-headline font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Proven <span className="text-accent">Results</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-smoke max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our AI solutions deliver measurable impact across industries
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {counters.map((counter) => (
            <Counter key={counter.id} {...counter} isInView={isInView} />
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-headline font-bold text-white mb-4">Case Studies</h3>
          <p className="text-neutral-smoke max-w-2xl mx-auto">
            See how our clients have transformed their businesses with our AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="glass-card p-6 rounded-lg cursor-pointer hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
              onClick={() => setActiveStudy(study)}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs bg-primary-gradient-start text-white mb-4">
                {study.industry}
              </span>
              <h3 className="text-xl font-headline font-bold text-white mb-2">{study.title}</h3>
              <p className="text-accent mb-4">{study.company}</p>
              <p className="text-neutral-smoke line-clamp-3 mb-4">{study.challenge}</p>
              <div className="text-sm text-white font-semibold">Click to view full case study</div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal */}
        {activeStudy && (
          <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />
        )}
      </div>
    </section>
  );
};

export default ProofCounters;
