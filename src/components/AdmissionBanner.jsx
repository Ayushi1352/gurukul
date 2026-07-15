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
            <div className="inline-flex items-center gap-2 px-1  mb-6 lg:mb-4">
              {/* <span className="w-2.5 h-2.5 rounded-full bg-[#3C64B1] animate-pulse"></span> */}
              <span className="text-blue-900 font-bold text-xs sm:text-sm tracking-wider uppercase">
                Admissions Open 2025-26
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold  leading-[1.1] mb-6 tracking-tight">
              Fast-Track Your Career <br className="hidden sm:block" />
              in <span className="text-blue-900">Tech & Software</span>
            </h2>

            {/* Paragraph */}
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed font-normal">
              Join Gurukul Jyoti I.T.I and master the skills that top tech companies are actively hiring for. Limited seats for the upcoming batches.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
              <Link href="/admission" className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#191313] text-white font-semibold text-base hover:bg-black transition-colors shadow-lg">
                Apply Online Now
              </Link>

            </div>

            {/* Stat Cards */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full">
              {/* Card 1 */}
              <div className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <FaGraduationCap size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-lg sm:text-xl leading-tight">2011</h4>
                  <p className="text-sm text-gray-700 font-medium mt-1">Founded</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700">
                  <FaLaptopCode size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-lg sm:text-xl leading-tight">50+</h4>
                  <p className="text-sm text-gray-700 font-medium mt-1">Tech Courses</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5  transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <FaCheckCircle size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-lg sm:text-xl leading-tight">100%</h4>
                  <p className="text-sm text-gray-700 font-medium mt-1">Practical Training</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[45%] xl:w-[40%] mt-8 lg:mt-0 relative">
            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://res.cloudinary.com/w4kwyx1p/image/upload/v1784028865/Fast-Track_Your_Career_dwpbph.avif"
                alt="Tech Students at Gurukul Jyoti I.T.I"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 rounded-full bg-blue-200 blur-3xl opacity-50"></div>
            <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 rounded-full bg-purple-200 blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
