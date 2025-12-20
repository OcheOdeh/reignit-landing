
import { motion } from 'framer-motion';
import Link from 'next/link';

const ServiceTeaser = () => {
    return (
        <section className="py-20 bg-dark-canvas">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Card 1: The Ghost */}
                    <motion.div
                        className="bg-cyber-card p-8 rounded-2xl border border-gray-800 hover:border-neon-purple transition-all group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">The Ghost</h3>
                        <p className="text-gray-400 mb-6 font-mono text-sm uppercase tracking-wider">(Camera Shy)</p>
                        <p className="text-gray-300 mb-8">
                            You want the influence without the fame. We build faceless empires using AI avatars and voice clones.
                        </p>
                        <Link href="/agency" className="text-neon-purple font-semibold hover:underline flex items-center gap-2">
                            Go Ghost Mode &rarr;
                        </Link>
                    </motion.div>

                    {/* Card 2: The Hustler */}
                    <motion.div
                        className="bg-cyber-card p-8 rounded-2xl border border-gray-800 hover:border-neon-green transition-all group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-neon-green transition-colors">The Hustler</h3>
                        <p className="text-gray-400 mb-6 font-mono text-sm uppercase tracking-wider">(Too Busy)</p>
                        <p className="text-gray-300 mb-8">
                            You have the face, but not the time. We clone you and run your socials on autopilot.
                        </p>
                        <Link href="/agency" className="text-neon-green font-semibold hover:underline flex items-center gap-2">
                            Scale Your Brand &rarr;
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceTeaser;
