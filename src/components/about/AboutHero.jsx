import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative w-full font-sans overflow-hidden bg-slate-900 pt-28 lg:pt-32 flex flex-col">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Gurukul ITI Campus" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-12 flex-grow flex flex-col justify-center pb-12 lg:pb-16">
        
        {/* Breadcrumbs */}
        <div className="absolute top-0 left-6 sm:left-8 lg:left-12 flex items-center gap-2 text-white/70 text-xs sm:text-sm font-medium tracking-wide">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-white/40">/</span>
          <span className="text-white">About Us</span>
        </div>

        <div className="max-w-3xl mt-4 lg:mt-8">
          <p className="text-white/80 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-5">
            Institute Overview
          </p>
          
          <h1 className="text-3xl sm:text-4xl lg:text-[4rem] font-bold text-white mb-5 lg:mb-6 leading-[1.1] tracking-tight">
            Shaping the Tech Leaders of Tomorrow
          </h1>
          
          <p className="text-white/90 text-base sm:text-lg lg:text-xl font-medium mb-8 leading-relaxed max-w-2xl">
            Blending academic rigor with practical industry experience to ensure our students are always one step ahead in the digital world.
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base transition-all flex items-center gap-3 shadow-lg hover:shadow-blue-600/20">
            Explore Programs <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>

      {/* Bottom Glassmorphic Stats Bar */}
      <div className="relative z-10 w-full flex justify-start lg:justify-end mt-auto">
        <div className="w-full lg:w-[65%] xl:w-[55%] bg-slate-900/40 backdrop-blur-md border-t border-l-0 lg:border-l border-white/10 flex flex-col sm:flex-row">
          
          {/* Stat 1 */}
          <div className="flex-1 p-5 sm:p-6 lg:py-8 border-b sm:border-b-0 sm:border-r border-white/10 text-center flex flex-col justify-center items-center hover:bg-white/5 transition-colors">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1.5 tracking-tight">10+</h4>
            <p className="text-white/70 text-[10px] sm:text-xs tracking-[0.15em] uppercase font-bold">Years of Excellence</p>
          </div>
          
          {/* Stat 2 */}
          <div className="flex-1 p-5 sm:p-6 lg:py-8 border-b sm:border-b-0 sm:border-r border-white/10 text-center flex flex-col justify-center items-center hover:bg-white/5 transition-colors">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1.5 tracking-tight">5000+</h4>
            <p className="text-white/70 text-[10px] sm:text-xs tracking-[0.15em] uppercase font-bold">Placed Alumni</p>
          </div>
          
          {/* Stat 3 */}
          <div className="flex-1 p-5 sm:p-6 lg:py-8 text-center flex flex-col justify-center items-center hover:bg-white/5 transition-colors">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1.5 tracking-tight">50+</h4>
            <p className="text-white/70 text-[10px] sm:text-xs tracking-[0.15em] uppercase font-bold">Expert Faculty</p>
          </div>
          
        </div>
      </div>
      
    </section>
  );
}
