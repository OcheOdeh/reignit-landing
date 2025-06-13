import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FormField from '../ui/FormField';
import SubmitButton from '../ui/SubmitButton';
import { useFormContext } from './FormContext';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type ValidationErrors = {
  interestedServices?: string;
  projectGoal?: string;
  budgetRange?: string;
  additionalNotes?: string;
  briefFile?: string;
};

const serviceOptions = [
  { 
    value: 'cx-ai', 
    label: 'Customer Experience AI (AI Chatbots/Conversational AI Dev/Voice Agents)',
    color: 'bg-blue-600'
  },
  { 
    value: 'workflow', 
    label: 'Workflow Automations & Process Mining',
    color: 'bg-green-600'
  },
  { 
    value: 'product-studio', 
    label: 'Product Studio (Graphic Design/MicroSaaS/AI Academy/Games)',
    color: 'bg-purple-600'
  },
  { 
    value: 'deep-tech', 
    label: 'Deep-Tech Agents & Model Tuning',
    color: 'bg-red-600'
  },
  { 
    value: 'strategy', 
    label: 'Strategy & AI Consultation',
    color: 'bg-yellow-600'
  }
];

const budgetOptions = [
  { value: 'under-10k', label: '< $10k' },
  { value: '10k-30k', label: '$10-30k' },
  { value: '30k-100k', label: '$30-100k' },
  { value: 'over-100k', label: '$100k+' },
  { value: 'not-sure', label: 'Not sure yet' }
];

const ProjectScopeStep: React.FC<{ onNext: () => void; onBack: () => void }> = ({ onNext, onBack }) => {
  const { formData, updateFormData, validateStep } = useFormContext();
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Use current date as minimum date
  const minDate = new Date();

  const validateField = (field: keyof ValidationErrors, value: any) => {
    switch (field) {
      case 'interestedServices':
        return !value || (Array.isArray(value) && value.length === 0) 
          ? 'Please select at least one service' 
          : '';
      case 'projectGoal':
        return !value ? 'Please briefly describe your project goal' : '';
      case 'budgetRange':
        return !value ? 'Please select a budget range' : '';
      case 'additionalNotes':
        return value && typeof value === 'string' && value.length > 500 
          ? 'Notes cannot exceed 500 characters' 
          : '';
      default:
        return '';
    }
  };

  const handleChange = (field: string, value: any) => {
    updateFormData(field as any, value);
    
    if (field in errors) {
      // Validate the field
      const error = validateField(field as keyof ValidationErrors, value);
      setErrors(prev => ({
        ...prev,
        [field]: error
      }));
    }
  };

  const handleNext = () => {
    // Validate required fields
    const newErrors: ValidationErrors = {
      interestedServices: validateField('interestedServices', formData.interestedServices),
      projectGoal: validateField('projectGoal', formData.projectGoal),
      budgetRange: validateField('budgetRange', formData.budgetRange),
      additionalNotes: validateField('additionalNotes', formData.additionalNotes),
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (!hasErrors && validateStep(1)) {
      onNext();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
    }
  };

  const handleFileChange = (file: File | null) => {
    // Check file size (max 10MB)
    if (file && file.size > 10 * 1024 * 1024) {
      setErrors(prev => ({
        ...prev,
        briefFile: 'File size must be less than 10MB'
      }));
      return;
    }
    
    updateFormData('briefFile', file);
    
    if ('briefFile' in errors) {
      setErrors(prev => ({
        ...prev,
        briefFile: ''
      }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-headline font-bold text-white mb-6">
        Tell us about your project
      </h2>

      <div className="space-y-6">
        <FormField
          id="interestedServices"
          label="Interested Services"
          type="multiselect"
          value={formData.interestedServices}
          onChange={(value) => handleChange('interestedServices', value)}
          error={errors.interestedServices}
          required
          options={serviceOptions}
          helperText="Select all that apply"
        />

        <FormField
          id="projectGoal"
          label="Project Goal (1 sentence)"
          type="textarea"
          value={formData.projectGoal}
          onChange={(value) => handleChange('projectGoal', value as string)}
          error={errors.projectGoal}
          required
          placeholder="e.g., Reduce support tickets by 40%"
          onKeyDown={handleKeyDown}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Ideal Start Date
            </label>
            <div className="relative">
              <DatePicker
                selected={formData.startDate}
                onChange={(date) => handleChange('startDate', date)}
                minDate={minDate}
                placeholderText="Select a date"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                calendarClassName="bg-gray-800 border border-gray-700 rounded-lg text-white"
                dateFormat="MMMM d, yyyy"
              />
            </div>
            {/* Helper text removed as requested */}
          </div>

          <div>
            <FormField
              id="budgetRange"
              label="Rough Budget Range"
              type="radio"
              value={formData.budgetRange}
              onChange={(value) => handleChange('budgetRange', value as string)}
              error={errors.budgetRange}
              required
              options={budgetOptions}
            />
          </div>
        </div>

        <FormField
          id="additionalNotes"
          label="Additional Notes / Links"
          type="textarea"
          value={formData.additionalNotes || ''}
          onChange={(value) => handleChange('additionalNotes', value as string)}
          error={errors.additionalNotes}
          placeholder="Any additional information that might help us understand your project better"
          maxLength={500}
          onKeyDown={handleKeyDown}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="ndaNeeded"
            label="NDA Needed?"
            type="toggle"
            value={formData.ndaNeeded}
            onChange={(value) => handleChange('ndaNeeded', value as boolean)}
            placeholder="We'll send a template NDA if selected"
          />

          <FormField
            id="briefFile"
            label="Attach Brief / RFP"
            type="file"
            value={formData.briefFile}
            onChange={handleFileChange}
            error={errors.briefFile}
            placeholder="Upload PDF or DOCX (max 10MB)"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <SubmitButton
          label="Back"
          onClick={onBack}
          variant="outline"
          icon={<ArrowLeftIcon className="h-4 w-4" />}
        />
        <SubmitButton
          label="Next: Review"
          onClick={handleNext}
          icon={<ArrowRightIcon className="h-4 w-4" />}
        />
      </div>
    </motion.div>
  );
};

export default ProjectScopeStep;
