"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CampaignCTAProps {
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaLink: string;
}

const CampaignCTA: React.FC<CampaignCTAProps> = ({ headline, subheadline, ctaText, ctaLink }) => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-gradient-start/20 to-primary-gradient-end/20"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-headline text-white mb-6">
                        {headline}
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        {subheadline}
                    </p>
                    <Link
                        href={ctaLink}
                        className="inline-block bg-white text-dark-bg font-bold text-lg px-10 py-5 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        {ctaText}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CampaignCTA;
