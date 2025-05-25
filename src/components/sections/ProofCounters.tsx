import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type CounterItem = {
  id: string;
  value: number;
  suffix: string;
  label: string;
  duration: number;
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

const Counter: React.FC<CounterItem & { isInView: boolean }> = ({ value, suffix, label, duration, isInView }) => {
  const [count, setCount] = useState(0);

  // Animate the counter when in view
  if (isInView && count < value) {
    setTimeout(() => {
      setCount((prev: number) => {
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



const ProofCounters: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-dark-canvas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
            Proven Results
          </h2>
          <p className="text-neutral-smoke max-w-2xl mx-auto">
            Our AI solutions deliver measurable impact across industries
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {counters.map((counter) => (
            <Counter key={counter.id} {...counter} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofCounters;
