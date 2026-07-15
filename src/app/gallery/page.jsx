import React from 'react';
import GalleryHero from '@/components/gallery/GalleryHero';
import PhotoGrid from '@/components/gallery/PhotoGrid';

export const metadata = {
  title: 'Gallery | Gurukul Jyoti I.T.I',
  description: 'Explore the vibrant campus life, state-of-the-art laboratories, and unforgettable moments at Gurukul Jyoti I.T.I.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <GalleryHero />
      <PhotoGrid />
    </main>
  );
}
