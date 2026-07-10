"use client";
import React from 'react';
import { FaTrophy, FaBriefcase, FaBuilding } from 'react-icons/fa';

export default function PlacementHighlights() {
  const stats = [
    { icon: <FaTrophy />, value: "100%", label: "Placement Assistance", desc: "Dedicated support until you get hired." },
    { icon: <FaBriefcase />, value: "500+", label: "Students Placed", desc: "Working in top MNCs globally." },
    { icon: <FaBuilding />, value: "50+", label: "Hiring Partners", desc: "Direct tie-ups with tech giants." }
  ];

  const recruiters = ["TCS", "INFOSYS", "WIPRO", "TECH MAHINDRA", "HCL", "COGNIZANT", "ACCENTURE", "IBM", "CAPGEMINI"];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">Proven Success</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Your Dream Job Awaits</h2>
          <p className="text-xl text-slate-600">We don't just teach you how to code; we launch your tech career. Our dedicated placement cell ensures you get the best opportunities.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="group relative bg-white rounded-[2rem] p-10 text-center border border-slate-100 hover:border-purple-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.2)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50/50 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600 text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">{stat.value}</h3>
                <p className="text-xl font-bold text-slate-800 mb-2">{stat.label}</p>
                <p className="text-slate-500">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee of Recruiters */}
      <div className="w-full bg-white border-y border-slate-200 py-12 relative flex overflow-hidden">
        {/* Gradient Fades for marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...recruiters, ...recruiters].map((company, idx) => (
            <span key={idx} className="mx-12 text-3xl md:text-4xl font-black text-slate-300 hover:text-purple-600 transition-colors duration-300 cursor-pointer select-none">
              {company}
            </span>
          ))}
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
            width: max-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
      </div>
    </section>
  );
}
