"use client";
import React, { useState } from 'react';
import { FaFileCode, FaComments, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';

export default function TrainingAndSkills() {
  const [activeTab, setActiveTab] = useState(0);

  const skills = [
    {
      title: "Resume & Portfolio",
      desc: "Your first impression matters. We conduct extensive workshops to help you build ATS-friendly resumes and stunning Github/Behance portfolios that immediately catch a recruiter's eye.",
      icon: <FaFileCode />,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Mock Interviews",
      desc: "Face the heat before the real day. Our industry experts conduct rigorous 1-on-1 technical and HR mock interviews, providing detailed feedback to refine your answers.",
      icon: <FaComments />,
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784024989/Mock_Interviews_wdfauz.avif"
    },
    {
      title: "Soft Skills & Etiquette",
      desc: "Technical skills get you the interview, soft skills get you the job. We train you in corporate communication, body language, and professional etiquette.",
      icon: <FaUserTie />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Aptitude & Logic",
      desc: "Clear the toughest screening rounds with ease. Our specialized coaching covers quantitative aptitude, logical reasoning, and data interpretation.",
      icon: <FaChalkboardTeacher />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#EBEDFA] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">Interactive Skill Development</h2>
          <p className="text-lg text-slate-600">
            We don't just teach theory; we actively prepare you for the corporate battleground.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side Tabs */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {skills.map((skill, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-6 rounded-[2rem] transition-all duration-300 flex items-center gap-6 ${
                  activeTab === idx 
                    ? 'bg-blue-900 text-white shadow-xl shadow-blue-900/20 scale-105' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-transparent hover:border-blue-500/30'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${
                  activeTab === idx ? 'bg-white/20 text-white' : 'bg-[#EBEDFA] text-blue-900'
                }`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${activeTab === idx ? 'text-white' : 'text-blue-900'}`}>
                    {skill.title}
                  </h3>
                  <p className={`text-sm ${activeTab === idx ? 'text-blue-100' : 'text-slate-500'} line-clamp-1`}>
                    Click to view details
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side Image & Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] group">
              <img 
                src={skills[activeTab].image} 
                alt={skills[activeTab].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 transform transition-all duration-500">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 shadow-lg">
                  {skills[activeTab].icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">{skills[activeTab].title}</h3>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                  {skills[activeTab].desc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
