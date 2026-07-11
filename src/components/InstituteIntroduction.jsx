import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function InstituteIntroduction() {
  return (
    <section className="bg-[#EBEDFA] py-16 lg:py-24 relative overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 justify-between">

          {/* Left Column - Large Serif Text */}
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <h2
              className="text-4xl sm:text-[4.5rem] lg:text-[4.8rem] leading-[1.05] font-semibold text-blue-900 tracking-tight"
            >
              About us and<br /> Education &amp;<br /> Skills quality
            </h2>
          </div>

          {/* Middle Column - Portrait Image */}
          <div className="w-full sm:w-2/3 lg:w-[25%] flex justify-center flex-shrink-0">
            <div className="w-[300px] h-[400px] lg:w-full lg:max-w-[340px] lg:h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop"
                alt="Students at Gurukul ITI"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Column - Text & Button */}
          <div className="w-full lg:w-[40%] flex flex-col items-start gap-6">
            <p className="text-gray-700 text-[15px] leading-relaxed font-normal">
              At Gurukul ITI, every course is inspired by the rich technological tradition of innovation and crafted with a deep passion for authentic skill-building. We believe great education should do more than satisfy your curiosity—it should create career opportunities, innovation, and a true sense of confidence. That's why our mentors carefully select premium curriculum, practical projects, and industry-grade tools sourced globally to ensure each student delivers an unmistakably genuine performance.
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed font-normal">
              From hands-on coding and advanced networking to signature AI programs full of bold concepts, we blend classic computer science techniques with modern creativity. Our vibrant tech-labs, elegant infrastructure, and attentive mentorship make every learning experience exceptional.
            </p>

            <Link
              href="/courses"
              className="mt-2 bg-[#191313] hover:bg-black text-[#EBEDFA] px-7 py-3 rounded-full font-medium text-base flex items-center gap-2 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Explore Courses <FaArrowRight className="text-sm font-light ml-1" />
            </Link>
          </div>

        </div>
      </div>

      {/* Full Screen Dotted Background Pattern with Radial Fade */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-20 text-blue-900">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
            <radialGradient id="radialDotFade" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="dotFadeMask">
              <rect width="100%" height="100%" fill="url(#radialDotFade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" mask="url(#dotFadeMask)" />
        </svg>
      </div>

      {/* Faint Doodle / Watermark bottom right to mimic the sketch */}
      <div className="absolute -bottom-24 -right-24 opacity-[0.03] pointer-events-none z-0">
        <svg width="450" height="450" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      </div>
    </section>
  );
}
