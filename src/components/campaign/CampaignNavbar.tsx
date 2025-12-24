"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

const CampaignNavbar = () => {
    return (
        <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-dark-bg/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex-shrink-0">
                    <Logo variant="default" size="sm" showText={true} background="dark" />
                </Link>

                <div className="flex items-center gap-6">
                    <a
                        href="https://t.me/reignitcommunity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-400 hover:text-accent transition-colors hidden md:block"
                    >
                        Community
                    </a>
                    <a
                        href="mailto:sales@reignitinc.com"
                        className="text-sm font-medium text-gray-400 hover:text-accent transition-colors hidden md:block"
                    >
                        Contact
                    </a>
                    <Link
                        href="#payment"
                        className="cta-primary text-sm px-4 py-2"
                    >
                        Get Access
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default CampaignNavbar;
