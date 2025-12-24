"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import CommunityForm from '@/components/forms/CommunityForm';

export default function CommunityPage() {
    // State moved to CommunityForm component

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                    {/* Left Column: Benefits */}
                    <motion.div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                            <span className="text-neon-green">Secure Your Future.</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8">
                            Everything you need to move forward with AI
                        </p>
                        <ul className="space-y-6">
                            {[
                                "Learn proven methods to earn online",
                                "10X your productivity with AI",
                                "Access to US LLC and company registration for international payments (non US residents)",
                                "US and UK TikTok Accounts for monetization (non US residents)",
                                "Investment opportunities in vetted AI Startups"
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    className="flex items-start gap-4 text-gray-200 text-lg"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 + 0.3 }}
                                >
                                    <div className="w-6 h-6 rounded-full bg-neon-purple/20 flex items-center justify-center shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>


                    {/* Right Column: Lead Magnet Form */}
                    <motion.div
                        className="bg-cyber-card p-8 rounded-2xl border border-gray-700 shadow-2xl relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <CommunityForm embedded={true} />
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
