"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PaymentSuccessContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");

    return (
        <div className="min-h-screen bg-[#120A05] flex items-center justify-center p-4 relative overflow-hidden font-display">
            {/* Background Effects matching TruthEngine theme */}
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#4CBB17]/10 blur-[100px] rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-md w-full bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl text-center shadow-2xl"
            >
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-[#4CBB17]/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <span className="material-symbols-outlined text-5xl text-[#4CBB17]">check_circle</span>
                </motion.div>

                <h1 className="text-3xl font-bold text-white mb-2">Thank You!</h1>
                <p className="text-[#FFD700] font-mono text-sm tracking-widest uppercase mb-6">
                    TRANSACTION SUCCESSFUL
                </p>

                <p className="text-gray-400 mb-8 leading-relaxed">
                    We have received your payment. A receipt has been sent to your email.
                </p>

                {sessionId && (
                    <div className="mb-8 p-3 bg-black/30 rounded-lg border border-white/5">
                        <p className="text-[10px] text-gray-500 font-mono break-all">
                            REF: {sessionId.slice(0, 10)}...{sessionId.slice(-4)}
                        </p>
                    </div>
                )}

                <div className="flex flex-col gap-3">
                    <Link
                        href="/"
                        className="w-full py-3 bg-[#4CBB17] text-[#120A05] font-bold rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(76,187,23,0.3)]"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/rewriting-africa"
                        className="w-full py-3 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors"
                    >
                        Make Another Donation
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}

export default function PaymentSuccessPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#120A05] flex items-center justify-center text-[#4CBB17]">Loading...</div>}>
            <PaymentSuccessContent />
        </Suspense>
    );
}
