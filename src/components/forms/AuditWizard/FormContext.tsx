import React, { createContext, useContext, useState, useEffect } from 'react';
import { z } from 'zod';

// Define the form schema using Zod for validation
export const auditFormSchema = z.object({
  // Step 1: Contact Information
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  workEmail: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  role: z.string().min(1, 'Please select or enter your role'),
  country: z.string().min(1, 'Please select your country'),
  
  // Step 2: Project Scope
  interestedServices: z.array(z.string()).min(1, 'Please select at least one service'),
  projectGoal: z.string().min(1, 'Please briefly describe your project goal'),
  startDate: z.date().optional(),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  additionalNotes: z.string().max(500, 'Notes cannot exceed 500 characters').optional(),
  ndaNeeded: z.boolean().default(false),
  briefFile: z.any().optional(),
  
  // Step 3: Consent
  subscribeToInsights: z.boolean().default(true),
  
  // Hidden fields
  utmSource: z.string().optional(),
  utmCampaign: z.string().optional(),
  pageVariant: z.string().optional(),
  wizardId: z.string().optional(),
});

// Create a type from the schema
export type AuditFormData = z.infer<typeof auditFormSchema>;

// Initial form data
const initialFormData: AuditFormData = {
  fullName: '',
  workEmail: '',
  company: '',
  role: '',
  country: '',
  interestedServices: [],
  projectGoal: '',
  startDate: undefined,
  budgetRange: '',
  additionalNotes: '',
  ndaNeeded: false,
  briefFile: null,
  subscribeToInsights: true,
  utmSource: '',
  utmCampaign: '',
  pageVariant: '',
  wizardId: '',
};

// Context type
type FormContextType = {
  formData: AuditFormData;
  updateFormData: (field: keyof AuditFormData, value: any) => void;
  updateMultipleFields: (fields: Partial<AuditFormData>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  validateStep: (step: number) => boolean;
  isSubmitting: boolean;
  setIsSubmitting: (isSubmitting: boolean) => void;
  isSubmitted: boolean;
  setIsSubmitted: (isSubmitted: boolean) => void;
  resetForm: () => void;
};

// Create the context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Form provider component
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get stored form data from localStorage if available
  const getStoredFormData = (): AuditFormData => {
    if (typeof window === 'undefined') return initialFormData;
    
    const storedData = localStorage.getItem('auditFormData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        // Convert string date back to Date object if it exists
        if (parsedData.startDate) {
          parsedData.startDate = new Date(parsedData.startDate);
        }
        return parsedData;
      } catch (error) {
        console.error('Error parsing stored form data:', error);
      }
    }
    return initialFormData;
  };

  const [formData, setFormData] = useState<AuditFormData>(getStoredFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auditFormData', JSON.stringify(formData));
    }
  }, [formData]);

  // Update a single form field
  const updateFormData = (field: keyof AuditFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Update multiple form fields at once
  const updateMultipleFields = (fields: Partial<AuditFormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  // Validate the current step
  const validateStep = (step: number): boolean => {
    try {
      if (step === 0) {
        // Validate Step 1 fields
        const { fullName, workEmail, company, role, country } = formData;
        const stepSchema = z.object({
          fullName: auditFormSchema.shape.fullName,
          workEmail: auditFormSchema.shape.workEmail,
          company: auditFormSchema.shape.company,
          role: auditFormSchema.shape.role,
          country: auditFormSchema.shape.country,
        });
        stepSchema.parse({ fullName, workEmail, company, role, country });
        return true;
      } else if (step === 1) {
        // Validate Step 2 fields
        const { interestedServices, projectGoal, budgetRange } = formData;
        const stepSchema = z.object({
          interestedServices: auditFormSchema.shape.interestedServices,
          projectGoal: auditFormSchema.shape.projectGoal,
          budgetRange: auditFormSchema.shape.budgetRange,
        });
        stepSchema.parse({ interestedServices, projectGoal, budgetRange });
        return true;
      }
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error.errors);
      }
      return false;
    }
  };

  // Reset the form to initial state
  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
    setIsSubmitting(false);
    setIsSubmitted(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auditFormData');
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        updateMultipleFields,
        currentStep,
        setCurrentStep,
        validateStep,
        isSubmitting,
        setIsSubmitting,
        isSubmitted,
        setIsSubmitted,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the form context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
