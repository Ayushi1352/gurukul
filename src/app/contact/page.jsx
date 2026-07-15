import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormAndMap from '@/components/contact/ContactFormAndMap';

export const metadata = {
  title: 'Contact Us | Gurukul Jyoti I.T.I',
  description: 'Reach out to Gurukul Jyoti I.T.I for admissions, courses, or placement inquiries. We are always ready to assist you.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <ContactHero />
      <ContactFormAndMap />
    </main>
  );
}
