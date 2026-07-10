import React from 'react';
import { FaLaptop, FaUserSecret, FaUsers, FaClipboardCheck, FaMedal, FaChevronRight } from 'react-icons/fa';

export default function RecruitmentProcess() {
  const steps = [
    {
      title: "Pre-Placement Talk",
      desc: "Companies introduce their culture and job roles.",
      icon: <FaUsers />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Aptitude Test",
      desc: "Online screening for logical & coding skills.",
      icon: <FaLaptop />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Tech Interview",
      desc: "In-depth one-on-one technical assessment.",
      icon: <FaUserSecret />,
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "HR Interview",
      desc: "Final evaluation for cultural fit and expectations.",
      icon: <FaClipboardCheck />,
      color: "from-rose-400 to-rose-600"
    },
    {
      title: "Offer",
      desc: "Receive offer letters and begin your journey.",
      icon: <FaMedal />,
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative border-y border-slate-800">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4 block">The Pipeline</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Standard Recruitment Process</h2>
          <p className="text-lg text-slate-400">
            A structured, fast-paced pathway from the classroom directly to the corporate boardroom.
          </p>
        </div>

        {/* Horizontal Pipeline Layout */}
        <div className="flex flex-col xl:flex-row items-stretch justify-between gap-6 xl:gap-4 relative">
          
          {/* Connector Line (Desktop only) */}
          <div className="hidden xl:block absolute top-12 left-0 w-full h-1 bg-slate-800 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 w-full xl:w-1/5 flex flex-col items-center group cursor-pointer">
              
              {/* Icon Node */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} p-1 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 transform group-hover:-translate-y-2 mb-6`}>
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-3xl text-white">
                  {step.icon}
                </div>
              </div>

              {/* Number Badge */}
              <div className="absolute top-16 right-[calc(50%-3rem)] xl:-right-2 w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center font-black text-sm border-2 border-slate-900 z-20">
                {idx + 1}
              </div>

              {/* Text Content */}
              <div className="text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl h-full w-full max-w-[300px] xl:max-w-none hover:bg-slate-800 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Arrow connector for Mobile/Tablet (Downwards) */}
              {idx !== steps.length - 1 && (
                <div className="xl:hidden mt-6 -mb-2 text-slate-600">
                  <FaChevronRight className="rotate-90 text-3xl" />
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
