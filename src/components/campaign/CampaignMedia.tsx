"use client";

import { motion } from 'framer-motion';

interface CampaignMediaProps {
    videoUrl?: string; // YouTube/Vimeo embed URL or direct file
    imageUrl?: string;
    caption?: string;
}

const CampaignMedia: React.FC<CampaignMediaProps> = ({ videoUrl, imageUrl, caption }) => {
    return (
        <section className="py-20 bg-dark-canvas/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                        {videoUrl ? (
                            <iframe
                                src={videoUrl}
                                className="w-full h-full object-cover"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Campaign Video"
                            />
                        ) : imageUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={imageUrl}
                                alt="Campaign Visual"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            // Placeholder
                            <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-500">
                                <div className="text-center">
                                    <span className="text-6xl block mb-4">▶️</span>
                                    <p>Video/Image Placeholder</p>
                                </div>
                            </div>
                        )}
                    </div>
                    {caption && (
                        <p className="mt-6 text-center text-gray-400 italic">
                            {caption}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default CampaignMedia;
