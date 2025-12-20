"use client";

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';

const RESOURCES_CONTENT: Record<string, {
    title: string;
    subtitle: string;
    date: string;
    category: string;
    content: React.ReactNode;
}> = {
    "professional-headshots-with-ai": {
        title: "The New Era of Professional AI Photography",
        subtitle: "Creating Studio-Quality Headshots with Nano Banana Pro",
        date: "December 20, 2025",
        category: "AI Image",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                {/* Introduction */}
                <section>
                    <p className="text-lg mb-6">
                        Gone are the days when a professional profile picture required scheduling a photographer,
                        renting a studio, and waiting weeks for edits. The landscape has shifted. With advanced AI
                        generators like Nano Banana Pro, your next LinkedIn avatar or business card asset is literally
                        one prompt away.
                    </p>
                    <p className="text-lg">
                        Nano Banana Pro has fundamentally changed personal branding. Forget expensive gear and
                        complex post-production software. All you need is a clear vision and an AI that grasps the
                        nuances of professional imagery. Let's explore how to engineer prompts that deliver
                        polished, corporate-grade headshots that stand toe-to-toe with traditional photography.
                    </p>
                </section>

                {/* Why Nano Banana Pro */}
                <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Why Choose Nano Banana Pro?</h2>
                    <p className="mb-6">
                        This isn't your average image generator. Nano Banana Pro is engineered for precision and
                        professional aesthetics. For headshots specifically, it offers distinct advantages:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-neon-green font-bold mb-2">Precision Identity</h3>
                            <p className="text-sm">Maintains accurate facial structure and distinctive features.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-neon-green font-bold mb-2">Corporate Styling</h3>
                            <p className="text-sm">Intuitively understands business-appropriate grooming and attire.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-neon-green font-bold mb-2">Studio Lighting</h3>
                            <p className="text-sm">Replicates sophisticated multi-point lighting setups perfectly.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-neon-green font-bold mb-2">Print Ready</h3>
                            <p className="text-sm">Generates high-fidelity assets suitable for both digital and print media.</p>
                        </div>
                    </div>
                </section>

                {/* 6 Essential Elements */}
                <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-8">6 Pillars of the Perfect Headshot Prompt</h2>

                    <div className="space-y-8">
                        {/* 1. Lighting */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">1. Lighting Architecture</h3>
                            <p className="mb-4">
                                Lighting defines the mood. In studio photography, light is sculpted to add depth and life.
                                Replicate this by being prescriptive.
                            </p>
                            <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-neon-green">
                                <p className="italic text-gray-400">
                                    "Soft, dimensional studio lighting that sculpts facial features, adding a subtle catchlight in the eyes."
                                </p>
                            </div>
                            <p className="mt-4 text-sm">
                                The <strong>catchlight</strong>—that tiny reflection in the iris—is crucial. It's the difference between a lifeless digital render and a vibrant, engaging portrait.
                            </p>
                        </div>

                        {/* 2. Composition */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">2. Strategic Composition</h3>
                            <p className="mb-4">
                                Don't leave framing to chance. A bad crop can ruin a good image. Direct the AI clearly:
                            </p>
                            <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-neon-green mb-4">
                                <p className="italic text-gray-400">
                                    "Frame from the chest up, allowing ample negative space above the head for cropping."
                                </p>
                            </div>
                            <p className="mb-4">
                                And for the pose:
                            </p>
                            <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-neon-green">
                                <p className="italic text-gray-400">
                                    "Subject facing the camera with a confident, approachable expression."
                                </p>
                            </div>
                        </div>

                        {/* 3. Attire */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">3. Purposeful Styling</h3>
                            <p className="mb-4">
                                Your wardrobe signals your industry standing. Be specific about textures to enhance realism.
                            </p>
                            <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-neon-green">
                                <p className="italic text-gray-400">
                                    "Wearing a modern navy blazer, hair styled professionally but naturally, with crisp focus on individual strands."
                                </p>
                            </div>
                            <p className="mt-4 text-sm">
                                Adding details like <em>"crisp focus on individual strands"</em> forces the AI to render high-frequency details, avoiding that overly smooth "plastic" look.
                            </p>
                        </div>

                        {/* 4. Background */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">4. Background Discipline</h3>
                            <p className="mb-4">
                                The focus should be you, not your bookshelf. Keep it clean.
                            </p>
                            <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-neon-green">
                                <p className="italic text-gray-400">
                                    "A clean, solid-colored neutral studio backdrop."
                                </p>
                            </div>
                        </div>

                        {/* 5. Technicals */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">5. Technical Fidelity</h3>
                            <p className="mb-4">
                                Ensure usability by requesting specs.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                                <li>High resolution (4k or higher)</li>
                                <li>Sharp focus throughout the face</li>
                                <li>Color-balanced and standard exposure</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* The Master Prompt */}
                <section className="my-16">
                    <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-700 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg width="100" height="100" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                        </div>
                        <h2 className="text-2xl font-display font-bold text-neon-green mb-6">The Master Prompt</h2>
                        <div className="bg-black/50 p-6 rounded-lg font-mono text-sm text-gray-300 border border-gray-800">
                            "A professional, ultra-high-resolution profile photograph, preserving the exact facial identity and structure of the input subject. Compose from the chest up, ensuring ample negative space above the head for cropping versatility. Subject is facing the camera with a confident, warm, and approachable expression. Attire: A contemporary tailored blazer, hair styled in a natural yet professional manner, emphasizing crisp focus on texture and individual strands. Lighting: Soft, dimensional studio illumination that defines features and creates a vital catchlight in the eyes. Background: A distraction-free, solid neutral studio backdrop creating a timeless aesthetic."
                        </div>
                        <div className="mt-4 flex gap-4">
                            <button
                                className="px-4 py-2 bg-neon-green/10 text-neon-green rounded-lg hover:bg-neon-green/20 transition-all font-bold text-sm border border-neon-green/50"
                                onClick={() => navigator.clipboard.writeText("A professional, ultra-high-resolution profile photograph, preserving the exact facial identity and structure of the input subject. Compose from the chest up, ensuring ample negative space above the head for cropping versatility. Subject is facing the camera with a confident, warm, and approachable expression. Attire: A contemporary tailored blazer, hair styled in a natural yet professional manner, emphasizing crisp focus on texture and individual strands. Lighting: Soft, dimensional studio illumination that defines features and creates a vital catchlight in the eyes. Background: A distraction-free, solid neutral studio backdrop creating a timeless aesthetic.")}
                            >
                                Copy Prompt
                            </button>
                        </div>
                    </div>
                </section>

                {/* Refinement Tips */}
                <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Refining Your Results</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Iterate</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>• Check different lighting temperatures (warm vs cool)</li>
                                <li>• Experiment with "business casual" vs "formal"</li>
                                <li>• Test varying background shades (charcoal, off-white)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Context Matters</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>• <strong>Tech/Startup:</strong> Relaxed, open collar, approachable.</li>
                                <li>• <strong>Finance/Law:</strong> Structured suits, conservative styling.</li>
                                <li>• <strong>Creative:</strong> More personality, dynamic lighting.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="bg-green-900/10 p-8 rounded-2xl border border-green-900/30">
                    <h2 className="text-2xl font-display font-bold text-white mb-4">Democratizing Professional Standards</h2>
                    <p className="mb-4">
                        The ability to synthesize professional imagery from a simple prompt is a paradigm shift. It levels the field for:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                        <li>Freelancers building a brand from scratch</li>
                        <li>Remote teams needing visual consistency</li>
                        <li>Job seekers needing a polished first impression</li>
                    </ul>
                    <p>
                        While human artistry remains irreplaceable for complex storytelling, for the specific task of the
                        "professional headshot," AI has arrived. It's accessible, affordable, and with the right prompt,
                        indistinguishable from magic.
                    </p>
                </section>
            </div>
        )
    }
};

export default function ResourcePage({ params }: { params: { slug: string } }) {
    const resource = RESOURCES_CONTENT[params.slug];

    if (!resource) {
        notFound();
    }

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Link */}
                <div className="mb-12">
                    <a href="/toolkit" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        ← Back to Toolkit
                    </a>
                </div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <div className="inline-block px-3 py-1 mb-6 rounded-full text-xs font-semibold bg-neon-green/10 text-neon-green border border-neon-green/20">
                        {resource.category}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        {resource.title}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {resource.subtitle}
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500">
                        <span>{resource.date}</span>
                        <span>•</span>
                        <span>5 min read</span>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-invert prose-lg max-w-none"
                >
                    {resource.content}
                </motion.article>
            </div>
        </div>
    );
}
