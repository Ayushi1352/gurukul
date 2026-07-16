import React from 'react';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';

export default function GalleryPreview() {
  const media = [
    { type: 'image', src: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784115578/campus_usseup.jpg", span: "md:col-span-2 md:row-span-2" },
    { type: 'image', src: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784028201/image2_aanjtq.webp", span: "md:col-span-1 md:row-span-1" },
    { type: 'image', src: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784115730/labs_wqwzfk.jpg", span: "md:col-span-1 md:row-span-1" },
    { type: 'image', src: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784115575/computer_lab_pc3wj6.jpg", span: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Inside Gurukul Jyoti I.T.I</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Campus Life & Labs</h2>
            <p className="text-xl text-slate-600">A glimpse into the vibrant campus life, advanced coding labs, and tech events.</p>
          </div>
          <Link href="/gallery" className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-purple-600 transition-colors shadow-lg hover:shadow-purple-500/30 shrink-0">
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[550px]">
          {media.map((item, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-[2rem] group cursor-pointer bg-slate-800 ${item.span} h-[250px] md:h-full shadow-sm hover:shadow-xl transition-all duration-500`}>
              <img src={item.src} alt={`Gallery ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
