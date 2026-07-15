import React from 'react';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#D1DBE8] to-[#B3C2D1] font-sans w-full">

      {/* Noise Texture Overlay for Premium Feel */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex justify-start">

        <div className="max-w-6xl flex flex-col items-start text-left w-full">

          {/* Heading Row */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 mb-6 lg:mb-8 w-full">
            <span className="text-sm sm:text-base font-medium tracking-wide text-slate-600 sm:w-[120px] lg:w-[140px] shrink-0 sm:pt-4 lg:pt-6">
              Next Steps
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-medium text-slate-800 leading-[1.05] tracking-tight flex-1">
              Ready to Build Your Industrial Career with Powerful Tech Skills?
              <span className="inline-block ml-3 lg:ml-5 text-slate-500 font-light">←</span>
            </h2>
          </div>

          {/* Content Row */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 w-full">
            <div className="sm:w-[120px] lg:w-[140px] shrink-0 hidden sm:block"></div>
            <div className="flex-1">
              <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-5xl font-normal leading-relaxed">
                Join thousands of successful alumni who started their journey at Gurukul Jyoti I.T.I. We empower students to adapt to changing technologies, master authentic skills seamlessly, and thrive in an increasingly competitive digital world.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center bg-white text-slate-900 hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  Apply Online Today
                </Link>
                <a href="tel:+917836004409" className="w-full sm:w-auto inline-flex justify-center items-center bg-transparent border border-slate-400/60 text-slate-800 hover:bg-slate-200/50 px-8 py-3.5 rounded-full font-bold text-base transition-all">
                  Call +91 7836004409
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
