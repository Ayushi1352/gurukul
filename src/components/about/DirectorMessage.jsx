import React from 'react';

export default function DirectorMessage() {
  return (
    <section className="py-20 lg:py-28 bg-[#EBEDFA] font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-[2.5rem] sm:text-4xl lg:text-[3.5rem] font-semibold text-blue-900 tracking-tight leading-[1.1]">
            A Message from Our Director
          </h2>
        </div>
        
        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Image */}
          <div className="w-full lg:w-[35%] shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Jyoti Rastogi" 
              className="w-full h-auto aspect-[4/5] object-cover rounded-3xl shadow-xl shadow-slate-200/40"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-[65%] lg:pt-4">
            <h3 className="text-2xl sm:text-[1.75rem] font-semibold text-blue-900 mb-2 tracking-tight">
              Jyoti Rastogi
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-10 font-normal">
              Founder & Director, Gurukul Jyoti I.T.I
            </p>
            
            <div className="space-y-6 text-base sm:text-[1.125rem] text-gray-700 leading-relaxed font-normal">
              <p>
                At Gurukul Jyoti I.T.I, we believe that technology is the greatest equalizer of our time. Our goal has never been just to teach coding, but to instill a mindset of problem-solving and continuous innovation.
              </p>
              <p>
                I invite you to join our vibrant community and embark on a transformative journey that will define your career and help you contribute meaningfully to the global tech industry.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
