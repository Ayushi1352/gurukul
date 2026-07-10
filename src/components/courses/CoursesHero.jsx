import React from 'react';
import { FaLaptopCode, FaSearch } from 'react-icons/fa';

export default function CoursesHero() {
  return (
    <section className="relative bg-slate-50 border-b border-slate-100">
      {/* Hero Banner with Background Image */}
      <div 
        className="relative pt-24 pb-32 md:pt-32 md:pb-40 px-4 overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block py-1.5 px-5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6 backdrop-blur-md">
            Academic Programs
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">IT Courses</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 font-medium leading-relaxed drop-shadow-md max-w-3xl mx-auto px-2 mb-10">
            Discover industry-aligned programs designed to equip you with the technical skills and practical knowledge needed to thrive in the digital economy.
          </p>
          
          <div className="max-w-2xl mx-auto relative px-4 sm:px-0">
            <div className="relative flex items-center">
              <FaSearch className="absolute left-6 text-slate-400 text-lg" />
              <input 
                type="text" 
                placeholder="Search for a course (e.g., Web Development, Data Science)..." 
                className="w-full py-4 pl-14 pr-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm sm:text-base"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-6 rounded-full transition-all shadow-lg text-sm sm:text-base hidden sm:block">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
