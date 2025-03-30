'use client';

import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    {
        src: '/gallery/iceland1.jpg',
        alt: 'Iceland Landscape 1',
        title: 'Majestic Waterfalls',
        color: '#1a365d',
        description: 'Experience the raw power of Iceland\'s most stunning waterfalls',
        category: 'Water',
        location: 'South Iceland'
    },
    {
        src: '/gallery/iceland2.jpg',
        alt: 'Iceland Landscape 2',
        title: 'Northern Lights',
        color: '#2d3748',
        description: 'Witness the ethereal dance of the Aurora Borealis',
        category: 'Sky',
        location: 'North Iceland'
    },
    {
        src: '/gallery/iceland3.jpg',
        alt: 'Iceland Landscape 3',
        title: 'Volcanic Terrain',
        color: '#4a5568',
        description: 'Explore the dramatic landscapes shaped by volcanic forces',
        category: 'Land',
        location: 'West Iceland'
    },
    {
        src: '/gallery/iceland4.jpg',
        alt: 'Iceland Landscape 4',
        title: 'Glacial Lagoon',
        color: '#2c5282',
        description: 'Marvel at the crystal-clear waters of glacial lagoons',
        category: 'Ice',
        location: 'Southeast Iceland'
    },
    {
        src: '/gallery/iceland5.jpg',
        alt: 'Iceland Landscape 5',
        title: 'Black Sand Beach',
        color: '#1a202c',
        description: 'Walk along the unique black sand beaches of Iceland',
        category: 'Beach',
        location: 'South Coast'
    },
    {
        src: '/gallery/iceland6.jpg',
        alt: 'Iceland Landscape 6',
        title: 'Mountain Vista',
        color: '#2d3748',
        description: 'Take in the breathtaking views of Iceland\'s mountain ranges',
        category: 'Mountains',
        location: 'East Iceland'
    }
];

export default function PictureGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');

    // 3D tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isHovered) {
                setDirection(1);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [isHovered]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        })
    };

    const filteredImages = activeCategory === 'all'
        ? images
        : images.filter(img => img.category.toLowerCase() === activeCategory.toLowerCase());

    return (
        <div className="relative min-h-screen w-full bg-black overflow-hidden">
            {/* Category Filter */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
                {['all', 'Water', 'Sky', 'Land', 'Ice', 'Beach', 'Mountains'].map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                            ? 'bg-white text-black'
                            : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Main Gallery */}
            <div className="relative h-[80vh] w-full">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.3 }
                        }}
                        className="absolute w-full h-full"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                            perspective: 1000
                        }}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                                <div className="absolute bottom-0 left-0 right-0 p-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm">
                                                {images[currentIndex].category}
                                            </span>
                                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm">
                                                {images[currentIndex].location}
                                            </span>
                                        </div>
                                        <h2 className="text-5xl font-bold text-white">
                                            {images[currentIndex].title}
                                        </h2>
                                        <p className="text-xl text-white/90 max-w-2xl">
                                            {images[currentIndex].description}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8">
                    <motion.button
                        className="bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-sm"
                        onClick={() => setDirection(-1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ←
                    </motion.button>
                    <div className="flex gap-2">
                        {filteredImages.map((_, index) => (
                            <motion.button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                                    }`}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            />
                        ))}
                    </div>
                    <motion.button
                        className="bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-sm"
                        onClick={() => setDirection(1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        →
                    </motion.button>
                </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-black/50 backdrop-blur-sm">
                <div className="container mx-auto h-full flex items-center justify-center gap-4 overflow-x-auto px-4">
                    {filteredImages.map((image, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 ${index === currentIndex ? 'ring-2 ring-white' : ''
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
} 