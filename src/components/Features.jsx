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
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700"
    },
    {
      id: 2,
      icon: <FaHandshake size={28} />,
      title: "100% Placement Support",
      description: "Strong industry tie-ups ensuring high placement rates in top IT companies and software startups.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700"
    },
    {
      id: 3,
      icon: <FaUserGraduate size={28} />,
      title: "Expert Tech Faculty",
      description: "Learn from experienced developers and industry professionals who bring real-world coding insights.",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700"
    },
    {
      id: 4,
      icon: <FaCodeBranch size={28} />,
      title: "Project-Based Learning",
      description: "Industry-aligned syllabus focusing on building live projects, GitHub contributions, and practical skills.",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700"
    },
    {
      id: 5,
      icon: <FaCertificate size={28} />,
      title: "Global Certifications",
      description: "Preparation for recognized certificates that open doors to global tech jobs and remote opportunities.",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-700"
    },
    {
      id: 6,
      icon: <FaNetworkWired size={28} />,
      title: "High-Speed Connectivity",
      description: "Seamless Gigabit internet access throughout the campus for uninterrupted research and development.",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-700"
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

          <h2 className="text-4xl sm:text-[2.5rem] md:text-[3.5rem] font-semibold text-black mb-6 leading-[1.1] tracking-tight">
            Building Your Career with <br className="hidden sm:block" />
            Unmatched Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
            We blend traditional values of discipline and dedication with highly modern software training techniques. Discover the Gurukul ITI advantage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-[#EBEDFA] rounded-3xl p-8 shadow-xl shadow-slate-200/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-700 group relative overflow-hidden transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Subtle hover overlay */}
              <div className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>

              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center ${feature.iconBg} ${feature.iconColor} shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10`}>
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-blue-900 mb-4 transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-[15px] font-normal relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
