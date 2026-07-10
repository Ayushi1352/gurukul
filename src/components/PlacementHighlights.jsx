"use client";
import React from 'react';
import { FaCalendarAlt, FaLayerGroup, FaArrowDown, FaStar, FaCode, FaLaptopCode } from 'react-icons/fa';

export default function PlacementHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA] relative overflow-hidden font-sans">
      
      {/* Floating background elements */}
      <div className="absolute top-32 left-10 lg:left-32 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500 animate-[bounce_3s_infinite]">
        <FaCode className="text-xl" />
      </div>
      <div className="absolute top-40 right-10 lg:right-32 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-purple-500 animate-[bounce_4s_infinite]">
        <FaLaptopCode className="text-xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Section */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Top small badge */}
          <div className="inline-flex items-center gap-2 text-slate-700 font-semibold text-sm mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <span className="text-blue-600">📈</span> 500+ Students already placed. <span className="text-blue-600">Hurry up!</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.15]">
            Master Tech & Software with <br className="hidden lg:block"/>
            <span className="text-blue-700">100% Placement Assistance.</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl font-medium">
            We don't just teach you how to code; we launch your tech career. Earn a successful career in top MNCs right after completing your course!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg">
              Enroll Now
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-slate-700 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors">
              Talk to Counsellor
            </button>
          </div>

          {/* Reviews */}
          <div className="flex flex-col items-center gap-2 mb-16">
            <div className="flex items-center gap-1 text-yellow-400 text-xl">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              <span className="text-slate-800 font-bold ml-2 text-lg">4.8</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">From 639+ <span className="underline decoration-slate-300 underline-offset-4 cursor-pointer hover:text-slate-700">Reviews</span></p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 xl:gap-6 w-full">
          
          {/* Card 1 (Dark) */}
          <div className="w-full sm:w-2/3 lg:w-[280px] xl:w-[300px] shrink-0 h-auto lg:h-[400px] bg-slate-900 rounded-[2rem] p-6 lg:p-8 text-white relative overflow-hidden flex flex-col shadow-2xl z-10 group">
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff10_10px,#ffffff10_20px)] transition-transform duration-700 group-hover:scale-110"></div>
            
            <div className="relative z-10 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 mb-6 backdrop-blur-sm">
               <FaCalendarAlt className="text-xl text-blue-300" />
            </div>
            <div className="relative z-10 space-y-5 lg:space-y-6 flex-grow flex flex-col justify-center">
              <div>
                <p className="text-slate-400 text-[11px] xl:text-xs uppercase tracking-wider mb-1 font-semibold">Admission Closes on</p>
                <p className="font-bold text-white text-base xl:text-lg flex flex-wrap items-center gap-2">
                  15th Oct 
                  <span className="bg-yellow-500/20 text-yellow-400 text-[9px] xl:text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold border border-yellow-500/30">Limited seats</span>
                </p>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div>
                <p className="text-slate-400 text-[11px] xl:text-xs uppercase tracking-wider mb-1 font-semibold">Course Duration</p>
                <p className="font-bold text-white text-base xl:text-lg">1 - 2 Years</p>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div>
                <p className="text-slate-400 text-[11px] xl:text-xs uppercase tracking-wider mb-1 font-semibold">Flexible schedule</p>
                <p className="font-bold text-white text-base xl:text-lg">Learn at your own pace</p>
              </div>
            </div>
          </div>

          {/* Middle Group container */}
          <div className="flex flex-col sm:flex-row w-full lg:flex-1 gap-6 lg:gap-4 xl:gap-6 items-center justify-center h-full">
            
            {/* Card 2 (Light Blue) */}
            <div className="w-full sm:w-1/3 h-[240px] lg:h-[320px] bg-[#93C5FD] rounded-[2rem] p-4 xl:p-6 flex flex-col justify-center items-center text-center shadow-lg transition-transform hover:-translate-y-2 duration-300">
              <h3 className="text-4xl lg:text-[3rem] xl:text-[3.5rem] font-black text-slate-900 mb-2 lg:mb-4 tracking-tighter leading-none">500+</h3>
              <p className="text-slate-800 font-semibold text-sm xl:text-lg leading-snug">Students Placed in<br/>top MNCs globally</p>
            </div>

            {/* Card 3 (White) */}
            <div className="w-full sm:w-1/3 h-[220px] lg:h-[260px] bg-white border border-slate-200 rounded-[2rem] p-4 xl:p-6 flex flex-col items-center justify-center text-center shadow-xl shadow-slate-200/50 transition-transform hover:-translate-y-2 duration-300 z-20">
              <h4 className="text-base lg:text-lg xl:text-xl font-extrabold text-slate-900 mb-4 lg:mb-6 leading-snug px-1">How will you get a guaranteed placement?</h4>
              <button className="bg-slate-900 text-white px-4 xl:px-6 py-2.5 xl:py-3 rounded-full font-bold text-xs xl:text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors w-[95%] xl:w-[90%] justify-center shadow-md">
                <FaArrowDown className="text-xs" /> Learn More
              </button>
            </div>

            {/* Card 4 (Light Green) */}
            <div className="w-full sm:w-1/3 h-[240px] lg:h-[320px] bg-[#BBF7D0] rounded-[2rem] p-4 xl:p-6 flex flex-col justify-center items-center text-center shadow-lg transition-transform hover:-translate-y-2 duration-300">
              <h3 className="text-4xl lg:text-[3rem] xl:text-[3.5rem] font-black text-slate-900 mb-2 lg:mb-4 tracking-tighter leading-none">50+</h3>
              <p className="text-slate-800 font-semibold text-sm xl:text-lg leading-snug">Hiring Partners<br/>with tech giants</p>
            </div>

          </div>

          {/* Card 5 (Dark) */}
          <div className="w-full sm:w-2/3 lg:w-[280px] xl:w-[300px] shrink-0 h-auto lg:h-[400px] bg-slate-900 rounded-[2rem] p-6 lg:p-8 text-white relative overflow-hidden flex flex-col shadow-2xl z-10 group">
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,#ffffff10_10px,#ffffff10_20px)] transition-transform duration-700 group-hover:scale-110"></div>
            
            <div className="relative z-10 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 mb-6 backdrop-blur-sm">
               <FaLayerGroup className="text-xl text-purple-300" />
            </div>
            <div className="relative z-10 space-y-5 lg:space-y-6 flex-grow flex flex-col justify-center">
              <div>
                <p className="text-slate-400 text-[11px] xl:text-xs uppercase tracking-wider mb-1 font-semibold">Beginner Level</p>
                <p className="font-bold text-white text-base xl:text-lg leading-tight">No prior experience<br/>required</p>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div>
                <p className="text-slate-400 text-[11px] xl:text-xs uppercase tracking-wider mb-1 font-semibold">Guarantee</p>
                <p className="font-bold text-white text-base xl:text-lg">100% Placement Support</p>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div>
                <p className="text-slate-400 text-[11px] xl:text-xs uppercase tracking-wider mb-1 font-semibold">Instructors</p>
                <p className="font-bold text-white text-base xl:text-lg">Industry Experts</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
