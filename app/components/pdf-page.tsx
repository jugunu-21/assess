import React from 'react';

export default function PdfPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Documentation</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-[600px]">
                    <iframe
                        src="/assets/link-preview/anaya_ConfirmationPage-253510688087_cuet.pdf"
                        className="w-full h-full rounded-lg"
                        title="PDF Document"
                    />
                </div>
                <div className="space-y-4">
                    <p className="text-lg">
                        Documentation is essential for understanding complex systems and processes.
                        It provides a structured way to share knowledge and maintain information.
                    </p>
                    <p className="text-lg">
                        This PDF contains detailed information about various topics, serving as a
                        comprehensive reference for those seeking to learn more.
                    </p>
                </div>
            </div>
        </div>
    );
} 