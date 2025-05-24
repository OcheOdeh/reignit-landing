import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SubmitButton from '../ui/SubmitButton';
import { useFormContext } from './FormContext';
import { CheckCircleIcon, DocumentArrowDownIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

// Mock case study metrics for the carousel
const caseMetrics = [
  { metric: '85%', description: 'Reduction in customer response time' },
  { metric: '42%', description: 'Increase in customer satisfaction' },
  { metric: '$1.2M', description: 'Annual cost savings' },
  { metric: '99.7%', description: 'Document classification accuracy' },
  { metric: '60%', description: 'Reduction in manual tasks' }
];

const SuccessScreen: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  const { formData } = useFormContext();
  const [activeMetricIndex, setActiveMetricIndex] = useState(0);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  // Auto-rotate through case metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetricIndex((prev) => (prev + 1) % caseMetrics.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Lazy-load Calendly
  const loadCalendly = () => {
    if (!calendlyLoaded) {
      // In a real implementation, you would load the Calendly script here
      // For now, we'll just set the state to simulate loading
      setCalendlyLoaded(true);
    }
  };

  // Mock function to download PDF
  const handleDownloadPDF = () => {
    // In a real implementation, this would generate and download a PDF
    alert('In a real implementation, this would download a preliminary PDF scope document.');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <div className="mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircleIcon className="h-12 w-12 text-white" />
        </motion.div>
        
        <h2 className="text-3xl font-headline font-bold text-white mb-4">
          You're booked for an AI Audit!
        </h2>
        
        <p className="text-xl text-neutral-smoke max-w-2xl mx-auto">
          Our assistant will email your tailored scope in &lt; 10 min. Prefer a live call? Pick a slot 👇
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="glass-card rounded-lg p-6"
        >
          <DocumentArrowDownIcon className="h-10 w-10 text-accent mx-auto mb-4" />
          <h3 className="text-lg font-headline font-semibold text-white mb-2">
            Preliminary Scope
          </h3>
          <p className="text-neutral-smoke mb-4">
            Download an initial assessment based on your information
          </p>
          <SubmitButton
            label="Download PDF"
            onClick={handleDownloadPDF}
            variant="outline"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="glass-card rounded-lg p-6"
        >
          <CalendarDaysIcon className="h-10 w-10 text-accent mx-auto mb-4" />
          <h3 className="text-lg font-headline font-semibold text-white mb-2">
            Discovery Call
          </h3>
          <p className="text-neutral-smoke mb-4">
            Schedule a 30-minute call with our AI solutions team
          </p>
          <SubmitButton
            label="Schedule Call"
            onClick={loadCalendly}
            variant="primary"
          />
        </motion.div>
      </div>

      {/* Calendly embed placeholder */}
      {calendlyLoaded && (
        <div className="mb-12 glass-card rounded-lg p-6">
          <div className="h-[400px] flex items-center justify-center">
            <p className="text-neutral-smoke">
              In a real implementation, the Calendly scheduling widget would appear here.
            </p>
          </div>
        </div>
      )}

      {/* Case metrics carousel */}
      <div className="max-w-3xl mx-auto mb-8">
        <h3 className="text-lg font-headline font-semibold text-white mb-6">
          What our clients achieve
        </h3>
        
        <div className="relative h-32">
          {caseMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: index === activeMetricIndex ? 1 : 0,
                y: index === activeMetricIndex ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{ pointerEvents: index === activeMetricIndex ? 'auto' : 'none' }}
            >
              <div className="text-4xl font-headline font-bold text-accent mb-2">
                {metric.metric}
              </div>
              <div className="text-neutral-smoke">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-2 mt-4">
          {caseMetrics.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeMetricIndex ? 'bg-accent scale-125' : 'bg-gray-600'
              }`}
              onClick={() => setActiveMetricIndex(index)}
              aria-label={`View metric ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-neutral-smoke mb-4">
          Thank you for your interest in Reignit Inc's AI solutions.
        </p>
        
        <SubmitButton
          label="Submit Another Request"
          onClick={onReset}
          variant="secondary"
        />
      </div>
    </motion.div>
  );
};

export default SuccessScreen;
