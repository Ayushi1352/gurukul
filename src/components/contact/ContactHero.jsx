"use client";
import React from 'react';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

export default function ContactHero() {
  return (
    <section
      className="relative w-full bg-slate-950 font-sans overflow-hidden py-24 lg:py-40 border-b border-slate-800 min-h-[60vh] lg:min-h-[112vh]"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Gradient Overlay for perfect readability on the left where text is */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50 backdrop-blur-sm z-0 pointer-events-none"></div>

      {/* Subtle Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      ></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start mt-16 lg:mt-24">

        {/* Top Pill Badge */}
        <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-700/50 rounded-full p-1.5 pr-5 mb-8 backdrop-blur-md shadow-2xl">
          <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold tracking-wide px-3 py-1 rounded-full drop-shadow-md flex items-center gap-2">
            <FaPhoneAlt /> Contact Us
          </span>
          <span className="text-slate-200 text-xs sm:text-sm font-medium drop-shadow-md">
            We Are Here For You
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-semibold text-white mb-6 tracking-tight leading-[1.05] drop-shadow-2xl">
          Get In Touch
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal mb-12 max-w-2xl leading-relaxed drop-shadow-lg">
          Have questions about admissions, courses, or placements? Reach out to us. Our team is always ready to assist you in shaping your future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => {
              const form = document.getElementById('contact-form');
              if (form) form.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-white hover:bg-slate-200 text-slate-900 font-semibold px-8 py-3.5 rounded-full transition-colors text-sm sm:text-base whitespace-nowrap shadow-xl flex items-center justify-center gap-2"
          >
            Send a Message <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}
