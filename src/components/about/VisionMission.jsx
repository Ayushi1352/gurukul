import React from 'react';

export default function VisionMission() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-950 to-[#0a1128] py-12 lg:py-16 px-6 sm:px-8 lg:px-12 text-[#EBEDFA] overflow-hidden font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Massive Typography Header */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem] leading-[0.9] font-medium text-[#EBEDFA] mb-3 tracking-tighter">
            Vision, Mission
          </h2>
          <div className="flex items-center gap-3 sm:gap-5 lg:gap-6 pl-8 sm:pl-20 lg:pl-32">
            <div className="w-8 sm:w-12 lg:w-20 h-[2px] bg-[#EBEDFA] shrink-0"></div>
            <h2 className="text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem] leading-[0.9] font-medium text-[#EBEDFA] tracking-tighter">
              & Goal
            </h2>
          </div>
        </div>
        
        {/* Staggered Rows */}
        <div className="flex flex-col gap-12 lg:gap-16">
          
          {/* Vision Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
            <div className="w-full lg:w-[45%] lg:mt-4">
              <h3 className="text-xl font-bold mb-3 tracking-wide text-[#EBEDFA]">Vision:</h3>
              <p className="text-base sm:text-lg text-[#EBEDFA]/80 leading-relaxed font-light">
                To emerge as a premier IT institute that nurtures talent, fosters innovation, and empowers students to become globally competent technology professionals capable of shaping the digital future.
              </p>
            </div>
            <div className="w-full sm:w-[80%] lg:w-[45%]">
               <img 
                 src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Vision" 
                 className="w-full h-auto aspect-[21/9] lg:aspect-[16/9] object-cover hover:scale-105 transition-transform duration-700 shadow-2xl rounded-2xl" 
               />
            </div>
          </div>

          {/* Mission Row */}
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
            <div className="w-full sm:w-[80%] lg:w-[45%]">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Mission" 
                 className="w-full h-auto aspect-[21/9] lg:aspect-[16/9] object-cover hover:scale-105 transition-transform duration-700 shadow-2xl rounded-2xl" 
               />
            </div>
            <div className="w-full lg:w-[45%] lg:mt-4">
              <h3 className="text-xl font-bold mb-3 tracking-wide text-[#EBEDFA]">Mission:</h3>
              <ul className="text-base sm:text-lg text-[#EBEDFA]/80 leading-relaxed font-light space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#EBEDFA] mt-1">•</span> 
                  <span>Provide industry-aligned technical education.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EBEDFA] mt-1">•</span> 
                  <span>Cultivate an environment of continuous learning and research.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EBEDFA] mt-1">•</span> 
                  <span>Ensure 100% placement assistance in top-tier companies.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goal Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
            <div className="w-full lg:w-[45%] lg:mt-4">
              <h3 className="text-xl font-bold mb-3 tracking-wide text-[#EBEDFA]">Goal:</h3>
              <p className="text-base sm:text-lg text-[#EBEDFA]/80 leading-relaxed font-light">
                To establish a 100% tech-driven campus and become the top-ranked IT training institute, bridging the gap between academia and modern industry demands.
              </p>
            </div>
            <div className="w-full sm:w-[80%] lg:w-[45%]">
               <img 
                 src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" 
                 alt="Goal" 
                 className="w-full h-auto aspect-[21/9] lg:aspect-[16/9] object-cover hover:scale-105 transition-transform duration-700 shadow-2xl rounded-2xl" 
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
