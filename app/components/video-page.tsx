import React from 'react';

export default function VideoPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Understanding Motion</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://res.cloudinary.com/dgz7reiyb/video/upload/v1743407003/video_t4vhjs.mp4"
                        title="Sample Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="space-y-4">
                    <p className="text-lg">
                        Motion is a fundamental concept in physics that describes the change in position
                        of an object over time. Understanding motion helps us comprehend the world around us.
                    </p>
                    <p className="text-lg">
                        This video demonstrates various aspects of motion, from simple linear movement
                        to complex patterns that occur in nature.
                    </p>
                </div>
            </div>
        </div>
    );
} 