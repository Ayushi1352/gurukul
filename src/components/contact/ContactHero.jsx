import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative bg-slate-900 border-b border-slate-800">
      <div 
        className="relative pt-32 pb-40 md:pt-40 md:pb-56 px-4 overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
        
        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto mt-8">
          <span className="inline-flex items-center justify-center gap-2 py-2 px-6 rounded-full bg-white/5 text-blue-200 border border-white/10 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase backdrop-blur-md mb-8 shadow-xl">
            We Are Here For You
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Touch</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Have questions about admissions, courses, or placements? Reach out to us. Our team is always ready to assist you in shaping your future.
          </p>
        </div>
      </div>
    </section>
  );
}
