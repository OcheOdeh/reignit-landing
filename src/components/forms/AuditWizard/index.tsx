import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useSwipeable } from 'react-swipeable';
import StepIndicator from '../ui/StepIndicator';
import ContactStep from './ContactStep';
import ProjectScopeStep from './ProjectScopeStep';
import ReviewStep from './ReviewStep';
import SuccessScreen from './SuccessScreen';
import { FormProvider, useFormContext } from './FormContext';

type AuditWizardProps = {
  isOpen: boolean;
  onClose: () => void;
  embedded?: boolean;
};

// Inner component that uses the form context
const AuditWizardInner: React.FC<AuditWizardProps> = ({ 
  isOpen, 
  onClose,
  embedded = false 
}) => {
  const { 
    formData,
    currentStep, 
    setCurrentStep, 
    isSubmitting, 
    setIsSubmitting, 
    isSubmitted, 
    setIsSubmitted,
    resetForm
  } = useFormContext();

  // Handle swipe gestures for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentStep < 2 && !isSubmitting && !isSubmitted) {
        setCurrentStep(currentStep + 1);
      }
    },
    onSwipedRight: () => {
      if (currentStep > 0 && !isSubmitting && !isSubmitted) {
        setCurrentStep(currentStep - 1);
      }
    },
    delta: 10,           // Min distance required before swipe action is triggered
    swipeDuration: 500,  // Max time allowed for swipe motion
    touchEventOptions: { passive: false } // Options for the touch listeners
  });

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !embedded) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose, embedded]);

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-audit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to send audit email:', errorData.error);
        alert('There was an error submitting your audit request. Please try again or contact us directly.');
        // Stop execution if the email failed
        return;
      }
      
      // On successful submission, move to the success screen
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An unexpected error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    resetForm();
    onClose();
  };

  // Determine content based on current step
  const renderStepContent = () => {
    if (isSubmitted) {
      return <SuccessScreen onReset={handleReset} />;
    }

    switch (currentStep) {
      case 0:
        return <ContactStep onNext={() => setCurrentStep(1)} />;
      case 1:
        return (
          <ProjectScopeStep 
            onNext={() => setCurrentStep(2)} 
            onBack={() => setCurrentStep(0)} 
          />
        );
      case 2:
        return (
          <ReviewStep 
            onBack={() => setCurrentStep(1)} 
            onSubmit={handleSubmit} 
          />
        );
      default:
        return null;
    }
  };

  // Modal or embedded styles
  const containerStyles = embedded
    ? 'w-full max-w-4xl mx-auto'
    : 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75';

  const contentStyles = embedded
    ? 'bg-dark-canvas rounded-lg p-8 w-full'
    : 'bg-dark-canvas rounded-lg p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={containerStyles}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className={contentStyles}
            {...swipeHandlers}
          >
            {/* Close button (only for modal version) */}
            {!embedded && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            )}

            {/* Step indicator (not shown on success screen) */}
            {!isSubmitted && (
              <StepIndicator 
                totalSteps={3} 
                currentStep={currentStep} 
              />
            )}

            {/* Step content */}
            {renderStepContent()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Wrapper component that provides the form context
const AuditWizard: React.FC<AuditWizardProps> = (props) => {
  return (
    <FormProvider>
      <AuditWizardInner {...props} />
    </FormProvider>
  );
};

export default AuditWizard;
