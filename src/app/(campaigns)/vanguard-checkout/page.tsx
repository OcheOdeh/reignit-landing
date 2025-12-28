"use client";

import React, { useState, useEffect } from 'react';

// Pricing Constants
const COMMUNITY_PRICE = 34.46;

const SERVICES = [
    {
        id: 'us-business',
        title: 'US Business Registration',
        description: 'Go global and be open to more opportunities with this.',
        items: ['LLC Formation & EIN', 'Mercury Bank & Stripe Setup', 'Registered Agent Service'],
        tooltip: 'Includes: LLC formation, EIN, Article of Organisation, Certificate of Organisation, US Bank account setup, Stripe Global payment, U.S. Business Address.',
        priceMember: 24.12,
        priceNonMember: 72.36,
    },
    {
        id: 'website-build',
        title: 'Website',
        description: 'Build a website for your business without hiring an expensive agency to build it for you.',
        items: ['Domain Name', 'Professional Email', 'Visual Identity Design'],
        tooltip: 'Includes: Domain Name & Professional Email, Visual Identity Design (Create an attention-grabbing Logo).',
        priceMember: 100.00,
        priceNonMember: 300.00, // Assumed 3x for consistency if not specified, though user just said "Charge $100". I will assume standard member price logic unless fixed. Actually user said "charge $100", usually that implies the base price. Let's make it 100 member, 300 non-member for consistency with "Outsiders pay triple".
    }
];

const AUTOPILOT_PLANS = [
    { id: 1, name: 'Starter: 3 Vids 6 Pics every week', priceMember: 13.78, priceNonMember: 41.34 },
    { id: 2, name: 'Growth: 6 Vids 12 Pics every week', priceMember: 27.57, priceNonMember: 82.71 },
    { id: 3, name: 'Scale: 9 Vids 24 Pics every week', priceMember: 41.35, priceNonMember: 124.05 },
    { id: 4, name: 'Dominance: 12 Vids 36 Pics every week', priceMember: 55.13, priceNonMember: 165.39 },
];

const AUTOPILOT_INFO = {
    description: "You're a busy bee, you need a Digital Hand (Autopilot). We script, edit, post and schedule posts every day of the week depending on your plan.",
    winReason: "Why it wins: It solves the \"I have no time\" problem instantly."
};

const PERKS = [
    { name: 'UK/US TikTok Account (1k-5k followers)', priceMember: 0, priceNonMember: 50.00 },
    { name: 'How to Prompt', priceMember: 0, priceNonMember: 50.00 }, // Assumed value
    { name: 'AI Tool uses', priceMember: 0, priceNonMember: 50.00 }, // Assumed value
    { name: 'Spend less on AI usage', priceMember: 0, priceNonMember: 50.00 }, // Assumed value
    { name: 'US Virtual Card/Bank account Setup + $2 Free Credit', priceMember: 0, priceNonMember: 45.00 },
    { name: 'Youtube growth and monetization handbook', priceMember: 0, priceNonMember: 50.00 }, // Assumed value
    { name: 'Niche-to-Context Pathway Handbook', priceMember: 0, priceNonMember: 50.00 }, // Assumed value
];

export default function VanguardCheckoutPage() {
    const [isMember, setIsMember] = useState(true);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedAutopilot, setSelectedAutopilot] = useState<number | null>(null);
    const [total, setTotal] = useState(COMMUNITY_PRICE);
    const [savingsText, setSavingsText] = useState("");
    const [savingsClass, setSavingsClass] = useState("");

    const toggleService = (id: string) => {
        if (selectedServices.includes(id)) {
            setSelectedServices(selectedServices.filter(s => s !== id));
        } else {
            setSelectedServices([...selectedServices, id]);
        }
    };

    useEffect(() => {
        let newTotal = 0;
        let nonMemberTotal = 0;

        // 1. Community Fee
        if (isMember) {
            newTotal += COMMUNITY_PRICE;
            nonMemberTotal += COMMUNITY_PRICE;
        }

        // 2. Services
        SERVICES.forEach(s => {
            if (selectedServices.includes(s.id)) {
                newTotal += isMember ? s.priceMember : s.priceNonMember;
                nonMemberTotal += s.priceNonMember;
            }
        });

        // 3. Autopilot
        if (selectedAutopilot) {
            const plan = AUTOPILOT_PLANS.find(p => p.id === selectedAutopilot);
            if (plan) {
                newTotal += isMember ? plan.priceMember : plan.priceNonMember;
                nonMemberTotal += plan.priceNonMember;
            }
        }

        // 4. Perks (Visual only logic as per request - mostly)
        // If not member, perks have a cost but user didn't ask to add them to total explicitly in the JS provided
        // "We will just visually show the price, but NOT add it to total unless we added checkboxes"

        setTotal(newTotal);

        // Savings Display Logic
        if (isMember) {
            let potentialCost = 0;
            // The logic from the HTML script:

            // Hard coded perk value for display impact
            const perkValue = PERKS.reduce((acc, p) => acc + p.priceNonMember, 0);

            // Calculate saved amount on services
            let serviceSavings = 0;
            SERVICES.forEach(s => {
                if (selectedServices.includes(s.id)) {
                    serviceSavings += (s.priceNonMember - s.priceMember);
                }
            });
            if (selectedAutopilot) {
                const plan = AUTOPILOT_PLANS.find(p => p.id === selectedAutopilot);
                if (plan) serviceSavings += (plan.priceNonMember - plan.priceMember);
            }

            const netSavings = serviceSavings + perkValue - COMMUNITY_PRICE;

            if (newTotal === COMMUNITY_PRICE && selectedServices.length === 0 && !selectedAutopilot) {
                setSavingsText(`Unlocks $${perkValue} in free value`);
                setSavingsClass("text-green-600 bg-green-50");
            } else if (netSavings > 0) {
                setSavingsText(`Total Value Saved: $${netSavings.toFixed(2)}`);
                setSavingsClass("text-green-600 bg-green-50");
            } else {
                setSavingsText("Member Status Active");
                setSavingsClass("text-green-600 bg-green-50");
            }
        } else {
            setSavingsText("You are overpaying. Join to save.");
            setSavingsClass("text-red-500 bg-red-50");
        }

    }, [isMember, selectedServices, selectedAutopilot]);

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-display pb-40">
            {/* Inject Google Material Symbols */}
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

            {/* Navbar */}
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
                <div className="flex items-center p-4 justify-between max-w-lg mx-auto w-full">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-600 text-3xl">bolt</span>
                        <div>
                            <h1 className="font-black text-lg leading-none tracking-tight">AI VANGUARD</h1>
                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Secure Infrastructure Checkout</p>
                        </div>
                    </div>
                    <div className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">lock</span>
                        AES-256 Secured
                    </div>
                </div>
            </div>

            <main className="flex-1 flex flex-col gap-6 p-4 max-w-lg mx-auto w-full">

                <div className="text-center space-y-2 pt-2">
                    <h2 className="text-2xl font-black text-slate-900">Choose Your Path</h2>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Outsiders pay triple. Insiders pay cost.<br />
                        <span className="font-bold text-blue-600">Join the community to save immediately.</span>
                    </p>
                    <div className="inline-flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 mt-1 mx-auto">
                        <span className="material-symbols-outlined text-blue-600 text-[16px]">credit_card</span>
                        <span className="text-[11px] font-bold text-blue-800">
                            You can pay with your local card, only have the $ equivalent on your acc.
                        </span>
                    </div>
                </div>

                {/* Community Card */}
                <section
                    id="community-card"
                    className={`relative overflow-hidden rounded-2xl border-2 shadow-xl transition-all duration-300 transform hover:scale-[1.01] ${isMember ? 'border-blue-600 bg-white' : 'border-slate-200 opacity-60 grayscale'}`}
                >
                    <div className={`absolute top-0 right-0 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest shadow-sm ${isMember ? 'bg-blue-600' : 'hidden'}`}>
                        Unlock 70% Off
                    </div>

                    <div className="p-6 flex flex-col gap-5">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                                    Join The Community
                                    <span className="material-symbols-outlined text-blue-600 text-base">verified</span>
                                </h3>
                                <p className="text-xs text-slate-500 mt-1 max-w-[220px]">
                                    Full support. Networking. Investments. And massive service discounts.
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-black text-blue-600 tracking-tight">${COMMUNITY_PRICE}</p>
                                <p className="text-[10px] text-slate-400 uppercase font-bold">One-time Fee</p>
                            </div>
                        </div>

                        <label className="group flex items-center justify-between p-4 rounded-xl bg-blue-50 border border-blue-200 cursor-pointer hover:bg-blue-100/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        id="community-toggle"
                                        className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600"
                                        checked={isMember}
                                        onChange={(e) => setIsMember(e.target.checked)}
                                    />
                                    <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-sm font-bold text-blue-600 group-hover:text-blue-800">Activate Membership Status</span>
                                    <span className="block text-[10px] text-slate-500">Uncheck to pay standard (triple) prices</span>
                                </div>
                            </div>
                        </label>
                    </div>
                </section>

                {/* Warning Banner */}
                {!isMember && (
                    <div id="warning-banner" className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium flex items-center gap-3 shadow-sm animate-[shake_0.82s_cubic-bezier(.36,.07,.19,.97)_both]">
                        <span className="material-symbols-outlined text-xl">warning</span>
                        <span><strong>Stop.</strong> You are about to overpay by 300%. Check the box above to save money.</span>
                    </div>
                )}

                <div className="flex items-center gap-4 py-2">
                    <div className="h-px bg-slate-200 flex-1"></div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select Your Services</span>
                    <div className="h-px bg-slate-200 flex-1"></div>
                </div>

                <div className="flex flex-col gap-4">

                    {/* Services Loop */}
                    {SERVICES.map(service => (
                        <div key={service.id} className="service-card group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-600 hover:shadow-md">
                            <div className="flex justify-between items-start gap-3">
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        <h4 className="font-bold text-base text-slate-900">{service.title}</h4>
                                        {/* @ts-ignore */}
                                        {service.tooltip && (
                                            <div className="group relative ml-2 inline-flex items-center">
                                                <span className="material-symbols-outlined text-slate-400 text-[18px] cursor-help">info</span>
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none leading-relaxed">
                                                    {/* @ts-ignore */}
                                                    {service.tooltip}
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* @ts-ignore */}
                                    {service.description && (
                                        <p className="text-xs text-slate-500 mt-1 mb-2 italic">
                                            {/* @ts-ignore */}
                                            {service.description}
                                        </p>
                                    )}
                                    <ul className="mt-2 space-y-1">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="text-xs text-slate-500 flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>{item}</li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-2 mt-3">
                                        <span className="text-xl font-bold text-slate-900">
                                            ${isMember ? service.priceMember : service.priceNonMember}
                                        </span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${isMember ? 'bg-blue-600/10 text-blue-600' : 'bg-red-100 text-red-700'}`}>
                                            {isMember ? 'Member Price' : 'Non-Member (x3)'}
                                        </span>
                                    </div>
                                </div>
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-6 w-6 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600"
                                        checked={selectedServices.includes(service.id)}
                                        onChange={() => toggleService(service.id)}
                                    />
                                    <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0">
                                        {selectedServices.includes(service.id) && (
                                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Autopilot Section */}
                    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                        <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-blue-600">smart_toy</span>
                            Autopilot Management
                            <div className="group relative ml-1 inline-flex items-center">
                                <span className="material-symbols-outlined text-slate-400 text-[18px] cursor-help">info</span>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none leading-relaxed">
                                    <p className="mb-2">{AUTOPILOT_INFO.description}</p>
                                    <p className="font-bold text-yellow-400">{AUTOPILOT_INFO.winReason}</p>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                                </div>
                            </div>
                        </h3>
                        <div className="space-y-3">
                            {AUTOPILOT_PLANS.map(plan => (
                                <label key={plan.id} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 hover:border-blue-600/30 cursor-pointer transition-all">
                                    <div>
                                        <div className="font-bold text-sm text-slate-800">{plan.name}</div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-sm font-bold text-slate-600">
                                                ${isMember ? plan.priceMember : plan.priceNonMember}
                                            </span>
                                            <span className="text-[10px] text-slate-400">/month</span>
                                        </div>
                                    </div>
                                    <input
                                        type="radio"
                                        name="autopilot"
                                        className="h-5 w-5 text-blue-600 border-slate-300 focus:ring-blue-600"
                                        checked={selectedAutopilot === plan.id}
                                        onChange={() => setSelectedAutopilot(plan.id)}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Perks Section */}
                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                        <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-blue-600">redeem</span>
                            Exclusive Perks
                        </h3>

                        {PERKS.map((perk, i) => (
                            <div key={i} className={`flex justify-between items-center py-2 ${i < PERKS.length - 1 ? 'border-b border-slate-200' : ''}`}>
                                <div className="text-xs font-medium text-slate-700">{perk.name}</div>
                                <div className={`font-bold text-sm ${isMember ? 'text-green-600' : 'text-slate-800'}`}>
                                    {isMember ? 'FREE' : `$${perk.priceNonMember.toFixed(2)}`}
                                </div>
                            </div>
                        ))}

                        {!isMember && (
                            <div className="mt-3 text-[10px] text-red-600 bg-red-50 p-2 rounded italic">
                                *Without membership, these perks are charged at standard consulting rates.
                            </div>
                        )}
                    </div>

                </div>
            </main>

            {/* Footer */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] z-50">
                <div className="max-w-lg mx-auto flex flex-col gap-3">

                    <div className="flex justify-between items-end px-1">
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-400 font-medium">Total Due Now</span>
                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full mt-1 ${savingsClass}`}>
                                {savingsText}
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-black text-slate-900 tracking-tighter">${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <a href="https://stripe.com" target="_blank" className="relative overflow-hidden w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-800 text-white font-bold h-14 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-600/30 group">
                        <span className="relative z-10 text-lg">Click to Pay</span>
                        <span className="material-symbols-outlined relative z-10 text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                    </a>
                </div>
            </div>
        </div>
    );
}
