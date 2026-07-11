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
    <section className="py-24 bg-white font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-900 font-bold tracking-wider uppercase text-sm mb-4 block">The Pipeline</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">Standard Recruitment Process</h2>
          <p className="text-lg text-slate-600">
            A structured, fast-paced pathway from the classroom directly to the corporate boardroom.
          </p>
        </div>

        {/* Horizontal Pipeline Layout */}
        <div className="flex flex-col xl:flex-row items-stretch justify-between gap-6 xl:gap-4 relative">
          
          {/* Connector Line (Desktop only) */}
          <div className="hidden xl:block absolute top-12 left-0 w-full h-1 bg-slate-100 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 w-full xl:w-1/5 flex flex-col items-center group cursor-pointer">
              
              {/* Icon Node */}
              <div className="w-24 h-24 rounded-[2rem] bg-[#EBEDFA] flex items-center justify-center text-3xl text-blue-900 shadow-sm border border-transparent group-hover:border-blue-500/30 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2 mb-6 z-10 relative">
                {step.icon}
              </div>

              {/* Number Badge */}
              <div className="absolute top-16 right-[calc(50%-3rem)] xl:-right-2 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-black text-sm shadow-md z-20">
                {idx + 1}
              </div>

              {/* Text Content */}
              <div className="text-center bg-[#EBEDFA] border border-transparent group-hover:border-blue-500/30 p-6 rounded-[2rem] h-full w-full max-w-[300px] xl:max-w-none hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
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
