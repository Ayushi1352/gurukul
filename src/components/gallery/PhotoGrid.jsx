"use client";
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function PhotoGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    'All', 
    'Campus', 
    'Classrooms', 
    'Workshops', 
    'Laboratories', 
    'Events', 
    'Industrial Visits', 
    'Student Activities'
  ];

  const images = [
    { id: 1, category: 'Campus', src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop', alt: 'Main Campus Building' },
    { id: 2, category: 'Laboratories', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', alt: 'Advanced Computer Lab' },
    { id: 3, category: 'Events', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop', alt: 'Annual Tech Seminar' },
    { id: 4, category: 'Classrooms', src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop', alt: 'Smart Classroom Setup' },
    { id: 5, category: 'Workshops', src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop', alt: 'Hardware & Networking Workshop' },
    { id: 6, category: 'Industrial Visits', src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop', alt: 'TCS Campus Industrial Visit' },
    { id: 7, category: 'Student Activities', src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop', alt: 'Sports Day & Athletics' },
    { id: 8, category: 'Campus', src: 'https://images.unsplash.com/photo-1519452285856-4277b08d4b3a?q=80&w=800&auto=format&fit=crop', alt: 'Student Ground & Greenery' },
    { id: 9, category: 'Laboratories', src: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=800&auto=format&fit=crop', alt: 'Cyber Security Lab' },
    { id: 10, category: 'Events', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop', alt: 'Mega Placement Drive' },
    { id: 11, category: 'Classrooms', src: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800&auto=format&fit=crop', alt: 'Interactive UI/UX Session' },
    { id: 12, category: 'Student Activities', src: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop', alt: 'Annual Cultural Fest' },
  ];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section className="py-24 bg-slate-50 relative -mt-16 z-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Buttons & Features Tip */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-3 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${
                  activeFilter === cat 
                    ? 'bg-purple-600 text-white border-transparent shadow-purple-200' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:text-purple-600 hover:border-purple-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            <span className="text-purple-500 font-bold">Feature:</span> Click on any image for a full-screen preview.
          </p>
        </div>

        {/* Responsive Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              onClick={() => setSelectedImage(image)}
              className="relative group overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white aspect-[4/3] flex items-center justify-center"
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.alt} 
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Text Content on Hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-4 py-1.5 bg-purple-600 text-white text-xs font-black uppercase tracking-[0.1em] rounded-lg mb-3 shadow-md">
                  {image.category}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-black drop-shadow-md leading-tight">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-bold text-xl">
            No images found for this category.
          </div>
        )}
      </div>

      {/* Image Preview / Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8">
          
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 bg-white/10 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md border border-white/20 z-[110]"
          >
            <FaTimes className="text-2xl" />
          </button>
          
          <div className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-1.5 bg-purple-600 text-white text-xs font-black uppercase tracking-[0.1em] rounded-lg mb-3 shadow-md">
                {selectedImage.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                {selectedImage.alt}
              </h3>
            </div>
          </div>
          
        </div>
      )}

    </section>
  );
}
