"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FaLaptopCode, FaHandshake, FaUserGraduate, FaCertificate, FaNetworkWired, FaCodeBranch } from 'react-icons/fa';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      icon: <FaLaptopCode size={28} />,
      title: "High-End Computer Labs",
      description: "Equipped with the latest workstations, dual monitors, and premium software for hands-on coding experience.",
      color: "from-blue-500 to-cyan-400",
      shadow: "shadow-blue-500/20"
    },
    {
      id: 2,
      icon: <FaHandshake size={28} />,
      title: "100% Placement Support",
      description: "Strong industry tie-ups ensuring high placement rates in top IT companies and software startups.",
      color: "from-purple-500 to-fuchsia-400",
      shadow: "shadow-purple-500/20"
    },
    {
      id: 3,
      icon: <FaUserGraduate size={28} />,
      title: "Expert Tech Faculty",
      description: "Learn from experienced developers and industry professionals who bring real-world coding insights.",
      color: "from-amber-500 to-orange-400",
      shadow: "shadow-amber-500/20"
    },
    {
      id: 4,
      icon: <FaCodeBranch size={28} />,
      title: "Project-Based Learning",
      description: "Industry-aligned syllabus focusing on building live projects, GitHub contributions, and practical skills.",
      color: "from-emerald-500 to-teal-400",
      shadow: "shadow-emerald-500/20"
    },
    {
      id: 5,
      icon: <FaCertificate size={28} />,
      title: "Global Certifications",
      description: "Preparation for recognized certificates that open doors to global tech jobs and remote opportunities.",
      color: "from-rose-500 to-pink-400",
      shadow: "shadow-rose-500/20"
    },
    {
      id: 6,
      icon: <FaNetworkWired size={28} />,
      title: "High-Speed Connectivity",
      description: "Seamless Gigabit internet access throughout the campus for uninterrupted research and development.",
      color: "from-indigo-500 to-blue-400",
      shadow: "shadow-indigo-500/20"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] z-0 pointer-events-none"></div>
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-200 rounded-full blur-[100px] opacity-30 z-0"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-200 rounded-full blur-[120px] opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 px-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 font-bold text-sm mb-4 border border-blue-100 uppercase tracking-widest shadow-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Building Your Career with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Unmatched Excellence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            We blend traditional values of discipline and dedication with highly modern software training techniques. Discover the Gurukul ITI advantage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-700 group relative overflow-hidden transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${feature.color} text-white shadow-lg ${feature.shadow} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
