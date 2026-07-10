import React from 'react';
import Link from 'next/link';

export default function AdmissionBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl group">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Cyber Background" 
            className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent mix-blend-overlay"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative z-10 px-8 py-16 md:py-24 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-white font-bold text-sm tracking-widest uppercase">Admissions Open 2025-26</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Fast-Track Your Career in <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tech & Software</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto lg:mx-0">
              Join Gurukul ITI and master the skills that top tech companies are actively hiring for. Limited seats for the upcoming batches.
            </p>
          </div>
          
          <div className="flex flex-col w-full sm:w-auto gap-4 shrink-0">
            <Link href="/admission" className="w-full sm:w-auto text-center px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-300 transform hover:-translate-y-1">
              Apply Online Now
            </Link>
            <Link href="/contact" className="w-full sm:w-auto text-center px-10 py-5 rounded-full bg-white/5 border border-white/20 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              Download Brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
