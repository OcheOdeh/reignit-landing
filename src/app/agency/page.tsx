"use client";

import { motion } from 'framer-motion';

export default function AgencyPage() {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* HERO SECTION (The Hook) */}
                <div className="text-center max-w-5xl mx-auto mb-32">
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Don't Get Left Behind. <br className="hidden md:block" />
                        <span className="text-neon-green">We 10X Your Productivity</span> <br className="hidden md:block" />
                        & <span className="text-neon-purple">Digital Influence.</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Whether you are too busy, camera-shy, or just want to make money online—we bridge the gap between you and the AI revolution. Stop hiding. Your relevance depends on it.
                    </motion.p>
                </div>

                {/* SECTION 2: WHO IS THIS FOR? (Bento Grid) */}
                <div className="mb-32">
                    <motion.h2
                        className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        WHO IS THIS FOR?
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full max-w-full">
                        {/* Card 1: The Ghost - Large Card (Span 7) */}
                        <motion.div
                            className="bg-cyber-card p-8 rounded-3xl border border-gray-800 hover:border-neon-purple/50 transition-all lg:col-span-7 flex flex-col justify-between group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs font-bold uppercase tracking-wider border border-neon-purple/30">The Ghost</span>
                                    <span className="text-gray-500 text-sm font-mono">/ The Introvert</span>
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">The "Camera Shy" Genius</h3>
                                <p className="text-gray-400 text-lg mb-6">You have brilliant ideas but hate the spotlight.</p>
                            </div>
                            <div className="bg-black/40 p-6 rounded-2xl border border-gray-800">
                                <h4 className="text-neon-purple font-bold mb-2">Our Solution: The Faceless Protocol</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Pick from our hundreds of niches whatever you have passion for and watch us build around it for you pushing your own narrative forward.</p>
                            </div>
                        </motion.div>

                        {/* Card 2: The Busy Bee - Tall Card (Span 5) */}
                        <motion.div
                            className="bg-cyber-card p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all lg:col-span-5 flex flex-col justify-between group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/30">The Busy Bee</span>
                                    <span className="text-gray-500 text-sm font-mono">/ The Professional</span>
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">The Overwhelmed Professional</h3>
                                <p className="text-gray-400 text-lg mb-6">You are a student, worker, or business owner with targets to meet and zero time to film.</p>
                            </div>
                            <div className="bg-black/40 p-6 rounded-2xl border border-gray-800 mt-auto">
                                <h4 className="text-blue-400 font-bold mb-2">Our Solution: Autopilot Management</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">You focus on your job; we become your digital hands. We script, edit, and post 3-6 times a week. You just sit back and watch the engagement grow.</p>
                            </div>
                        </motion.div>

                        {/* Card 3: The Laggard - Medium Card (Span 5) */}
                        <motion.div
                            className="bg-cyber-card p-8 rounded-3xl border border-gray-800 hover:border-red-500/50 transition-all lg:col-span-5 flex flex-col justify-between group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider border border-red-500/30">The Laggard</span>
                                    <span className="text-gray-500 text-sm font-mono">/ The AI-Fearful</span>
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">The Job Protector</h3>
                                <p className="text-gray-400 text-lg mb-6">You hear "AI" and worry about being replaced or scammed.</p>
                            </div>
                            <div className="bg-black/40 p-6 rounded-2xl border border-gray-800">
                                <h4 className="text-red-500 font-bold mb-2">Our Solution: AI Safety & Orientation</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Stay relevant. We curate the latest AI advancements to suit your daily needs, building specific solutions for every interaction you have.</p>
                            </div>
                        </motion.div>

                        {/* Card 4: The Hustler - Large Card (Span 7) */}
                        <motion.div
                            className="bg-cyber-card p-8 rounded-3xl border border-gray-800 hover:border-neon-green/50 transition-all lg:col-span-7 flex flex-col justify-between group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-neon-green/20 text-neon-green text-xs font-bold uppercase tracking-wider border border-neon-green/30">The Hustler</span>
                                    <span className="text-gray-500 text-sm font-mono">/ The Money Maker</span>
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">The Digital Entrepreneur</h3>
                                <p className="text-gray-400 text-lg mb-6">You aren't here for fame; you are here for profit.</p>
                            </div>
                            <div className="bg-black/40 p-6 rounded-2xl border border-gray-800">
                                <h4 className="text-neon-green font-bold mb-2">Our Solution: Monetization Infrastructure</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Master proven methods to earn online and gain the opportunity to invest in high-potential startups poised to be the next big thing.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>



            </div>
        </div>
    );
}
