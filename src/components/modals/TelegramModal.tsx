"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import CommunityForm from '../forms/CommunityForm';
import { useEffect } from 'react';

type TelegramModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function TelegramModal({ isOpen, onClose }: TelegramModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-dark-canvas w-full max-w-md rounded-2xl border border-gray-700 shadow-2xl overflow-hidden pointer-events-auto relative">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>

                            <CommunityForm embedded={true} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
