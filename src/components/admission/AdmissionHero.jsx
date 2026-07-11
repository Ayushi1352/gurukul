"use client";
import React from 'react';
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';

export default function AdmissionHero() {
  return (
    <section
      className="relative w-full bg-slate-950 font-sans overflow-hidden py-24 lg:py-36 border-b border-slate-800"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=2070&auto=format&fit=crop')",
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
            <FaGraduationCap /> Apply Now
          </span>
          <span className="text-slate-200 text-xs sm:text-sm font-medium drop-shadow-md">
            Admissions 2024-25 Open
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-semibold text-white mb-6 tracking-tight leading-[1.05] drop-shadow-2xl">
          Start Your Tech Journey<br className="hidden lg:block" />  Today
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal mb-12 max-w-2xl leading-relaxed drop-shadow-lg">
          Join Gurukul ITI and transform your passion for technology into a high-paying, future-proof profession. Our admissions are now open for all premier tech programs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => {
              const form = document.getElementById('admission-form');
              if (form) form.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-white hover:bg-slate-200 text-slate-900 font-semibold px-8 py-3.5 rounded-full transition-colors text-sm sm:text-base whitespace-nowrap shadow-xl flex items-center justify-center gap-2"
          >
            Fill Application <FaArrowRight />
          </button>
          <button
            onClick={() => {
              const process = document.getElementById('admission-process');
              if (process) process.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 backdrop-blur-md border border-slate-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all text-sm sm:text-base whitespace-nowrap shadow-lg flex items-center justify-center"
          >
            View Process
          </button>
        </div>

      </div>
    </section>
  );
}
