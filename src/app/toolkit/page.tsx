"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Categories provided by the user
const CATEGORIES = [
    "All",
    "AI Coding",
    "AI Image",
    "AI Video",
    "Analysis",
    "ChatGPT",
    "Claude",
    "Guide",
    "Tutorial",
    "agents",
    "agents templates",
    "notebooklm",
    "paper",
    "productiviy"
];

// Mock resources data
const RESOURCES = [
    {
        title: "Professional Headshots with AI",
        description: "Creating Professional Headshots with AI: A Complete Nano Banana Pro Guide",
        category: "AI Image",
        link: "#",
        updated: "1m"
    },
    {
        title: "Gemini CLI MCP library",
        description: "Gemini CLI just became a super-toolbox — your favorite dev tools now plug in as extensions.",
        category: "AI Video",
        link: "#",
        updated: "4w"
    },
    {
        title: "manus slides generation",
        description: "your viedeo overviews can finally match your brand or aesthetic.for free",
        category: "AI Video",
        link: "#",
        updated: "1w"
    },
    {
        title: "Claude Use Cases",
        description: "nthropic just curated an impressive collection of use cases for Claude",
        category: "Claude",
        link: "#",
        updated: "3w"
    },
    {
        title: "nano banana pro official guide",
        description: "Google just dropped the complete Nano Banana Pro guide — 10 expert techniques to produce studio-quality assets with one model.",
        category: "AI Image",
        link: "#",
        updated: "1w"
    },
    {
        title: "customize your video overview in notebooklm",
        description: "your viedeo overviews can finally match your brand or aesthetic.for free",
        category: "productiviy",
        link: "#",
        updated: "1w"
    },
    {
        title: "Antigravity",
        description: "It’s an editor, an agent manager, and a browser all working together in one place",
        category: "AI Coding",
        link: "#",
        updated: "1w"
    },
    {
        title: "google agents free resources",
        description: "it teaches everything from tools to MCP to production, completely free",
        category: "agents",
        link: "#",
        updated: "1w"
    },
    {
        title: "Claude use cases",
        description: "a cheat sheet for everything Claude can do",
        category: "Claude",
        link: "#",
        updated: "1w",
        external: true
    },
    {
        title: "Chatgpt 5.1 tips",
        description: "tips for ChatGPT 5.1",
        category: "ChatGPT",
        link: "#",
        updated: "1w"
    },
    {
        title: "100 LLM apps templates",
        description: "100+ production-ready AI app templates, from RAG to voice agents",
        category: "agents templates",
        link: "#",
        updated: "3d",
        external: true
    },
    {
        title: "claude skill market",
        description: "2,277 Claude Skills — all free, open-source, and ready to use",
        category: "Claude",
        link: "#",
        updated: "4d",
        external: true
    },
    {
        title: "google ai studio tutorials",
        description: "articel to help you build your app in ai studio in minutes",
        category: "AI Coding",
        link: "#",
        updated: "1w"
    },
    {
        title: "google skills",
        description: "3,000+ AI courses from DeepMind, Cloud, and Google Education in one platform",
        category: "Tutorial",
        link: "#",
        updated: "2w"
    },
    {
        title: "Modes Market Share Change",
        description: "Analysis of market share changes across different AI models.",
        category: "Analysis",
        link: "#",
        updated: "2w"
    },
    {
        title: "google NotebookLM update 2",
        description: "Your AI research assistant that turns notes into knowledge",
        category: "notebooklm",
        link: "#",
        updated: "1w",
        external: true
    },
    {
        title: "DeepSeek OCR",
        description: "the secret to let ai quicker,cheaper and accurate.",
        category: "paper",
        link: "#",
        updated: "2w",
        external: true
    },
    {
        title: "Claude Skill",
        description: "Master Claude AI with these essential skills and techniques.",
        category: "Claude",
        link: "#",
        updated: "3w",
        external: true
    },
    {
        title: "Sora2 Storyboard",
        description: "Storyboard resources for Sora2.",
        category: "AI Video",
        link: "#",
        updated: "3w"
    },
    {
        title: "5 Free AI Resources for Non-Technical People",
        description: "Essential AI tools and resources that anyone can use, no coding required.",
        category: "Guide",
        link: "#",
        updated: "1m"
    },
    {
        title: "7 FREE AI Resources",
        description: "Curated collection of the best free AI tools and platforms.",
        category: "Guide",
        link: "#",
        updated: "4w"
    },
    {
        title: "9 Free Resource",
        description: "Nine must-have free resources for AI enthusiasts and creators.",
        category: "Guide",
        link: "#",
        updated: "4w"
    },
    {
        title: "5 YouTube Video",
        description: "Top 5 YouTube videos to learn AI from scratch.",
        category: "Guide",
        link: "#",
        updated: "4w"
    },
    {
        title: "6 Step to Master AI",
        description: "Complete roadmap to master AI in 6 simple steps.",
        category: "Guide",
        link: "#",
        updated: "3w",
        external: true
    }
];

export default function ToolkitPage() {
    const [activeView, setActiveView] = useState("Resources");
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredResources = RESOURCES.filter(resource => {
        const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Top-level Tabs */}
                <div className="flex justify-center items-center gap-4 md:gap-8 mb-16">
                    {["Resources", "Prompts", "AI Tools"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveView(tab)}
                            className={`text-2xl md:text-4xl font-display font-bold transition-all px-6 py-2 rounded-full border-2 ${activeView === tab
                                ? "text-neon-green border-neon-green bg-green-900/10 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                                : "text-gray-600 border-transparent hover:text-gray-400"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Resources View */}
                {activeView === "Resources" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Search Bar */}
                        <div className="mb-8">
                            <div className="relative max-w-2xl mx-auto">
                                <input
                                    type="text"
                                    placeholder="Search by title, description, or type..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-cyber-card border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="mb-12">
                            <p className="text-gray-400 text-sm mb-4">Filter by type:</p>
                            <div className="flex flex-wrap gap-2">
                                {CATEGORIES.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-3 py-1 rounded md:rounded-lg text-xs md:text-sm font-medium border transition-all ${activeCategory === cat
                                                ? 'bg-neon-green text-black border-neon-green shadow-[0_0_10px_rgba(57,255,20,0.4)]'
                                                : 'bg-transparent text-white border-gray-700 hover:border-gray-500'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Resources Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            <AnimatePresence mode='popLayout'>
                                {filteredResources.map((resource, idx) => (
                                    <motion.a
                                        layout
                                        href={resource.link}
                                        key={idx}
                                        className="block bg-cyber-card border border-gray-800 rounded-xl p-6 hover:border-neon-green/50 transition-all group hover:shadow-[0_0_20px_rgba(57,255,20,0.1)] relative overflow-hidden"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                                        </div>

                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700">
                                                {resource.category}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors line-clamp-2">
                                            {resource.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                            {resource.description}
                                        </p>

                                        <div className="flex justify-between items-center text-xs text-gray-600 mt-auto pt-4 border-t border-gray-800">
                                            <span>Updated {resource.updated} ago</span>
                                            {/* @ts-ignore */}
                                            {resource.external && (
                                                <>
                                                    <span className="mx-2">•</span>
                                                    <span>External</span>
                                                </>
                                            )}
                                        </div>
                                    </motion.a>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredResources.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
                                <button
                                    onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                                    className="mt-4 text-neon-green hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}

                {/* Placeholders for Other Tabs */}
                {activeView !== "Resources" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-32"
                    >
                        <h2 className="text-3xl font-display font-bold text-gray-400 mb-4">
                            {activeView} Coming Soon
                        </h2>
                        <p className="text-gray-600">We are curating the best {activeView.toLowerCase()} for you.</p>
                    </motion.div>
                )}

            </div>
        </div>
    );
}
