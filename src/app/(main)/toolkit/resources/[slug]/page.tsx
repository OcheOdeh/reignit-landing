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
    },
    "notebooklm-video-overview-custom": {
        title: "Customize your video overview in NotebookLM",
        subtitle: "Your video overviews can finally match your brand or aesthetic. For free.",
        date: "December 20, 2025",
        category: "AI Video",
        content: (
            <div className="space-y-12 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg mb-6">
                        NotebookLM has revolutionized how we interact with documents, but its video overviews often felt generic. Now, you can customize the aesthetic to match your specific needs, brand, or audience.
                    </p>
                    <p className="text-lg">
                        Copy these prompts directly into NotebookLM to transform your video overviews.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Style Guide & Prompts</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-700 text-gray-400 text-sm uppercase tracking-wider">
                                    <th className="p-4 font-semibold">Style Name</th>
                                    <th className="p-4 font-semibold">Visual Keywords</th>
                                    <th className="p-4 font-semibold">Best For</th>
                                    <th className="p-4 font-semibold w-1/3">Prompt</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                <tr>
                                    <td className="p-4 text-white font-bold">3D Isometric</td>
                                    <td className="p-4 text-sm">3D blocks, isometric perspective, floating panels</td>
                                    <td className="p-4 text-sm">System architecture, multi step workflows</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a 3D isometric style overview with floating panels, soft shadows, and clean tech colors that show how each part of the system connects in a single structured scene.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Paper Cutout Craft</td>
                                    <td className="p-4 text-sm">Layered paper shapes, shadows, soft textures</td>
                                    <td className="p-4 text-sm">Friendly explainers, humanized stories</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a soft paper cutout style overview using layered shapes, gentle shadows, and warm colors that make the product feel friendly, simple, and human centered.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Neon HUD Futuristic</td>
                                    <td className="p-4 text-sm">Glowing lines, HUD elements, radar circles</td>
                                    <td className="p-4 text-sm">AI agents, automation, future of work</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a futuristic neon HUD style overview with glowing lines, circular scanners, and grid backgrounds that make the AI and automation feel advanced and high tech.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Minimal Tech</td>
                                    <td className="p-4 text-sm">White space, thin lines, clean UI</td>
                                    <td className="p-4 text-sm">SaaS overview, automation tools</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a minimal tech style overview with lots of white space, thin lines, and clean UI screenshots, using only one or two accent colors for a professional and serious look.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Doodle Notebook</td>
                                    <td className="p-4 text-sm">Thick colored lines, sticky notes, messy arrows</td>
                                    <td className="p-4 text-sm">Learning summaries, one page explanations</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a doodle notebook style overview with hand drawn arrows, colorful doodles, and sticky note style boxes that explain a complex idea in a playful one page layout.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Infographic</td>
                                    <td className="p-4 text-sm">Charts, comparison tables, numbered steps</td>
                                    <td className="p-4 text-sm">Before vs after, feature comparison</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create an infographic style overview with clear charts, comparison tables, and numbered steps that present the product benefits and results in a structured and data driven way.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Meme Social</td>
                                    <td className="p-4 text-sm">Screenshots, emojis, chat bubbles</td>
                                    <td className="p-4 text-sm">Relatable pain points, day in the life</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a meme social style overview using chat bubbles, screenshots, emojis, and reaction faces that highlight a relatable problem and then introduce the product as the solution.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Vaporwave Retro</td>
                                    <td className="p-4 text-sm">Neon gradients, grids, old windows UI</td>
                                    <td className="p-4 text-sm">Creative tools, aesthetic products</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a vaporwave retro style overview with neon gradients, grid backgrounds, and retro window frames that make the product feel artistic, nostalgic, and experimental.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Dark Hacker</td>
                                    <td className="p-4 text-sm">Dark UI, code patterns, terminal look</td>
                                    <td className="p-4 text-sm">AI automation, dev tools, cybersecurity</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a dark hacker style overview with terminal like elements, code snippets, and dark UI panels that make the tool feel powerful, technical, and built for advanced users.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Corporate Clean</td>
                                    <td className="p-4 text-sm">Blue accents, icons, stock office scenes</td>
                                    <td className="p-4 text-sm">Serious product overviews, pitches</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a corporate clean style overview with blue accents, simple icons, and subtle office imagery that presents the product as reliable, trusted, and business ready.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Gradient Modern</td>
                                    <td className="p-4 text-sm">Soft gradients, rounded cards, big numbers</td>
                                    <td className="p-4 text-sm">New AI tool launch, growth charts</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a modern gradient style overview with soft gradient backgrounds, rounded cards, and big bold numbers to highlight key metrics and benefits of the product.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Flat Illustration</td>
                                    <td className="p-4 text-sm">Flat vector people, simple scenes, clean icons</td>
                                    <td className="p-4 text-sm">Onboarding flows, feature tours</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a flat illustration style overview with vector characters, simple scenes, and clean icons that walk the viewer through how to use the product step by step.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Storyboard Comic</td>
                                    <td className="p-4 text-sm">Panels, sequence frames, minimal text</td>
                                    <td className="p-4 text-sm">Problem to solution journey, user stories</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a storyboard comic style overview with multiple panels that show the user problem, the product entering the scene, and the final improved outcome in a simple sequence.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Mobile UI Mockup</td>
                                    <td className="p-4 text-sm">Phone frames, screen close ups, tap highlights</td>
                                    <td className="p-4 text-sm">App overviews, how to use in 3 steps</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a mobile UI mockup style overview with phone frames, close up screens, and tap highlights to show how to use the app in two to three simple steps.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Data Dashboard</td>
                                    <td className="p-4 text-sm">Widgets, charts, KPIs, tiles</td>
                                    <td className="p-4 text-sm">Analytics tools, CRM, BI</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a data dashboard style overview with multiple tiles, charts, and key performance numbers that show how the product helps monitor and improve important metrics.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Sticky Note Wall</td>
                                    <td className="p-4 text-sm">Note cards, tags, clusters, color coding</td>
                                    <td className="p-4 text-sm">Brainstorming, roadmaps, feature maps</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a sticky note wall style overview with color coded note cards, tags, and clusters that organize ideas, features, or tasks into clear groups.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Pastel Productivity</td>
                                    <td className="p-4 text-sm">Light backgrounds, soft icons, calm vibe</td>
                                    <td className="p-4 text-sm">Planners, habit trackers, focus tools</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a pastel productivity style overview with soft colors, simple icons, and calm layouts that make planning, habits, and focus tools feel gentle and stress free.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Bold Typography</td>
                                    <td className="p-4 text-sm">Huge text, minimal graphics, strong contrast</td>
                                    <td className="p-4 text-sm">One core message, bold claims</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a bold typography style overview with very large text, minimal graphics, and strong contrast so that one main message is instantly readable and impossible to ignore.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Photo plus UI Overlay</td>
                                    <td className="p-4 text-sm">Real photos with UI panels on top</td>
                                    <td className="p-4 text-sm">Real life use cases plus product view</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a photo plus UI overlay style overview that mixes real life photos with floating UI panels to show exactly how the product fits into everyday work or life moments.</code></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-bold">Collage Motion</td>
                                    <td className="p-4 text-sm">Cutout photos, shapes, textures, dynamic layout</td>
                                    <td className="p-4 text-sm">Trendy edits, creator tools</td>
                                    <td className="p-4"><code className="block bg-black/50 p-3 rounded text-neon-green text-xs">Create a collage motion style overview with cutout photos, abstract shapes, and layered textures that give a trendy social media edit feeling while presenting the product story.</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    },
    "claude-use-cases": {
        title: "Claude 3.7 Use Cases",
        subtitle: "A curated collection of practical applications to unlock the full potential of Claude.",
        date: "December 20, 2025",
        category: "Claude",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Anthropic's Claude is more than a chatbot; it's a reasoning engine. We've curated and refined this collection of high-impact use cases to help you deploy Claude effectively across nonprofit operations, finance, sales, and personal projects.
                    </p>
                </section>

                {/* Nonprofits */}
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Nonprofit Operations</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Workflow Improvement Planner",
                                desc: "Transform operational bottlenecks into actionable roadmaps. Use Claude to diagnose workflow friction and engineer AI-driven solutions that amplify your capacity.",
                                model: "Sonnet 4.5",
                                feature: "Extended Thinking",
                                link: "https://claude.com/resources/use-cases/workflow-improvement-planner"
                            },
                            {
                                title: "Grant Proposal Engine",
                                desc: "Construct a scalable grant engine. Synthesize your winning proposals into a modular library, enabling rapid generation of high-quality, foundation-ready submissions.",
                                model: "Sonnet 4.5",
                                feature: "Connectors",
                                link: "https://claude.com/resources/use-cases/grant-proposal-assembly-line"
                            },
                            {
                                title: "Program Toolkit Architect",
                                desc: "Architect comprehensive program frameworks from scratch. Generate logic models, evaluation metrics, and resource guides to move seamlessly from concept to implementation.",
                                model: "Sonnet 4.5",
                                feature: "Extended Thinking",
                                link: "https://claude.com/resources/use-cases/develop-a-program-toolkit"
                            },
                            {
                                title: "AI Governance Drafter",
                                desc: "Draft robust AI governance documents, tailoring data privacy, ethical standards, and staff guidelines to align perfectly with your mission and stakeholder needs.",
                                model: "Sonnet 4.5",
                                feature: "Web Search",
                                link: "https://claude.com/resources/use-cases/generate-an-ai-policy"
                            },
                            {
                                title: "Impact Visualizer",
                                desc: "Turn raw metrics into compelling visual narratives. Convert spreadsheet data into presentation-ready dashboards that vividly demonstrate your program's impact.",
                                model: "Sonnet 4.5",
                                feature: "Extended Thinking",
                                link: "https://claude.com/resources/use-cases/visualize-program-data"
                            },
                            {
                                title: "Volunteer Management System",
                                desc: "Professionalize your volunteer operations. Generate role descriptions, onboarding flows, and communication templates to scale your volunteer force effectively.",
                                model: "Sonnet 4.5",
                                link: "https://claude.com/resources/use-cases/create-a-volunteer-management-system"
                            },
                            {
                                title: "Impact Storyteller",
                                desc: "Craft powerful impact stories. Weave quantitative data and qualitative success stories into persuasive narratives that resonate with stakeholders.",
                                model: "Sonnet 4.5",
                                link: "https://claude.com/resources/use-cases/write-an-impact-report"
                            },
                            {
                                title: "Fundraising ROI Analyzer",
                                desc: "Optimize your fundraising ROI. Analyze multi-channel performance to identify high-yield strategies and allocate resources for maximum financial impact.",
                                model: "Sonnet 4.5",
                                feature: "Connectors",
                                link: "https://claude.com/resources/use-cases/analyze-fundraising-performance"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-cyber-card p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 mb-4 h-20 overflow-hidden">{item.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">{item.model}</span>
                                    {item.feature && <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">{item.feature}</span>}
                                </div>
                                <a href={item.link} target="_blank" className="text-neon-green text-sm hover:underline font-semibold flex items-center gap-1">
                                    Open in Claude <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Finance & Sales */}
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Business & Finance</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Financial Model Decoder",
                                desc: "Decode and evolve complex financial models. Quickly grasp the logic of inherited spreadsheets and expand them with new data while maintaining structural integrity.",
                                model: "Opus 4.5",
                                feature: "Extended Thinking",
                                link: "https://claude.com/resources/use-cases/understand-and-extend-an-inherited-spreadsheet"
                            },
                            {
                                title: "Sales Deck Engineer",
                                desc: "Engineer persuasive sales decks. Generate professional layouts and data visualizations for client proposals, refining them iteratively to meet your exact standards.",
                                model: "Opus 4.5",
                                feature: "Extended, Connectors",
                                link: "https://claude.com/resources/use-cases/create-a-sales-proposal-presentation"
                            },
                            {
                                title: "Brand Consistency Automator",
                                desc: "Automate brand consistency. Encode your visual identity into a reusable skill, ensuring every presentation and document aligns perfectly with your brand standards.",
                                model: "Sonnet 4.5",
                                feature: "Skills",
                                link: "https://claude.com/resources/use-cases/package-your-brand-guidelines-in-a-skill"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-cyber-card p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 mb-4 h-20 overflow-hidden">{item.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">{item.model}</span>
                                    {item.feature && <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">{item.feature}</span>}
                                </div>
                                <a href={item.link} target="_blank" className="text-neon-green text-sm hover:underline font-semibold flex items-center gap-1">
                                    Open in Claude <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Personal */}
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Personal Creativity</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Educational Interactive Builder",
                                desc: "Create bespoke educational interactives. Turn detailed prompts into working visual reference tools for any subject, from anatomy to engineering.",
                                model: "Opus 4.5",
                                feature: "Extended Thinking",
                                link: "https://claude.com/resources/use-cases/build-interactive-diagram-tools"
                            },
                            {
                                title: "Living Goal Tracker",
                                desc: "Building living goal trackers. Transform your aspirations—whether travel, learning, or life milestones—into fully interactive, custom-built applications.",
                                model: "Opus 4.5",
                                feature: "Extended Thinking",
                                link: "https://claude.com/resources/use-cases/build-a-custom-bucket-list-app"
                            },
                            {
                                title: "Local Ecosystem Mapper",
                                desc: "Map your local ecosystem. Create interactive guides that let you select regions and export printable references for local flora and fauna.",
                                model: "Opus 4.5",
                                feature: "Extended Thinking",
                                link: "https://claude.com/resources/use-cases/design-a-local-foraging-guide"
                            },
                            {
                                title: "Aesthetic Systematizer",
                                desc: "Systematize aesthetic excellence. Teach Claude to automatically apply consistent high-quality design principles to all your generated artifacts.",
                                model: "Sonnet 4.5",
                                feature: "Skills",
                                link: "https://claude.com/resources/use-cases/elevate-claudes-design-using-skills"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-cyber-card p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 mb-4 h-20 overflow-hidden">{item.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">{item.model}</span>
                                    {item.feature && <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">{item.feature}</span>}
                                </div>
                                <a href={item.link} target="_blank" className="text-neon-green text-sm hover:underline font-semibold flex items-center gap-1">
                                    Open in Claude <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        )
    },
    "nano-banana-pro-official-guide": {
        title: "Nano Banana Pro Official Guide",
        subtitle: "10 expert techniques to produce studio-quality assets with one model.",
        date: "December 20, 2025",
        category: "AI Image",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Google's Nano Banana Pro isn't just an image generator; it's a visual synthesis engine. This guide unlocks 10 expert techniques to transform your prompting from "guessing" to "directing."
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">The Golden Rules</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">Think Like a Director</h3>
                            <p className="text-sm text-gray-400">Stop keyword stuffing. Brief the model like an artist. Use conversational edits to refine 80% correct images rather than starting over.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">Context & Specificity</h3>
                            <p className="text-sm text-gray-400">Don't say "a woman." Say "a sophisticated elderly woman in a vintage Chanel suit." Give the model background context (e.g., "for a gourmet cookbook") to drive lighting and composition.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Key Capabilities</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-neon-green mb-4">1. Visual Synthesis & Infographics</h3>
                            <p className="mb-4">Compress dense text into clean visuals. From retro 1950s infographics to technical architectural blueprints.</p>
                            <div className="bg-black/30 p-4 rounded border border-gray-700">
                                <code className="text-xs text-blue-300 block mb-2">PROMPT: Tech Diagram</code>
                                <p className="text-sm text-gray-400">"Create an orthographic blueprint that describes this building in plan, elevation, and section. Label the 'North Elevation' in technical font."</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-neon-green mb-4">2. Character Consistency</h3>
                            <p className="mb-4">Identity Locking allows you to keep facial features consistent across disparate scenarios. Perfect for storyboards and viral thumbnails.</p>
                            <div className="bg-black/30 p-4 rounded border border-gray-700">
                                <code className="text-xs text-blue-300 block mb-2">PROMPT: Viral Thumbnail</code>
                                <p className="text-sm text-gray-400">"Keep the person's features from Image 1, but change expression to surprised. Place on left, pointing to a massive avocado toast on right. Overlay text: 'Done in 3 mins!'"</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-neon-green mb-4">3. Advanced Editing & Logic</h3>
                            <p className="mb-4">Semantic in-painting allows for natural language edits. "Fill this glass with liquid" tests physics generation, while colorization brings manga to life.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-neon-green mb-4">4. Dimensional Translation (2D ↔ 3D)</h3>
                            <p className="mb-4">Turn floor plans into photorealistic interior design boards, or turn memes into 3D renders.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-neon-green mb-4">5. Structural Control</h3>
                            <p className="mb-4">Use sketches or wireframes to strictly control layout. Perfect for UI mockups or pixel art grids.</p>
                            <div className="bg-black/30 p-4 rounded border border-gray-700">
                                <code className="text-xs text-blue-300 block mb-2">PROMPT: UI Mockup</code>
                                <p className="text-sm text-gray-400">"Create a mock-up for a fintech app following these wireframe guidelines exactly."</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "antigravity": {
        title: "Antigravity",
        subtitle: "The new era of agentic development: Editor + Manager + Browser.",
        date: "December 20, 2025",
        category: "AI Coding",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Google Antigravity isn't just an IDE update; it's a paradigm shift. It combines an Editor, an Agent Manager, and a Browser into a unified "home base" for the agentic era. You are no longer just a coder; you are an architect of solutions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Three Core Work Surfaces</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">1. Agent Manager</h3>
                            <p className="text-sm text-gray-400"> Orchestrate agents across workspaces. Delegate tasks, manage background processes, and "multi-thread" your development workflow.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">2. Editor</h3>
                            <p className="text-sm text-gray-400"> Deeply integrated with agents. Tab-autocomplete on steroids, context-aware refactoring, and seamless handoffs between manual code and agent generation.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">3. Browser</h3>
                            <p className="text-sm text-gray-400"> A headless browser under agent control. Agents can click, scroll, and test your features in real-time, closing the verification loop.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Artifacts System</h2>
                    <p className="mb-6">Antigravity communicates through structured artifacts, not just chat bubbles.</p>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <span className="text-neon-green font-bold">01</span>
                            <div>
                                <h4 className="font-bold text-white">Task List</h4>
                                <p className="text-sm text-gray-400">Real-time tracking of agent progress and sub-tasks.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-neon-green font-bold">02</span>
                            <div>
                                <h4 className="font-bold text-white">Implementation Plan</h4>
                                <p className="text-sm text-gray-400">A research-backed roadmap generated *before* code changes. Review and comment like a Google Doc.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-neon-green font-bold">03</span>
                            <div>
                                <h4 className="font-bold text-white">Walkthrough</h4>
                                <p className="text-sm text-gray-400">Proof of work. Screenshots, diffs, and test results allowing you to merge with confidence.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">New Workflows</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-neon-green mb-2">Visual Feedback Revolution</h3>
                        <p className="text-gray-400">Mark up screenshots like a design tool. Give agents precise visual feedback on UI implementations.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-neon-green mb-2">Closed-Loop Verification</h3>
                        <p className="text-gray-400">The agent doesn't just write code; it runs it. It spawns a browser, interacts with the app, and verifies functionality before reporting back.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-neon-green mb-2">Background Agents</h3>
                        <p className="text-gray-400">Spin up parallel tasks. Let a background agent handle a refactor while you focus on a new feature in the foreground.</p>
                    </div>
                </section>
            </div>
        )
    },
    "chatgpt-5-1-tips": {
        title: "GPT 5.1 Prompting Masterclass",
        subtitle: "Unlock the reasoning capabilities of GPT 5.1 with these expert modes.",
        date: "December 20, 2025",
        category: "ChatGPT",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        GPT 5.1 isn't just a chatbot; it's a reasoning engine. To unlock its full potential, you need to switch modes. Here is the official breakdown of how to control its "Thought Process."
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Reasoning Modes</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-neon-purple mb-2">High Reasoning</h3>
                            <p className="text-sm text-gray-400 mb-4">Best for: Planning, Complex Analysis, Decisions.</p>
                            <div className="bg-black/30 p-3 rounded border border-gray-700">
                                <code className="text-xs text-blue-300 block mb-2">USE CASE</code>
                                <p className="text-xs text-gray-400">"Evaluate 3 product launch strategies and recommend the best one."</p>
                            </div>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-neon-purple mb-2">Minimal Reasoning</h3>
                            <p className="text-sm text-gray-400 mb-4">Best for: Quick tasks, Summaries, Fast Answers.</p>
                            <div className="bg-black/30 p-3 rounded border border-gray-700">
                                <code className="text-xs text-blue-300 block mb-2">USE CASE</code>
                                <p className="text-xs text-gray-400">"Convert this project update into 5 clear bullet points."</p>
                            </div>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-neon-purple mb-2">Verbosity Control</h3>
                            <p className="text-sm text-gray-400 mb-4">Control output length: Brief, Moderate, or Detailed.</p>
                            <div className="bg-black/30 p-3 rounded border border-gray-700">
                                <code className="text-xs text-blue-300 block mb-2">USE CASE</code>
                                <p className="text-xs text-gray-400">"Detailed: Write a full tutorial with steps and illustrations."</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Advanced Techniques</h2>
                    <div className="space-y-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800 flex gap-6 items-start">
                            <div className="bg-neon-purple/20 p-3 rounded-lg text-neon-purple font-mono font-bold">CoT</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Chain of Thought</h3>
                                <p className="text-gray-400 text-sm mb-2">Force the model to think step-by-step.</p>
                                <p className="text-xs text-gray-500 italic">"Review quarterly data in stages, analyze trends, and THEN finish with top 3 priorities."</p>
                            </div>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800 flex gap-6 items-start">
                            <div className="bg-neon-purple/20 p-3 rounded-lg text-neon-purple font-mono font-bold">ToT</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Tree of Thought</h3>
                                <p className="text-gray-400 text-sm mb-2">Force the model to explore multiple possibilities.</p>
                                <p className="text-xs text-gray-500 italic">"Propose three completely different market entry strategies. Analyze the risk, cost, and reward for EACH. Then recommend the winner."</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "google-ai-studio-tutorials": {
        title: "Google AI Studio Tutorials",
        subtitle: "Build apps in minutes with Vibe Coding and Maps Grounding.",
        date: "December 20, 2025",
        category: "AI Coding",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Google AI Studio is evolving. From "Vibe Coding" to real-world grounding, here is how to build the next generation of apps.
                    </p>
                </section>

                <section>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Vibe Coding</h2>
                            <p className="text-gray-400 mb-4">Coding is no longer about syntax; it's about expression. "Vibe Coding" in AI Studio lets you describe functionality in natural language, and Gemini handles the implementation.</p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>Type simple prompts like "Create a Python function that greets a user."</li>
                                <li>Use your VOICE to dictate code structure.</li>
                                <li>Iterate instantly with the "Run" button.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Maps Grounding</h2>
                            <p className="text-gray-400 mb-4">Connect your AI to the real world. Google Maps Grounding allows Gemini to answer location-based queries with real-time accuracy.</p>
                            <div className="bg-black/30 p-4 rounded border border-gray-700">
                                <code className="text-xs text-blue-300 block mb-2">PROMPT</code>
                                <p className="text-sm text-gray-400">"Build a restaurant finder for my current location using Google Maps data."</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">New Features</h2>
                    <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">App Gallery</h3>
                                <p className="text-sm text-gray-400 mb-4">Don't start from scratch. Clone existing apps from the Gallery—from simple chatbots to complex image generators—and modify them to fit your needs.</p>
                            </div>
                            <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-700 pt-4 md:pt-0 md:pl-8">
                                <h3 className="text-xl font-bold text-white mb-2">Annotation Mode</h3>
                                <p className="text-sm text-gray-400 mb-4">Tune models faster. Highlight text you like (or don't like) to teach the model your preferred style or tone in seconds.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "google-agents-free-resources": {
        title: "Google Agents Free Resources",
        subtitle: "From tools to MCP to production, completely free.",
        date: "December 20, 2025",
        category: "agents",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Google has released a completely free ecosystem for building powerful AI agents. This resource aggregates the essential tools and frameworks you need to go from prototype to production.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">The Ecosystem</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">Tools</h3>
                            <p className="text-sm text-gray-400">Vertex AI and Google AI Studio provide the foundation. Access Gemini models, manage API keys, and prototype instantly.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">MCP</h3>
                            <p className="text-sm text-gray-400">Model Context Protocol. Connect Gemini to your local files, databases, and APIs securely. No more copying and pasting massive context.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">Production</h3>
                            <p className="text-sm text-gray-400">Deploy your agents on Cloud Run. Scalable, serverless, and production-ready with enterprise-grade security.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "100-llm-apps-templates": {
        title: "100+ LLM App Templates",
        subtitle: "Production-ready AI app templates, from RAG to voice agents.",
        date: "December 17, 2025",
        category: "agents templates",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Why start from scratch? Access over 100 production-ready templates for building LLM applications. These aren't just snippets; they are full deployable architectures.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Categories</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {["RAG Systems", "Voice Agents", "Multimodal Analysis", "Enterprise Search", "Coding Assistants", "Data Extractors", "Social Media Bots", "Customer Support"].map((cat, i) => (
                            <div key={i} className="bg-cyber-card border border-gray-800 p-4 rounded text-center hover:border-neon-green transition-colors cursor-default">
                                <span className="text-sm text-gray-300">{cat}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Featured Templates</h2>
                    <div className="space-y-4">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800 flex justify-between items-center group">
                            <div>
                                <h3 className="font-bold text-white group-hover:text-neon-green transition-colors">Customer Support Voice Agent</h3>
                                <p className="text-sm text-gray-500">Real-time voice interaction with RAG-based knowledge retrieval.</p>
                            </div>
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">Python</span>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800 flex justify-between items-center group">
                            <div>
                                <h3 className="font-bold text-white group-hover:text-neon-green transition-colors">Legal Document Analyzer</h3>
                                <p className="text-sm text-gray-500">Autonomous synthesis of complex contracts and legal briefs.</p>
                            </div>
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">TypeScript</span>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800 flex justify-between items-center group">
                            <div>
                                <h3 className="font-bold text-white group-hover:text-neon-green transition-colors">Personal Shopper Agent</h3>
                                <p className="text-sm text-gray-500">Multimodal agent that identifies products from images and finds best prices.</p>
                            </div>
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">Python</span>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "claude-skill-market": {
        title: "Claude Skill Market",
        subtitle: "2,277 Claude Skills — all free, open-source, and ready to use.",
        date: "December 16, 2025",
        category: "Claude",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Supercharge your Claude workflow with the Skill Market. Access a library of over 2,000 open-source skills designed to handle specific tasks with expert precision.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Popular Skills</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">Counting & Logic</h3>
                            <p className="text-sm text-gray-400">Enhanced mathematical reasoning and precise object counting for data analysis.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">Creative Writing</h3>
                            <p className="text-sm text-gray-400">Specialized personas for sci-fi, copy, poetry, and technical documentation.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">Code Analysis</h3>
                            <p className="text-sm text-gray-400">Deep inspection tools for auditing security vulnerabilities and optimization.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">How to Use</h2>
                    <ol className="list-decimal list-inside space-y-4 text-gray-400">
                        <li>Browse the market and find a skill that fits your needs.</li>
                        <li>Copy the skill definition (system prompt).</li>
                        <li>Paste it into your Claude Project instructions or custom instructions.</li>
                        <li>Enjoy expert-level performance on that specific task.</li>
                    </ol>
                </section>
            </div>
        )
    },
    "customize-your-video-overview-in-notebooklm": {
        title: "Customize Your Video Overview",
        subtitle: "Your AI video overviews can finally match your brand or aesthetic. For free.",
        date: "December 18, 2025",
        category: "notebooklm",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        NotebookLM has unlocked a new level of control. You can now use custom instructions to direct the "Deep Dive" audio overviews, tailoring the tone, format, and focus to your specific needs.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">How It Works</h2>
                    <p className="mb-4">Instead of a generic conversation, guide the AI hosts to act like specific personas.</p>
                    <div className="bg-cyber-card p-6 rounded-xl border border-gray-800 space-y-4">
                        <h3 className="text-xl font-bold text-white">Example Directives</h3>
                        <div className="bg-black/30 p-4 rounded border border-gray-700">
                            <code className="text-xs text-blue-300 block mb-2">Corporate Briefing</code>
                            <p className="text-sm text-gray-400">"Focus only on key metrics and action items. Keep the tone professional, concise, and suitable for an executive summary. No banter."</p>
                        </div>
                        <div className="bg-black/30 p-4 rounded border border-gray-700">
                            <code className="text-xs text-blue-300 block mb-2">Hype Podcast</code>
                            <p className="text-sm text-gray-400">"Act like high-energy tech influencers. Use slang, be excited about every feature, and make it sound like a viral product launch."</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "google-skills": {
        title: "Google Skills & Courses",
        subtitle: "3,000+ AI courses from DeepMind, Cloud, and Google Education in one platform.",
        date: "December 15, 2025",
        category: "Tutorial",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Google has consolidated its vast educational resources into a single hub. Whether you are a beginner or a machine learning engineer, there is a free course for you.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Top Picks</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">GenAI Fundamentals</h3>
                            <p className="text-sm text-gray-400">Introduction to Large Language Models, Attention Mechanisms, and Transformer architectures.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">Google Cloud Skills Boost</h3>
                            <p className="text-sm text-gray-400">Hands-on labs for deploying models on Vertex AI and managing production ML pipelines.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "modes-market-share-change": {
        title: "Model Market Share Analysis",
        subtitle: "A deep dive into how market share is shifting across different AI models in Q4 2025.",
        date: "December 14, 2025",
        category: "Analysis",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        The landscape is shifting. OpenAI's dominance is being challenged by specialized models from Anthropic and Google. This analysis breaks down the latest usage data.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Key Trends</h2>
                    <ul className="list-disc list-inside space-y-4 text-gray-400">
                        <li><strong>Coding:</strong> Claude 3.5 Sonnet has captured 40% of the professional dev market.</li>
                        <li><strong>Multimodal:</strong> Gemini 2.0 is the leader in video and long-context processing.</li>
                        <li><strong>Reasoning:</strong> OpenAI's o1 remains the standard for complex logic and math.</li>
                    </ul>
                </section>
            </div>
        )
    },
    "google-notebooklm-update-2": {
        title: "NotebookLM Update 2.0",
        subtitle: "Your AI research assistant now supports background listening and custom audio.",
        date: "December 12, 2025",
        category: "notebooklm",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        NotebookLM continues to redefine research. The latest update introduces background audio features and even deeper integration with your source materials.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">New Features</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">Background Listening</h3>
                            <p className="text-sm text-gray-400">Keep the audio overview playing while you work in other apps or lock your phone.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-2">Citation Mapping</h3>
                            <p className="text-sm text-gray-400">Clicking on a citation now takes you to the exact highlighted segment in the original PDF or source video.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "deepseek-ocr": {
        title: "DeepSeek OCR",
        subtitle: "The secret to letting AI read quicker, cheaper, and more accurately.",
        date: "December 10, 2025",
        category: "paper",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        DeepSeek has released a new OCR model that outperforms specialized vision models at a fraction of the compute cost. It excels at parsing complex layouts, tables, and handwritten notes.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Benchmarks</h2>
                    <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                        <p className="text-gray-400 mb-2">Accuracy on complex tables:</p>
                        <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
                            <div className="bg-neon-green h-full" style={{ width: '94%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>DeepSeek OCR (94%)</span>
                            <span>Standard OCR (78%)</span>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "claude-skill": {
        title: "Mastering Claude",
        subtitle: "Essential skills and techniques to get the most out of Anthropic's models.",
        date: "December 08, 2025",
        category: "Claude",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Claude has a unique personality and capabilities. Mastering it requires a different approach than ChatGPT.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Core Skills</h2>
                    <ul className="list-decimal list-inside space-y-4 text-gray-400">
                        <li><strong>XML Tagging:</strong> Use {"<tags>"} to structure your inputs. Claude is trained to pay special attention to structured data.</li>
                        <li><strong>Role Adoption:</strong> Claude excels at adopting complex personas. Give it a detailed backstory for better results.</li>
                        <li><strong>Prefilling:</strong> Start Claude's response for it. Type "Here is the code:" to force it to output code immediately without preamble.</li>
                    </ul>
                </section>
            </div>
        )
    },
    "sora2-storyboard": {
        title: "Sora2 Storyboard",
        subtitle: "Storyboard templates and resources for OpenAI's video model.",
        date: "December 05, 2025",
        category: "AI Video",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">
                        Control the chaos of video generation. Use these storyboard templates to define camera angles, lighting, and scene transitions before you prompt Sora2.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Template Structure</h2>
                    <div className="bg-black/30 p-4 rounded border border-gray-700">
                        <code className="text-xs text-blue-300 block mb-2">Shot 1: Establishing</code>
                        <p className="text-sm text-gray-400">"Wide angle, drone shot, heavy rain. Camera pans down to reveal the neon city below."</p>
                        <hr className="border-gray-800 my-2" />
                        <code className="text-xs text-blue-300 block mb-2">Shot 2: Action</code>
                        <p className="text-sm text-gray-400">"Tight zoom. Character steps into a puddle. Reflection shows a different world."</p>
                    </div>
                </section>
            </div>
        )
    },
    "5-free-ai-resources-for-non-technical-people": {
        title: "5 Free AI Resources for Non-Techies",
        subtitle: "Essential tools anyone can use. No coding required.",
        date: "December 01, 2025",
        category: "Guide",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">The List</h2>
                    <ul className="space-y-4">
                        <li className="bg-cyber-card p-4 rounded border border-gray-800">
                            <strong>1. Perplexity:</strong> Stop googling. Start asking. The best answer engine.
                        </li>
                        <li className="bg-cyber-card p-4 rounded border border-gray-800">
                            <strong>2. Canva Magic Studio:</strong> Generate images and edit photos with simple text.
                        </li>
                        <li className="bg-cyber-card p-4 rounded border border-gray-800">
                            <strong>3. Suno:</strong> Create full songs with lyrics in seconds.
                        </li>
                        <li className="bg-cyber-card p-4 rounded border border-gray-800">
                            <strong>4. Gamma:</strong> Generate presentation slides from a simple outline.
                        </li>
                        <li className="bg-cyber-card p-4 rounded border border-gray-800">
                            <strong>5. Luma Dream Machine:</strong> Create high-quality videos for free.
                        </li>
                    </ul>
                </section>
            </div>
        )
    },
    "7-free-ai-resources": {
        title: "7 Free AI Resources",
        subtitle: "Curated collection of the best free AI platforms.",
        date: "November 28, 2025",
        category: "Guide",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">Expand your toolkit with these powerful free utilities.</p>
                </section>
                <section>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {["Hugging Face Spaces", "Replicate (Free Tier)", "OpenRouter", "Google Colab", "Lightning AI", "Vercel SDK", "LangChain Hub"].map((tool, i) => (
                            <li key={i} className="bg-cyber-card p-4 rounded border border-gray-800 text-gray-300">{tool}</li>
                        ))}
                    </ul>
                </section>
            </div>
        )
    },
    "9-free-resource": {
        title: "9 Must-Have Free Resources",
        subtitle: "For the serious AI enthusiast and creator.",
        date: "November 25, 2025",
        category: "Guide",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">Creator's Stack</h2>
                    <div className="space-y-4 text-gray-400">
                        <p>1. <strong>Midjourney (Alpha Web)</strong> - Daily free generations.</p>
                        <p>2. <strong>ElevenLabs</strong> - Free tier for voice cloning.</p>
                        <p>3. <strong>Runway Gen-3</strong> - Trial credits for video.</p>
                        <p>4. <strong>Bolt.new</strong> - Browser-based full stack builder.</p>
                        <p>5. <strong>Lovable</strong> - No-code app builder.</p>
                        <p>6. <strong>Cursor</strong> - The best AI code editor (Free tier).</p>
                        <p>7. <strong>Windsurf</strong> - Agentic IDE.</p>
                        <p>8. <strong>GPT-4o</strong> - Free limited access.</p>
                        <p>9. <strong>Claude 3.5 Sonnet</strong> - Free limited access.</p>
                    </div>
                </section>
            </div>
        )
    },
    "5-youtube-video": {
        title: "5 YouTube Videos to Master AI",
        subtitle: "The best free education is on YouTube. Start here.",
        date: "November 20, 2025",
        category: "Guide",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg">Don't pay for courses until you've watched these.</p>
                </section>
                <section>
                    <div className="space-y-6">
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="font-bold text-white">1. Andrej Karpathy - Intro to LLMs</h3>
                            <p className="text-sm text-gray-400">The absolute gold standard. 1 hour that explains how it actually works.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="font-bold text-white">2. 3Blue1Brown - Neural Networks</h3>
                            <p className="text-sm text-gray-400">Visual intuition for the math behind the magic.</p>
                        </div>
                        <div className="bg-cyber-card p-6 rounded-xl border border-gray-800">
                            <h3 className="font-bold text-white">3. Prompt Engineering for Developers</h3>
                            <p className="text-sm text-gray-400">Andrew Ng's course on DeepLearning.AI (also on YT).</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    "6-step-to-master-ai": {
        title: "6 Steps to Master AI",
        subtitle: "A complete roadmap from beginner to architect.",
        date: "November 15, 2025",
        category: "Guide",
        content: (
            <div className="space-y-16 text-gray-300 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-display font-bold text-white mb-6 border-b border-gray-800 pb-2">The Roadmap</h2>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-center">
                            <span className="text-neon-green font-bold text-xl">01</span>
                            <p className="text-gray-300"><strong>Foundations:</strong> Understand Tokens, Context Windows, and Temperature.</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="text-neon-green font-bold text-xl">02</span>
                            <p className="text-gray-300"><strong>Prompting:</strong> Master Zero-shot, Few-shot, and Chain of Thought.</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="text-neon-green font-bold text-xl">03</span>
                            <p className="text-gray-300"><strong>APIs:</strong> Learn to integrate OpenAI/Gemini/Claude strategies in code.</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="text-neon-green font-bold text-xl">04</span>
                            <p className="text-gray-300"><strong>RAG:</strong> Connect the AI to your own data (Vector Databases).</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="text-neon-green font-bold text-xl">05</span>
                            <p className="text-gray-300"><strong>Agents:</strong> Build autonomous loops that use tools (Function Calling).</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="text-neon-green font-bold text-xl">06</span>
                            <p className="text-gray-300"><strong>Fine-tuning:</strong> Train the model on your dataset for specialized tasks.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const resource = RESOURCES_CONTENT[slug];

    if (!resource) {
        notFound();
    }

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Link */}
                <div className="mb-12">
                    <a href="/toolkit?view=Resources" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
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
