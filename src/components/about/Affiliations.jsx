import React from 'react';
import { FaAward, FaCertificate, FaHandshake, FaWindows, FaAws, FaNetworkWired } from 'react-icons/fa';

export default function Affiliations() {
  const logos = [
    { name: "NCVT Approved", icon: <FaAward className="text-5xl text-amber-400 mb-5 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" /> },
    { name: "ISO 9001:2015", icon: <FaCertificate className="text-5xl text-blue-400 mb-5 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" /> },
    { name: "Skill India", icon: <FaHandshake className="text-5xl text-emerald-400 mb-5 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" /> },
    { name: "Microsoft Ed", icon: <FaWindows className="text-5xl text-sky-400 mb-5 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" /> },
    { name: "AWS Academy", icon: <FaAws className="text-5xl text-orange-400 mb-5 drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]" /> },
    { name: "Cisco Network", icon: <FaNetworkWired className="text-5xl text-indigo-400 mb-5 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" /> }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">Trusted Worldwide</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">Approvals & Affiliations</h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light">Gurukul ITI is officially recognized by government bodies and partnered with global tech giants to provide certified, industry-standard education.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {logos.map((logo, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 relative z-10">
                {logo.icon}
              </div>
              
              {/* Text */}
              <h3 className="text-sm sm:text-base font-bold text-slate-200 tracking-wider uppercase text-center relative z-10 mt-2 group-hover:text-white transition-colors duration-300">
                {logo.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
