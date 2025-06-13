import React, { useState } from 'react';
import Link from 'next/link';
import ChatWidget from '../chat/ChatWidget';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer className="bg-dark-canvas py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo 
              variant="default" 
              size="md" 
              showText={true}
              background="dark"
            />
            <p className="mt-4 text-gray-400">
              Transforming businesses with AI-powered solutions that drive growth and efficiency.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-headline font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#cx-ai" className="text-gray-400 hover:text-accent transition-colors">
                  CX AI
                </Link>
              </li>
              <li>
                <Link href="#workflow-ai" className="text-gray-400 hover:text-accent transition-colors">
                  Workflow AI
                </Link>
              </li>
              <li>
                <Link href="#product-studio" className="text-gray-400 hover:text-accent transition-colors">
                  Product Studio
                </Link>
              </li>
              <li>
                <Link href="#deep-ai" className="text-gray-400 hover:text-accent transition-colors">
                  Deep AI
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-headline font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-headline font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-accent transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500"> {new Date().getFullYear()} Reignit Inc. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <button 
              onClick={() => setIsChatOpen(true)} 
              className="flex items-center space-x-2 bg-primary-gradient-start hover:bg-primary-gradient-end text-white px-4 py-2 rounded-full transition-all"
              aria-label="Open chat"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              <span>Chat with AI</span>
            </button>
          </div>
        </div>
      </div>
          {isChatOpen && <ChatWidget onClose={() => setIsChatOpen(false)} />}
    </footer>
  );
};

export default Footer;
