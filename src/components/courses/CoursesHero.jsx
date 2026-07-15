import React from 'react';
import Link from 'next/link';
import { FaBookOpen, FaLaptopCode, FaUserTie, FaChartLine, FaArrowRight, FaWhatsapp } from 'react-icons/fa';

export default function CoursesHero() {
  return (
    <section
      className="relative w-full bg-slate-950 font-sans overflow-hidden py-24 lg:py-36 border-b border-slate-800"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/w4kwyx1p/image/upload/v1784028201/image2_aanjtq.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Dark Gradient Overlay for perfect readability on the left where text is */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50  z-0 pointer-events-none"></div>

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
            New Batches Starting 2026
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-white mb-6 tracking-tight leading-[1.2] drop-shadow-2xl uppercase">
          GURUKUL JYOTI I.T.I TECHNICAL & PROFESSIONAL COURSES :
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-blue-300 font-bold mb-12 max-w-4xl leading-relaxed drop-shadow-lg uppercase">
          MOBILE & LAPTOP HARDWARE / SOFTWARE REPAIRING COURSE
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-[500px] mb-12">
          <a
            href="https://wa.me/917836004409?text=Hello,%20I%20want%20to%20know%20more%20about%20the%20ITI%20and%20Professional%20Courses"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white hover:bg-slate-200 text-slate-900 font-semibold px-8 py-3.5 rounded-full transition-colors text-sm sm:text-base whitespace-nowrap shadow-xl flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="text-xl text-[#25D366]" /> Chat on WhatsApp
          </a>
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
