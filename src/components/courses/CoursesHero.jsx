import React from 'react';
import { FaBookOpen, FaLaptopCode, FaUserTie, FaChartLine } from 'react-icons/fa';

export default function CoursesHero() {
  return (
    <section
      className="relative w-full bg-slate-950 font-sans overflow-hidden py-24 lg:py-36 border-b border-slate-800"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop')",
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
          <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold tracking-wide px-3 py-1 rounded-full drop-shadow-md">
            Admissions Open
          </span>
          <span className="text-slate-200 text-xs sm:text-sm font-medium drop-shadow-md">
            New Batches Starting 2025
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-semibold text-white mb-6 tracking-tight leading-[1.05] drop-shadow-2xl">
          Explore Our Tech Courses
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal mb-12 max-w-2xl leading-relaxed drop-shadow-lg">
          Unlock your potential with expert-led technical courses designed for aspiring IT professionals.
        </p>

        {/* Input & Button Container */}
        <div className="w-full max-w-[450px] relative flex items-center bg-slate-800/50 border border-slate-700/50 rounded-full p-1.5 mb-12 focus-within:border-slate-500 transition-colors backdrop-blur-sm shadow-xl">
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent text-white placeholder-slate-400 px-5 focus:outline-none text-sm sm:text-base"
          />
          <button className="bg-white hover:bg-slate-200 text-slate-900 font-semibold px-6 py-2.5 rounded-full transition-colors text-sm sm:text-base whitespace-nowrap shadow-sm">
            Get Syllabus
          </button>
        </div>

        {/* Features Row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-slate-300 text-sm font-medium">
          <div className="flex items-center gap-2">
            <FaBookOpen className="text-blue-500 text-[14px]" />
            <span>Comprehensive Curriculum</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLaptopCode className="text-blue-500 text-[14px]" />
            <span>Flexible Learning</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserTie className="text-blue-500 text-[14px]" />
            <span>Industry Expertise</span>
          </div>
          <div className="flex items-center gap-2">
            <FaChartLine className="text-blue-500 text-[14px]" />
            <span>Career Advancement</span>
          </div>
        </div>

      </div>

    </section>
  );
}
