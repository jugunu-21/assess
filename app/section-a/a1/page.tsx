import Link from 'next/link';

export default function SubsectionA1() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Navigation */}
                    <nav className="mb-8 bg-white/80 backdrop-blur-sm rounded-full shadow-sm px-6 py-3 inline-block">
                        <ol className="flex items-center space-x-3 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span>Menu</span>
                                </Link>
                            </li>
                            <li className="text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li>
                                <Link
                                    href="/section-a"
                                    className="text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    Section A
                                </Link>
                            </li>
                            <li className="text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li className="text-blue-600 font-medium">Subsection A1</li>
                        </ol>
                    </nav>

                    {/* Main Content */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 
                                  transform transition-all duration-300 hover:shadow-2xl">
                        <div className="relative">
                            {/* Decorative Element */}
                            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 
                                          rounded-full blur-2xl"></div>

                            <h1 className="text-4xl font-bold text-gray-800 mb-6 relative">
                                Subsection A1
                            </h1>

                            <div className="prose prose-lg prose-blue max-w-none">
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    This is the content for Subsection A1. Experience our enhanced interface with modern design patterns and smooth interactions.
                                </p>

                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-100">
                                    <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        Key Features
                                    </h2>
                                    <ul className="space-y-3 text-blue-700">
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Smooth Animations & Transitions
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Intuitive Navigation System
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Modern Glass Morphism Design
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Responsive & Accessible Components
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="mt-12 flex flex-wrap gap-4">
                                <Link
                                    href="/section-a"
                                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 
                                             rounded-full shadow-sm hover:shadow-md transition-all duration-300
                                             border border-blue-100 hover:border-blue-200 group"
                                >
                                    <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back to Section A
                                </Link>
                                <Link
                                    href="/"
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                                             text-white rounded-full shadow-md hover:shadow-xl transition-all duration-300
                                             hover:from-blue-600 hover:to-indigo-700 group"
                                >
                                    <svg className="w-5 h-5 mr-2 transform group-hover:scale-110 transition-transform"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Back to Menu
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 