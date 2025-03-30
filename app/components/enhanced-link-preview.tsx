import React from 'react';
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "../lib/utils";

type ContentType = 'image' | 'video' | 'gif' | 'pdf';

interface PreviewContent {
    title: string;
    description: string;
    type: ContentType;
    thumbnail: string;
}

interface EnhancedLinkPreviewProps {
    children: React.ReactNode;
    href: string;
    content: PreviewContent;
    className?: string;
}

export const EnhancedLinkPreview: React.FC<EnhancedLinkPreviewProps> = ({
    children,
    href,
    content,
    className,
}) => {
    const springConfig = { stiffness: 100, damping: 15 };

    // Motion values for tracking mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Transform motion values for smooth movement
    const translateX = useSpring(mouseX, springConfig);
    const translateY = useSpring(mouseY, springConfig);

    // Add some rotation based on mouse position
    const rotateX = useTransform(translateY, [-100, 100], [10, -10]);
    const rotateY = useTransform(translateX, [-100, 100], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        const targetRect = event.currentTarget.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        const eventOffsetY = event.clientY - targetRect.top;

        // Calculate offset from center
        const offsetX = (eventOffsetX - targetRect.width / 2) / 2;
        const offsetY = (eventOffsetY - targetRect.height / 2) / 2;

        mouseX.set(offsetX);
        mouseY.set(offsetY);
    };

    const getTypeIcon = (type: ContentType) => {
        switch (type) {
            case 'image':
                return '🖼️';
            case 'video':
                return '🎥';
            case 'gif':
                return '🎞️';
            case 'pdf':
                return '📄';
            default:
                return '📎';
        }
    };

    return (
        <HoverCardPrimitive.Root
            openDelay={50}
            closeDelay={100}
        >
            <HoverCardPrimitive.Trigger
                onMouseMove={handleMouseMove}
                className={cn("inline-block", className)}
                asChild
            >
                <Link href={href}>
                    {children}
                </Link>
            </HoverCardPrimitive.Trigger>

            <HoverCardPrimitive.Content
                className="z-50 w-80 rounded-lg border bg-white p-4 shadow-lg outline-none dark:bg-gray-800 dark:border-gray-700"
                side="top"
                align="center"
                sideOffset={10}
            >
                <motion.div
                    style={{
                        x: translateX,
                        y: translateY,
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="space-y-2"
                >
                    <div className="relative h-40 w-full overflow-hidden rounded-lg">
                        <Image
                            src={content.thumbnail}
                            alt={content.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                            {getTypeIcon(content.type)}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium text-lg dark:text-white">
                            {content.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {content.description}
                        </p>
                    </div>
                </motion.div>
            </HoverCardPrimitive.Content>
        </HoverCardPrimitive.Root>
    );
}; 