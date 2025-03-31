"use client"
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

interface SquareData {
    id: number;
    src: string;
}

const squareData: SquareData[] = [
    {
        id: 1,
        src: "/gallery/iceland1.jpg",
    },
    {
        id: 2,
        src: "/gallery/iceland2.jpg",
    },
    {
        id: 3,
        src: "/gallery/iceland3.jpg",
    },
    {
        id: 4,
        src: "/gallery/iceland4.jpg",
    },
    {
        id: 5,
        src: "/gallery/iceland5.jpg",
    },
    {
        id: 6,
        src: "/gallery/iceland6.jpg",
    }
];

const ImageCard = ({ sq, index }: { sq: SquareData; index: number }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * 10;
        const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * 10;

        setRotateX(-rotateXValue);
        setRotateY(rotateYValue);
    };

    return (
        <div className={`relative w-full h-full ${index === 0 ? 'col-span-2 row-span-2' :
            index === 1 ? 'col-span-1 row-span-1' :
                index === 2 ? 'col-span-1 row-span-1' :
                    index === 3 ? 'col-span-2 row-span-1' :
                        index === 4 ? 'col-span-1 row-span-1' :
                            'col-span-1 row-span-1'
            }`}>
            <motion.div
                layout
                transition={{ duration: 1.5, type: "spring" }}
                className="relative w-full h-full group overflow-hidden rounded-lg"
                style={{
                    backgroundImage: `url(${sq.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                }}
                onMouseMove={handleMouseMove}
                whileHover={{ scale: 1.02 }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center select-none">
                        <div className="text-white text-center max-w-[80%] z-10">
                            <h3 className="text-lg font-semibold mb-1 truncate">Iceland</h3>
                            <p className="text-sm line-clamp-2">Beautiful landscapes</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const generateSquares = () => {
    return shuffle(squareData).map((sq: SquareData, index: number) => (
        <ImageCard key={sq.id} sq={sq} index={index} />
    ));
};

const shuffle = (array: SquareData[]): SquareData[] => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const ShuffleGrid = () => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [squares, setSquares] = useState(generateSquares());

    const shuffleSquares = useCallback(() => {
        setSquares(generateSquares());
        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    }, []);

    useEffect(() => {
        shuffleSquares();

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [shuffleSquares]);

    return (
        <div className="grid grid-cols-3 grid-rows-3 h-[600px] gap-2">
            {squares.map((sq) => sq)}
        </div>
    );
};

const ShuffleHero = () => {
    return (
        <section className="w-full px-8 py-12 max-w-6xl mx-auto">
            <ShuffleGrid />
        </section>
    );
};

export default ShuffleHero;