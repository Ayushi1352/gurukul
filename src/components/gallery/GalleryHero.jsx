"use client";
import React from 'react';
import { FaImage, FaArrowRight } from 'react-icons/fa';

export default function GalleryHero() {
  return (
    <section
      className="relative w-full bg-slate-950 font-sans overflow-hidden py-24 lg:py-36 border-b border-slate-800"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')",
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">

        {/* Top Pill Badge */}
        <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-700/50 rounded-full p-1.5 pr-5 mb-8 backdrop-blur-md shadow-2xl">
          <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold tracking-wide px-3 py-1 rounded-full drop-shadow-md flex items-center gap-2">
            <FaImage /> Campus Tour
          </span>
          <span className="text-slate-200 text-xs sm:text-sm font-medium drop-shadow-md">
            Life At Gurukul
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-semibold text-white mb-6 tracking-tight leading-[1.05] drop-shadow-2xl">
          Our Gallery
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal mb-12 max-w-2xl leading-relaxed drop-shadow-lg">
          Explore the vibrant campus life, state-of-the-art laboratories, and unforgettable moments at Gurukul ITI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => {
              const section = document.getElementById('gallery-grid');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-white hover:bg-slate-200 text-slate-900 font-semibold px-8 py-3.5 rounded-full transition-colors text-sm sm:text-base whitespace-nowrap shadow-xl flex items-center justify-center gap-2"
          >
            Explore Photos <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}
