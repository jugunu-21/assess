'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import GifPage from '@/app/components/gif-page';
import PdfPage from '@/app/components/pdf-page';
import ImagePage from '@/app/components/image-page';
import VideoPage from '@/app/components/video-page';
export default function IndividualOpage() {
    const params = useParams();
    const { individualOpage } = params;

    return (
        <div>
            <h1>Individual Opage</h1>
            <GifPage />
            <ImagePage />
            <PdfPage />
            <VideoPage />
            <p>{individualOpage}</p>
        </div>
    );
}