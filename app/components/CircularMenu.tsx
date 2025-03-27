'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Subsection {
    id: string;
    label: string;
    link: string;
}

interface Section {
    id: string;
    label: string;
    gradient: string;
    hoverGradient: string;
    link: string;
    subsections: Subsection[];
}

const sections: Section[] = [
    {
        id: 'A',
        label: 'Section A',
        gradient: 'bg-gradient-to-r from-blue-500 to-indigo-600',
        hoverGradient: 'hover:from-blue-600 hover:to-indigo-700',
        link: '/section-a',
        subsections: [
            { id: 'A1', label: 'Subsection A1', link: '/section-a/a1' },
            { id: 'A2', label: 'Subsection A2', link: '/section-a/a2' },
        ],
    },
    {
        id: 'B',
        label: 'Section B',
        gradient: 'bg-gradient-to-r from-purple-500 to-pink-600',
        hoverGradient: 'hover:from-purple-600 hover:to-pink-700',
        link: '/section-b',
        subsections: [
            { id: 'B1', label: 'Subsection B1', link: '/section-b/b1' },
            { id: 'B2', label: 'Subsection B2', link: '/section-b/b2' },
        ],
    },
    {
        id: 'C',
        label: 'Section C',
        gradient: 'bg-gradient-to-r from-emerald-500 to-teal-600',
        hoverGradient: 'hover:from-emerald-600 hover:to-teal-700',
        link: '/section-c',
        subsections: [
            { id: 'C1', label: 'Subsection C1', link: '/section-c/c1' },
            { id: 'C2', label: 'Subsection C2', link: '/section-c/c2' },
        ],
    },
];

export default function CircularMenu() {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleStartClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsExpanded(true);
        }, 500);
    };

    const handleSectionClick = (sectionId: string) => {
        if (activeSection === sectionId) {
            setActiveSection(null);
        } else {
            setActiveSection(sectionId);
        }
    };

    return (
        <div className="relative w-[500px] h-[500px] mx-auto">
            {/* Decorative Background Circle */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-gray-100
                          shadow-lg opacity-75 transition-all duration-500
                          ${isExpanded ? 'scale-110' : 'scale-0'}`} />

            {/* Center Start Button */}
            <button
                onClick={handleStartClick}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500
                          flex items-center justify-center group cursor-pointer z-10 
                          transition-all duration-500 shadow-lg
                          hover:shadow-xl hover:from-blue-500 hover:to-indigo-600
                          ${isLoading ? 'animate-pulse' : ''}
                          ${isExpanded ? 'scale-75' : ''}`}
                disabled={isLoading}
            >
                <div className="text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    {isLoading ? (
                        <div className="flex items-center space-x-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Loading</span>
                        </div>
                    ) : (
                        'Start'
                    )}
                </div>
            </button>

            {/* Circular Sections */}
            <div className={`absolute inset-0 transition-all duration-500 
                          ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                          ${activeSection ? 'transform-gpu' : ''}`}>
                {sections.map((section, index) => {
                    const rotation = index * (360 / sections.length);
                    const isActive = activeSection === section.id;

                    return (
                        <div
                            key={section.id}
                            className={`absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left
                                     transition-all duration-500 cursor-pointer
                                     ${isActive ? 'scale-110 z-20' : 'scale-100'}`}
                            style={{
                                transform: `rotate(${rotation}deg)`,
                            }}
                            onMouseEnter={() => setActiveSection(section.id)}
                            onClick={() => handleSectionClick(section.id)}
                        >
                            <div
                                className={`absolute top-0 left-0 w-full h-full 
                                          ${section.gradient} ${section.hoverGradient}
                                          rounded-tl-[250px] shadow-lg backdrop-blur-sm
                                          transition-all duration-300
                                          ${isActive ? 'opacity-100 scale-105' : 'opacity-90'}
                                          hover:opacity-100 group`}
                            >
                                <span className={`absolute top-1/4 left-1/4 transform -rotate-[60deg]
                                              text-white font-bold text-lg tracking-wide
                                              transition-all duration-300 drop-shadow-md
                                              ${isActive ? 'scale-110' : ''}`}>
                                    {section.label}
                                </span>

                                {/* Subsections */}
                                {isActive && (
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                                 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 min-w-[180px]
                                                 transition-all duration-300 z-30 border border-gray-100">
                                        {section.subsections.map((subsection) => (
                                            <Link
                                                key={subsection.id}
                                                href={subsection.link}
                                                className="block px-4 py-3 text-gray-700 rounded-lg
                                                         hover:bg-gray-50/80 transition-all duration-200
                                                         hover:translate-x-1 hover:shadow-sm"
                                            >
                                                <span className="font-medium">{subsection.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Reset button */}
            {isExpanded && (
                <button
                    onClick={() => {
                        setIsExpanded(false);
                        setActiveSection(null);
                    }}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16
                             px-6 py-3 bg-white text-gray-700 rounded-full shadow-lg
                             hover:shadow-xl hover:bg-gray-50 transition-all duration-300
                             border border-gray-200 font-medium"
                >
                    Reset Menu
                </button>
            )}
        </div>
    );
} 