"use client";

import { motion } from 'framer-motion';

interface FeatureItem {
    title: string;
    description: string;
    icon: string;
}

interface CampaignFeaturesProps {
    title: string;
    features: FeatureItem[];
}

const CampaignFeatures: React.FC<CampaignFeaturesProps> = ({ title, features }) => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-headline text-white mb-6">
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <div className="text-4xl mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampaignFeatures;
