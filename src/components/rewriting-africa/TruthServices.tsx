"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Heritage Data Labeling",
        description: "Re-labeling existing datasets to remove colonial bias. Transforming tags from \"Fetish\" to \"Sacred\".",
        icon: "lab_panel", // Material symbol
        color: "text-red-500", // Keeping red for contrast/urgency
        borderColor: "hover:border-red-500",
    },
    {
        title: "Sovereign Model Training",
        description: "Fine-tuning open-source models (Llama 3, SDXL) on our \"Clean Truth\" dataset for accurate representation.",
        icon: "model_training",
        color: "text-[#4CBB17]", // Grass Green
        borderColor: "hover:border-[#4CBB17]",
    },
    {
        title: "Cultural RLHF",
        description: "Elder-in-the-Loop training. Cultural custodians, not random workers, validatng AI outputs for historical ethics.",
        icon: "groups",
        color: "text-[#FFD700]", // Gold
        borderColor: "hover:border-[#FFD700]",
    },
    {
        title: "The Digital Library Projects",
        description: "A secure API for developers to fetch culturally Validated data. Build games and education without the poison.",
        icon: "library_books",
        color: "text-cyan-400", // Keeping cyan for 'digital/tech' feel or change to lighter green?
        borderColor: "hover:border-cyan-400",
    },
];

export default function TruthServices() {
    return (
        <section className="bg-[#120A05] py-20 px-4 md:px-8 relative overflow-hidden">
            {/* Subtle background grid */}
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        The Pillars of <span className="text-[#4CBB17]">Sovereignty</span>
                    </h2>
                    <p className="text-[#FFD700]/80 max-w-2xl mx-auto">
                        We are replacing the distorted pipeline with a sovereign architecture built for truth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col sm:flex-row gap-6 group cursor-default"
                        >
                            {/* Icon Container - Matching Awarri's circle style but adapting to dark mode */}
                            <div className="flex-shrink-0">
                                <div className={`w-16 h-16 rounded-full ${service.color.replace('text-', 'bg-')}/10 flex items-center justify-center transition-transform group-hover:scale-110`}>
                                    <span className={`material-symbols-outlined text-3xl ${service.color}`}>
                                        {service.icon}
                                    </span>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-xl font-display font-bold text-white mb-2">
                                    {service.title === "Cultural RLHF" ? "Cultural Reinforcement Learning with Human Feedback (RLHF)" : service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Standards from Image */}
                <div className="border-t border-white/10 pt-20">
                    <h3 className="text-2xl font-display font-bold text-white text-center mb-12">
                        Ethical <span className="text-[#FFD700]">Data Standards</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Limitless Scalability", desc: "Whether digitizing a single family archive or indexing an entire national library, our pipeline handles data at any magnitude." },
                            { title: "Custodians of Truth", desc: "Our network of cultural scholars and technical engineers guarantees that every data point is accurate and respectful." },
                            { title: "Human-Verified Security", desc: "Every dataset undergoes rigorous human review to ensure it meets our strict ethical guidelines before training." },
                            { title: "Regulatory Alignment", desc: "We adhere to global privacy standards, ensuring all data is handled with strict compliance and transparency." },
                            { title: "Conscious Data Sourcing", desc: "We only use data with explicit consent, actively working to decolonize and correct historical biases." },
                            { title: "Multimodal Mastery", desc: "From audio to text and image, we curate complex multimodal datasets specifically designed for sovereign AI models." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#4CBB17]/30 transition-all group">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#4CBB17]/10 flex items-center justify-center group-hover:bg-[#4CBB17] transition-colors">
                                    <span className="material-symbols-outlined text-[#4CBB17] text-xl group-hover:text-[#120A05]">verified_user</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
