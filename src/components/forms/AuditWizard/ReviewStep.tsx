import React from 'react';
import { motion } from 'framer-motion';
import FormField from '../ui/FormField';
import SubmitButton from '../ui/SubmitButton';
import { useFormContext } from './FormContext';
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

// Helper function to format service names for display
const formatServiceName = (serviceId: string): string => {
  const serviceMap: Record<string, string> = {
    'cx-ai': 'Customer Experience AI',
    'workflow': 'Workflow Automations',
    'product-studio': 'Product Studio',
    'deep-tech': 'Deep-Tech Agents',
    'strategy': 'Strategy & Consultation'
  };
  
  return serviceMap[serviceId] || serviceId;
};

// Helper function to format budget range for display
const formatBudgetRange = (budgetId: string): string => {
  const budgetMap: Record<string, string> = {
    'under-10k': 'Under $10,000',
    '10k-30k': '$10,000 - $30,000',
    '30k-100k': '$30,000 - $100,000',
    'over-100k': 'Over $100,000',
    'not-sure': 'Not specified yet'
  };
  
  return budgetMap[budgetId] || budgetId;
};

const ReviewStep: React.FC<{ onBack: () => void; onSubmit: () => void }> = ({ onBack, onSubmit }) => {
  const { formData, updateFormData, isSubmitting } = useFormContext();

  const handleSubmit = () => {
    // Add any additional hidden fields or tracking info
    const now = new Date();
    const wizardId = `audit-${now.getTime()}`;
    
    updateFormData('wizardId', wizardId);
    
    // Capture UTM parameters if available
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const utmCampaign = urlParams.get('utm_campaign');
      
      if (utmSource) updateFormData('utmSource', utmSource);
      if (utmCampaign) updateFormData('utmCampaign', utmCampaign);
      
      // Capture page variant if applicable
      updateFormData('pageVariant', 'standard'); // Or dynamically determine
    }
    
    onSubmit();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-headline font-bold text-white mb-6">
        Review Your Information
      </h2>

      <div className="glass-card rounded-lg p-6 mb-6">
        <h3 className="text-lg font-headline font-semibold text-white mb-4">
          Contact Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400">Full Name</p>
            <p className="text-white">{formData.fullName}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">Work Email</p>
            <p className="text-white">{formData.workEmail}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">Company</p>
            <p className="text-white">{formData.company}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">Role</p>
            <p className="text-white">{formData.role}</p>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-lg p-6 mb-6">
        <h3 className="text-lg font-headline font-semibold text-white mb-4">
          Project Details
        </h3>
        
        <div className="mb-4">
          <p className="text-sm text-gray-400">Interested Services</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {formData.interestedServices.map((service: string) => (
              <span 
                key={service}
                className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm text-white"
              >
                {formatServiceName(service)}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-400">Project Goal</p>
          <p className="text-white">{formData.projectGoal}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400">Budget Range</p>
            <p className="text-white">{formatBudgetRange(formData.budgetRange)}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">Ideal Start Date</p>
            <p className="text-white">
              {formData.startDate 
                ? new Date(formData.startDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) 
                : 'Not specified'}
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">NDA Required</p>
            <p className="text-white">{formData.ndaNeeded ? 'Yes' : 'No'}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">Brief/RFP Attached</p>
            <p className="text-white">
              {formData.briefFile 
                ? (typeof formData.briefFile === 'string' 
                  ? formData.briefFile 
                  : (formData.briefFile as File).name)
                : 'None'}
            </p>
          </div>
        </div>
        
        {formData.additionalNotes && (
          <div className="mt-4">
            <p className="text-sm text-gray-400">Additional Notes</p>
            <p className="text-white whitespace-pre-wrap">{formData.additionalNotes}</p>
          </div>
        )}
      </div>

      <div className="mb-6">
        <FormField
          id="subscribeToInsights"
          label="Consent"
          type="checkbox"
          value={formData.subscribeToInsights}
          onChange={(value) => updateFormData('subscribeToInsights', value as boolean)}
          placeholder="Subscribe to receive AI insights and updates from Reignit Inc."
        />
        
        <p className="text-xs text-gray-400 mt-2">
          By submitting this form, you agree to our <a href="/privacy" className="text-accent underline">Privacy Policy</a> and 
          <a href="/terms" className="text-accent underline"> Terms of Service</a>. We'll process your information in accordance with these terms.
        </p>
      </div>

      <div className="mt-8 flex justify-between">
        <SubmitButton
          label="Back"
          onClick={onBack}
          variant="outline"
          icon={<ArrowLeftIcon className="h-4 w-4" />}
          disabled={isSubmitting}
        />
        <SubmitButton
          label="Submit Audit Request"
          onClick={handleSubmit}
          isLoading={isSubmitting}
          icon={<CheckCircleIcon className="h-4 w-4" />}
          type="submit"
        />
      </div>
    </motion.div>
  );
};

export default ReviewStep;
