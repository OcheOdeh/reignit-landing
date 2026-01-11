"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ServiceRequestButton() {
    const pathname = usePathname();
    const isCheckout = pathname?.includes("vanguard-checkout");
    const isInvestors = pathname?.includes("investors");
    const [isDragging, setIsDragging] = useState(false);

    if (isCheckout || isInvestors) return null;

    return (
        <motion.div
            className="fixed bottom-4 left-2 z-50 touch-none w-[calc(50%-12px)] md:w-auto md:bottom-6 md:left-6"
            drag
            dragMomentum={false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Lock drag on mobile effectively, or just let it be.
            // On mobile, maybe disable drag? For now, keep it simple.
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setTimeout(() => setIsDragging(false), 150)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <button
                onClick={(e) => {
                    if (isDragging) {
                        e.preventDefault();
                        return;
                    }
                    window.open("https://t.me/kenneth_reignitinc", "_blank");
                }}
                className="group relative flex items-center justify-center w-full bg-blue-600 text-white font-display font-bold uppercase py-3 px-2 md:px-6 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)] border-2 border-blue-500 hover:bg-white hover:text-blue-600 hover:border-white transition-all cursor-grab active:cursor-grabbing z-50"
                aria-label="Request AI Services"
            >
                {/* Pulse Effect */}
                <span className="absolute -inset-1 rounded-full bg-blue-400 opacity-40 animate-ping pointer-events-none group-hover:opacity-0" />

                {/* Icon + Text */}
                <span className="relative flex items-center justify-center gap-1 md:gap-2 pointer-events-none">
                    <span className="material-symbols-outlined text-lg md:text-xl">smart_toy</span>
                    <span className="text-[10px] sm:text-xs md:text-sm tracking-wider whitespace-nowrap">Request AI Services</span>
                </span>
            </button>
        </motion.div>
    );
}
