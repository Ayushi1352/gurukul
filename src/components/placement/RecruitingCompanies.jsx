import React from 'react';

export default function RecruitingCompanies() {
  const companies = [
    { image: "https://img.icons8.com/color/144/google-logo.png", name: "Google" },
    { image: "https://img.icons8.com/color/144/microsoft.png", name: "Microsoft" },
    { image: "https://img.icons8.com/color/144/amazon.png", name: "Amazon" },
    { image: "https://img.icons8.com/ios-filled/150/mac-os.png", name: "Apple" },
    { image: "https://img.icons8.com/color/144/facebook-new.png", name: "Facebook" },
    { image: "https://img.icons8.com/color/144/instagram-new--v1.png", name: "Instagram" },
    { image: "https://img.icons8.com/ios-filled/150/twitterx--v2.png", name: "Twitter" },
    { image: "https://img.icons8.com/color/144/linkedin.png", name: "LinkedIn" },
    { image: "https://img.icons8.com/ios-filled/150/github.png", name: "GitHub" },
    { image: "https://img.icons8.com/color/144/paypal.png", name: "PayPal" },
  ];

  // Duplicate for seamless scroll
  const scrollItems = [...companies, ...companies];

  return (
    <section id="top-recruiters" className="py-20 bg-[#EBEDFA] font-sans overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/40 via-[#EBEDFA] to-[#EBEDFA] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 tracking-tight">Top Recruiters</h2>
          <p className="text-slate-600">Our alumni are working at the world's most innovative tech giants.</p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex z-10">
        {/* Left/Right Fade */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#EBEDFA] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#EBEDFA] to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="flex animate-marquee whitespace-nowrap gap-8 w-max px-4 py-4">
          {scrollItems.map((company, idx) => (
            <div
              key={idx}
              className="w-40 h-40 bg-white border border-transparent shadow-sm rounded-[2rem] flex flex-col items-center justify-center text-slate-400 hover:text-blue-900 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src={company.image} alt={company.name} className="max-h-full max-w-full object-contain" />
              </div>
              <span className="font-bold text-slate-500 text-sm tracking-wider group-hover:text-blue-900">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
