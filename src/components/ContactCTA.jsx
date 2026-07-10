import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-50/50"></div>
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center bg-gradient-to-br from-purple-700 to-blue-700 rounded-[3rem] p-12 md:p-20 shadow-2xl overflow-hidden">
        
        {/* Background blobs for CTA */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Build Your Industrial Career?</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of successful alumni who started their journey at Gurukul ITI. Get in touch with our counselors today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-purple-700 hover:bg-slate-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
            <FaPaperPlane /> Apply Online Today
          </Link>
          <a href="tel:+911234567890" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all">
            <FaPhoneAlt /> Call +91 123 456 7890
          </a>
        </div>
      </div>
    </section>
  );
}
