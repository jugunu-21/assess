'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function SectionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const params = useParams();
    const section = params.section as string;

    return (
        <div className="min-h-screen">
            {/* Section Header */}
            <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">
                            ← Back to Home
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-800 capitalize">
                            {section.replace('-', ' ')}
                        </h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>
                {children}
            </main>
        </div>
    );
} 