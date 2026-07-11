import React from 'react';
import PlacementHero from '@/components/placement/PlacementHero';
import TrainingAndSkills from '@/components/placement/TrainingAndSkills';
import RecruitmentProcess from '@/components/placement/RecruitmentProcess';
import PlacementStats from '@/components/placement/PlacementStats';
import RecruitingCompanies from '@/components/placement/RecruitingCompanies';
import SuccessStories from '@/components/placement/SuccessStories';
import PlacementGallery from '@/components/placement/PlacementGallery';

export default function PlacementPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PlacementHero />
      <TrainingAndSkills />
      <RecruitmentProcess />
      {/* <PlacementStats /> */}
      <RecruitingCompanies />
      <SuccessStories />
      <PlacementGallery />
    </main>
  );
}
