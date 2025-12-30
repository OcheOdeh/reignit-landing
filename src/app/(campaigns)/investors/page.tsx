import React from 'react';

export default function InvestorsPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-display text-slate-900">
            {/* Inject Google Material Symbols */}
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

            {/* Navbar */}
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
                <div className="flex items-center p-4 justify-between max-w-4xl mx-auto w-full">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-600 text-3xl">bolt</span>
                        <div>
                            <h1 className="font-black text-lg leading-none tracking-tight">AI VANGUARD</h1>
                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Investors & Builders</p>
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-4xl mx-auto p-6 md:p-12 space-y-12">

                {/* Hero */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Building and Investing in <br className="hidden md:block" />
                        <span className="text-blue-600">Startup Partnership Program</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Connect with the next generation of high-growth AI ventures. Whether you are building the future or funding it, this is your gateway.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-95 flex items-center justify-center gap-2 group">
                            I'm an Investor
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_up</span>
                        </button>
                        <button className="px-8 py-4 bg-white border border-slate-200 hover:border-blue-600 text-slate-900 hover:text-blue-600 font-bold rounded-xl shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2">
                            I'm a Builder
                            <span className="material-symbols-outlined">rocket_launch</span>
                        </button>
                    </div>
                </div>

                {/* Content Placeholder */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4 hover:border-blue-600/50 transition-colors">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-2">
                            <span className="material-symbols-outlined text-2xl">paid</span>
                        </div>
                        <h3 className="text-xl font-bold">For Investors</h3>
                        <p className="text-slate-500 leading-relaxed flex-1">
                            Access curated deal flow of pre-vetted AI startups. Get early access to high-potential opportunities in the Vanguard ecosystem.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4 hover:border-blue-600/50 transition-colors">
                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-2">
                            <span className="material-symbols-outlined text-2xl">construction</span>
                        </div>
                        <h3 className="text-xl font-bold">For Builders</h3>
                        <p className="text-slate-500 leading-relaxed flex-1">
                            Get the resources, mentorship, and capital you need to scale. Submit your project for review and potential partnership.
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
}
