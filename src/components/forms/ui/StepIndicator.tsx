import React from 'react';
import { motion } from 'framer-motion';

type StepIndicatorProps = {
  totalSteps: number;
  currentStep: number;
  labels?: string[];
};

const StepIndicator: React.FC<StepIndicatorProps> = ({ 
  totalSteps, 
  currentStep, 
  labels = ['Contact', 'Project Scope', 'Review & Consent'] 
}) => {
  const percentage = Math.round(((currentStep + 1) / totalSteps) * 100);
  
  return (
    <div className="mb-8">
      {/* Percentage indicator */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">Progress</span>
        <span className="text-sm font-medium text-accent">{percentage}%</span>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Step dots */}
      <div className="flex justify-between mt-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index < currentStep 
                  ? 'bg-primary-gradient-end' 
                  : index === currentStep 
                    ? 'bg-accent' 
                    : 'bg-gray-700'
              }`}
            />
            {labels && (
              <span 
                className={`text-xs mt-2 transition-all duration-300 ${
                  index === currentStep ? 'text-white font-medium' : 'text-gray-400'
                }`}
              >
                {labels[index]}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
