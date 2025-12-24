"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CampaignHeroProps {
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage?: string;
}

const CampaignHero: React.FC<CampaignHeroProps> = ({
    headline,
    subheadline,
    ctaText,
    ctaLink,
    backgroundImage = '/images/hero-bg.jpg' // Default placeholder if needed
}) => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-dark-bg/80 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-bg z-10"></div>
                {/* Placeholder for actual image/video background */}
                <div className="w-full h-full bg-gradient-to-br from-primary-gradient-start/20 to-primary-gradient-end/20 animate-pulse-slow"></div>
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-sm font-medium text-accent">
                        Limited Time Offer
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-headline text-white mb-6 leading-tight">
                        {headline}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href={ctaLink}
                            className="cta-primary text-lg px-8 py-4 w-full sm:w-auto min-w-[200px] text-center"
                        >
                            {ctaText}
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-gray-500">
                        No credit card required for demo call • 100% Satisfaction Guarantee
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CampaignHero;
