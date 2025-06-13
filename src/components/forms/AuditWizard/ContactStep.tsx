import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FormField from '../ui/FormField';
import SubmitButton from '../ui/SubmitButton';
import { useFormContext } from './FormContext';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { countries } from '@/data/countries';
import { parsePhoneNumberFromString, isValidPhoneNumber } from 'libphonenumber-js';

const roles = [
  { value: 'product', label: 'Product' },
  { value: 'operations', label: 'Operations' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'founder', label: 'Founder' },
  { value: 'it', label: 'IT' },
  { value: 'other', label: 'Other' },
];

type ValidationErrors = {
  fullName?: string;
  workEmail?: string;
  phoneNumber?: string;
  company?: string;
  role?: string;
  country?: string;
};

const ContactStep: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { formData, updateFormData, validateStep } = useFormContext();
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isGmailWarning, setIsGmailWarning] = useState(false);

  // Auto-detect country based on IP (simulated here)
  useEffect(() => {
    if (!formData.country) {
      // In a real app, you'd use a geolocation service
      // For now, just default to US
      updateFormData('country', 'us');
    }
  }, [formData.country, updateFormData]);

  const validateEmail = (email: string) => {
    if (!email) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address';
    }
    
    // Check for consumer email domains
    const consumerDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
    const domain = email.split('@')[1];
    
    if (consumerDomains.includes(domain)) {
      setIsGmailWarning(true);
      // Not returning an error, just showing a warning
      return '';
    }
    
    setIsGmailWarning(false);
    return '';
  };

  const validatePhoneNumber = (phoneNumber: string, countryCode: string) => {
    if (!phoneNumber) return ''; // Phone is optional
    
    try {
      // Try to parse the phone number with the selected country code
      // Convert country code to a format libphonenumber-js accepts
      const phoneNumberObj = parsePhoneNumberFromString(phoneNumber, countryCode.toUpperCase() as any);
      
      // If we couldn't parse it, try with the phone number as is (might already have country code)
      if (!phoneNumberObj && !phoneNumber.startsWith('+')) {
        return 'Please enter a valid phone number with country code';
      }
      
      // Check if the phone number is valid for the selected country
      if (phoneNumberObj && !phoneNumberObj.isValid()) {
        return 'Please enter a valid phone number for the selected country';
      }
      
      return '';
    } catch (error) {
      return 'Please enter a valid phone number';
    }
  };

  const validateField = (field: keyof ValidationErrors, value: string) => {
    switch (field) {
      case 'fullName':
        return !value ? 'Name is required' : value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'workEmail':
        return validateEmail(value);
      case 'phoneNumber':
        return validatePhoneNumber(value, formData.country);
      case 'company':
        return ''; // Company is no longer required
      case 'role':
        return !value ? 'Please select your role' : '';
      case 'country':
        return !value ? 'Please select your country' : '';
      default:
        return '';
    }
  };

  const handleChange = (field: keyof ValidationErrors, value: string) => {
    updateFormData(field as any, value);
    
    // Validate the field
    const error = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  const handleNext = () => {
    // Validate all fields
    const newErrors: ValidationErrors = {
      fullName: validateField('fullName', formData.fullName),
      workEmail: validateField('workEmail', formData.workEmail),
      phoneNumber: validateField('phoneNumber', formData.phoneNumber || ''),
      company: '', // Company is no longer required
      role: validateField('role', formData.role),
      country: validateField('country', formData.country),
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (!hasErrors && validateStep(0)) {
      onNext();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNext();
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
        Tell us about yourself
      </h2>

      <div className="space-y-4">
        <FormField
          id="fullName"
          label="Full Name"
          type="text"
          value={formData.fullName}
          onChange={(value) => handleChange('fullName', value as string)}
          error={errors.fullName}
          required
          placeholder="Your full name"
          autoFocus
          onKeyDown={handleKeyDown}
        />

        <FormField
          id="workEmail"
          label="Email"
          type="email"
          value={formData.workEmail}
          onChange={(value) => handleChange('workEmail', value as string)}
          error={errors.workEmail}
          required
          placeholder="your.name@company.com"
          onKeyDown={handleKeyDown}
          helperText={isGmailWarning ? "Please use your work email if possible" : undefined}
        />

        <FormField
          id="phoneNumber"
          label="Phone Number"
          type="tel"
          value={formData.phoneNumber}
          onChange={(value) => handleChange('phoneNumber', value as string)}
          error={errors.phoneNumber}
          placeholder={`+${formData.country === 'us' ? '1' : formData.country === 'gb' ? '44' : ''} phone number`}
          onKeyDown={handleKeyDown}
          helperText="Include country code (e.g., +1 for US, +44 for UK)"
        />

        <FormField
          id="company"
          label="Company / Organization"
          type="text"
          value={formData.company}
          onChange={(value) => handleChange('company', value as string)}
          error={errors.company}
          placeholder="Your company name"
          onKeyDown={handleKeyDown}
          helperText="We'll use this to personalize your audit"
        />

        <FormField
          id="role"
          label="Role / Title"
          type="select"
          value={formData.role}
          onChange={(value) => handleChange('role', value as string)}
          error={errors.role}
          required
          options={roles}
          onKeyDown={handleKeyDown}
        />

        <FormField
          id="country"
          label="Country / Region"
          type="select"
          value={formData.country}
          onChange={(value) => handleChange('country', value as string)}
          error={errors.country}
          required
          options={countries}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <SubmitButton
          label="Next: Project Details"
          onClick={handleNext}
          icon={<ArrowRightIcon className="h-4 w-4" />}
        />
      </div>
    </motion.div>
  );
};

export default ContactStep;
