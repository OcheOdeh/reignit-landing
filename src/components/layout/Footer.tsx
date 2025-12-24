import React, { useState } from 'react';
import Link from 'next/link';

import Logo from '../ui/Logo';

const Footer: React.FC = () => {
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
                <Link href="/agency" className="text-gray-400 hover:text-accent transition-colors">
                  Agency
                </Link>
              </li>
              <li>
                <Link href="/toolkit" className="text-gray-400 hover:text-accent transition-colors">
                  Toolkit
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-accent transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-headline font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-semibold mb-1">Visit Us</span>
                5830 E 2nd street,<br />
                Casper, Wyoming
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-semibold mb-1">Contact</span>
                <a href="mailto:sales@reignitinc.com" className="hover:text-accent transition-colors block">sales@reignitinc.com</a>
                <a href="tel:+13395655737" className="hover:text-accent transition-colors block">+1 (339) 565-5737</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-headline font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy-policy" className="text-gray-400 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              {/* <li>
                <Link href="/legal/terms-of-service" className="text-gray-400 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li> */}
              {/* <li>
                <Link href="/legal/cookie-policy" className="text-gray-400 hover:text-accent transition-colors">
                  Cookie Policy
                </Link>
              </li> */}
            </ul>
          </div>
        </div >

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500"> {new Date().getFullYear()} Reignit Inc. All rights reserved.</p>

        </div>
      </div >
    </footer >
  );
};

export default Footer;
