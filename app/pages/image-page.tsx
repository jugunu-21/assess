import React from 'react';
import Image from 'next/image';

export default function ImagePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Exploring Nature&apos;s Beauty</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[400px]">
                    <Image
                        src="/assets/link-preview/nature.jpg"
                        alt="Beautiful nature landscape"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="space-y-4">
                    <p className="text-lg">
                        Nature&apos;s beauty is a testament to the incredible diversity and wonder of our world.
                        From majestic mountains to serene lakes, each landscape tells its own unique story.
                    </p>
                    <p className="text-lg">
                        This image captures the essence of natural beauty, showcasing the perfect harmony
                        between different elements of the environment.
                    </p>
                </div>
            </div>
        </div>
    );
} 