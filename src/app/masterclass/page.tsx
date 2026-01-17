'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircleIcon, PlayCircleIcon, ChevronLeftIcon, ChevronRightIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { CheckCircleIcon as CheckCircleOutlineIcon } from '@heroicons/react/24/outline';


// --- DATA ---
const COURSE_CONTENT = {
    "Module 1: The Shield (Survival, Safety & Psychology)": [
        "Lesson 1: The 70-Year AI Rollercoaster – Origins to Explosion",
        "Lesson 2: Digital Self-Defense & Data Hygiene",
        "Lesson 3: Psychological Firewalls (Mental Health & Guardrails)"
    ],
    "Module 2: The Creator (Content, Visuals & Strategy)": [
        "Lesson 4: The Vanguard Toolbox (Commanding the Essentials)",
        "Lesson 5: High-Level Prompt Engineering (The Context Pathway)",
        "Lesson 6: Visual Dominance: Hybrid AI & The Premium Stock Hack",
        "Lesson 7: The \"Faceless\" Growth Strategy",
        "Lesson 8: Generative Engine Optimization (GEO)"
    ],
    "Module 3: The Operator (AI Automation, Agents & Builders)": [
        "Lesson 9: The \"Agentic\" Revolution (The Foundation)",
        "Lesson 10: Media & Content Automation (Replacing the Creative Team)",
        "Lesson 11: Building \"Digital Employees\" (Business & Sales)",
        "Lesson 12: Infrastructure, Cost & Privacy",
        "Lesson 13: The Sovereign Mind (Fine-Tuning & Localization)",
        "Lesson 14: Computer Vision (The Eyes of AI)",
        "Lesson 15: The Certified Vanguard (Free Education & Badges)",
        "Lesson 16: The Vibe Coder (Building Custom Apps)"
    ],
    "Module 4: The Future Vanguard (AI for Kids & Families)": [
        "Lesson 17: AI Literacy for the Next Gen (Tools & Safety)"
    ]
};

// Flatten content for easier navigation
const FLATTENED_LESSONS: { module: string; title: string }[] = [];
Object.entries(COURSE_CONTENT).forEach(([module, lessons]) => {
    lessons.forEach(lesson => {
        FLATTENED_LESSONS.push({ module, title: lesson });
    });
});

const LESSON_DETAILS: Record<string, { video: string; slides: string; desc?: string }> = {
    "Lesson 1: The 70-Year AI Rollercoaster – Origins to Explosion": {
        "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual URL
        "slides": "#",
        "desc": "Understanding the history of AI."
    },
    "Lesson 2: Digital Self-Defense & Data Hygiene": {
        "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "slides": "/masterclass/demo-slides.pdf",
        "desc": "Learn how to protect your digital footprint."
    },
    "Lesson 17: AI Literacy for the Next Gen (Tools & Safety)": {
        "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "slides": "#",
        "desc": "Don't just give them an iPad. Give them a weapon"
    },
    // Fallback for others to avoid crashes
};


export default function MasterclassPage() {
    // --- STATE ---
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // For mobile responsiveness
    const [mounted, setMounted] = useState(false);

    // --- PERSISTENCE ---
    useEffect(() => {
        const savedIndex = localStorage.getItem('masterclass_current_index');
        const savedCompleted = localStorage.getItem('masterclass_completed_lessons');

        if (savedIndex) setCurrentLessonIndex(parseInt(savedIndex));
        if (savedCompleted) {
            try {
                setCompletedLessons(new Set(JSON.parse(savedCompleted)));
            } catch (e) {
                console.error("Failed to load completed lessons", e);
            }
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem('masterclass_current_index', currentLessonIndex.toString());
        localStorage.setItem('masterclass_completed_lessons', JSON.stringify(Array.from(completedLessons)));
    }, [currentLessonIndex, completedLessons, mounted]);


    // --- HELPERS ---
    const currentLesson = FLATTENED_LESSONS[currentLessonIndex];
    const progressPct = Math.round((completedLessons.size / FLATTENED_LESSONS.length) * 100);
    const details = LESSON_DETAILS[currentLesson.title] || {
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        slides: "#",
        desc: "Content coming soon..."
    };

    const getYoutubeEmbedUrl = (url: string) => {
        if (!url) return "";
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : url;
    };


    // --- HANDLERS ---
    const nextLesson = () => {
        if (currentLessonIndex < FLATTENED_LESSONS.length - 1) {
            setCurrentLessonIndex(prev => prev + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevLesson = () => {
        if (currentLessonIndex > 0) {
            setCurrentLessonIndex(prev => prev - 1);
            window.scrollTo(0, 0);
        }
    };

    const markComplete = () => {
        setCompletedLessons(prev => {
            const newSet = new Set(prev);
            newSet.add(currentLessonIndex);
            return newSet;
        });
    };

    if (!mounted) return null; // Avoid hydration mismatch

    return (
        <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">

            {/* MOBILE SIDEBAR TOGGLE */}
            <div className="md:hidden fixed z-50 top-4 left-4">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-white rounded-md shadow-md">
                    <Bars3Icon className="h-6 w-6 text-gray-700" />
                </button>
            </div>

            {/* SIDEBAR */}
            <div className={`fixed inset-y-0 left-0 z-40 w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 flex items-center justify-center">
                        {/* Assuming logo exists in public folder or we use text */}
                        <div className="text-center">
                            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                Reignit Masterclass
                            </h1>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Sovereign Console</p>
                        </div>
                    </div>

                    {/* Progress */}
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Course Progress</span>
                            <span className="text-sm font-bold text-blue-600">{progressPct}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }}></div>
                        </div>
                    </div>

                    {/* Navigation List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                        {Object.entries(COURSE_CONTENT).map(([module, lessons]) => (
                            <div key={module}>
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">{module}</h3>
                                <div className="space-y-1">
                                    {lessons.map((lesson) => {
                                        const idx = FLATTENED_LESSONS.findIndex(l => l.title === lesson);
                                        const isActive = idx === currentLessonIndex;
                                        const isCompleted = completedLessons.has(idx);

                                        return (
                                            <button
                                                key={lesson}
                                                onClick={() => {
                                                    setCurrentLessonIndex(idx);
                                                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                                                }}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-start gap-3 transition-colors ${isActive
                                                    ? 'bg-blue-50 text-blue-700 font-medium'
                                                    : 'text-gray-600 hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="mt-0.5 flex-shrink-0">
                                                    {isCompleted ? (
                                                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                                                    ) : isActive ? (
                                                        <PlayCircleIcon className="h-4 w-4 text-blue-500" />
                                                    ) : (
                                                        <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
                                                    )}
                                                </div>
                                                <span className="leading-snug">{lesson.split(':')[0]}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 overflow-y-auto bg-white md:bg-gray-50 w-full">
                <div className="max-w-4xl mx-auto p-6 md:p-12 min-h-screen flex flex-col">

                    {/* Navigation Header */}
                    <div className="flex justify-between items-center mb-8 pt-10 md:pt-0">
                        <button
                            onClick={prevLesson}
                            disabled={currentLessonIndex === 0}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentLessonIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-white hover:shadow-sm'
                                }`}
                        >
                            <ChevronLeftIcon className="h-4 w-4" /> Previous
                        </button>
                        <span className="text-xs font-mono text-gray-400">
                            {currentLessonIndex + 1} / {FLATTENED_LESSONS.length}
                        </span>
                        <button
                            onClick={nextLesson}
                            disabled={currentLessonIndex === FLATTENED_LESSONS.length - 1}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentLessonIndex === FLATTENED_LESSONS.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-white hover:shadow-sm'
                                }`}
                        >
                            Next <ChevronRightIcon className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Lesson Content */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                        <div className="aspect-video w-full bg-black">
                            <iframe
                                src={getYoutubeEmbedUrl(details.video)}
                                title={currentLesson.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-3">
                                <span className="px-2 py-1 bg-blue-50 rounded text-xs uppercase tracking-wider">{currentLesson.module.split(':')[0]}</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{currentLesson.title}</h1>

                            {details.desc && (
                                <div className="prose prose-blue max-w-none text-gray-600 mb-8">
                                    <p>{details.desc}</p>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-6">
                                <button
                                    onClick={markComplete}
                                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${completedLessons.has(currentLessonIndex)
                                        ? 'bg-green-50 text-green-700 border border-green-200'
                                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                                        }`}
                                >
                                    {completedLessons.has(currentLessonIndex) ? (
                                        <>
                                            <CheckCircleIcon className="h-5 w-5" /> Completed
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircleOutlineIcon className="h-5 w-5" /> Mark as Complete
                                        </>
                                    )}
                                </button>

                                {details.slides !== '#' && (
                                    <a
                                        href={details.slides}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 rounded-xl font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 text-center transition-colors"
                                    >
                                        Download Resources
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
