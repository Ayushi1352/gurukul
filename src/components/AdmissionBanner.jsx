import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaGraduationCap, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';

export default function AdmissionBanner() {
  return (
    <section className="bg-white py-16 lg:py-24 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 lg:mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase">
                Admissions Open 2025-26
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Fast-Track Your Career <br className="hidden sm:block" />
              in <span className="text-blue-600">Tech & Software</span>
            </h2>
            
            {/* Paragraph */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Join Gurukul ITI and master the skills that top tech companies are actively hiring for. Limited seats for the upcoming batches.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
              <Link href="/admission" className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#FFC107] text-gray-900 font-bold text-base hover:bg-[#FFB300] transition-colors shadow-sm">
                Apply Online Now
              </Link>
              <Link href="/contact" className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white border border-gray-300 text-gray-900 font-bold text-base hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-2 group">
                Download Brochure <FaArrowRight className="text-sm text-gray-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Stat Cards */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full">
              {/* Card 1 */}
              <div className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                  <FaGraduationCap className="text-lg sm:text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg leading-tight">2011</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">Founded</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <FaLaptopCode className="text-lg sm:text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg leading-tight">50+</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">Tech Courses</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                  <FaCheckCircle className="text-lg sm:text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg leading-tight">100%</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">Practical Training</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-[45%] xl:w-[40%] mt-8 lg:mt-0 relative">
            <div className="relative w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&h=1400&auto=format&fit=crop" 
                alt="Tech Students at Gurukul ITI" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative dots pattern (optional, adds to the modern tech feel) */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 rounded-full bg-blue-50 blur-3xl opacity-70"></div>
            <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 rounded-full bg-yellow-50 blur-3xl opacity-70"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
