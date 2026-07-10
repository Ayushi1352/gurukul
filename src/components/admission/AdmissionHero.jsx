"use client";
import React from 'react';
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';

export default function AdmissionHero() {
  return (
    <section className="relative bg-slate-50 border-b border-slate-100">
      <div 
        className="relative pt-24 pb-36 md:pt-32 md:pb-48 px-4 overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase backdrop-blur-md">
              <FaGraduationCap /> Admissions 2024-25
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-xl">
            Take the First Step Towards <br className="hidden md:block" /> a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Brilliant IT Career</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-blue-100 font-medium leading-relaxed drop-shadow-md max-w-3xl mx-auto px-2 mb-10">
            Join Gurukul ITI and transform your passion for technology into a high-paying, future-proof profession. Our admissions are now open for all premier tech programs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <button 
              onClick={() => document.getElementById('admission-form').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-lg font-bold rounded-2xl shadow-lg shadow-purple-600/30 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3"
            >
              Apply Now <FaArrowRight />
            </button>
            <button 
              onClick={() => document.getElementById('admission-process').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-lg font-bold rounded-2xl transition-all duration-300"
            >
              View Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
