"use client";
import React, { useState } from 'react';

export default function FeeInformation() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="fee-structure" className="py-24 bg-white relative font-sans overflow-hidden">

      {/* Background decorations mimicking the screenshot's dark atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-200/50 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-200/50 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[10%] right-[20%] w-4 h-4 border-2 border-slate-300 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[10%] w-3 h-3 border border-slate-300 rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Area */}
        <div className="mb-16">
          <span className="text-blue-900 font-bold tracking-wider uppercase text-sm mb-4 block">Fee Structure</span>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <h2 className="text-4xl sm:text-[2.5rem] md:text-[3.5rem] text-black font-semibold leading-[1.1] max-w-2xl tracking-tight">
              Transparent & Affordable Fee Structure
            </h2>

            {/* Toggle Switch */}

          </div>

          <p className="text-gray-700 text-lg max-w-xl mt-10 leading-relaxed font-normal">
            We believe high-quality technical education should be accessible. We offer flexible payment plans and scholarship opportunities.
          </p>
        </div>

        {/* Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-[1300px] mx-auto">

          {/* Card 1: Standard */}
          <div className="bg-white border border-slate-100 shadow-sm hover:shadow-xl rounded-[2.5rem] p-8 lg:p-10 flex flex-col hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-1 leading-tight">Standard<br />Courses</h3>

            <div className="flex items-center gap-3 mt-4 mb-2">
              <span className="text-5xl font-extrabold text-black leading-none">
                {isAnnual ? '₹45k' : '₹25k'}
              </span>
              {isAnnual && (
                <span className="bg-blue-100 text-blue-900 text-[10px] font-bold px-2 py-0.5 rounded-md self-center">
                  Save ₹5k
                </span>
              )}
            </div>
            <p className="text-slate-500 text-xs mb-4 font-bold">/semester{isAnnual ? ', annually' : ''}</p>

            <p className="text-gray-700 mb-8 h-12 leading-relaxed text-sm font-medium">
              For Digital Marketing, Hardware & Networking, and Basic IT.
            </p>

            <ul className="space-y-3 mb-8 flex-1 text-sm font-medium">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0"></span>
                Full access to computer labs
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0"></span>
                Printed study materials
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0"></span>
                Library membership
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0"></span>
                100% Placement Assistance
              </li>
            </ul>

            <button className="w-full py-3.5 rounded-full border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors text-sm">
              Inquire About Plan
            </button>
          </div>

          {/* Card 2: Advanced (Favorite) */}
          <div className="bg-white border-2 border-blue-500/20 shadow-xl rounded-[2.5rem] p-8 lg:p-10 flex flex-col relative hover:-translate-y-2 transition-all duration-300">

            <div className="absolute top-8 right-8 bg-blue-100 border border-blue-200 text-blue-900 rounded-full px-3 py-1 text-[10px] font-bold tracking-wide">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-1 leading-tight">Advanced<br />IT Programs</h3>

            <div className="flex items-center gap-3 mt-4 mb-2">
              <span className="text-5xl font-extrabold text-black leading-none">
                {isAnnual ? '₹80k' : '₹45k'}
              </span>
              {isAnnual && (
                <span className="bg-blue-100 text-blue-900 text-[10px] font-bold px-2 py-0.5 rounded-md self-center">
                  Save ₹10k
                </span>
              )}
            </div>
            <p className="text-slate-500 text-xs mb-4 font-bold">/semester{isAnnual ? ', annually' : ''}</p>

            <p className="text-gray-700 mb-8 h-12 leading-relaxed text-sm pr-8 font-medium">
              For Full Stack, Data Science, Cyber Security, and UI/UX.
            </p>

            <ul className="space-y-3 mb-8 flex-1 text-sm font-medium">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                Everything in Standard
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                Cloud hosting & premium tools
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                1-on-1 industry mentorship
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                Guaranteed Internship placement
              </li>
            </ul>

            <button className="w-full py-3.5 rounded-full bg-[#191313] text-white font-bold hover:bg-black transition-colors text-sm shadow-md">
              Inquire About Plan
            </button>
          </div>

          {/* Card 3: Global */}
          <div className="bg-white border border-slate-100 shadow-sm hover:shadow-xl rounded-[2.5rem] p-8 lg:p-10 flex flex-col hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-1 leading-tight">Global<br />Certification</h3>

            <div className="flex items-center gap-3 mt-4 mb-2">
              <span className="text-5xl font-extrabold text-black leading-none">
                {isAnnual ? '₹135k' : '₹75k'}
              </span>
              {isAnnual && (
                <span className="bg-blue-100 text-blue-900 text-[10px] font-bold px-2 py-0.5 rounded-md self-center">
                  Save ₹15k
                </span>
              )}
            </div>
            <p className="text-slate-500 text-xs mb-4 font-bold">/semester{isAnnual ? ', annually' : ''}</p>

            <p className="text-gray-700 mb-8 h-12 leading-relaxed text-sm font-medium">
              For advanced AI training and international placement opportunities.
            </p>

            <ul className="space-y-3 mb-8 flex-1 text-sm font-medium">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0"></span>
                Everything in Advanced
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0"></span>
                International certification
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0"></span>
                100% Assured Global Placement
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0"></span>
                Free laptop & study kit
              </li>
            </ul>

            <button className="w-full py-3.5 rounded-full bg-blue-900 text-white font-bold hover:bg-blue-950 transition-colors shadow-lg shadow-blue-900/30 text-sm">
              Select Global
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
