'use client';

import React from 'react';

const VideoSection = () => {
    return (
        <section className="relative w-full h-screen">
            <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="https://res.cloudinary.com/dgz7reiyb/video/upload/v1743407003/video_t4vhjs.mp4"
            >
                <source
                    src="https://res.cloudinary.com/dgz7reiyb/video/upload/v1743407003/video_t4vhjs.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Optional overlay text or content */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-white text-center">
                    <h2 className="text-4xl font-bold mb-4">Mesmerizing Flames</h2>
                    <p className="text-xl">Experience the warmth and beauty of natural fire in 4K</p>
                </div>
            </div>
        </section>
    );
};

export default VideoSection; 