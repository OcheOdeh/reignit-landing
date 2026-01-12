"use client";

import { motion } from "framer-motion";

const phases = [
    {
        phase: "PHASE 01",
        title: "Collection",
        desc: "Gathering raw oral histories and artifacts.",
        status: "active", // active, pending, done
        color: "bg-[#4CBB17]",
        textColor: "text-[#4CBB17]"
    },
    {
        phase: "PHASE 02",
        title: "Cleaning",
        desc: "The Annotation Corps removes colonial bias.",
        status: "pending",
        color: "bg-gray-700",
        textColor: "text-gray-500"
    },
    {
        phase: "PHASE 03",
        title: "Training",
        desc: "Fine-tuning and release of the Truth Model.",
        status: "pending",
        color: "bg-gray-700",
        textColor: "text-gray-500"
    }
];

export default function TruthRoadmap() {
    return (
        <section className="bg-[#120A05] py-20 px-4 md:px-8 border-t border-white/10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16">
                    The Path to <span className="text-white underline decoration-[#FFD700] decoration-4">Redemption</span>
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 relative">

                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-white/10 -z-10"></div>

                    {phases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex-1 w-full md:w-auto flex flex-col items-center"
                        >
                            {/* Dot */}
                            <div className={`w-14 h-14 rounded-full ${item.status === 'active' ? 'bg-[#4CBB17] shadow-[0_0_20px_rgba(76,187,23,0.5)]' : 'bg-gray-800 border border-gray-700'} flex items-center justify-center mb-6 z-10`}>
                                <span className={`font-bold ${item.status === 'active' ? 'text-black' : 'text-gray-500'}`}>{index + 1}</span>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 w-full min-h-[160px] flex flex-col justify-center">
                                <span className={`font-mono text-xs tracking-widest mb-2 ${item.textColor}`}>{item.phase}</span>
                                <h3 className={`text-xl font-bold text-white mb-2`}>{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
