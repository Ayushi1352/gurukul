import React from 'react';
import GalleryHero from '@/components/gallery/GalleryHero';
import PhotoGrid from '@/components/gallery/PhotoGrid';

export const metadata = {
  title: 'Gallery | Gurukul ITI',
  description: 'Explore the vibrant campus life, state-of-the-art laboratories, and unforgettable moments at Gurukul ITI.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <GalleryHero />
      <PhotoGrid />
    </main>
  );
}
