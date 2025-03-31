"use client"
import React from 'react';
import { EnhancedLinkPreview } from './enhanced-link-preview';

const contentData = {
    image: {
        title: "Exploring Nature&apos;s Beauty",
        description: "Discover the breathtaking landscapes and natural wonders captured in stunning photography.",
        type: "image" as const,
        thumbnail: "/assets/link-preview/nature.jpg",
        href: "/pages/image-page"
    },
    video: {
        title: "Understanding Motion",
        description: "Learn about the fundamental concepts of motion through engaging video demonstrations.",
        type: "video" as const,
        thumbnail: "/assets/link-preview/video-thumbnail.jpg",
        videoUrl: "/assets/link-preview/video.mp4",
        href: "/pages/video-page"
    },
    gif: {
        title: "Animation in Action",
        description: "Experience the power of animation through dynamic GIF demonstrations.",
        type: "gif" as const,
        thumbnail: "/assets/link-preview/animation-thumbnail.jpg",
        gifUrl: "/assets/link-preview/Animation (1).gif",
        href: "/pages/gif-page"
    },
    pdf: {
        title: "Documentation",
        description: "Access comprehensive documentation and detailed information in PDF format.",
        type: "pdf" as const,
        thumbnail: "/assets/link-preview/pdf-thumbnail.jpg",
        pdfUrl: "/assets/link-preview/anaya_ConfirmationPage-253510688087_cuet.pdf",
        href: "/pages/pdf-page"
    }
};

export function LinkPreview() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Interactive Content Gallery
                </h1>

                <div className="max-w-3xl mx-auto space-y-8">
                    <section className="prose prose-lg dark:prose-invert">
                        <p className="text-xl text-gray-700 dark:text-gray-300">
                            Welcome to our interactive content gallery! Here you can explore different types of content
                            through our enhanced preview system. Hover over any of the highlighted links below to see
                            a preview of the content before visiting the full page.
                        </p>
                    </section>

                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Start your journey by exploring our{" "}
                            <EnhancedLinkPreview
                                href={contentData.image.href}
                                content={contentData.image}
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                            >
                                nature photography gallery
                            </EnhancedLinkPreview>
                            , where you&apos;ll find stunning landscapes and natural wonders.
                        </p>

                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            For those interested in motion and physics, check out our{" "}
                            <EnhancedLinkPreview
                                href={contentData.video.href}
                                content={contentData.video}
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                            >
                                video demonstrations
                            </EnhancedLinkPreview>
                            .
                        </p>

                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Experience the power of animation through our{" "}
                            <EnhancedLinkPreview
                                href={contentData.gif.href}
                                content={contentData.gif}
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                            >
                                animated GIFs
                            </EnhancedLinkPreview>
                            .
                        </p>

                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Finally, dive deep into our{" "}
                            <EnhancedLinkPreview
                                href={contentData.pdf.href}
                                content={contentData.pdf}
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                            >
                                comprehensive documentation
                            </EnhancedLinkPreview>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
