import React from 'react';

export default function GalleryHero() {
  return (
    <section className="relative bg-slate-900 border-b border-slate-800">
      <div 
        className="relative pt-32 pb-40 md:pt-40 md:pb-56 px-4 overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-950/85 backdrop-blur-sm"></div>
        
        {/* Dynamic Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center justify-center gap-2 py-1.5 px-5 rounded-full bg-white/10 text-blue-200 border border-white/20 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase backdrop-blur-md mb-6">
            Life At Gurukul
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Gallery</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Explore the vibrant campus life, state-of-the-art laboratories, and unforgettable moments at Gurukul ITI.
          </p>
        </div>
      </div>
    </section>
  );
}
