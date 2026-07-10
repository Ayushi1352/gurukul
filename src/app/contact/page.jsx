import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactDetails from '@/components/contact/ContactDetails';
import ContactFormAndMap from '@/components/contact/ContactFormAndMap';

export const metadata = {
  title: 'Contact Us | Gurukul ITI',
  description: 'Reach out to Gurukul ITI for admissions, courses, or placement inquiries. We are always ready to assist you.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <ContactHero />
      <ContactDetails />
      <ContactFormAndMap />
    </main>
  );
}
