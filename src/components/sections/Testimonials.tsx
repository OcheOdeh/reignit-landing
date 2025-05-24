import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatarUrl: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Reignit's AI solutions transformed our customer service operations. We've seen a 40% reduction in response times and a significant boost in customer satisfaction scores.",
    author: "Alex Chen",
    position: "CTO",
    company: "TechVision Inc.",
    avatarUrl: "/images/testimonials/alex.jpg"
  },
  {
    id: 2,
    quote: "The workflow automation platform they built for us has eliminated countless manual processes. Our team can now focus on strategic initiatives instead of repetitive tasks.",
    author: "Samantha Rodriguez",
    position: "Operations Director",
    company: "Global Logistics",
    avatarUrl: "/images/testimonials/samantha.jpg"
  },
  {
    id: 3,
    quote: "Working with Reignit was seamless from start to finish. Their team took the time to understand our unique challenges and delivered a solution that exceeded our expectations.",
    author: "Michael Johnson",
    position: "CEO",
    company: "Innovate Health",
    avatarUrl: "/images/testimonials/michael.jpg"
  },
  {
    id: 4,
    quote: "The ROI on our AI implementation has been remarkable. We've seen a 300% return in just the first year, with continued improvements as the system learns.",
    author: "Priya Patel",
    position: "CFO",
    company: "FinanceStream",
    avatarUrl: "/images/testimonials/priya.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Auto-rotate testimonials
  useEffect(() => {
    if (isInView && !isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isInView, isPaused]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    // Reset the interval when manually changing
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-dark-canvas to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-headline font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What Our <span className="text-accent">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-smoke max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from businesses that have transformed with our AI solutions
          </motion.p>
        </div>

        <div 
          ref={ref} 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="h-[400px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="absolute inset-0 flex flex-col items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-card p-8 rounded-lg shadow-xl mb-8 relative">
                  <svg className="absolute top-0 left-10 transform -translate-y-1/2 text-primary-gradient-start w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10,8H6a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4v6H6a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V10A2,2,0,0,0,10,8Z"></path>
                    <path d="M26,8H22a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4v6H22a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V10A2,2,0,0,0,26,8Z"></path>
                  </svg>
                  
                  <blockquote className="text-xl text-neutral-smoke italic mt-6 mb-8">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-4 relative">
                    {/* Placeholder for avatar - in production, use real images */}
                    <div className="absolute inset-0 flex items-center justify-center bg-primary-gradient-start text-white text-xl font-bold">
                      {testimonials[activeIndex].author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-headline font-semibold">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-accent">
                      {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-accent scale-125' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
