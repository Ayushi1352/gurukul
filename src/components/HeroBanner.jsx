import Link from 'next/link';
import React from 'react';

export default function HeroBanner() {
  return (
    <div className="w-full bg-[#0a1128]">
      <section className="relative w-full overflow-hidden min-h-[100svh] lg:min-h-screen flex items-center pt-24 lg:pt-0">

        {/* Deep dark blue gradient matching the website's theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-950 to-[#0a1128]"></div>

        {/* Subtle floor reflection/light effect to mimic a studio floor */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-blue-400/[0.05] to-transparent pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 h-full gap-8 lg:gap-0">

          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center z-20 order-2 lg:order-1 pb-20 lg:pb-0 pt-4 lg:pt-10">
            <h1 className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.5rem] font-bold text-white leading-[1.15] tracking-tight uppercase">
              ULTIMATE SKILLS IN <br className="hidden lg:block" />
              THE INDUSTRY
            </h1>

            <p className="text-slate-200 text-lg sm:text-xl lg:text-2xl font-normal mt-5 lg:mt-8 max-w-md leading-snug">
              Let us help you get your <br className="hidden lg:block" />
              dream career!
            </p>

            <div className="mt-8 lg:mt-10">
              <Link href="/courses" className="inline-flex items-center group cursor-pointer">
                <span className="w-6 sm:w-8 h-[2px] bg-[#e63946] mr-3 transition-all duration-300 group-hover:w-12"></span>
                <span className="text-white font-semibold text-xs sm:text-sm tracking-wide capitalize transition-colors group-hover:text-gray-300">
                  Explore courses
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column - Large Isolated Image */}
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-full flex items-center justify-center lg:justify-end z-10 order-1 lg:order-2">
            <div className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[120%] xl:w-[130%] flex items-center justify-center lg:justify-end lg:mr-[-10%] xl:mr-[-15%]">
              <img
                src="https://res.cloudinary.com/w4kwyx1p/image/upload/v1784010710/banner_perf04.webp"
                alt="Hardware & Tech Training Equipment"
                className="w-full h-auto object-contain opacity-95 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform lg:-translate-x-8 lg:translate-y-16 xl:translate-y-24"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
