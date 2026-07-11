"use client";
import { useState, useEffect } from 'react';

export default function History() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNo: "1",
      label: "2010",
      bg: "from-blue-50 to-indigo-50",
      cardBg: "bg-gradient-to-br from-blue-50 via-white to-indigo-50",
      border: "border-l-4 border-blue-400",
      color: "text-blue-700",
      iconColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
      title: "The Foundation",
      desc: "Gurukul ITI was established with a vision to bridge the gap between academic learning and industry demands.",
      age: "Core Setup",
      focus: "Institute Launch",
    },
    {
      stepNo: "2",
      label: "2012",
      bg: "from-purple-50 to-fuchsia-50",
      cardBg: "bg-gradient-to-br from-purple-50 via-white to-fuchsia-50",
      border: "border-l-4 border-purple-400",
      color: "text-purple-700",
      iconColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
      title: "First IT Batch",
      desc: "Successfully graduated our first batch of IT professionals, achieving a 90% immediate placement rate.",
      age: "Curriculum",
      focus: "Student Growth",
    },
    {
      stepNo: "3",
      label: "2015",
      bg: "from-emerald-50 to-teal-50",
      cardBg: "bg-gradient-to-br from-emerald-50 via-white to-teal-50",
      border: "border-l-4 border-emerald-400",
      color: "text-emerald-700",
      iconColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
      title: "Infrastructure Expansion",
      desc: "Launched state-of-the-art coding labs, server infrastructure, and dedicated 24/7 hackathon arenas.",
      age: "Facilities",
      focus: "Campus Upgrade",
    },
    {
      stepNo: "4",
      label: "2018",
      bg: "from-blue-50 to-indigo-50",
      cardBg: "bg-gradient-to-br from-blue-50 via-white to-indigo-50",
      border: "border-l-4 border-blue-400",
      color: "text-blue-700",
      iconColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
      title: "Innovation Hub",
      desc: "Recognized as a premier research and development center for students by the State Tech Council.",
      age: "Recognition",
      focus: "Excellence",
    },
    {
      stepNo: "5",
      label: "2021",
      bg: "from-purple-50 to-fuchsia-50",
      cardBg: "bg-gradient-to-br from-purple-50 via-white to-fuchsia-50",
      border: "border-l-4 border-purple-400",
      color: "text-purple-700",
      iconColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
      title: "Highest Placement Rate",
      desc: "Achieved a milestone of 98% placement in top-tier MNCs despite global industry challenges.",
      age: "Careers",
      focus: "Job Security",
    },
    {
      stepNo: "6",
      label: "2023",
      bg: "from-emerald-50 to-teal-50",
      cardBg: "bg-gradient-to-br from-emerald-50 via-white to-teal-50",
      border: "border-l-4 border-emerald-400",
      color: "text-emerald-700",
      iconColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
      title: "Global Milestones",
      desc: "Crossed the milestone of 5000+ alumni globally and partnered with tech giants like Microsoft & AWS.",
      age: "Global Reach",
      focus: "Industry Leaders",
    },
  ];

  useEffect(() => {
    let timeout;

    const animateStep = (stepIndex) => {
      setActiveStep(stepIndex);

      if (stepIndex < steps.length - 1) {
        timeout = setTimeout(() => animateStep(stepIndex + 1), 3000);
      } else {
        timeout = setTimeout(() => animateStep(0), 4000);
      }
    };

    timeout = setTimeout(() => animateStep(0), 1000);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [steps.length]);

  const lineHeight = ((activeStep + 1) / steps.length) * 100;

  return (
    <section className="relative min-h-screen bg-white py-24 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-sm border border-slate-100">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-bold tracking-wider text-slate-700 uppercase">
                Our Journey
              </span>
            </div>

            <div className="space-y-3 md:space-y-4">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                A timeline of our growth, dedication, and relentless pursuit of academic excellence.
                It encompasses all stages of development, from our foundation in 2010 to global milestones.
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center lg:justify-end">
            <div className="text-center lg:text-right max-w-md">
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-semibold text-blue-900 tracking-tight leading-[1.1]">
                Institute<br />
                History &amp;<br />
                Timeline
              </h2>
            </div>
          </div>
        </div>

        {/* Main Timeline */}
        <div className="relative">
          {/* Animated Vertical Progress Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 overflow-hidden bg-slate-200 rounded-full">
            <div
              className="absolute left-0 right-0 top-0 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 transition-all duration-2000 ease-out"
              style={{ height: `${lineHeight}%` }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-4 h-4 bg-white rounded-full shadow-lg border-2 border-purple-500 transition-all duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-ping opacity-40"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } lg:min-h-[160px] mb-6 lg:mb-0 transition-all duration-1000 ease-out`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div
                    className={`relative bg-[#EBEDFA] rounded-3xl p-6 md:p-8 transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-2 ${activeStep === index
                      ? 'shadow-2xl -translate-y-2 scale-[1.02]'
                      : 'shadow-xl shadow-slate-200/40'
                      }`}
                  >
                    <div
                      className={`absolute left-0 top-6 bottom-6 w-1 ${step.border} rounded-full transition-all duration-300 ease-out ${activeStep === index ? 'w-2' : ''
                        }`}
                    />

                    {activeStep === index && (
                      <div className="absolute inset-0 bg-white/30 rounded-3xl transition-all duration-300 ease-out"></div>
                    )}

                    <div className="pl-6 relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 ${step.iconColor} rounded-xl flex items-center justify-center shadow-md transition-all duration-300 ease-out ${activeStep === index ? 'scale-110 ring-4 ring-white/50' : ''
                            }`}
                        >
                          <span className="text-white font-bold text-lg">{step.stepNo}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`text-sm font-black tracking-wider ${step.color} uppercase flex items-center gap-2 transition-all duration-300 ease-out truncate`}>
                            {step.label}
                            {activeStep === index && (
                              <span className="text-sm font-normal animate-pulse hidden sm:inline">●</span>
                            )}
                          </span>
                          <h3 className={`text-xl md:text-2xl font-semibold text-blue-900 mt-1 transition-all duration-300 ease-out ${activeStep === index ? 'translate-x-1' : ''
                            } truncate`}>
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className={`text-gray-700 mb-4 leading-relaxed text-[15px] font-normal transition-all duration-300 ease-out ${activeStep === index ? 'text-black' : ''
                        }`}>
                        {step.desc}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-slate-200">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full transition-all duration-300 ease-out ${activeStep === index ? 'scale-125 bg-slate-800' : 'bg-slate-400'
                              }`}
                          />
                          <span className={`text-sm font-bold transition-all duration-300 ease-out ${activeStep === index ? 'text-slate-800' : 'text-slate-500'
                            }`}>
                            {step.age}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full transition-all duration-300 ease-out ${activeStep === index ? 'scale-125 bg-slate-800' : 'bg-slate-400'
                              }`}
                          />
                          <span className={`text-sm font-bold transition-all duration-300 ease-out ${activeStep === index ? 'text-slate-800' : 'text-slate-500'
                            }`}>
                            {step.focus}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 ${step.bg} rounded-full flex items-center justify-center border-4 border-white transition-all duration-300 ease-out ${activeStep === index
                        ? 'scale-125 shadow-2xl ring-4 ring-blue-100'
                        : 'shadow-md'
                        }`}
                    >
                      <div className={`w-12 h-12 ${step.iconColor} rounded-full flex items-center justify-center shadow-inner transition-all duration-300 ease-out ${activeStep === index ? 'scale-105' : ''
                        }`}>
                        <span className="text-white font-black text-xl">{step.stepNo}</span>
                      </div>
                    </div>

                    {activeStep === index && (
                      <>
                        <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-40 -z-10 transition-all duration-300 ease-out"></div>
                        <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-20 -z-10 animate-ping"></div>
                      </>
                    )}
                  </div>
                </div>

                {/* Mobile timeline node */}
                <div className="lg:hidden my-6 relative">
                  <div className="relative flex items-center justify-center">
                    <div className={`w-14 h-14 ${step.bg} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                      <div className={`w-10 h-10 ${step.iconColor} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-black text-lg">{step.stepNo}</span>
                      </div>
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="absolute top-full left-1/2 h-8 w-1 bg-slate-200 transform -translate-x-1/2" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "6", label: "Major Milestones", desc: "A journey of consistent growth." },
            { value: "5000+", label: "Placed Alumni", desc: "Working in top tech companies." },
            { value: "50+", label: "Industry Partners", desc: "Collaborations with global brands." },
            { value: "100%", label: "Placement Assist", desc: "Dedicated career support." }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#EBEDFA] rounded-3xl p-6 shadow-xl shadow-slate-200/40 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="text-3xl md:text-4xl font-semibold text-blue-900 mb-2 group-hover:scale-105 transition-transform duration-300 inline-block">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-black truncate">
                {stat.label}
              </div>
              <div className="text-[15px] text-gray-700 mt-1 line-clamp-2">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.4;
          }
        }
      `}} />
    </section>
  );
}
