import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  background?: 'light' | 'dark';
}

/**
 * Logo component that displays the Reignit Inc logo
 * Can be configured with different sizes and variants
 */
const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  size = 'md',
  showText = true,
  background = 'dark',
}) => {
  // Size mapping for the logo
  const sizeMap = {
    sm: { width: 32, height: 32, textClass: 'text-lg' },
    md: { width: 40, height: 40, textClass: 'text-2xl' },
    lg: { width: 60, height: 60, textClass: 'text-3xl' },
  };

  const { width, height, textClass } = sizeMap[size];
  
  // Animation variants for hover effect
  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      whileHover="hover"
      className="inline-flex"
    >
      <Link href="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
        <motion.div 
          className="relative"
          variants={logoVariants}
        >
          <Image
            src={background === 'light' ? "/images/logo.png" : "/images/logo-dark.png"}
            alt="Reignit Inc Logo"
            width={width}
            height={height}
            priority
            className="drop-shadow-md"
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
        
        {showText && (
          <span className={`font-display font-bold ${textClass} ${variant === 'white' ? 'text-white' : 'text-white'}`}>
            Reignit<span className="text-accent">Inc</span>
            {size === 'lg' && <span className="text-white">.</span>}
          </span>
        )}
      </Link>
    </motion.div>
  );
};

export default Logo;
