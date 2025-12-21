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

const PROMPT_CATEGORIES = [
    "All",
    "AI Coding",
    "AI Image",
    "AI Video",
    "Thinking",
    "Writing"
];

const TOOL_CATEGORIES = [
    "All",
    "3D model",
    "AI Coding",
    "AI Image",
    "AI Video",
    "AI browser",
    "Apps building",
    "ChatGPT",
    "Claude",
    "Gemini",
    "Kimi",
    "Slides tool",
    "TTS",
    "creativity",
    "tools"
];

// Mock resources data
const RESOURCES = [
    {
        title: "Professional Headshots with AI",
        description: "Creating Professional Headshots with AI: A Complete Nano Banana Pro Guide",
        category: "AI Image",
        link: "/toolkit/resources/professional-headshots-with-ai",
        updated: "1m"
    },

    {
        title: "manus slides generation",
        description: "Your video overviews can finally match your brand or aesthetic. For free.",
        category: "AI Video",
        link: "/toolkit/resources/notebooklm-video-overview-custom",
        updated: "1w"
    },
    {
        title: "Claude Use Cases",
        description: "nthropic just curated an impressive collection of use cases for Claude",
        category: "Claude",
        link: "/toolkit/resources/claude-use-cases",
        updated: "3w"
    },
    {
        title: "nano banana pro official guide",
        description: "Google just dropped the complete Nano Banana Pro guide — 10 expert techniques to produce studio-quality assets with one model.",
        category: "AI Image",
        link: "/toolkit/resources/nano-banana-pro-official-guide",
        updated: "1w"
    },
    {
        title: "customize your video overview in notebooklm",
        description: "your viedeo overviews can finally match your brand or aesthetic.for free",
        category: "productiviy",
        link: "/toolkit/resources/customize-your-video-overview-in-notebooklm",
        updated: "1w"
    },
    {
        title: "Antigravity",
        description: "It’s an editor, an agent manager, and a browser all working together in one place",
        category: "AI Coding",
        link: "/toolkit/resources/antigravity",
        updated: "1w"
    },
    {
        title: "google agents free resources",
        description: "it teaches everything from tools to MCP to production, completely free",
        category: "agents",
        link: "/toolkit/resources/google-agents-free-resources",
        updated: "1w"
    },
    {
        title: "Claude use cases",
        description: "a cheat sheet for everything Claude can do",
        category: "Claude",
        link: "/toolkit/resources/claude-use-cases",
        updated: "1w"
    },
    {
        title: "Chatgpt 5.1 tips",
        description: "tips for ChatGPT 5.1",
        category: "ChatGPT",
        link: "/toolkit/resources/chatgpt-5-1-tips",
        updated: "1w"
    },
    {
        title: "100 LLM apps templates",
        description: "100+ production-ready AI app templates, from RAG to voice agents",
        category: "agents templates",
        link: "/toolkit/resources/100-llm-apps-templates",
        updated: "3d"
    },
    {
        title: "claude skill market",
        description: "2,277 Claude Skills — all free, open-source, and ready to use",
        category: "Claude",
        link: "/toolkit/resources/claude-skill-market",
        updated: "4d"
    },
    {
        title: "google ai studio tutorials",
        description: "articel to help you build your app in ai studio in minutes",
        category: "AI Coding",
        link: "/toolkit/resources/google-ai-studio-tutorials",
        updated: "1w"
    },
    {
        title: "google skills",
        description: "3,000+ AI courses from DeepMind, Cloud, and Google Education in one platform",
        category: "Tutorial",
        link: "/toolkit/resources/google-skills",
        updated: "2w"
    },
    {
        title: "Modes Market Share Change",
        description: "Analysis of market share changes across different AI models.",
        category: "Analysis",
        link: "/toolkit/resources/modes-market-share-change",
        updated: "2w"
    },
    {
        title: "google NotebookLM update 2",
        description: "Your AI research assistant that turns notes into knowledge",
        category: "notebooklm",
        link: "/toolkit/resources/google-notebooklm-update-2",
        updated: "1w"
    },
    {
        title: "DeepSeek OCR",
        description: "the secret to let ai quicker,cheaper and accurate.",
        category: "paper",
        link: "/toolkit/resources/deepseek-ocr",
        updated: "2w"
    },
    {
        title: "Claude Skill",
        description: "Master Claude AI with these essential skills and techniques.",
        category: "Claude",
        link: "/toolkit/resources/claude-skill",
        updated: "3w"
    },
    {
        title: "Sora2 Storyboard",
        description: "Storyboard resources for Sora2.",
        category: "AI Video",
        link: "/toolkit/resources/sora2-storyboard",
        updated: "3w"
    },
    {
        title: "5 Free AI Resources for Non-Technical People",
        description: "Essential AI tools and resources that anyone can use, no coding required.",
        category: "Guide",
        link: "/toolkit/resources/5-free-ai-resources-for-non-technical-people",
        updated: "1m"
    },
    {
        title: "7 FREE AI Resources",
        description: "Curated collection of the best free AI tools and platforms.",
        category: "Guide",
        link: "/toolkit/resources/7-free-ai-resources",
        updated: "4w"
    },
    {
        title: "9 Free Resource",
        description: "Nine must-have free resources for AI enthusiasts and creators.",
        category: "Guide",
        link: "/toolkit/resources/9-free-resource",
        updated: "4w"
    },
    {
        title: "5 YouTube Video",
        description: "Top 5 YouTube videos to learn AI from scratch.",
        category: "Guide",
        link: "/toolkit/resources/5-youtube-video",
        updated: "4w"
    },
    {
        title: "6 Step to Master AI",
        description: "Complete roadmap to master AI in 6 simple steps.",
        category: "Guide",
        link: "/toolkit/resources/6-step-to-master-ai",
        updated: "3w"
    }
];

const PROMPTS = [
    { title: "nano banana prompt tutorial series", description: "a hidden collection of nano banana prompts to make your images 10 times better", category: "AI Image", updated: "3w" },
    { title: "nano banana prompt to create more realistic photo", description: "Nano bananana pros are creating people that looks 100 percent real.", category: "AI Image", updated: "1m" },
    { title: "Character Design Sheet", description: "prompt to create a full character concept sheet", category: "AI Image", updated: "1m" },
    { title: "wool ASMR", description: "Cutting wool products ASMR prompts", category: "AI Video", updated: "1m" },
    { title: "AI Studio 3D Scene", description: "Gemini 3 builds a 3D interactive scene for me", category: "AI Coding", updated: "1w" },
    { title: "google logo 3d prompt", description: "use this prompt to build your 3D google logo", category: "AI Coding", updated: "1w" },
    { title: "ltx official prompt guide", description: "it helps you write better prompts for camera motion, mood, and sound", category: "AI Video", updated: "3w" },
    { title: "let ChatGPT disagree with you", description: "It makes ChatGPT skeptical,fact-checks your logic, and argues back when you're wrong", category: "Thinking", updated: "3w" },
    { title: "nano banana prompt library", description: "a hidden collection of nano banana prompts to make your images 10 times better", category: "AI Image", updated: "3w", external: true },
    { title: "let AI more Like a Human", description: "Make AI-generated content sound more natural and human-like.", category: "Thinking", updated: "1m" },
    { title: "let your AI Stop Lying", description: "Prevent AI from making up information, ensure truthful output.", category: "Thinking", updated: "1m" },
    { title: "ASMR Prompt", description: "Professional ASMR video script generation prompts.", category: "AI Video", updated: "4w" },
    { title: "UGC Prompt", description: "User-generated content (UGC) creation prompt templates.", category: "AI Video", updated: "1m" },
    { title: "Sora2 Official Prompt Guide", description: "Official Sora2 prompt guide, complete tutorial.", category: "AI Video", updated: "3w", external: true },
    { title: "ChatGPT for Any Role", description: "Universal prompts to make ChatGPT play any role you need.", category: "Writing", updated: "3w", external: true },
];

const TOOLS = [
    { title: "Z-image-turbo", description: "A free open-source model just hit #1 on Hugging Face — and it generates Nano-Banana-level images in under one second.", category: "AI Image", updated: "3w", external: true },
    { title: "Kling O1", description: "Kling O1 now lets you erase, change, or add anything inside an existing video, and it stays perfectly consistent across every frame", category: "AI Video", updated: "3w", external: true },
    { title: "NotebookLM video overview", description: "Your AI research assistant that turns notes into explainer video with animation style", category: "creativity", updated: "1w", external: true },
    { title: "Google Code Wiki", description: "it turns any repo into a full documentation site in seconds.", category: "AI Coding", updated: "1w", external: true },
    { title: "elevenlabs AI image and video", description: "one place to create and edit everything image,video,voice,music", category: "AI Image", updated: "4d", external: true },
    { title: "elevenlabs Scribe v2 Realtime", description: "ElevenLabs just dropped Scribe V2 Realtime — their fastest and most accurate live speech recognition model ever.", category: "TTS", updated: "3d", external: true },
    { title: "motion stream", description: "AI Video and image platform to create viral content.", category: "AI Video", updated: "3d" },
    { title: "pollo.ai: typhoon viral video", description: "AI Video and image platform to create viral content.", category: "AI Video", updated: "3d" },
    { title: "Google labs Mixboard", description: "Now you can draw your edits and watch them appear instantly.", category: "AI Image", updated: "3d", external: true },
    { title: "Testsprite-MCP", description: "TestSprite MCP gives Cursor or Claude code full testing superpowers", category: "AI Coding", updated: "2d" },
    { title: "Google labs Flow", description: "TestSprite MCP gives Cursor or Claude code full testing superpowers", category: "AI Video", updated: "today", external: true }, // Keeping description as seen in image even if it looks like a copy-paste error in the user's mock
    { title: "qwen image:photo to anime", description: "This AI turns your selfie into a perfect anime character", category: "AI Image", updated: "yesterday", external: true },
    { title: "HunYuan 3D world 1.1", description: "This Chinese AI model turns one photo into a full 3D world", category: "3D model", updated: "today", external: true },
    { title: "Inworld TTS", description: "The world’s #1 voice AIInworld TTS 1 Max and you can try it free right now", category: "TTS", updated: "today", external: true },
    { title: "Google Opal", description: "Google Opal platform:automatically build workflow and apps.", category: "Apps building", updated: "yesterday", external: true },
    { title: "VEO Camera Control", description: "you can move the camera inside your AI video,build cinematic shots with 2 camera controls", category: "AI Video", updated: "yesterday", external: true },
    { title: "Gemini Connect Google Apps", description: "Gemini can now read your Gmail, Docs, and Drive — and turn them into one smart report", category: "Gemini", updated: "2d" },
    { title: "Kimi K2 Thinking", description: "moonshot has just open-sourced the best thinking model.", category: "Kimi", updated: "3d", external: true },
    { title: "nano-banana-pro", description: "new state-of-the art image generation and editing model.", category: "tools", updated: "1w", external: true },
    { title: "Interrupt ChatGPT Deep Resourch", description: "You can now interrupt ChatGPT mid-research — and it keeps going with your new context", category: "ChatGPT", updated: "4d" },
    { title: "Qwen Multi-angle Generation", description: "upload one photo, get infinite perspectives.", category: "AI Image", updated: "4d", external: true },
    { title: "Gemini in Google Maps", description: "Gemini is now built into Google Maps — hands-free routes, restaurant stops, and parking details", category: "Gemini", updated: "5d" },
    { title: "google vids for slides", description: "turn decks into narrated videos with Gemini AI.", category: "AI Video", updated: "5d", external: true },
    { title: "Adobe Firefly", description: "Adobe just made all Firefly models unlimited until Dec 1.", category: "AI Video", updated: "5d", external: true },
    { title: "gemini slides", description: "Gemini can now create full Google Slides from a single prompt with Canvas built right in", category: "Slides tool", updated: "5d", external: true },
    { title: "Eleven Labs AI Music", description: "AI music generation tool.", category: "TTS", updated: "6d", external: true },

    { title: "kimi Ok Computer", description: "from Chat to Create, Kimi OK Computer turns a simple conversation into website, slides, and more.", category: "Apps building", updated: "1w" },
    { title: "fameo.ai", description: "Make Any Celebrity Say Anything", category: "AI Video", updated: "1w", external: true },
    { title: "github copilot agent HQ", description: "a new feature that lets you run Claude, OpenAI, Cognition, Jules, even xAI, all inside GitHub, side by side.", category: "AI Coding", updated: "1w", external: true },
    { title: "SoulX Open Source AI Podcast", description: "An open-source, multi-speaker voice model that sounds shockingly human — laughs, sighs, changes tone, and even switches dialects.", category: "TTS", updated: "1w", external: true },
    { title: "cursor2", description: "This AI IDE finishes complex code in 30 seconds — using 5 agents at once.", category: "AI Coding", updated: "1w", external: true },
    { title: "sonic-3 from cartesia", description: "This AI can replace a 500 people call center.One voice system that replaces 100 agents", category: "TTS", updated: "1w", external: true },
    { title: "Pomelli", description: "an experimental AI that understands your brand identity, then generates scalable, on-brand content", category: "creativity", updated: "1w", external: true },
    { title: "odyssey:a live video generation model", description: "This new model can generate and play videos instantly,", category: "AI Video", updated: "1w", external: true },
    { title: "claude for excel", description: "It writes formulas, fills data,and explains every calculation step by step right from the sidebat", category: "Claude", updated: "1w", external: true },
    { title: "minimax m2", description: "8% the cost, twice the speed than claude sonnet", category: "AI Coding", updated: "1w", external: true },
    { title: "longcat video video generation model", description: "it handles text-to-video, image-to-video, and video continuation — all in one model.", category: "AI Video", updated: "1w", external: true },
    { title: "DeepSeek OCR APP", description: "can read stuff I can’t even read with my own eyes", category: "creativity", updated: "1w", external: true },
    { title: "Comet", description: "Perplexity profile and tools.", category: "AI browser", updated: "3w" },
    { title: "NEUTTS-Air", description: "an open source tts tools which only need cpu to run", category: "TTS", updated: "2w", external: true },
    { title: "NotebookLM for arXiv papers", description: "it explains them, and even talks you through the ideas", category: "creativity", updated: "2w", external: true },
    { title: "AI studio for Vibe Coding", description: "google's aistudio build vibe coding inside to let you build your app in minutes", category: "AI Coding", updated: "2w", external: true },
    { title: "Claude Desktop", description: "desktop app for claude", category: "Claude", updated: "2w", external: true },
    { title: "ChatGPT Atlas", description: "openai launched an ai browser", category: "AI browser", updated: "2w", external: true },
    { title: "claude code web", description: "use claude code in the web for pro and max users", category: "AI Coding", updated: "2w", external: true },
    { title: "run ai locally in your iphone", description: "locally run AI in your iphone.", category: "creativity", updated: "3w", external: true },
    { title: "hunyuan 3d faster world", description: "create 3d world in seconds.", category: "3D model", updated: "3w", external: true },
    { title: "OpenAI AgentKit", description: "Toolkit for building AI agents.", category: "AI Coding", updated: "3w", external: true },
    { title: "OpenAI Agents Python SDK", description: "Python SDK for building agentic apps.", category: "AI Coding", updated: "3w", external: true },
    { title: "Gemini 2.5 Computer Use", description: "Overview of Gemini Computer Use model.", category: "AI browser", updated: "3w", external: true },
    { title: "Manus 1.5", description: "Manus AI invitation link.", category: "AI Coding", updated: "3w", external: true },
    { title: "Riverflow 1 Full Guide", description: "Sourceful guide to Riverflow 1.", category: "AI Image", updated: "3w", external: true },
];


export default function ToolkitPage() {
    const [activeView, setActiveView] = useState("Resources");
    const [activeCategory, setActiveCategory] = useState("All");
    const [activePromptCategory, setActivePromptCategory] = useState("All");
    const [activeToolCategory, setActiveToolCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredResources = RESOURCES.filter(resource => {
        const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const filteredPrompts = PROMPTS.filter(prompt => {
        const matchesCategory = activePromptCategory === "All" || prompt.category === activePromptCategory;
        const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const filteredTools = TOOLS.filter(tool => {
        const matchesCategory = activeToolCategory === "All" || tool.category === activeToolCategory;
        const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase());
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
                            onClick={() => { setActiveView(tab); setSearchQuery(""); }}
                            className={`text-2xl md:text-4xl font-display font-bold transition-all px-6 py-2 rounded-full border-2 ${activeView === tab
                                ? "text-neon-green border-neon-green bg-green-900/10 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                                : "text-gray-600 border-transparent hover:text-gray-400"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Search Bar (Shared) */}
                {(activeView === "Resources" || activeView === "Prompts" || activeView === "AI Tools") && (
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
                )}

                {/* Resources View */}
                {activeView === "Resources" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
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

                {/* Prompts View */}
                {activeView === "Prompts" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Categories */}
                        <div className="mb-12">
                            <p className="text-gray-400 text-sm mb-4">Filter by type:</p>
                            <div className="flex flex-wrap gap-2">
                                {PROMPT_CATEGORIES.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActivePromptCategory(cat)}
                                        className={`px-3 py-1 rounded md:rounded-lg text-xs md:text-sm font-medium border transition-all ${activePromptCategory === cat
                                            ? 'bg-neon-green text-black border-neon-green shadow-[0_0_10px_rgba(57,255,20,0.4)]'
                                            : 'bg-transparent text-white border-gray-700 hover:border-gray-500'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Prompts Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            <AnimatePresence mode='popLayout'>
                                {filteredPrompts.map((prompt, idx) => (
                                    <motion.div
                                        layout
                                        key={idx}
                                        className="block bg-cyber-card border border-gray-800 rounded-xl p-6 hover:border-neon-purple/50 transition-all group hover:shadow-[0_0_20px_rgba(191,0,255,0.1)] relative overflow-hidden"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21l-.394-.433a2.25 2.25 0 00-1.423-1.423L14.25 19l.433-.394a2.25 2.25 0 001.423-1.423l.394-.433.394.433a2.25 2.25 0 001.423 1.423l.433.394-.433.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
                                        </div>

                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700">
                                                {prompt.category}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors line-clamp-2">
                                            {prompt.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                            {prompt.description}
                                        </p>

                                        <div className="flex justify-between items-center text-xs text-gray-600 mt-auto pt-4 border-t border-gray-800">
                                            <span>Updated {prompt.updated} ago</span>
                                            {/* @ts-ignore */}
                                            {prompt.external && (
                                                <>
                                                    <span className="mx-2">•</span>
                                                    <span>External</span>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredPrompts.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg">No prompts found matching your criteria.</p>
                                <button
                                    onClick={() => { setActivePromptCategory("All"); setSearchQuery(""); }}
                                    className="mt-4 text-neon-green hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}

                    </motion.div>
                )}

                {/* AI Tools View */}
                {activeView === "AI Tools" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Categories */}
                        <div className="mb-12">
                            <p className="text-gray-400 text-sm mb-4">Filter by type:</p>
                            <div className="flex flex-wrap gap-2">
                                {TOOL_CATEGORIES.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveToolCategory(cat)}
                                        className={`px-3 py-1 rounded md:rounded-lg text-xs md:text-sm font-medium border transition-all ${activeToolCategory === cat
                                            ? 'bg-neon-green text-black border-neon-green shadow-[0_0_10px_rgba(57,255,20,0.4)]'
                                            : 'bg-transparent text-white border-gray-700 hover:border-gray-500'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tools Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            <AnimatePresence mode='popLayout'>
                                {filteredTools.map((tool, idx) => (
                                    <motion.div
                                        layout
                                        key={idx}
                                        className="block bg-cyber-card border border-gray-800 rounded-xl p-6 hover:border-blue-400/50 transition-all group hover:shadow-[0_0_20px_rgba(96,165,250,0.1)] relative overflow-hidden"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.923 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                        </div>

                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700">
                                                {tool.category}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {tool.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                            {tool.description}
                                        </p>

                                        <div className="flex justify-between items-center text-xs text-gray-600 mt-auto pt-4 border-t border-gray-800">
                                            <span>Updated {tool.updated} ago</span>
                                            {/* @ts-ignore */}
                                            {tool.external && (
                                                <>
                                                    <span className="mx-2">•</span>
                                                    <span>External</span>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredTools.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg">No tools found matching your criteria.</p>
                                <button
                                    onClick={() => { setActiveToolCategory("All"); setSearchQuery(""); }}
                                    className="mt-4 text-neon-green hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}

            </div>
        </div>
    );
}


