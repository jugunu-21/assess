'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import GifPage from '@/app/components/gif-page';
import PdfPage from '@/app/components/pdf-page';
import ImagePage from '@/app/components/image-page';
import VideoPage from '@/app/components/video-page';

export default function IndividualOpage() {
    const params = useParams();
    const { content } = params;
    console.log('Current route param:', content);

    const renderComponent = () => {
        switch (content) {
            case 'image-page':
                return <ImagePage />;
            case 'gif-page':
                return <GifPage />;
            case 'pdf-page':
                return <PdfPage />;
            case 'video-page':
                return <VideoPage />;
            default:
                return <div>Page not found</div>;
        }
    };

    return (
        <div>

            {renderComponent()}
        </div>
    );
} 