"use client";

import React from 'react';
import IdeaSubmissionModal from '@/components/ui/IdeaSubmissionModal';

export default function InvestorsPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-display text-slate-900 selection:bg-green-100 selection:text-green-900">
            {/* Inject Google Material Symbols */}
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />

            {/* Navbar */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100/50">
                <div className="flex items-center p-4 justify-between max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-105 transition-transform duration-300">
                            <span className="material-symbols-outlined text-white text-2xl">bolt</span>
                        </div>
                        <div>
                            <h1 className="font-black text-xl leading-none tracking-tight text-slate-900 font-space">REIGNIT INC.</h1>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Rapid Response Shield</p>
                        </div>
                    </div>
                    {/* Mobile/Desktop Button */}
                    <div className="hidden sm:block">
                        <IdeaSubmissionModal />
                    </div>
                </div>
            </div>

            <main className="overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative pt-20 pb-32 px-6">
                    <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"></div>
                    <div className="absolute top-20 left-0 -z-10 w-[600px] h-[600px] bg-green-100/40 rounded-full blur-3xl opacity-60 -translate-x-1/3"></div>

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 relative">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-bold uppercase tracking-wide hover:scale-105 transition-transform cursor-default">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Active Intervention Tech
                            </div>

                            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] font-space">
                                The CCTV that <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 animate-gradient">ACTS.</span>
                            </h1>

                            We don't just watch. We turn <span className="text-slate-900 underline decoration-red-400 decoration-2 underline-offset-4">passive cameras</span> into <span className="bg-green-100 text-green-800 px-1 rounded">intelligent guards</span> that stop threats in real-time.

                            <div className="flex flex-wrap gap-4 pt-4">


                                <a
                                    href="https://t.me/kenneth_reignitinc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white border-2 border-slate-100 hover:border-slate-300 text-slate-900 font-bold rounded-2xl shadow-sm transition-all hover:scale hover:-translate-y-1 flex items-center gap-3 text-lg"
                                >
                                    Contact for Investment
                                    <span className="material-symbols-outlined">mail</span>
                                </a>
                            </div>
                        </div>

                        {/* Fun Hero Image Treatment */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[3rem] rotate-6 opacity-20 blur-xl"></div>
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-900/50 transform hover:rotate-1 transition-transform duration-500 group">
                                <img
                                    src="/images/investors/ai-vision.png"
                                    alt="AI Security Vision Feed"
                                    className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Floating Badge - Tech Style */}
                                <div className="absolute bottom-8 left-8 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-cyan-500/50 flex items-center gap-4 animate-pulse">
                                    <div className="w-12 h-12 bg-cyan-900/50 rounded-full flex items-center justify-center text-cyan-400">
                                        <span className="material-symbols-outlined">view_in_ar</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-cyan-400 text-sm font-space">AI ACTIVE</p>
                                        <p className="text-sm text-slate-400 font-medium">Scanning Threats...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Problem Section - Dark Mode Fun */}
                <section className="bg-[#0B1120] text-white py-24 px-6 rounded-[3rem] mx-4 relative overflow-hidden">
                    {/* Background Noise/Grid */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-[100px] opacity-20"></div>
                            <img
                                src="/images/investors/cctv-reference.png"
                                alt="Old CCTV"
                                className="relative rounded-3xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 rotate-2 hover:rotate-0"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500/90 backdrop-blur text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider shadow-xl transform -rotate-12 border-2 border-white">
                                The "Old Way"
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-10">
                            <h2 className="text-5xl font-black font-space leading-tight">
                                Why your current setup is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Broken.</span>
                            </h2>

                            <div className="grid gap-6">
                                {/* Card 1 */}
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl">videocam_off</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-1">The Problem</h3>
                                            <p className="text-slate-400 text-base leading-relaxed">You have cameras, but <span className="text-white font-medium">nobody is watching them</span>.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl">history_toggle_off</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-1">The Gap</h3>
                                            <p className="text-slate-400 text-base leading-relaxed">Burglary at 2 AM? Your camera records it. <span className="text-white font-medium">No one stops it.</span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-yellow-500/20 text-yellow-400 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl">notifications_active</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-1">The Annoyance</h3>
                                            <p className="text-slate-400 text-base leading-relaxed">Motion sensors are dumb. Buzzing for every cat or tree. <span className="text-white font-medium">You stop checking.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Section - Bento Grid Fun */}
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto space-y-16">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <span className="text-green-600 font-bold tracking-widest uppercase text-xs bg-green-50 px-4 py-2 rounded-full border border-green-100">The Solution</span>
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 font-space">How Reignit Fixes It</h2>
                            <p className="text-xl text-slate-500 font-medium">We upgraded the world to <span className="text-green-600">Rapid Response</span>.</p>
                        </div>

                        {/* Updated Grid Layout: Video Top (Full Width), Cards Bottom */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Main Visual - Full Width Video */}
                            <div className="md:col-span-2 aspect-video relative rounded-[2.5rem] overflow-hidden group shadow-2xl">
                                {/* Fallback/Poster Image (Always Visible Behind) */}
                                <img
                                    src="/images/investors/security-monitoring.jpg"
                                    alt="Monitoring Room"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="auto"
                                    controls
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                >
                                    <source src="/videos/reignit-demo.mp4?v=2" type="video/mp4" />
                                </video>
                            </div>

                            {/* Feature Card 1 */}
                            <div className="bg-blue-50 p-8 rounded-[2.5rem] flex flex-col justify-between hover:bg-blue-100 transition-colors duration-300 border border-blue-100 min-h-[250px]">
                                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 rotate-3 mb-4">
                                    <span className="material-symbols-outlined text-3xl">bolt</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Instant Response</h3>
                                    <p className="text-slate-600 text-base font-medium">We don't wait. We dial police & security immediately.</p>
                                </div>
                            </div>

                            {/* Feature Card 2 */}
                            <div className="bg-green-50 p-8 rounded-[2.5rem] flex flex-col justify-between hover:bg-green-100 transition-colors duration-300 border border-green-100 min-h-[250px]">
                                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30 -rotate-3 mb-4">
                                    <span className="material-symbols-outlined text-3xl">sync</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Plug & Play</h3>
                                    <p className="text-slate-600 text-base font-medium">Keep your cameras. We just make them smarter.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Steps */}
                <section className="py-20 bg-white border-y border-slate-100">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-center mb-12 font-space">The Reignit Architecture</h3>
                            <div className="relative w-full max-w-4xl bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                                <img
                                    src="/images/investors/architecture-diagram.png"
                                    alt="Reignit Hub Architecture: Camera -> Hub -> Alerts"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Financials / Money Slide */}
                <section className="py-24 px-6 bg-slate-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-green-600 font-bold tracking-widest uppercase text-xs bg-green-50 px-4 py-2 rounded-full border border-green-100">The Business Model</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 font-space">Why Reignit is Profitable</h2>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
                            {/* Chart Side */}
                            <div className="flex-1 w-full relative">
                                <div className="space-y-6">
                                    {/* Bar 1: Cost */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-bold text-slate-500">
                                            <span>Cost to Produce</span>
                                            <span>₦180k</span>
                                        </div>
                                        <div className="h-12 bg-slate-100 rounded-xl overflow-hidden relative w-[65%]">
                                            <div className="absolute inset-0 bg-red-500 border-r-4 border-red-600 flex items-center px-4">
                                                <span className="text-white/90 text-xs font-bold uppercase tracking-wider">Hardware Cost</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bar 2: Price */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-bold text-slate-800">
                                            <span>Price to Client</span>
                                            <span className="text-green-600">₦280k</span>
                                        </div>
                                        <div className="h-12 bg-green-100 rounded-xl overflow-hidden relative w-full shadow-lg shadow-green-500/20">
                                            <div className="absolute inset-0 bg-green-500 flex items-center px-4">
                                                <span className="text-white font-bold tracking-wider text-sm uppercase">Instant Profit on Install</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-100">
                                    <p className="text-slate-600 font-medium">We break even at <span className="text-slate-900 font-bold">32 clients</span>. Every client after that is <span className="text-green-600 font-black text-xl">90% margin</span>.</p>
                                </div>
                            </div>

                            {/* Stats Side */}
                            <div className="flex-1 space-y-8">
                                <div className="p-6 bg-slate-900 rounded-2xl text-white">
                                    <p className="text-slate-400 text-sm font-bold uppercase mb-1">THE ASK</p>
                                    <p className="text-4xl font-space font-black text-green-400">₦40M Investment</p>
                                    <p className="text-xs text-slate-500 mt-2">for <span className="text-white font-bold">20% Equity</span></p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                        <p className="text-blue-600 text-xs font-bold uppercase mb-1">Market Size</p>
                                        <p className="text-2xl font-black text-slate-900">₦200M+</p>
                                    </div>
                                    <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                                        <p className="text-green-600 text-xs font-bold uppercase mb-1">Growth</p>
                                        <p className="text-2xl font-black text-slate-900">150% YoY</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Footer/Pitch */}
                <section className="relative py-32 px-6 overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="/images/investors/security-guards-hero.jpg"
                            alt="Security Team"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight font-space">
                            "We are not selling cameras; we are selling the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">fastest response time</span> in Nigeria."
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                            <IdeaSubmissionModal />
                            <a
                                href="https://t.me/kenneth_reignitinc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-5 bg-white text-slate-900 font-bold rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3 text-lg"
                            >
                                Contact for Investment
                                <span className="material-symbols-outlined">mail</span>
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
