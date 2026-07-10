import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import History from '@/components/about/History';
import VisionMission from '@/components/about/VisionMission';
import DirectorMessage from '@/components/about/DirectorMessage';
import FacultyOverview from '@/components/about/FacultyOverview';
import Facilities from '@/components/Facilities';
import Achievements from '@/components/about/Achievements';
import Affiliations from '@/components/about/Affiliations';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <History />
      <VisionMission />
      <DirectorMessage />
      <FacultyOverview />
      <Facilities />
      <Achievements />
      <Affiliations />
    </main>
  );
}
