"use client";


import React, { useState, useEffect } from 'react';

// Pricing Constants
const COMMUNITY_PRICE = 34.46;
const EXCHANGE_RATE = 1500;

const SERVICES = [
    {
        id: 'us-business',
        title: 'US Business Registration',
        description: 'Go global and be open to more opportunities with this.',
        items: [],
        tooltip: 'Get all of these services for less than $200: LLC, C-Corp, S-Corp and Non-Profit Incorporation Services, EIN, Article of Organisation, Certificate of Organisation, US Bank account setup, Stripe Global payment, U.S. Business Address.',
        priceMember: 30.00,
        priceNonMember: 90.00,
    },
    {
        id: 'nigeria-business',
        title: 'Nigeria Business Registration-Avoid excess taxes and be secured',
        description: 'Get your business registered and compliant.',
        items: [],
        tooltip: 'Includes: Certificate of Incorporation, Memorandum & Article of Association (Memart), Shareholder Structure, SCUML Certificate, TIN Certificate. Set up Merchant prepayment for your business',
        priceMember: 25.00,
        priceNonMember: 75.00,
    },
    {
        id: 'website-build',
        title: 'Website',
        description: 'Build a website for your business without hiring an expensive agency to build it for you.',
        items: [],
        tooltip: 'Includes: Domain Name & Professional Email, Visual Identity Design.',
        priceMember: 100.00,
        priceNonMember: 300.00,
    },
    {
        id: 'business-branding',
        title: 'Business Branding-Be identified by that unique signature',
        description: 'Create a unique identity for your business.',
        items: [],
        tooltip: 'Visual Identity Design-Full logo presentation, Letterhead design, Id card design, Business card design, Invoice design, waybill design, Logo stamp format design (All soft copies. Reach out directly if you\'d like hard copies)',
        priceMember: 15.00,
        priceNonMember: 30.00,
    },
    {
        id: 'custom-brand-identity',
        title: 'Custom Brand Identity (Request Quote)',
        description: 'Request for your custom videos/pictures for personal, promotional and business purposes. Members get massive discounts.',
        items: [],
        tooltip: 'Custom video and picture production tailored to your specific needs.',
        priceMember: 0,
        priceNonMember: 0,
    }
];

const US_PACKAGES = [
    { id: 1, name: 'New Mexico (Budget Option)', price: 162.00 },
    { id: 2, name: 'Wyoming (Standard Option)', price: 214.00 },
    { id: 3, name: 'Delaware (Premium Option)', price: 253.00 },
];

const AUTOPILOT_PLANS = [
    { id: 1, name: 'Starter: 3 Vids 6 Pics every week', priceMember: 13.78, priceNonMember: 41.34 },
    { id: 2, name: 'Growth: 6 Vids 12 Pics every week', priceMember: 27.57, priceNonMember: 82.71 },
    { id: 3, name: 'Scale: 9 Vids 24 Pics every week', priceMember: 41.35, priceNonMember: 124.05 },
    { id: 4, name: 'Dominance: 12 Vids 36 Pics every week', priceMember: 55.13, priceNonMember: 165.39 },
];

const AUTOPILOT_INFO = {
    description: "Our Digital Hands script, edit, and deliver premium stock footage so you never have to be on camera.",
    winReason: "Why it wins: It solves the \"I have no time to film\" problem instantly."
};

const PERKS = [
    { name: 'UK/US TikTok Account (1k-5k followers)', labelNonMember: 'Not Available', labelMember: 'FREE', value: 50.00 },
    { name: 'How to Prompt(Prompt Engineering)', labelNonMember: 'free', labelMember: 'FREE', value: 0 },
    { name: 'AI Tool uses', labelNonMember: 'free', labelMember: 'FREE', value: 0 },
    { name: 'AI Automation and Agents', labelNonMember: 'Not Available', labelMember: 'FREE', value: 50.00 },
    { name: 'Answer & Generative Engine Optimisation', labelNonMember: 'Not Available', labelMember: 'FREE', value: 50.00 },
    { name: 'Spend less on AI usage', labelNonMember: 'Not Available', labelMember: 'FREE', value: 50.00 },
    { name: 'US Virtual Card/Bank account Setup + $2 Free Credit', labelNonMember: 'Not Available', labelMember: 'FREE', value: 0 },
    { name: 'Online Monetization Handbook V.1', labelNonMember: 'Not Available', labelMember: 'FREE', value: 50.00 },
    { name: 'Nigeria Tax System and how to be safe Handbook', labelNonMember: 'Not Available', labelMember: 'FREE', value: 50.00 },
    { name: 'Niche-to-Context Pathway Handbook', labelNonMember: 'Not Available', labelMember: 'FREE', value: 50.00 },
    {
        name: 'Building and Investing in Startup partnership program',
        labelNonMember: 'Click Here',
        labelMember: 'Click Here',
        value: 0,
        link: '/investors'
    },
    { name: 'Consultation', labelNonMember: 'Not Available', labelMember: 'FREE', value: 0 },
];

export default function VanguardCheckoutPage() {
    const [isMember, setIsMember] = useState(true);
    const [isExistingMember, setIsExistingMember] = useState(false);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedAutopilot, setSelectedAutopilot] = useState<number | null>(null);
    const [selectedUSPackage, setSelectedUSPackage] = useState<number | null>(null);
    const [selectedHandbookV2, setSelectedHandbookV2] = useState(false);
    const [total, setTotal] = useState(COMMUNITY_PRICE);
    const [savingsText, setSavingsText] = useState("");
    const [savingsClass, setSavingsClass] = useState("");
    const [email, setEmail] = useState(""); // Email state
    const [isSquadLoaded, setIsSquadLoaded] = useState(false);

    useEffect(() => {
        // 1. Check if script is already moving or loaded
        const existingScript = document.getElementById('squad-script');

        const checkGlobal = () => {
            // @ts-ignore
            if (typeof window !== 'undefined' && (window.squad || window.Squad || window.SquadPay)) {
                console.log('Squad global detected');
                setIsSquadLoaded(true);
                return true;
            }
            return false;
        };

        if (checkGlobal()) return;

        // 2. Load script if not present
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://checkout.squadco.com/widget/squad.min.js';
            script.id = 'squad-script';
            script.async = true;

            script.onload = () => {
                console.log('Squad script loaded');
                // Poll for the global variable
                const checkInterval = setInterval(() => {
                    if (checkGlobal()) {
                        clearInterval(checkInterval);
                    }
                }, 500);

                // Safety timeout to stop polling
                setTimeout(() => clearInterval(checkInterval), 5000);
            };

            document.body.appendChild(script);
        } else {
            // Script exists but global not ready? Poll.
            const checkInterval = setInterval(() => {
                if (checkGlobal()) {
                    clearInterval(checkInterval);
                }
            }, 500);
            setTimeout(() => clearInterval(checkInterval), 5000);
        }
    }, []);

    // Payment Configuration


    const toggleService = (id: string) => {
        if (selectedServices.includes(id)) {
            setSelectedServices(selectedServices.filter(s => s !== id));
        } else {
            setSelectedServices([...selectedServices, id]);
        }
    };

    // Handle membership toggles ensuring mutual exclusivity
    const toggleMembership = () => {
        if (!isMember) {
            setIsMember(true);
            setIsExistingMember(false);
        } else {
            setIsMember(false);
        }
    };

    const toggleExistingMember = () => {
        if (!isExistingMember) {
            setIsExistingMember(true);
            setIsMember(false);
        } else {
            setIsExistingMember(false);
            // Default back to not being a member of any kind, or maybe prompt to join?
            // User flow: Uncheck existing -> standard prices.
        }
    };

    const isMemberOrExisting = isMember || isExistingMember;

    useEffect(() => {
        let newTotal = 0;
        let nonMemberTotal = 0;

        // 1. Community Fee (Only if joining now)
        if (isMember) {
            newTotal += COMMUNITY_PRICE;
            nonMemberTotal += COMMUNITY_PRICE;
        }

        // 2. Services
        SERVICES.forEach(s => {
            if (selectedServices.includes(s.id)) {
                newTotal += isMemberOrExisting ? s.priceMember : s.priceNonMember;
                nonMemberTotal += s.priceNonMember;
            }
        });

        // 3. Autopilot
        if (selectedAutopilot) {
            const plan = AUTOPILOT_PLANS.find(p => p.id === selectedAutopilot);
            if (plan) {
                newTotal += isMemberOrExisting ? plan.priceMember : plan.priceNonMember;
                nonMemberTotal += plan.priceNonMember;
            }
        }

        // 4. US Packages
        if (selectedUSPackage) {
            const pkg = US_PACKAGES.find(p => p.id === selectedUSPackage);
            if (pkg) {
                newTotal += pkg.price;
                nonMemberTotal += pkg.price;
            }
        }

        // 5. Handbook V.2
        if (selectedHandbookV2) {
            newTotal += isMemberOrExisting ? 30.00 : 90.00;
            nonMemberTotal += 90.00;
        }

        setTotal(newTotal);

        // Savings Display Logic
        if (isMemberOrExisting) {
            let potentialCost = 0;
            const perkValue = PERKS.reduce((acc, p) => acc + p.value, 0);

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
            if (selectedHandbookV2) {
                serviceSavings += (90.00 - 30.00);
            }

            const netSavings = serviceSavings + perkValue - (isMember ? COMMUNITY_PRICE : 0);

            if (isMember && newTotal === COMMUNITY_PRICE && selectedServices.length === 0 && !selectedAutopilot && !selectedHandbookV2 && !selectedUSPackage) {
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

    }, [isMember, isExistingMember, selectedServices, selectedAutopilot, selectedUSPackage, selectedHandbookV2, isMemberOrExisting]);

    useEffect(() => {
        console.log("VanguardCheckoutPage MOUNTED/HYDRATED");
    }, []);

    const handlePayment = () => {
        if (!email) {
            alert("Please enter your email address provided.");
            return;
        }

        const publicKey = process.env.NEXT_PUBLIC_SQUAD_PUBLIC_KEY;
        if (!publicKey) {
            console.error("Missing NEXT_PUBLIC_SQUAD_PUBLIC_KEY");
            alert("Payment error: Public Key missing (v2). Please check keys.");
            return;
        }

        // @ts-ignore
        const SquadConstructor = window.squad || window.Squad || window.SquadPay;

        if (typeof window !== 'undefined' && SquadConstructor) {
            console.log("Initializing Squadco with key:", publicKey.substring(0, 10) + "...");

            const paymentData = {
                onClose: () => { console.log('Widget closed'); },
                onLoad: () => { console.log('Widget loaded successfully'); },
                onSuccess: async (response: any) => {
                    console.log("Payment Successful:", response);

                    // Show immediate feedback
                    alert("Payment processing... Please check your email shortly.");

                    try {
                        await fetch('/api/payment-success', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                email: email,
                                amount: Math.round(total * EXCHANGE_RATE), // Send amount paid in NGN
                                name: 'Valued Member',
                                transaction_id: response.transaction_ref || response.reference
                            })
                        });
                        // alert("Payment verification email sent!"); // Optional, maybe redundant with above
                    } catch (err) {
                        console.error("Failed to track payment:", err);
                        // Don't scare the user if payment worked but tracking failed, or do? 
                        // It's better to log it; they already paid.
                    }
                },
                key: publicKey,
                email: email,
                amount: Math.round(total * EXCHANGE_RATE * 100), // Convert to NGN kobo
                currency_code: "NGN"
            };

            try {
                // @ts-ignore
                const squadInstance = new SquadConstructor(paymentData);

                if (typeof squadInstance.setup === 'function') {
                    squadInstance.setup();
                    squadInstance.open();
                } else if (typeof squadInstance.open === 'function') {
                    squadInstance.open();
                } else {
                    console.warn("Squad setup/open not found, trying function call fallback");
                    SquadConstructor(paymentData);
                }
            } catch (e) {
                console.error("Payment init error:", e);
                // Fallback attempt
                try {
                    SquadConstructor(paymentData);
                } catch (e2) {
                    console.error("Payment fallback init error:", e2);
                    alert("Payment system error. Please refresh and try again.");
                }
            }
        } else {
            console.error("Squad global not found");
            alert("Payment system is initializing. Please wait a few seconds and try again.");
        }
    };

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-display pb-40 overflow-x-hidden">
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
                    <div className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1 shrink-0">
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
                    <div className="inline-flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 mt-1 mx-auto text-center">
                        <span className="material-symbols-outlined text-blue-600 text-[16px]">credit_card</span>
                        <span className="text-[11px] font-bold text-blue-800">
                            You can pay with your local card.
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
                                    Full support. Earn Online. Investments. And massive service discounts.
                                    <span className="block mt-1 text-[10px] font-bold text-blue-600">
                                        (IF YOU ARE ALREADY A MEMBER UN-TICK HERE AND CHOOSE THE &apos;I&apos;M ALREADY A MEMBER&apos; BOX FOR MEMBERSHIP DISCOUNTS)
                                    </span>
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
                                        onChange={toggleMembership}
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

                {/* Already a Member Toggle */}
                {!isMember && (
                    <div className="flex justify-end -mt-2">
                        <label className="flex items-center gap-2 cursor-pointer group p-2 rounded-lg hover:bg-slate-100 transition-colors">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600"
                                    checked={isExistingMember}
                                    onChange={toggleExistingMember}
                                />
                                <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                </span>
                            </div>
                            <span className="text-xs font-semibold text-slate-500 group-hover:text-blue-600 select-none">
                                I&apos;m already a member
                            </span>
                        </label>
                    </div>
                )}

                {/* Warning Banner (only if neither is active) */}
                {!isMemberOrExisting && (
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
                        <React.Fragment key={service.id}>
                            <div className="service-card group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-600 hover:shadow-md">
                                <div className="flex justify-between items-start gap-3">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            <h4 className="font-bold text-base text-slate-900">{service.title}</h4>
                                            {/* @ts-ignore */}
                                            {service.tooltip && (
                                                <div className="group relative ml-2 inline-flex items-center">
                                                    <span className="material-symbols-outlined text-slate-400 text-[18px] cursor-help">info</span>
                                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none leading-relaxed">
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

                                        {service.priceMember === 0 ? (
                                            <div className="mt-3">
                                                <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                                                    Request Quote
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 mt-3">
                                                <span className="text-xl font-bold text-slate-900">
                                                    ${isMemberOrExisting ? service.priceMember : service.priceNonMember}
                                                </span>
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${isMemberOrExisting ? 'bg-blue-600/10 text-blue-600' : 'bg-red-100 text-red-700'}`}>
                                                    {isMemberOrExisting ? 'Member Price' : 'Non-Member (x3)'}
                                                </span>
                                            </div>
                                        )}
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

                            {/* Inject US Packages Section after Nigeria Business (id: nigeria-business) */}
                            {service.id === 'nigeria-business' && (
                                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                                    <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-blue-600">flag</span>
                                        US all inclusive Packages-Returning from completion of FORM 3C, please choose your package
                                        <div className="group relative ml-1 inline-flex items-center">
                                            <span className="material-symbols-outlined text-slate-400 text-[18px] cursor-help">info</span>
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none leading-relaxed">
                                                <p className="mb-2">please choose this if you have completed FORM 3C. DO NOT choose if you have not completed FORM 3C</p>
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                                            </div>
                                        </div>
                                    </h3>
                                    <div className="space-y-3">
                                        {US_PACKAGES.map(pkg => (
                                            <label
                                                key={pkg.id}
                                                className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${selectedUSPackage === pkg.id ? 'bg-blue-50 border-blue-600 ring-1 ring-blue-600' : 'border-slate-100 hover:bg-slate-50 hover:border-blue-600/30'}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSelectedUSPackage(selectedUSPackage === pkg.id ? null : pkg.id);
                                                }}
                                            >
                                                <div>
                                                    <div className="font-bold text-sm text-slate-800">{pkg.name}</div>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-sm font-bold text-slate-600">
                                                            ${pkg.price}
                                                        </span>
                                                    </div>
                                                </div>
                                                <input
                                                    type="radio"
                                                    name="us-package"
                                                    className="h-5 w-5 text-blue-600 border-slate-300 focus:ring-blue-600"
                                                    checked={selectedUSPackage === pkg.id}
                                                    onChange={() => setSelectedUSPackage(pkg.id)}
                                                />
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}

                    {/* Autopilot Section */}
                    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                        <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-blue-600">smart_toy</span>
                            Autopilot Management
                            <div className="group relative ml-1 inline-flex items-center">
                                <span className="material-symbols-outlined text-slate-400 text-[18px] cursor-help">info</span>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none leading-relaxed">
                                    <p className="mb-2">{AUTOPILOT_INFO.description}</p>
                                    <p className="font-bold text-yellow-400">{AUTOPILOT_INFO.winReason}</p>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                                </div>
                            </div>
                        </h3>
                        <div className="space-y-3">
                            {AUTOPILOT_PLANS.map(plan => (
                                <label
                                    key={plan.id}
                                    className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${selectedAutopilot === plan.id ? 'bg-blue-50 border-blue-600 ring-1 ring-blue-600' : 'border-slate-100 hover:bg-slate-50 hover:border-blue-600/30'}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedAutopilot(selectedAutopilot === plan.id ? null : plan.id);
                                    }}
                                >
                                    <div>
                                        <div className="font-bold text-sm text-slate-800">{plan.name}</div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-sm font-bold text-slate-600">
                                                ${isMemberOrExisting ? plan.priceMember : plan.priceNonMember}
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

                    {/* Online Monetization Handbook V.2 */}
                    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                        <div className="flex justify-between items-start gap-3">
                            <div className="flex-1">
                                <h4 className="font-bold text-base text-slate-900">Online Monetization Handbook V.2</h4>
                                <p className="text-xs text-slate-500 mt-1 mb-2 italic">
                                    Advanced strategies for scaling your digital income.
                                </p>
                                <div className="flex items-center gap-2 mt-3">
                                    <span className="text-xl font-bold text-slate-900">
                                        ${isMemberOrExisting ? '30.00' : '90.00'}
                                    </span>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${isMemberOrExisting ? 'bg-blue-600/10 text-blue-600' : 'bg-red-100 text-red-700'}`}>
                                        {isMemberOrExisting ? 'Member Price' : 'Non-Member (x3)'}
                                    </span>
                                </div>
                            </div>
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-6 w-6 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600"
                                    checked={selectedHandbookV2}
                                    onChange={() => setSelectedHandbookV2(!selectedHandbookV2)}
                                />
                                <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0">
                                    {selectedHandbookV2 && (
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Perks Section */}
                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                        <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-blue-600">redeem</span>
                            Exclusive Perks
                        </h3>

                        {PERKS.map((perk, i) => (
                            // @ts-ignore
                            perk.link ? (
                                <a
                                    key={i}
                                    href={perk.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block mt-3 mb-2 p-3 bg-blue-600 rounded-xl relative overflow-hidden group hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/10`}
                                >
                                    <div className="relative z-10 flex justify-between items-center text-white">
                                        <div className="text-sm font-bold pr-4">{perk.name}</div>
                                        <div className="flex items-center gap-1 text-xs font-bold bg-white/20 px-2 py-1 rounded whitespace-nowrap group-hover:bg-white/30 transition-colors">
                                            {isMemberOrExisting ? perk.labelMember : perk.labelNonMember}
                                            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <div key={i} className={`flex justify-between items-center py-2 ${i < PERKS.length - 1 ? 'border-b border-slate-200' : ''}`}>
                                    <div className="text-xs font-medium text-slate-700">{perk.name}</div>
                                    <div className={`font-bold text-sm ${isMemberOrExisting ? 'text-green-600' : 'text-slate-800'}`}>
                                        {/* @ts-ignore */}
                                        {isMemberOrExisting ? perk.labelMember : perk.labelNonMember}
                                    </div>
                                </div>
                            )
                        ))}

                        {!isMemberOrExisting && (
                            <div className="mt-3 text-[10px] text-red-600 bg-red-50 p-2 rounded italic">
                                *Without membership, these perks are charged at standard consulting rates.
                            </div>
                        )}
                    </div>

                </div>
            </main>


            {/* Footer */}
            <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <div className="w-full max-w-lg bg-white p-4 border-t border-slate-200 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] pointer-events-auto">
                    <div className="flex flex-col gap-3">
                        {/* Email Input */}
                        <div className="w-full">
                            <input
                                type="email"
                                placeholder="Enter your email to receive receipt"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm"
                            />
                        </div>

                        <div className="flex justify-between items-end px-1">
                            <div className="flex-col">
                                <span className="text-xs text-slate-400 font-medium">Total Due Now</span>
                                <span className="flex items-center gap-1">
                                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full mt-1 table ${savingsClass}`}>
                                        {savingsText}
                                    </span>
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-3xl font-black text-slate-900 tracking-tighter">${total.toFixed(2)}</span>
                                <div className="text-xs text-slate-500 font-medium">~₦{(total * EXCHANGE_RATE).toLocaleString()}</div>
                            </div>
                        </div>

                        <button
                            onClick={handlePayment}
                            className="relative overflow-hidden w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-800 text-white font-bold h-14 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-600/30 group disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-400"
                        >
                            <span className="relative z-10 text-lg">Click to Pay</span>
                            <span className="material-symbols-outlined relative z-10 text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
