import React from 'react';
import { motion } from 'framer-motion';

type SubmitButtonProps = {
  label: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: React.ReactNode;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  onClick,
  isLoading = false,
  disabled = false,
  type = 'button',
  variant = 'primary',
  className = '',
  icon,
}) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-accent text-white hover:bg-accent/90';
      case 'secondary':
        return 'bg-primary-gradient-start text-white hover:bg-primary-gradient-start/90';
      case 'outline':
        return 'bg-transparent border border-white text-white hover:bg-white/10';
      default:
        return 'bg-accent text-white hover:bg-accent/90';
    }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      whileTap={{ scale: 0.98 }}
      className={`
        ${getButtonStyles()}
        font-headline font-semibold uppercase text-sm px-6 py-3 rounded-full
        transition-all flex items-center justify-center
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}
        ${className}
      `}
    >
      {isLoading ? (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          ></circle>
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {label}
    </motion.button>
  );
};

export default SubmitButton;
