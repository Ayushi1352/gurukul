"use client";
import React, { useState } from 'react';

export default function FeeInformation() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-[#0a0a0c] font-sans relative overflow-hidden">
      
      {/* Background decorations mimicking the screenshot's dark atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[10%] right-[20%] w-4 h-4 border-2 border-slate-700/50 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[10%] w-3 h-3 border border-slate-700/30 rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="mb-16">
          <span className="text-purple-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Fee Structure</span>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <h2 className="text-[3rem] lg:text-[4.5rem] text-[#f4f4eb] font-medium leading-[1.1] max-w-2xl tracking-tight">
              Transparent & <br/> Affordable
            </h2>
            
            {/* Toggle Switch */}
            <div className="flex items-center gap-4 text-slate-300 font-medium mb-4">
              <span className={!isAnnual ? 'text-white' : 'text-slate-500 transition-colors'}>Billed per semester</span>
              
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className={`w-[60px] h-8 rounded-full p-1 flex items-center transition-colors border border-slate-700 ${isAnnual ? 'bg-purple-600 border-purple-500' : 'bg-[#1f1f22]'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isAnnual ? 'translate-x-[28px]' : 'translate-x-0'}`}></div>
              </button>
              
              <span className={isAnnual ? 'text-white' : 'text-slate-500 transition-colors'}>Billed annually</span>
            </div>
          </div>

          <p className="text-[#a1a1aa] text-lg max-w-xl mt-10 leading-relaxed">
            We believe high-quality technical education should be accessible. We offer flexible payment plans and scholarship opportunities.
          </p>
        </div>

        {/* Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-[1300px] mx-auto">
          
          {/* Card 1: Standard */}
          <div className="bg-[#111113] border-2 border-[#27272a] rounded-[2.5rem] p-8 lg:p-10 flex flex-col hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-2xl font-medium text-white mb-1 leading-tight">Standard<br/>Courses</h3>
            
            <div className="flex items-center gap-3 mt-4 mb-2">
              <span className="text-5xl font-medium text-white leading-none">
                {isAnnual ? '₹45k' : '₹25k'}
              </span>
              {isAnnual && (
                <span className="bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md self-center">
                  Save ₹5k
                </span>
              )}
            </div>
            <p className="text-[#71717a] text-xs mb-4 font-medium">/semester{isAnnual ? ', annually' : ''}</p>
            
            <p className="text-[#a1a1aa] mb-8 h-12 leading-relaxed text-sm">
              For Digital Marketing, Hardware & Networking, and Basic IT.
            </p>

            <ul className="space-y-3 mb-8 flex-1 text-sm">
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71717a] shrink-0"></span>
                Full access to computer labs
              </li>
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71717a] shrink-0"></span>
                Printed study materials
              </li>
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71717a] shrink-0"></span>
                Library membership
              </li>
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71717a] shrink-0"></span>
                100% Placement Assistance
              </li>
            </ul>

            <button className="w-full py-3.5 rounded-xl border-2 border-[#3f3f46] text-white font-medium hover:bg-[#27272a] transition-colors text-sm">
              Inquire About Plan
            </button>
          </div>

          {/* Card 2: Advanced (Favorite) */}
          <div className="bg-[#18181b] border-2 border-[#3f3f46] rounded-[2.5rem] p-8 lg:p-10 flex flex-col relative hover:border-purple-400 transition-colors duration-300">
            
            <div className="absolute top-8 right-8 bg-purple-600/20 border border-purple-500/30 text-purple-400 rounded-full px-3 py-1 text-[10px] font-bold">
              Most Popular
            </div>

            <h3 className="text-2xl font-medium text-white mb-1 leading-tight">Advanced<br/>IT Programs</h3>
            
            <div className="flex items-center gap-3 mt-4 mb-2">
              <span className="text-5xl font-medium text-white leading-none">
                {isAnnual ? '₹80k' : '₹45k'}
              </span>
              {isAnnual && (
                <span className="bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md self-center">
                  Save ₹10k
                </span>
              )}
            </div>
            <p className="text-[#71717a] text-xs mb-4 font-medium">/semester{isAnnual ? ', annually' : ''}</p>

            <p className="text-[#a1a1aa] mb-8 h-12 leading-relaxed text-sm pr-8">
              For Full Stack, Data Science, Cyber Security, and UI/UX.
            </p>

            <ul className="space-y-3 mb-8 flex-1 text-sm">
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                Everything in Standard
              </li>
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                Cloud hosting & premium tools
              </li>
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                1-on-1 industry mentorship
              </li>
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                Guaranteed Internship placement
              </li>
            </ul>

            <button className="w-full py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition-colors text-sm">
              Inquire About Plan
            </button>
          </div>

          {/* Card 3: Global */}
          <div className="bg-[#111113] border-2 border-[#27272a] rounded-[2.5rem] p-8 lg:p-10 flex flex-col hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-2xl font-medium text-white mb-1 leading-tight">Global<br/>Certification</h3>
            
            <div className="flex items-center gap-3 mt-4 mb-2">
              <span className="text-5xl font-medium text-white leading-none">
                {isAnnual ? '₹135k' : '₹75k'}
              </span>
              {isAnnual && (
                <span className="bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md self-center">
                  Save ₹15k
                </span>
              )}
            </div>
            <p className="text-[#71717a] text-xs mb-4 font-medium">/semester{isAnnual ? ', annually' : ''}</p>
            
            <p className="text-[#a1a1aa] mb-8 h-12 leading-relaxed text-sm">
              For advanced AI training and international placement opportunities.
            </p>

            <ul className="space-y-3 mb-8 flex-1 text-sm">
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71717a] shrink-0"></span>
                Everything in Advanced
              </li>
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71717a] shrink-0"></span>
                International certification
              </li>
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71717a] shrink-0"></span>
                100% Assured Global Placement
              </li>
              <li className="flex items-center gap-3 text-[#d4d4d8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71717a] shrink-0"></span>
                Free laptop & study kit
              </li>
            </ul>

            <button className="w-full py-3.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/30 text-sm">
              Select Global
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
