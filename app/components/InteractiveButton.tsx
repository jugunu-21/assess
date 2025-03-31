'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Subsection {
    id: string;
    label: string;
    link: string;
    gradient: string;
}

interface Section {
    id: string;
    label: string;
    gradient: string;
    hoverGradient: string;
    subsections: Subsection[];
}

const sections: Section[] = [
    {
        id: 'A',
        label: 'Section A',
        gradient: 'from-blue-500 to-indigo-500',
        hoverGradient: 'from-blue-600 to-indigo-600',
        subsections: [
            {
                id: 'A1',
                label: 'Subset A1',
                link: '/section-a/a1',
                gradient: 'from-blue-400 to-indigo-400'
            },
            {
                id: 'A2',
                label: 'Subset A2',
                link: '/section-a/a2',
                gradient: 'from-blue-400 to-indigo-400'
            },
            {
                id: 'A3',
                label: 'Subset A3',
                link: '/section-a/a3',
                gradient: 'from-blue-400 to-indigo-400'
            }
        ],
    },
    {
        id: 'B',
        label: 'Section B',
        gradient: 'from-emerald-500 to-teal-500',
        hoverGradient: 'from-emerald-600 to-teal-600',
        subsections: [
            {
                id: 'B1',
                label: 'Subset B1',
                link: '/section-b/b1',
                gradient: 'from-emerald-400 to-teal-400'
            },
            {
                id: 'B2',
                label: 'Subset B2',
                link: '/section-b/b2',
                gradient: 'from-emerald-400 to-teal-400'
            },
            {
                id: 'B3',
                label: 'Subset B3',
                link: '/section-b/b3',
                gradient: 'from-emerald-400 to-teal-400'
            }
        ],
    },
    {
        id: 'C',
        label: 'Section C',
        gradient: 'from-rose-500 to-pink-500',
        hoverGradient: 'from-rose-600 to-pink-600',
        subsections: [
            {
                id: 'C1',
                label: 'Subset C1',
                link: '/section-c/c1',
                gradient: 'from-rose-400 to-pink-400'
            },
            {
                id: 'C2',
                label: 'Subset C2',
                link: '/section-c/c2',
                gradient: 'from-rose-400 to-pink-400'
            },
            {
                id: 'C3',
                label: 'Subset C3',
                link: '/section-c/c3',
                gradient: 'from-rose-400 to-pink-400'
            }
        ],
    },
];

export default function InteractiveButtion() {
    const [isMainHovered, setIsMainHovered] = useState(false);
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const calculateRotation = (index: number) => {
        return (360 / sections.length) * index;
    };

    const calculateSubsectionPosition = (sectionRotation: number, index: number, total: number) => {
        const arcSize = 60; // Smaller arc for tighter grouping
        const startAngle = sectionRotation - (arcSize / 2);
        const angleStep = arcSize / (total - 1);
        const angle = startAngle + (index * angleStep);
        const radius = 280; // Increased radius to position subsections further out

        return {
            x: Math.cos((angle - 90) * (Math.PI / 180)) * radius,
            y: Math.sin((angle - 90) * (Math.PI / 180)) * radius,
        };
    };

    const handleMainHoverStart = () => {
        setIsMainHovered(true);
        setIsMenuOpen(true);
    };

    const handleMainHoverEnd = () => {
        setIsMainHovered(false);
    };

    const handleSectionHover = (sectionId: string) => {
        setHoveredSection(sectionId);
    };

    const handleMenuMouseLeave = () => {
        setIsMainHovered(false);
        setHoveredSection(null);
        setIsMenuOpen(false);
    };

    return (
        <div
            className="relative w-[800px] h-[800px] mx-auto flex items-center justify-center"
            ref={menuRef}
            onMouseLeave={handleMenuMouseLeave}
        >
            {/* Main Button */}
            <motion.button
                className="absolute z-50 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 
                         text-white font-bold text-lg shadow-lg overflow-hidden group"
                onHoverStart={handleMainHoverStart}
                onHoverEnd={handleMainHoverEnd}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                }}
                animate={{
                    rotate: isMainHovered ? 180 : 0,
                    transition: { duration: 0.3 }
                }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                />
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    <motion.div
                        className="relative"
                        animate={{
                            scale: isMainHovered ? 1.2 : 1,
                            rotate: isMainHovered ? 180 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-12 h-12 mb-1"
                        >
                            <path
                                fill="currentColor"
                                d="M12 2L2 12h20L12 2zm0 4.5L17.5 12 12 17.5V6.5z"
                            />
                        </svg>
                        <span className="text-sm font-medium block text-center">
                            {isMainHovered ? 'Explore' : 'Start'}
                        </span>
                    </motion.div>
                    <motion.div
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                        animate={{
                            opacity: isMainHovered ? 1 : 0,
                            y: isMainHovered ? 0 : 10
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex space-x-1">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 h-1.5 rounded-full bg-white"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.button>

            {/* Sections */}
            <AnimatePresence>
                {isMenuOpen && sections.map((section, index) => {
                    const rotation = calculateRotation(index);
                    const isSectionHovered = hoveredSection === section.id;

                    return (
                        <React.Fragment key={section.id}>
                            {/* Main Section Circle */}
                            <motion.div
                                className="absolute z-10"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                    x: `${Math.cos((rotation - 90) * (Math.PI / 180)) * 150}px`,
                                    y: `${Math.sin((rotation - 90) * (Math.PI / 180)) * 150}px`,
                                }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                    delay: index * 0.1,
                                }}
                            >
                                <motion.div
                                    className={`relative w-24 h-24 rounded-full text-white font-bold 
                                              flex items-center justify-center cursor-pointer overflow-hidden
                                              bg-gradient-to-r ${section.gradient} group hover:scale-110`}
                                    onMouseEnter={() => handleSectionHover(section.id)}
                                    // onMouseLeave={() => setHoveredSection(null)}
                                    animate={{
                                        boxShadow: isSectionHovered
                                            ? '0 0 20px rgba(0,0,0,0.3)'
                                            : '0 0 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-r ${section.hoverGradient} opacity-0 group-hover:opacity-100`}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative z-10 text-xl font-bold">
                                        {section.id}
                                    </span>
                                </motion.div>
                            </motion.div>

                            {/* Subsections */}
                            <AnimatePresence>
                                {isSectionHovered && section.subsections.map((subsection, subIndex) => {
                                    const position = calculateSubsectionPosition(
                                        rotation,
                                        subIndex,
                                        section.subsections.length
                                    );

                                    return (
                                        <motion.div
                                            key={subsection.id}
                                            className="absolute z-20"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{
                                                scale: 1,
                                                opacity: 1,
                                                x: position.x,
                                                y: position.y,
                                            }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 25,
                                                delay: subIndex * 0.1,
                                            }}
                                        >
                                            <Link href={subsection.link}>
                                                <motion.div
                                                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${subsection.gradient} 
                                                              flex items-center justify-center text-white
                                                              shadow-lg cursor-pointer relative hover:scale-110`}
                                                >
                                                    <span className="text-base font-bold">
                                                        {subsection.id}
                                                    </span>
                                                </motion.div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </React.Fragment>
                    );
                })}
            </AnimatePresence>

            {/* Background circle effect */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0) 70%)',
                }}
                initial={{ scale: 0 }}
                animate={{
                    scale: isMenuOpen ? 1 : 0,
                    rotate: isMenuOpen ? 360 : 0,
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
} 