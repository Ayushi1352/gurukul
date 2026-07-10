import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export default function DirectorMessage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
          
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="rounded-[2rem] overflow-hidden border-4 border-white shadow-lg mx-auto max-w-[300px] lg:max-w-full">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Director" 
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <FaQuoteLeft className="text-5xl text-blue-100 mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Message from the Director</h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-500 pl-6">
              <p>
                "At Gurukul ITI, we believe that technology is the greatest equalizer of our time. Our goal has never been just to teach coding, but to instill a mindset of problem-solving and continuous innovation."
              </p>
              <p>
                "I invite you to join our vibrant community and embark on a transformative journey that will define your career and help you contribute meaningfully to the global tech industry."
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-2xl font-bold text-slate-900">Dr. Vikram Singh</h4>
              <p className="text-blue-600 font-semibold mt-1">Founder & Director</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
