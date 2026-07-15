import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';

export default function Achievements() {
  const achievements = [
    { 
      id: 1,
      title: "Best IT Institute 2023", 
      desc: "Awarded by the State Tech Council for excellence in technical education and infrastructure.",
      icon: <FaTrophy />,
      color: "from-blue-600 to-blue-400",
      shadow: "shadow-blue-500/30",
    },
    { 
      id: 2,
      title: "98% Placement Rate", 
      desc: "Recognized for achieving the highest placement rate in the region for the 2023-2024 academic year.",
      icon: <FaAward />,
      color: "from-purple-600 to-purple-400",
      shadow: "shadow-purple-500/30",
    },
    { 
      id: 3,
      title: "Innovation Hub Award", 
      desc: "Awarded for our state-of-the-art hackathon arenas, advanced coding labs, and research initiatives.",
      icon: <FaMedal />,
      color: "from-amber-500 to-amber-400",
      shadow: "shadow-amber-500/30",
    },
    { 
      id: 4,
      title: "ISO 9001:2015 Certified", 
      desc: "Globally recognized certification for maintaining strict international standards in quality education.",
      icon: <FaCertificate />,
      color: "from-emerald-600 to-emerald-400",
      shadow: "shadow-emerald-500/30",
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans border-y border-slate-100">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Milestones</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Awards & Achievements</h2>
          <p className="text-xl text-slate-600">A testament to our commitment to excellence, quality education, and student success over the years.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {achievements.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-transparent transition-all duration-500 hover:-translate-y-2 group relative flex flex-col h-full shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden"
            >
              {/* Card Hover Gradient Background (subtle) */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-[1.2rem] flex items-center justify-center text-3xl text-white bg-gradient-to-br ${item.color} ${item.shadow} shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
