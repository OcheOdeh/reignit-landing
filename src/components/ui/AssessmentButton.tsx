"use client";

import { motion, useDragControls } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function AssessmentButton() {
    const pathname = usePathname();
    // Hide on checkout page or if pathname is missing
    const isCheckout = pathname?.includes("vanguard-checkout");
    const isInvestors = pathname?.includes("investors");

    // Ref for constraints (optional, but keeps it within window if needed)
    const constraintsRef = useRef(null);

    // State to track if we are dragging vs clicking
    const [isDragging, setIsDragging] = useState(false);

    if (isCheckout || isInvestors) return null;

    return (
        <>
            {/* 
        This transparent div acts as a boundary context if we wanted to constrain it to the screen 
        explicitly, but for a fixed overlay, we usually just let it float. 
        We'll use a high z-index fixed container for the button.
      */}
            <motion.div
                className="fixed bottom-6 right-6 z-50 touch-none"
                drag
                dragMomentum={false}
                // Using layout constraint references or just letting it fly. 
                // For simplicity and "move anywhere", we won't strictly constrain it to a parent ref 
                // because fixed parents are tricky. We'll rely on natural constraints or allow free movement.
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setTimeout(() => setIsDragging(false), 150)} // Small delay to prevent click firing
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
                        window.open("https://tally.so/r/rjBZKX", "_blank");
                    }}
                    className="group relative flex items-center justify-center bg-[#39FF14] text-black font-display font-bold uppercase py-3 px-6 rounded-full shadow-[0_0_20px_rgba(57,255,20,0.6)] border-2 border-[#39FF14] hover:bg-white hover:border-white transition-all cursor-grab active:cursor-grabbing z-50"
                    aria-label="Take AI Assessment"
                >
                    {/* Pulse Effect */}
                    <span className="absolute -inset-1 rounded-full bg-neon-green opacity-40 animate-ping pointer-events-none group-hover:opacity-0" />

                    {/* Icon + Text */}
                    <span className="relative flex items-center gap-2 pointer-events-none">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                            <path d="M12 18v-6" />
                            <path d="M8 15l4 3 4-3" /> {/* Arrow down-like/check-like mix for assessment */}
                        </svg>
                        <span className="text-sm tracking-wider">Take AI Assessment</span>
                    </span>
                </button>
            </motion.div>
        </>
    );
}
