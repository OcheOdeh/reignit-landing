import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AuditWizard from '../forms/AuditWizard';
import Logo from '../ui/Logo';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type NavbarProps = {
  isTransparent?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isTransparent = true }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isAuditWizardOpen, setIsAuditWizardOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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
          scrolled || !isTransparent || mobileMenuOpen
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
            background={scrolled || !isTransparent || mobileMenuOpen ? 'dark' : 'light'}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-white hover:text-accent transition-colors font-sans font-medium tracking-wide">
              Services
            </Link>
            <Link href="#how-it-works" className="text-white hover:text-accent transition-colors font-sans font-medium tracking-wide">
              How It Works
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex">
            <a href="#audit" className="bg-accent text-white font-display font-semibold uppercase text-sm px-6 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105" onClick={handleOpenAuditWizard}>
              Book Free AI Audit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-dark-canvas shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <Link 
                  href="#services" 
                  className="text-white hover:text-accent transition-colors py-3 border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="#how-it-works" 
                  className="text-white hover:text-accent transition-colors py-3 border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <div className="flex flex-col pt-3">
                  <a 
                    href="#audit" 
                    className="bg-accent text-white font-display font-semibold uppercase text-sm px-6 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105 text-center" 
                    onClick={(e) => {
                      handleOpenAuditWizard(e);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Book Free AI Audit
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
