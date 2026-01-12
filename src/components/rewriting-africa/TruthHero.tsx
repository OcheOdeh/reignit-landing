"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TruthHero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col md:flex-row">
            {/* Left Side: The "Distorted" Reality */}
            <div className="w-full md:w-1/2 bg-black relative flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-red-900/30">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 to-black"></div>

                <div className="relative z-10 p-8 md:p-12 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-red-500 font-mono text-sm mb-4 tracking-widest uppercase glitch-text">
              // CURRENT_STATE: ERROR
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-400 mb-6 leading-tight">
                            Our History is <span className="text-red-600 line-through decoration-2 decoration-red-600">Distorted</span>.
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl max-w-md font-light leading-relaxed">
                            we grew up watching movies, reading books and media portraying our ancestors as demonic, barbaric. This has disconnected us from our root, our heritage and made us embrace a different idealogy (religion/way of life-a tool of colonisers). This same thing is repetiting itself in AI which our children would heavily depend on now and years to come. You would also be an ancestors and it would sadden your heart to see your generations labelling you evil, barbaric and backward. Join us let us rewrite 'AFRICA', build a 'Truth Model' accessible to all.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Right Side: The "Sovereign" Truth */}
            <div className="w-full md:w-1/2 bg-[#120A05] relative flex items-center justify-center overflow-hidden group">
                {/* Background Image with Time Loop Animation */}
                <div className="absolute inset-0 z-0">
                    {/* Layer 1 (Behind): Girl Child - The Foundation/Land */}
                    <div
                        className="absolute inset-0 bg-[url('/images/african-girl-growth.png')] bg-cover bg-center opacity-30 mix-blend-normal scale-100"
                    ></div>

                    {/* Layer 2 (Front): Boy Child - Restored Original */}
                    <div
                        className="absolute inset-0 bg-[url('/images/african-growth.png')] bg-cover bg-center opacity-40 mix-blend-overlay scale-100 animate-[pulse_8s_ease-in-out_infinite]"
                        style={{
                            animation: "ken-burns 20s ease-in-out infinite alternate"
                        }}
                    ></div>
                    {/* Keyframes for the animation would typically be in globals.css, but we can stick to standard or inline styles for now if needed, or rely on existing animations.
                        Let's use a standard scale animation.
                    */}
                    <style jsx>{`
                        @keyframes ken-burns {
                            0% { transform: scale(1.0); }
                            100% { transform: scale(1.15); }
                        }
                    `}</style>
                </div>

                {/* Gradient Overlays - Oil to Green */}
                <div className="absolute inset-0 bg-gradient-to-bl from-[#4CBB17]/40 to-[#120A05]/90 z-0"></div>

                {/* Subtle energetic glow - Gold */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FFD700]/10 blur-[100px] rounded-full z-0"></div>

                <div className="relative z-10 p-8 md:p-12 text-center md:text-right">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-[#FFD700] font-mono text-sm mb-4 tracking-widest uppercase">
              // TARGET_STATE: RESTORED
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            We Are Building the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#4CBB17]">
                                Truth Engine
                            </span>.
                        </h1>
                        <p className="text-[#E5E4E2] text-lg md:text-xl max-w-md ml-auto font-light leading-relaxed">
                            A sovereign AI pipeline to undemonize African heritage.
                            Join us to rewrite history without the filter.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                            <div className="px-8 py-3 bg-[#4CBB17] text-[#120A05] font-bold rounded-full shadow-[0_0_20px_rgba(76,187,23,0.4)] cursor-default">
                                JOIN THE MISSION
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
