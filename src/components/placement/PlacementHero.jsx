import React from 'react';
import { FaHandshake } from 'react-icons/fa';

export default function PlacementHero() {
  return (
    <section className="relative bg-slate-50 border-b border-slate-100">
      <div 
        className="relative pt-24 pb-36 md:pt-32 md:pb-48 px-4 overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-950/85 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase backdrop-blur-md">
              <FaHandshake /> Training & Placement Cell
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-xl">
            Bridging the Gap Between <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Talent and Opportunity</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-blue-100 font-medium leading-relaxed drop-shadow-md max-w-3xl mx-auto px-2 mb-10">
            Our dedicated Placement Cell works tirelessly to connect our skilled graduates with top-tier tech companies. We don't just provide education; we ensure you launch a successful career.
          </p>
          
        </div>
      </div>
    </section>
  );
}
