import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const CtaBanner: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-16 bg-dark-canvas relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary-gradient-start opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-primary-gradient-end opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-headline font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Ready to <span className="text-neon-green">Secure</span> Your Future?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't get left behind. Join the AI Vanguard and build your faceless empire today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/agency" className="cta-primary text-base px-8 py-4 bg-neon-green text-black hover:bg-white hover:text-black border-none">
              Start My Agency Plan
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
