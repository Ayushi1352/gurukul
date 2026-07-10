import React from 'react';

export default function Achievements() {
  const achievements = [
    { 
      title: "Best IT Institute 2023", 
      desc: "Awarded by the State Tech Council for excellence in technical education.",
      color: "blue"
    },
    { 
      title: "Highest Placement Rate", 
      desc: "Recognized for achieving a 98% placement rate in the 2023 academic year.",
      color: "indigo"
    },
    { 
      title: "Innovation Hub Award", 
      desc: "Awarded for our state-of-the-art hackathon arenas and research labs.",
      color: "purple"
    },
  ];

  // Helper function to get Tailwind classes based on color string
  const getColorClasses = (color) => {
    switch(color) {
      case 'blue': return { bg: 'bg-blue-500', text: 'text-blue-600', shadow: 'shadow-blue-500/30' };
      case 'indigo': return { bg: 'bg-indigo-500', text: 'text-indigo-600', shadow: 'shadow-indigo-500/30' };
      case 'purple': return { bg: 'bg-purple-500', text: 'text-purple-600', shadow: 'shadow-purple-500/30' };
      default: return { bg: 'bg-blue-500', text: 'text-blue-600', shadow: 'shadow-blue-500/30' };
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 tracking-tight">
            Achievements
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left: Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            
            {/* Custom SVG Illustration mirroring the screenshot style */}
            <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[400px] drop-shadow-xl hover:scale-105 transition-transform duration-500">
              {/* Organic Blob Background using theme blue */}
              <path fill="#EEF2FF" d="M53.8,-71.4C69,-61.2,80.1,-44.7,85.5,-26.8C90.9,-8.9,90.6,10.4,83.4,27.1C76.2,43.8,62.1,57.9,46.1,67.6C30.1,77.3,12.2,82.6,-5.5,89.5C-23.2,96.4,-40.7,104.9,-54.6,97.7C-68.5,90.5,-78.8,67.6,-85.4,45C-92,22.4,-94.9,0.1,-89.2,-19.1C-83.5,-38.3,-69.2,-54.4,-52.3,-64.1C-35.4,-73.8,-17.7,-77.1,0.9,-78.2C19.5,-79.3,38.6,-81.6,53.8,-71.4Z" transform="translate(120 120) scale(0.9)" />
              
              {/* Trophy Base (Greenish/Slate block) */}
              <path d="M70,180 L170,180 L155,140 L85,140 Z" fill="#94A3B8" />
              <rect x="95" y="120" width="50" height="20" fill="#CBD5E1" />
              
              {/* Trophy Cup (Golden) */}
              <path d="M50,40 C50,110 90,130 120,130 C150,130 190,110 190,40 Z" fill="#FBBF24" />
              <ellipse cx="120" cy="40" rx="70" ry="15" fill="#F59E0B" />
              
              {/* Handles */}
              <path d="M50,55 C20,55 20,95 60,95" fill="none" stroke="#FBBF24" strokeWidth="12" strokeLinecap="round" />
              <path d="M190,55 C220,55 220,95 180,95" fill="none" stroke="#FBBF24" strokeWidth="12" strokeLinecap="round" />
              
              {/* Central Medal with Ribbon */}
              <path d="M110,105 L100,135 L120,125 L140,135 L130,105 Z" fill="#10B981" />
              <circle cx="120" cy="95" r="22" fill="#F59E0B" />
              <circle cx="120" cy="95" r="16" fill="#FBBF24" />
              <text x="120" y="103" fontSize="22" fill="#FFF" textAnchor="middle" fontWeight="bold">1</text>
              
              {/* Floating Stars */}
              <path d="M30,10 L35,25 L50,25 L38,35 L42,50 L30,40 L18,50 L22,35 L10,25 L25,25 Z" fill="#FCD34D" transform="scale(0.6) translate(20, 20)" />
              <path d="M210,15 L213,24 L223,24 L215,30 L218,39 L210,33 L202,39 L205,30 L197,24 L207,24 Z" fill="#FCD34D" transform="scale(0.8) translate(30, 0)" />
              <path d="M180,120 L182,126 L188,126 L183,130 L185,136 L180,132 L175,136 L177,130 L172,126 L178,126 Z" fill="#FBBF24" transform="scale(0.7) translate(80, 50)" />
              
              {/* Sparkles / Dots */}
              <circle cx="180" cy="40" r="4" fill="#FCD34D" />
              <circle cx="60" cy="110" r="3" fill="#FBBF24" />
            </svg>
          </div>
          
          {/* Right: List of Achievements */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10">
            {achievements.map((item, idx) => {
              const colors = getColorClasses(item.color);
              return (
                <div key={idx} className="flex gap-5 sm:gap-6 items-start group">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-[1rem] ${colors.bg} text-white flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg ${colors.shadow} group-hover:-translate-y-1 transition-transform duration-300`}>
                    {idx + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className={`text-xl sm:text-[1.35rem] font-bold ${colors.text} mb-2`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm sm:text-base font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
