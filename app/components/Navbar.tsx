'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('interactive-menu');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.scrollY + 100;

            sections.forEach((section) => {
                const sectionElement = section as HTMLElement;
                const sectionHeight = sectionElement.offsetHeight;
                const sectionTop = sectionElement.offsetTop - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId || 'interactive-menu');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'interactive-menu', label: 'Interactive Menu' },
        { id: 'link-preview', label: 'Link Preview' },
        { id: 'chair-configurator', label: 'Chair Configurator' },
        { id: 'video-section', label: 'Video Section' },
        { id: 'gallery', label: 'Gallery' }
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo/Brand */}
                    <div className="text-xl font-bold text-gray-800">
                        <span className="text-blue-600">Cynlr</span> Demo
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300
                                    ${activeSection === item.id
                                        ? 'text-blue-600'
                                        : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-100 transition-transform duration-300" />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Navigation Button */}
                    <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div className="md:hidden hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`block px-3 py-2 rounded-md text-base font-medium
                                    ${activeSection === item.id
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 