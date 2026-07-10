import React from 'react';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

export default function Achievements() {
  const achievements = [
    { title: "Best IT Institute 2023", desc: "Awarded by the State Tech Council for excellence in technical education.", icon: <FaTrophy /> },
    { title: "Highest Placement Rate", desc: "Recognized for achieving a 98% placement rate in the 2023 academic year.", icon: <FaStar /> },
    { title: "Innovation Hub Award", desc: "Awarded for our state-of-the-art hackathon arenas and research labs.", icon: <FaMedal /> },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4 block">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Awards & Achievements</h2>
          <p className="text-lg text-slate-600">A testament to our unwavering commitment to quality education and student success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl text-emerald-500 mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
