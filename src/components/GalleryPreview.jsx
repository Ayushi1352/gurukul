import React from 'react';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';

export default function GalleryPreview() {
  const media = [
    { type: 'image', src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2", height: "h-[400px] md:h-full" },
    { type: 'image', src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", height: "h-[250px]" },
    { type: 'video', src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", height: "h-[250px]" },
    { type: 'image', src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1", height: "h-[300px]" },
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Inside Gurukul ITI</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Campus Life & Labs</h2>
            <p className="text-xl text-slate-600">A glimpse into the vibrant campus life, advanced coding labs, and tech events.</p>
          </div>
          <Link href="/gallery" className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-purple-600 transition-colors shadow-lg hover:shadow-purple-500/30 shrink-0">
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          {media.map((item, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-3xl group cursor-pointer bg-slate-800 ${item.span} ${item.height} shadow-sm hover:shadow-xl transition-all duration-500`}>
              <img src={item.src} alt={`Gallery ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlayCircle className="text-6xl text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
