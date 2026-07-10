import React from 'react';
import { FaGoogle, FaMicrosoft, FaAmazon, FaFacebook, FaApple, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaPaypal } from 'react-icons/fa';

export default function RecruitingCompanies() {
  const companies = [
    { icon: <FaGoogle />, name: "Google" },
    { icon: <FaMicrosoft />, name: "Microsoft" },
    { icon: <FaAmazon />, name: "Amazon" },
    { icon: <FaApple />, name: "Apple" },
    { icon: <FaFacebook />, name: "Facebook" },
    { icon: <FaInstagram />, name: "Instagram" },
    { icon: <FaTwitter />, name: "Twitter" },
    { icon: <FaLinkedin />, name: "LinkedIn" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaPaypal />, name: "PayPal" },
  ];

  // Duplicate for seamless scroll
  const scrollItems = [...companies, ...companies];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Top Recruiters</h2>
          <p className="text-blue-200">Our alumni are working at the world's most innovative tech giants.</p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex z-10">
        {/* Left/Right Fade */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none"></div>
        
        {/* Marquee Track */}
        <div className="flex animate-marquee whitespace-nowrap gap-8 w-max px-4">
          {scrollItems.map((company, idx) => (
            <div 
              key={idx} 
              className="w-40 h-40 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl flex flex-col items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {company.icon}
              </div>
              <span className="font-bold text-slate-300 text-sm tracking-wider">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
