"use client";

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { use } from 'react';

const PROMPTS_CONTENT: Record<string, {
    title: string;
    subtitle: string;
    date: string;
    category: string;
    content: React.ReactNode;
}> = {
    "nano-banana-prompt-tutorial-series": {
        title: "Nano Banana Prompt Tutorial Series",
        subtitle: "A hidden collection of Nano Banana prompts to make your images 10x better.",
        date: "December 20, 2025",
        category: "AI Image",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg mb-6">
                        Unlock the full potential of Nano Banana with this curated tutorial series. These prompts explore advanced techniques for lighting, composition, and style transfer.
                    </p>
                </section>
                <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Core Techniques</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-neon-green font-bold mb-2">Cinematic Lighting</h3>
                            <p className="text-sm mb-4">Master the art of virtual studio lighting.</p>
                            <code className="block bg-black/50 p-3 rounded text-xs text-blue-300">
                                "cinematic lighting, volumetric fog, rim light, dramatic shadows, 8k resolution, photorealistic"
                            </code>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-neon-green font-bold mb-2">Texture & Detail</h3>
                            <p className="text-sm mb-4">Push the model to render insane levels of detail.</p>
                            <code className="block bg-black/50 p-3 rounded text-xs text-blue-300">
                                "macro photography, hyper-detailed, intricate textures, pore-level detail, sharp focus, f/1.8"
                            </code>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "nano-banana-prompt-to-create-more-realistic-photo": {
        title: "Nano Banana Realism Booster",
        subtitle: "Create people that look 100% real with this specific prompting technique.",
        date: "November 15, 2025",
        category: "AI Image",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg mb-6">
                        achieving true photorealism requires specific keywords that trigger the model's photography datasets. Use this prompt architecture to banish the "AI look."
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6">The Realism Prompt</h2>
                    <div className="bg-gray-900/50 p-6 rounded-lg border-l-4 border-neon-green">
                        <p className="font-mono text-sm text-gray-300">
                            "Raw photo, shot on Fujifilm GFX 100S, 85mm f/1.2 lens, natural skin texture, slight skin imperfections, unedited, candid moment, soft daylight, neutral color grading."
                        </p>
                    </div>
                </section>
            </div>
        )
    },
    "character-design-sheet": {
        title: "Character Design Sheet Generator",
        subtitle: "Generate full character concept sheets with multiple angles and expressions.",
        date: "November 20, 2025",
        category: "AI Image",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg mb-6">
                        Perfect for game devs and animators. This prompt forces the AI to create a consistent character reference sheet.
                    </p>
                </section>
                <section>
                    <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4">The Prompt</h3>
                        <code className="block bg-black/50 p-4 rounded text-sm text-neon-green">
                            "Character design sheet, [Subject Description], turnaround view, front view, side view, back view, multiple facial expressions, neutral background, concept art style, clean lines, flat color."
                        </code>
                    </div>
                </section>
            </div>
        )
    },
    "wool-asmr": {
        title: "Wool ASMR Visuals",
        subtitle: "Prompts for generating satisfying, tactile wool cutting ASMR visuals.",
        date: "November 25, 2025",
        category: "AI Video",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Create soothing, hyper-realistic videos of wool being cut or manipulated. Great for background visuals.
                    </p>
                </section>
                <section>
                    <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                        <h3 className="text-neon-green font-bold mb-2">Prompt Structure</h3>
                        <p className="text-gray-300 italic mb-4">
                            "Extreme close-up macro shot, scissors slowly cutting through soft pastel pink wool, individual fibers separating, soft studio lighting, high frame rate, satisfying motion, depth of field."
                        </p>
                    </div>
                </section>
            </div>
        )
    },
    "ai-studio-3d-scene": {
        title: "AI Studio 3D Scene Builder",
        subtitle: "Have Gemini 3 build an interactive 3D scene for you.",
        date: "December 10, 2025",
        category: "AI Coding",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Use this prompt in Google AI Studio to generate Three.js code that renders a fully interactive 3D environment.
                    </p>
                </section>
                <section>
                    <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4">System Instruction</h3>
                        <code className="block bg-black/50 p-4 rounded text-sm text-neon-green">
                            "Act as a Three.js expert. Create a complete, single-file HTML/JS 3D scene. Include a [scene description, e.g., floating cyberpunk city] with orbital controls, dynamic lighting, and simple animations. Use procedural geometry where possible."
                        </code>
                    </div>
                </section>
            </div>
        )
    },
    "google-logo-3d-prompt": {
        title: "3D Google Logo Generator",
        subtitle: "Create a stunning 3D rendition of the Google logo.",
        date: "December 12, 2025",
        category: "AI Coding",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        A fun prompt to generate creative variations of the Google logo using Three.js or generative image models.
                    </p>
                </section>
                <section>
                    <div className="bg-gray-900/50 p-6 rounded-lg border-l-4 border-neon-green">
                        <p className="font-mono text-sm text-gray-300">
                            "A playful, 3D extruded Google logo made of glossy, translucent glass materials. The letters are floating in a zero-gravity environment with colorful soft balls. 4k render, octane render style."
                        </p>
                    </div>
                </section>
            </div>
        )
    },
    "ltx-official-prompt-guide": {
        title: "LTX Official Prompt Guide",
        subtitle: "Better prompts for camera motion, mood, and sound in LTX.",
        date: "December 1, 2025",
        category: "AI Video",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        LTX responds best to specific camera terminology. Use this guide to control the director's lens.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6">Camera Movements</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="bg-cyber-card p-4 rounded border border-gray-800">
                            <strong className="text-neon-green">Dolly In/Out:</strong> Moves the camera physically closer or further. "Dolly in slowly on the subject."
                        </li>
                        <li className="bg-cyber-card p-4 rounded border border-gray-800">
                            <strong className="text-neon-green">Truck Left/Right:</strong> Moves the camera laterally. "Truck left following the car."
                        </li>
                        <li className="bg-cyber-card p-4 rounded border border-gray-800">
                            <strong className="text-neon-green">Pan:</strong> Rotates the camera horizontally. "Pan right to reveal the landscape."
                        </li>
                    </ul>
                </section>
            </div>
        )
    },
    "let-chatgpt-disagree-with-you": {
        title: "The Skeptic's Prompt",
        subtitle: "Make ChatGPT skeptical, fact-check your logic, and argue back.",
        date: "December 5, 2025",
        category: "Thinking",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Tired of AI agreeing with everything you say? Use this system prompt to turn ChatGPT into a critical thinking partner.
                    </p>
                </section>
                <section>
                    <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4">System Prompt</h3>
                        <code className="block bg-black/50 p-4 rounded text-sm text-neon-green whitespace-pre-wrap">
                            "You are a critical thinker and a skeptic. Your goal is to stress-test my ideas. Do not blindly agree with me. If I make a claim, ask for evidence. If my logic is flawed, point it out ruthlessly but professionally. Play Devil's Advocate for every major point I make. Prioritize truth and logic over politeness."
                        </code>
                    </div>
                </section>
            </div>
        )
    },
    "nano-banana-prompt-library": {
        title: "Nano Banana Prompt Library",
        subtitle: "A comprehensive collection of styles and effects.",
        date: "December 2, 2025",
        category: "AI Image",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Access our vetted library of high-performance prompts for Nano Banana.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Popular Styles</h2>
                    <ul className="space-y-4">
                        <li className="bg-gray-900 p-4 rounded">
                            <span className="font-bold text-neon-green">Cyberpunk Noir:</span> "Neon-drenched rainy streets, deep shadows, high contrast, tech-wear fashion, cyan and magenta color palette."
                        </li>
                        <li className="bg-gray-900 p-4 rounded">
                            <span className="font-bold text-neon-green">Ethereal Fantasy:</span> "Soft dreamlike atmosphere, floating particles, bioluminescent flora, pastel colors, watercolour texture."
                        </li>
                        <li className="bg-gray-900 p-4 rounded">
                            <span className="font-bold text-neon-green">Corporate Memphis 3D:</span> "Clean 3D render, soft clay material, business characters, minimal abstract background, bright cheerful colors."
                        </li>
                    </ul>
                </section>
            </div>
        )
    },
    "let-ai-more-like-a-human": {
        title: "Humanizer Prompt",
        subtitle: "Make AI-generated content sound more natural and human-like.",
        date: "November 10, 2025",
        category: "Thinking",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Strip away the robotic "AI voice" with these instructions.
                    </p>
                </section>
                <section>
                    <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4">Style Instructions</h3>
                        <code className="block bg-black/50 p-4 rounded text-sm text-neon-green whitespace-pre-wrap">
                            "Write in a conversational, engaging tone. Use sentence fragments occasionally for effect. Avoid complex jargon and overused AI transition words like 'Furthermore', 'In conclusion', or 'Delve'. Use analogies to explain complex topics. vary sentence length to create a dynamic rhythm. Write as if you are speaking to a friend."
                        </code>
                    </div>
                </section>
            </div>
        )
    },
    "let-your-ai-stop-lying": {
        title: "The Truthfulness Protocol",
        subtitle: "Prevent AI from hallucinations and ensure truthful output.",
        date: "November 12, 2025",
        category: "Thinking",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Critical for research and factual tasks. This prompt forces the model to admit ignorance rather than inventing facts.
                    </p>
                </section>
                <section>
                    <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4">System Instruction</h3>
                        <code className="block bg-black/50 p-4 rounded text-sm text-neon-green whitespace-pre-wrap">
                            "You are a factual research assistant. Only provide information that you are certain is true. If you do not know the answer or if the information is not available in your training data, state 'I do not know' clearly. Do not speculate or halluncinate citations. If providing a fact, try to cite a source or the logic behind it."
                        </code>
                    </div>
                </section>
            </div>
        )
    },
    "asmr-prompt": {
        title: "Professional ASMR Scripter",
        subtitle: "Generate scripts and scene descriptions for ASMR videos.",
        date: "November 28, 2025",
        category: "AI Video",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Designed to help ASMR creators plan their content with triggers and audio cues.
                    </p>
                </section>
                <section>
                    <div className="bg-gray-900/50 p-6 rounded-lg border-l-4 border-neon-green">
                        <p className="font-mono text-sm text-gray-300">
                            "Create a script for a [Type of ASMR, e.g., Cranial Nerve Exam] roleplay. Include column for 'Visual Action' and 'Audio Trigger'. Focus on soft-spoken dialogue, personal attention, and specific object sounds like tapping, scratching, or crinkling."
                        </p>
                    </div>
                </section>
            </div>
        )
    },
    "ugc-prompt": {
        title: "UGC Content Creator",
        subtitle: "Generate scripts for User-Generated Content style ads.",
        date: "November 30, 2025",
        category: "AI Video",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Create authentic-sounding scripts for TikTok/Reels style organic ads.
                    </p>
                </section>
                <section>
                    <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4">The Hook Prompt</h3>
                        <code className="block bg-black/50 p-4 rounded text-sm text-neon-green">
                            "Write a 30-second UGC video script for [Product]. Start with a strong visual or problem-based hook in the first 3 seconds to stop the scroll. Use natural, unpolished language. Include a clear Call to Action at the end. Visual style: selfie mode, casual lighting."
                        </code>
                    </div>
                </section>
            </div>
        )
    },
    "sora2-official-prompt-guide": {
        title: "Sora 2 Official Guide",
        subtitle: "Complete tutorial for OpenAI's latest video model.",
        date: "December 5, 2025",
        category: "AI Video",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Master the new capabilities of Sora 2, including variable frame rates and seamless looping.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Key Features & Prompts</h2>
                    <div className="grid gap-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-neon-green font-bold">Seamless Loop</h3>
                            <p className="text-sm text-gray-300 mb-2">Create perfect background assets.</p>
                            <code className="text-xs text-blue-300">"--loop, perfect loop, seamless transition, infinite motion"</code>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-neon-green font-bold">Time Manipulation</h3>
                            <p className="text-sm text-gray-300 mb-2">Control the flow of time.</p>
                            <code className="text-xs text-blue-300">"slow motion, time-lapse, bullet time, speed ramp"</code>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "chatgpt-for-any-role": {
        title: "Universal Persona Prompt",
        subtitle: "Make ChatGPT play any role you need perfectly.",
        date: "December 8, 2025",
        category: "Writing",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        The "Act As" framework is the most powerful tool in your kit. Here is the ultimate template.
                    </p>
                </section>
                <section>
                    <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4">Persona Template</h3>
                        <code className="block bg-black/50 p-4 rounded text-sm text-neon-green whitespace-pre-wrap">
                            "Act as a world-class [Role, e.g., Copywriter]. You have 20 years of experience in [Field] and are known for [Specific Style]. Your goal is to [Objective]. Audience: [Target Audience]. Tone: [Desired Tone]. Constraints: [Any limitations]. Start by asking me clarifying questions if needed."
                        </code>
                    </div>
                </section>
            </div>
        )
    }
};

export default function PromptPage({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrap the promise with React.use()
    const { slug } = use(params);
    const content = PROMPTS_CONTENT[slug];

    if (!content) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-32 pb-20">
            {/* Background elements */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black -z-10" />
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none -z-10" />

            <article className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Back Link */}
                    <a
                        href="/toolkit?view=Prompts"
                        className="inline-flex items-center text-neon-green hover:underline mb-8 font-medium transition-all"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>
                        Back to Toolkit
                    </a>

                    {/* Header */}
                    <header className="mb-12 text-center">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-neon-green text-sm font-semibold mb-6">
                            {content.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            {content.title}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            {content.subtitle}
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500">
                            <span>{content.date}</span>
                            <span>•</span>
                            <span>Antigravity Team</span>
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        {content.content}
                    </div>

                </motion.div>
            </article>
        </div>
    );
}
