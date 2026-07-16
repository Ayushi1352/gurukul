import React from 'react';
import { FaLaptop, FaComments, FaFileSignature, FaUserGraduate } from 'react-icons/fa';

export default function AdmissionProcess() {
  const steps = [
    {
      step: "01",
      title: "Online Application",
      desc: "Fill out the admission enquiry form on our website with your basic details and course preference.",
      icon: <FaLaptop />,
      color: "blue"
    },
    {
      step: "02",
      title: "Counseling & Interview",
      desc: "Our career experts will contact you for a brief counseling session to guide you towards the best course.",
      icon: <FaComments />,
      color: "purple"
    },
    {
      step: "03",
      title: "Document Verification",
      desc: "Submit your educational documents and identity proofs for our backend verification process.",
      icon: <FaFileSignature />,
      color: "pink"
    },
    {
      step: "04",
      title: "Enrollment & Onboarding",
      desc: "Complete the fee payment, secure your seat, and receive your official Gurukul Jyoti I.T.I welcome kit.",
      icon: <FaUserGraduate />,
      color: "emerald"
    }
  ];

  const getColorClasses = (color) => {
    const classes = {
      blue: "bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600",
      purple: "bg-purple-50 text-purple-600 border-purple-200 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600",
      pink: "bg-pink-50 text-pink-600 border-pink-200 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600",
      emerald: "bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600"
    };
    return classes[color];
  };

  return (
    <section id="admission-process" className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">Simple & Transparent</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">How to Apply?</h2>
          <p className="text-lg text-slate-600">
            We have designed a frictionless, 4-step admission process to ensure you can start your learning journey without any hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Line for Desktop */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-slate-200 z-0">
                  <div className="h-full w-0 bg-purple-600 transition-all duration-500 group-hover:w-full"></div>
                </div>
              )}
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col relative z-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl border-2 transition-colors duration-300 ${getColorClasses(item.color)}`}>
                    {item.icon}
                  </div>
                  <span className="text-5xl font-black text-slate-300 group-hover:text-slate-800 transition-colors">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
