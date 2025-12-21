import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AuditWizard from '../forms/AuditWizard';
import Logo from '../ui/Logo';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TelegramModal from '../modals/TelegramModal';

type NavbarProps = {
  isTransparent?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isTransparent = true }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isAuditWizardOpen, setIsAuditWizardOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState<boolean>(false);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isTransparent || mobileMenuOpen
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
          <nav className="hidden lg:flex space-x-8">
            <Link href="/agency" className="text-white hover:text-accent transition-colors font-sans font-medium tracking-wide">
              Agency
            </Link>
            <Link href="/toolkit" className="text-white hover:text-accent transition-colors font-sans font-medium tracking-wide">
              Toolkit
            </Link>
            <Link href="/community" className="text-white hover:text-accent transition-colors font-sans font-medium tracking-wide">
              Community
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex">
            <button
              onClick={() => setIsTelegramModalOpen(true)}
              className="bg-[#0088cc] text-white p-2 rounded-full shadow-[0_0_15px_rgba(0,136,204,0.5)] hover:bg-[#0077b5] hover:scale-110 transition-all group"
              aria-label="Join Community"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="group-hover:animate-pulse">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none"
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
              className="lg:hidden bg-dark-canvas shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <Link
                  href="/agency"
                  className="text-white hover:text-accent transition-colors py-3 border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agency
                </Link>
                <Link
                  href="/toolkit"
                  className="text-white hover:text-accent transition-colors py-3 border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Toolkit
                </Link>
                <Link
                  href="/community"
                  className="text-white hover:text-accent transition-colors py-3 border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Community
                </Link>
                <div className="flex flex-col pt-3 items-center">
                  <button
                    onClick={() => {
                      setIsTelegramModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="bg-[#0088cc] text-white p-3 rounded-full shadow-[0_0_15px_rgba(0,136,204,0.5)] active:bg-[#0077b5] transition-all"
                    aria-label="Join Community"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </button>
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

      {/* Telegram Modal */}
      <TelegramModal isOpen={isTelegramModalOpen} onClose={() => setIsTelegramModalOpen(false)} />
    </>
  );
};

export default Navbar;
