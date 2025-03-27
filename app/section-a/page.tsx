import Link from 'next/link';

export default function SectionA() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Section A
                </h1>
                <div className="text-center">
                    <p className="text-lg text-gray-600 mb-6">
                        This is the content for Section A. You can add your specific content here.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full
                     hover:bg-blue-600 transition-colors duration-300"
                    >
                        Back to Menu
                    </Link>
                </div>
            </div>
        </div>
    );
} 