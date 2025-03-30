import React from 'react';
import Image from 'next/image';

export default function GifPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Animation in Action</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[400px]">
                    <Image
                        src="/assets/link-preview/animation.gif"
                        alt="Animated demonstration"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="space-y-4">
                    <p className="text-lg">
                        Animation brings static content to life, creating engaging and dynamic experiences
                        that capture our attention and imagination.
                    </p>
                    <p className="text-lg">
                        This GIF demonstrates the power of animation in conveying complex ideas and
                        processes in a simple, visually appealing way.
                    </p>
                </div>
            </div>
        </div>
    );
} 