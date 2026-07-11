import React from 'react';
import { FaBuilding, FaUsers, FaChartLine, FaRupeeSign } from 'react-icons/fa';

export default function PlacementStats() {
  const stats = [
    {
      value: "98%",
      label: "Placement Rate",
      icon: <FaChartLine className="text-white" />
    },
    {
      value: "5000+",
      label: "Alumni Placed",
      icon: <FaUsers className="text-white" />
    },
    {
      value: "200+",
      label: "Recruiting Partners",
      icon: <FaBuilding className="text-white" />
    },
    {
      value: "15 LPA",
      label: "Highest Package",
      icon: <FaRupeeSign className="text-white" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-950 to-[#0a1128] font-sans relative overflow-hidden">
      {/* Decorative Overlays */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10 rounded-[2rem] text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] flex flex-col items-center justify-center">
              
              <div className="text-4xl sm:text-5xl mb-5 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                {stat.icon}
              </div>
              
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                {stat.value}
              </h4>
              
              <p className="text-blue-100 font-semibold text-xs sm:text-sm uppercase tracking-[0.15em] opacity-90">
                {stat.label}
              </p>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
