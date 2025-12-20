
import { motion } from 'framer-motion';

const ProblemSection = () => {
    return (
        <section className="py-16 bg-cyber-black relative border-y border-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    className="bg-red-900/20 border border-red-500/30 p-8 rounded-2xl text-center max-w-4xl mx-auto relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 relative z-10">
                        50% of the time, you are <span className="text-red-500">unsafe</span> online.
                    </h2>
                    <p className="text-lg text-gray-300 font-sans relative z-10">
                        AI is replacing the silent workforce. If you aren't AI-oriented, you are invisible.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSection;
