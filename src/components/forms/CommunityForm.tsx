"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

type CommunityFormProps = {
    embedded?: boolean;
};

export default function CommunityForm({ embedded = false }: CommunityFormProps) {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [activeTab, setActiveTab] = useState<'telegram' | 'email'>('telegram');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder logic
        setSubmitted(true);
    };

    return (
        <div className={`${embedded ? '' : 'bg-cyber-card p-8 rounded-2xl border border-gray-700 shadow-2xl relative'}`}>
            {!embedded && (
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="4" />
                        <path d="M50 20V80M20 50H80" stroke="white" strokeWidth="4" />
                    </svg>
                </div>
            )}

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-700 pb-2">
                <button
                    onClick={() => setActiveTab('telegram')}
                    className={`pb-2 text-sm font-semibold uppercase tracking-wider transition-colors ${activeTab === 'telegram' ? 'text-neon-green border-b-2 border-neon-green' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    Telegram
                </button>
                <button
                    onClick={() => setActiveTab('email')}
                    className={`pb-2 text-sm font-semibold uppercase tracking-wider transition-colors ${activeTab === 'email' ? 'text-neon-green border-b-2 border-neon-green' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    Email
                </button>
            </div>

            {activeTab === 'email' ? (
                <>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">Get the Blueprint</h2>
                    <p className="text-gray-400 mb-6">Download our <span className="text-white font-semibold">Free AI Prompting & Safety Guide</span> and start moving safe.</p>

                    {submitted ? (
                        <div className="bg-green-900/30 border border-green-500 text-green-400 p-4 rounded-lg text-center">
                            <p className="font-bold">Welcome to the Vanguard.</p>
                            <p className="text-sm">Check your inbox for the download link.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all placeholder-gray-600"
                                    placeholder="you@future.com"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-transparent border border-neon-green text-neon-green font-display font-bold uppercase py-4 rounded-lg hover:bg-neon-green hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all transform hover:scale-[1.02]"
                            >
                                Link Up
                            </button>
                            <p className="text-xs text-center text-gray-600 mt-4">
                                We don't spam. We only send alpha.
                            </p>
                        </form>
                    )}
                </>
            ) : (
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#0088cc] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">Join the Community</h2>
                    <p className="text-gray-400 mb-6">Get real-time updates, signals, and community support directly on Telegram.</p>
                    <a
                        href="#"
                        className="block w-full bg-[#0088cc] text-white font-display font-bold uppercase py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,136,204,0.4)] transition-all transform hover:scale-[1.02]"
                    >
                        Join Channel
                    </a>
                </div>
            )}
        </div>
    );
}
