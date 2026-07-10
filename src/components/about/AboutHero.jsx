import React from 'react';
import { FaGraduationCap, FaUserTie, FaLaptopCode } from 'react-icons/fa';

export default function AboutHero() {
  return (
    <section className="relative bg-slate-50 border-b border-slate-100">
      {/* Hero Banner with Background Image */}
      <div 
        className="relative pt-24 pb-36 md:pt-32 md:pb-48 px-4 overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block py-1.5 px-5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6 backdrop-blur-md">
            Institute Overview
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-xl">
            Shaping the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tech Leaders</span> of Tomorrow
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 font-medium leading-relaxed drop-shadow-md max-w-3xl mx-auto px-2">
            Blending academic rigor with practical industry experience to ensure our students are always one step ahead in the digital world.
          </p>
        </div>
      </div>

      {/* Overlapping Stats Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16 sm:-mt-24 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-100 flex items-center gap-4 sm:gap-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 shadow-inner">
              <FaGraduationCap className="text-2xl sm:text-3xl text-blue-600" />
            </div>
            <div className="text-left">
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-0.5 sm:mb-1">10+</h4>
              <p className="text-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wider">Years of Excellence</p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl shadow-purple-900/5 border border-slate-100 flex items-center gap-4 sm:gap-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 shadow-inner">
              <FaUserTie className="text-2xl sm:text-3xl text-purple-600" />
            </div>
            <div className="text-left">
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-0.5 sm:mb-1">5000+</h4>
              <p className="text-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wider">Placed Alumni</p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl shadow-emerald-900/5 border border-slate-100 flex items-center gap-4 sm:gap-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 shadow-inner">
              <FaLaptopCode className="text-2xl sm:text-3xl text-emerald-600" />
            </div>
            <div className="text-left">
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-0.5 sm:mb-1">50+</h4>
              <p className="text-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wider">Expert Faculty</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
