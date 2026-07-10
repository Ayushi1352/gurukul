import React from 'react';

export default function Affiliations() {
  const logos = [
    "NCVT Approved",
    "ISO 9001:2015",
    "Skill India",
    "Microsoft Ed",
    "AWS Academy",
    "Cisco Network"
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Approvals & Affiliations</h2>
          <p className="text-lg text-slate-600">Gurukul ITI is officially recognized by government bodies and partnered with global tech giants to provide certified education.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {logos.map((logo, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl px-8 py-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex items-center justify-center min-w-[200px]">
              <span className="text-lg font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest text-center">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
