import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AuditWizard from '../forms/AuditWizard';
import Logo from '../ui/Logo';

type NavbarProps = {
  isTransparent?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isTransparent = true }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isAuditWizardOpen, setIsAuditWizardOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenAuditWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAuditWizardOpen(true);
  };

  const handleCloseAuditWizard = () => {
    setIsAuditWizardOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isTransparent
            ? 'bg-dark-canvas shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo 
            variant="default" 
            size={scrolled ? "sm" : "md"} 
            showText={true} 
          />

          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-white hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="#how-it-works" className="text-white hover:text-accent transition-colors">
              How It Works
            </Link>
          </nav>

          <div className="flex space-x-4">
            <Link href="#demo" className="cta-secondary">
              Watch Demo
            </Link>
            <a href="#audit" className="cta-primary" onClick={handleOpenAuditWizard}>
              Book Free AI Audit
            </a>
          </div>
        </div>
      </motion.header>

      {/* Audit Wizard Modal */}
      <AuditWizard 
        isOpen={isAuditWizardOpen} 
        onClose={handleCloseAuditWizard} 
        embedded={false}
      />
    </>
  );
};

export default Navbar;
