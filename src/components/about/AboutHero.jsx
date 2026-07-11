import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section
      className="relative w-full font-sans overflow-hidden bg-slate-950 pt-28 lg:pt-32 flex flex-col border-b border-slate-800"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Dark Gradient Overlay for perfect readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50 backdrop-blur-sm z-0 pointer-events-none"></div>

      {/* Subtle Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center pb-12 lg:pb-16 mt-10">

        {/* Top Pill Badge */}
        <div className="inline-flex w-fit items-center gap-3 bg-slate-900/80 border border-slate-700/50 rounded-full p-1.5 pr-5 mb-8 backdrop-blur-md shadow-2xl">
          <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold tracking-wide px-3 py-1 rounded-full drop-shadow-md">
            Admissions Open
          </span>
          <span className="text-slate-200 text-xs sm:text-sm font-medium drop-shadow-md">
            New Batches Starting 2025
          </span>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-[4rem] font-bold text-[#EBEDFA] mb-5 lg:mb-6 leading-[1.1] tracking-tight">
            Shaping the Tech Leaders of Tomorrow
          </h1>

          <p className="text-[#EBEDFA]/90 text-base sm:text-lg lg:text-xl font-medium mb-8 leading-relaxed max-w-2xl">
            Blending academic rigor with practical industry experience to ensure our students are always one step ahead in the digital world.
          </p>

          <button className="bg-[#191313] hover:bg-black text-[#EBEDFA] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 w-fit">
            Explore Programs <FaArrowRight className="text-sm font-light ml-1" />
          </button>

          {/* Stats Below Button */}
          <div className="mt-12 sm:mt-12 flex flex-wrap items-center gap-6 sm:gap-10  max-w-fit pr-8">
            <div className="flex flex-row items-center gap-2">
              <span className="text-xl sm:text-3xl font-bold text-[#EBEDFA] tracking-tight">10+</span>
              <span className="text-slate-400 text-[10px] sm:text-xs tracking-[0.15em] uppercase font-bold mt-1">Years of Excellence</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-700/50"></div>
            <div className="flex flex-row  items-center gap-2">
              <span className="text-xl sm:text-3xl font-bold text-[#EBEDFA] tracking-tight">5000+</span>
              <span className="text-slate-400 text-[10px] sm:text-xs tracking-[0.15em] uppercase font-bold mt-1">Placed Alumni</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-700/50"></div>
            <div className="flex flex-row items-center gap-2">
              <span className="text-xl sm:text-3xl font-bold text-[#EBEDFA] tracking-tight">50+</span>
              <span className="text-slate-400 text-[10px] sm:text-xs tracking-[0.15em] uppercase font-bold mt-1">Expert Faculty</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
