import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

type FormFieldProps = {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'date' | 'multiselect' | 'toggle' | 'tel';
  value: any;
  onChange: (value: any) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string; color?: string }>;
  helperText?: string;
  maxLength?: number;
  autoFocus?: boolean;
  disabled?: boolean;
  className?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
};

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  options = [],
  helperText,
  maxLength,
  autoFocus = false,
  disabled = false,
  className = '',
  onKeyDown,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [characterCount, setCharacterCount] = useState(
    type === 'textarea' && typeof value === 'string' ? value.length : 0
  );

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const newValue = e.target.type === 'checkbox' 
      ? (e.target as HTMLInputElement).checked 
      : e.target.value;
    
    if (type === 'textarea' && typeof newValue === 'string') {
      setCharacterCount(newValue.length);
    }
    
    onChange(newValue);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  const handleMultiSelectChange = (selectedValue: string) => {
    if (Array.isArray(value)) {
      const newValue = value.includes(selectedValue)
        ? value.filter(v => v !== selectedValue)
        : [...value, selectedValue];
      onChange(newValue);
    }
  };

  const handleToggleChange = () => {
    onChange(!value);
  };

  const isValid = !error && (
    (type === 'text' && typeof value === 'string' && value.trim().length > 0) ||
    (type === 'email' && typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) ||
    (type === 'tel' && typeof value === 'string') || // Phone is optional, so any string is valid unless there's an error
    (type === 'textarea' && typeof value === 'string' && value.trim().length > 0) ||
    (type === 'select' && value) ||
    (type === 'checkbox' && typeof value === 'boolean') ||
    (type === 'radio' && value) ||
    (type === 'file' && value) ||
    (type === 'date' && value) ||
    (type === 'multiselect' && Array.isArray(value) && value.length > 0) ||
    (type === 'toggle' && typeof value === 'boolean')
  );

  // Common props for input elements
  const commonProps = {
    id,
    name: id,
    disabled,
    autoFocus,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown,
    'aria-describedby': `${id}-helper`,
    className: `
      w-full bg-gray-800 border rounded-lg px-4 py-3 text-white transition-all duration-200
      ${error ? 'border-red-500' : isFocused ? 'border-primary-gradient-end' : 'border-gray-700'}
      ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
      ${className}
    `,
  };

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <label htmlFor={id} className="block text-sm font-medium text-gray-300">
          {label} {required && <span className="text-accent">*</span>}
        </label>
        
        {type === 'textarea' && maxLength && (
          <span className="text-xs text-gray-400">
            {characterCount}/{maxLength}
          </span>
        )}
      </div>

      {type === 'text' && (
        <input
          type="text"
          value={value as string}
          onChange={handleChange}
          placeholder={placeholder}
          {...commonProps}
        />
      )}

      {type === 'email' && (
        <input
          type="email"
          value={value as string}
          onChange={handleChange}
          placeholder={placeholder}
          {...commonProps}
        />
      )}

      {type === 'tel' && (
        <input
          type="tel"
          value={value as string}
          onChange={handleChange}
          placeholder={placeholder}
          pattern="[+][0-9]{1,4}[ ][0-9]{6,14}"
          {...commonProps}
        />
      )}

      {type === 'textarea' && (
        <textarea
          value={value as string}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={3}
          {...commonProps}
          style={{ resize: 'vertical', minHeight: '80px' }}
        />
      )}

      {type === 'select' && (
        <select
          value={value as string}
          onChange={handleChange}
          {...commonProps}
        >
          <option value="" disabled>
            {placeholder || 'Select an option'}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {type === 'checkbox' && (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={value as boolean}
            onChange={handleChange}
            {...commonProps}
            className="h-5 w-5 rounded border-gray-700 bg-gray-800 text-accent focus:ring-accent"
          />
          <span className="ml-2 text-sm text-gray-300">{placeholder}</span>
        </div>
      )}

      {type === 'radio' && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {options.map((option) => (
            <div
              key={option.value}
              className={`
                border rounded-lg p-3 cursor-pointer transition-all
                ${value === option.value 
                  ? 'border-accent bg-gray-700' 
                  : 'border-gray-700 hover:border-gray-500'}
              `}
              onClick={() => onChange(option.value)}
            >
              <div className="flex items-center">
                <div className={`
                  w-4 h-4 rounded-full border mr-2 flex items-center justify-center
                  ${value === option.value ? 'border-accent' : 'border-gray-500'}
                `}>
                  {value === option.value && (
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  )}
                </div>
                <span className="text-sm text-gray-300">{option.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {type === 'file' && (
        <div className="relative">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.docx"
            {...commonProps}
            className="hidden"
          />
          <div 
            onClick={() => {
              if (!disabled) {
                document.getElementById(id)?.click();
              }
            }}
            className={`
              w-full bg-gray-800 border border-dashed rounded-lg px-4 py-6 text-center cursor-pointer
              ${error ? 'border-red-500' : isFocused ? 'border-primary-gradient-end' : 'border-gray-700'}
              ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:border-gray-500'}
            `}
          >
            {value ? (
              <div className="flex items-center justify-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-300">
                  {typeof value === 'string' ? value : (value as File).name}
                </span>
              </div>
            ) : (
              <div>
                <p className="text-sm text-gray-400">{placeholder || 'Click to upload file'}</p>
                <p className="text-xs text-gray-500 mt-1">PDF or DOCX, max 10MB</p>
              </div>
            )}
          </div>
        </div>
      )}

      {type === 'multiselect' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {options.map((option) => {
            const isSelected = Array.isArray(value) && value.includes(option.value);
            const bgColor = option.color || 'bg-gray-700';
            
            return (
              <div
                key={option.value}
                className={`
                  border rounded-lg p-3 cursor-pointer transition-all
                  ${isSelected 
                    ? `border-accent ${bgColor} bg-opacity-20` 
                    : 'border-gray-700 hover:border-gray-500'}
                `}
                onClick={() => handleMultiSelectChange(option.value)}
              >
                <div className="flex items-center">
                  <div className={`
                    w-5 h-5 rounded border mr-2 flex items-center justify-center
                    ${isSelected ? 'border-accent bg-accent' : 'border-gray-500'}
                  `}>
                    {isSelected && (
                      <CheckIcon className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <span className="text-sm text-gray-300">{option.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {type === 'toggle' && (
        <div className="flex items-center">
          <button
            type="button"
            role="switch"
            aria-checked={value as boolean}
            onClick={handleToggleChange}
            className={`
              relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none
              ${value ? 'bg-accent' : 'bg-gray-700'}
            `}
          >
            <span
              className={`
                inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                ${value ? 'translate-x-6' : 'translate-x-1'}
              `}
            />
          </button>
          <span className="ml-3 text-sm text-gray-300">{placeholder}</span>
        </div>
      )}

      {/* Validation indicator */}
      {isValid && !error && value && type !== 'checkbox' && type !== 'radio' && type !== 'multiselect' && type !== 'toggle' && (
        <div className="absolute right-3 top-9">
          <CheckIcon className="h-5 w-5 text-green-500" />
        </div>
      )}

      {/* Error or helper text */}
      {(error || helperText) && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1"
          id={`${id}-helper`}
        >
          {error ? (
            <div className="flex items-center text-red-500 text-xs">
              <ExclamationCircleIcon className="h-4 w-4 mr-1" />
              <span>{error}</span>
            </div>
          ) : (
            <p className="text-xs text-gray-400">{helperText}</p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default FormField;
