
import { motion } from 'framer-motion';

const SocialProof = () => {
    return (
        <section className="py-16 bg-cyber-black text-center border-t border-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-2xl font-display font-semibold text-white mb-2">Join our community of <span className="text-neon-green">future-proof</span> leaders.</p>
                    <p className="text-gray-500">Over 500+ members securing their digital legacy.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProof;
