import Link from 'next/link';
import React from 'react';

export default function HeroBanner() {
  return (
    <div className="w-full">
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-950 to-[#0a1128] min-h-[100svh] lg:min-h-[85vh] flex items-center pt-20 lg:pt-24 pb-16 lg:pb-0">

        {/* Subtle Background Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-[#3D69AB] rounded-full blur-[150px] mix-blend-screen opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#191313] rounded-full blur-[150px] mix-blend-multiply opacity-40"></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 xl:gap-16 items-stretch px-6 sm:px-8 lg:px-12 relative z-10">

          {/* Left Column */}
          <div className="flex flex-col justify-center lg:justify-between py-2 lg:py-12 gap-10">
            <h1 className="text-[2.75rem] sm:text-6xl xl:text-[4.8rem] font-bold text-[#EBEDFA] leading-[1.05] tracking-tight">
              Forge the <br /> Future of Industrial <br /> Growth
            </h1>

            <div className="flex flex-col items-start mt-2 lg:mt-0">
              <div className="w-[1px] h-16 xl:h-24 bg-[#EBEDFA]/30 mb-6 ml-1 hidden lg:block"></div>
              <h3 className="text-[#EBEDFA] text-xl sm:text-2xl font-semibold mb-1">100% Placement</h3>
              <p className="text-[#EBEDFA]/70 text-sm sm:text-base font-light">and industry-ready training</p>
            </div>
          </div>

          {/* Center Column (Phone Frame Mockup) */}
          <div className="flex justify-center items-center py-6 lg:py-0 relative">

            {/* Abstract Concentric Circles Background SVG */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[200%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="animate-[spin_60s_linear_infinite]">
                  <defs>
                    <radialGradient id="abstractFade" cx="50%" cy="50%" r="50%">
                      <stop offset="20%" stopColor="white" stopOpacity="1" />
                      <stop offset="90%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <mask id="fadeMaskAbstract">
                      <rect width="1000" height="1000" fill="url(#abstractFade)" />
                    </mask>
                  </defs>

                  <g mask="url(#fadeMaskAbstract)" stroke="#3D69AB" strokeWidth="2" fill="none" opacity="0.8">
                    {/* Inner circles (mostly behind phone) */}
                    <circle cx="500" cy="500" r="100" />
                    <circle cx="500" cy="500" r="180" strokeDasharray="6 6" />

                    {/* Clearly visible outer circles */}
                    <circle cx="500" cy="500" r="260" />
                    <circle cx="500" cy="500" r="340" strokeDasharray="12 12" />
                    <circle cx="500" cy="500" r="420" />
                    <circle cx="500" cy="500" r="500" strokeDasharray="4 16" />
                    <circle cx="500" cy="500" r="580" />
                    <circle cx="500" cy="500" r="660" strokeDasharray="20 10" />
                    <circle cx="500" cy="500" r="740" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="relative z-10 w-[260px] h-[520px] sm:w-[300px] sm:h-[520px] lg:bg-[#000000] rounded-[2.5rem] lg:rounded-[3rem] lg:p-1 shadow-2xl border-0 lg:border lg:border-gray-700/40 transform hover:-translate-y-2 transition-transform duration-500 group">

              {/* Phone Screen */}
              <div className="w-full h-full rounded-[2.5rem] lg:rounded-[2.4rem] overflow-hidden relative bg-slate-900 border-0 lg:border lg:border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                  alt="ITI Training"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay for bottom UI */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#072510]/90 via-[#072510]/20 to-transparent"></div> */}

                {/* Phone Notch/Dynamic Island (Hidden on Mobile) */}
                {/* <div className="hidden lg:block absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 shadow-inner"></div> */}

                {/* Interactive-looking UI Widget */}
                <div className="absolute bottom-6 left-0 right-0 px-5">
                  <div className="bg-[#EBEDFA]/95 backdrop-blur-md rounded-2xl p-4 shadow-lg text-[#191313] transform transition-transform duration-300 group-hover:scale-[1.02]">
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5 opacity-80">Current Status</p>
                    <p className="text-lg font-extrabold leading-tight">Admissions Open</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center lg:justify-between py-2 lg:py-12 gap-10 lg:pl-4 xl:pl-8">
            <div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#EBEDFA]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[#EBEDFA] font-semibold text-lg lg:text-xl tracking-wide">5.0 Ratings</span>
              </div>
              <p className="text-[#EBEDFA]/80 text-sm mt-1 font-light">Over 5,000 Happy Students</p>
            </div>

            <div className="space-y-8 max-w-[340px]">
              <p className="text-[#EBEDFA]/90 text-base lg:text-lg leading-relaxed font-light">
                Simplify your education, manage hands-on training, and grow your career with intelligent educational solutions built for the modern industry.
              </p>
              <div>
                <Link href="/courses" className="inline-flex justify-center items-center px-8 py-3.5 bg-[#191313] text-[#EBEDFA] hover:bg-black rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
