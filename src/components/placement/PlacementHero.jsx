"use client";
import React from 'react';
import { FaHandshake, FaArrowRight, FaChartLine, FaUsers, FaBuilding, FaRupeeSign } from 'react-icons/fa';

export default function PlacementHero() {
  return (
    <section
      className="relative w-full bg-slate-950 font-sans overflow-hidden py-24 lg:py-36 border-b border-slate-800"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')",
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
            <FaHandshake /> Placements
          </span>
          <span className="text-slate-200 text-xs sm:text-sm font-medium drop-shadow-md">
            Training & Placement Cell
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-semibold text-white mb-6 tracking-tight leading-[1.05] drop-shadow-2xl">
          Talent and Opportunity
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal mb-12 max-w-2xl leading-relaxed drop-shadow-lg">
          Our dedicated Placement Cell works tirelessly to connect our skilled graduates with top-tier tech companies. We don't just provide education; we ensure you launch a successful career.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => {
              const section = document.getElementById('top-recruiters');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-white hover:bg-slate-200 text-slate-900 font-semibold px-8 py-3.5 rounded-full transition-colors text-sm sm:text-base whitespace-nowrap shadow-xl flex items-center justify-center gap-2"
          >
            Top Recruiters <FaArrowRight />
          </button>
        </div>

        {/* Stats Below Button */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-3">
            <FaChartLine className="text-2xl sm:text-3xl text-blue-400 drop-shadow-md" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-none mb-1">98%</span>
              <span className="text-slate-400 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase font-bold">Placement Rate</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-700/50"></div>
          <div className="flex items-center gap-3">
            <FaUsers className="text-2xl sm:text-3xl text-blue-400 drop-shadow-md" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-none mb-1">5000+</span>
              <span className="text-slate-400 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase font-bold">Alumni Placed</span>
            </div>
          </div>
          <div className="hidden lg:block w-px h-10 bg-slate-700/50"></div>
          <div className="flex items-center gap-3">
            <FaBuilding className="text-2xl sm:text-3xl text-blue-400 drop-shadow-md" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-none mb-1">200+</span>
              <span className="text-slate-400 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase font-bold">Recruiting Partners</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-700/50"></div>
          <div className="flex items-center gap-3">
            <FaRupeeSign className="text-2xl sm:text-3xl text-blue-400 drop-shadow-md" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-none mb-1">15 LPA</span>
              <span className="text-slate-400 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase font-bold">Highest Package</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
