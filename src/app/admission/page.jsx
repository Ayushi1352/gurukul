import React from 'react';
import AdmissionHero from '@/components/admission/AdmissionHero';
import EligibilityAndDocs from '@/components/admission/EligibilityAndDocs';
import AdmissionProcess from '@/components/admission/AdmissionProcess';
import FeeInformation from '@/components/admission/FeeInformation';
import BatchTimings from '@/components/admission/BatchTimings';
import AdmissionForm from '@/components/admission/AdmissionForm';

export default function AdmissionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AdmissionHero />
      <EligibilityAndDocs />
      <AdmissionProcess />
      <FeeInformation />
      <BatchTimings />
      <AdmissionForm />
    </main>
  );
}
