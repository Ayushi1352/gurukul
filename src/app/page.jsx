import React from 'react';
import HeroBanner from '../components/HeroBanner';
import InstituteIntroduction from '../components/InstituteIntroduction';
import Features from '../components/Features';
import CoursesOverview from '../components/CoursesOverview';
import AdmissionBanner from '../components/AdmissionBanner';
import PlacementHighlights from '../components/PlacementHighlights';
import Facilities from '../components/Facilities';
import Testimonials from '../components/Testimonials';
import GalleryPreview from '../components/GalleryPreview';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <InstituteIntroduction />
      <Features />
      <CoursesOverview />
      <AdmissionBanner />
      <PlacementHighlights />
      <Facilities />
      <Testimonials />
      <GalleryPreview />
      <ContactCTA />
    </main>
  );
}
