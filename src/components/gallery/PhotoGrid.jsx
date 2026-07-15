"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PhotoGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset modal when filter changes
  useEffect(() => {
    setSelectedIndex(null);
  }, [activeFilter]);

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
    { id: 1, category: 'Campus', src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop', alt: 'Main Campus Building' },
    { id: 2, category: 'Laboratories', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop', alt: 'Advanced Computer Lab' },
    { id: 3, category: 'Events', src: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070&auto=format&fit=crop', alt: 'Annual Tech Seminar' },
    { id: 4, category: 'Classrooms', src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop', alt: 'Smart Classroom Setup' },
    { id: 5, category: 'Workshops', src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop', alt: 'Hardware & Networking Workshop' },
    { id: 6, category: 'Industrial Visits', src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop', alt: 'TCS Campus Industrial Visit' },
    { id: 7, category: 'Student Activities', src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop', alt: 'Sports Day & Athletics' },
    { id: 8, category: 'Campus', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop', alt: 'Student Ground & Greenery' },
    { id: 9, category: 'Laboratories', src: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop', alt: 'Cyber Security Lab' },
    { id: 10, category: 'Events', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', alt: 'Mega Placement Drive' },
    { id: 11, category: 'Classrooms', src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop', alt: 'Interactive UI/UX Session' },
    { id: 12, category: 'Student Activities', src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop', alt: 'Annual Cultural Fest' },
  ];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  // Chunk the images into arrays of 6 for the perfect Bento Grid
  const chunks = [];
  for (let i = 0; i < filteredImages.length; i += 6) {
    chunks.push(filteredImages.slice(i, i + 6));
  }

  const handleImageClick = (image) => {
    const index = filteredImages.findIndex(img => img.id === image.id);
    setSelectedIndex(index);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  // Reusable Image Card Component
  const ImageCard = ({ image, flexClass }) => {
    if (!image) return null;
    return (
      <div 
        onClick={() => handleImageClick(image)}
        className={`relative group overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-slate-200 aspect-[4/3] md:aspect-auto ${flexClass} flex items-center justify-center w-full border border-transparent hover:border-blue-500/30`}
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="inline-block px-3 py-1 bg-blue-900 text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.1em] rounded-lg mb-2 shadow-md">
            {image.category}
          </span>
          <h3 className="text-white text-lg sm:text-xl font-black drop-shadow-md leading-tight">
            {image.alt}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="gallery-grid" className="py-24 bg-white font-sans relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Buttons & Features Tip */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-3 md:px-6 md:py-3 rounded-[2rem] font-bold text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${
                    activeFilter === cat 
                      ? 'bg-blue-900 text-white border-transparent shadow-blue-900/20' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:text-blue-900 hover:border-blue-500/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
           
          </div>

          {/* Dynamic Bento Gallery Grid */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full">
            {chunks.map((chunk, chunkIndex) => {
              if (chunk.length === 6) {
                return (
                  <div key={chunkIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:h-[600px] lg:h-[800px] w-full">
                    <div className="flex flex-col gap-6 sm:gap-8 h-full">
                      <ImageCard image={chunk[0]} flexClass="md:flex-[4]" />
                      <ImageCard image={chunk[1]} flexClass="md:flex-[6]" />
                    </div>
                    <div className="flex flex-col gap-6 sm:gap-8 h-full">
                      <ImageCard image={chunk[2]} flexClass="md:flex-[7]" />
                      <ImageCard image={chunk[3]} flexClass="md:flex-[3]" />
                    </div>
                    <div className="flex flex-col gap-6 sm:gap-8 h-full">
                      <ImageCard image={chunk[4]} flexClass="md:flex-[5]" />
                      <ImageCard image={chunk[5]} flexClass="md:flex-[5]" />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={chunkIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
                    {chunk.map(img => (
                      <ImageCard key={img.id} image={img} flexClass="md:h-[300px]" />
                    ))}
                  </div>
                );
              }
            })}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-slate-500 font-bold text-xl">
              No images found for this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal (Rendered via React Portal) */}
      {mounted && selectedImage && createPortal(
        <div className="fixed inset-0 z-[999999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8" style={{ position: 'fixed' }}>
          
          {/* Close Button */}
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 bg-white/10 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md border border-white/20 z-[999999]"
          >
            <FaTimes className="text-2xl" />
          </button>
          
          {/* Previous Button */}
          {filteredImages.length > 1 && (
            <button 
              onClick={handlePrev}
              className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-blue-900 text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md border border-white/20 z-[999999]"
            >
              <FaChevronLeft className="text-xl" />
            </button>
          )}

          {/* Next Button */}
          {filteredImages.length > 1 && (
            <button 
              onClick={handleNext}
              className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-blue-900 text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md border border-white/20 z-[999999]"
            >
              <FaChevronRight className="text-xl" />
            </button>
          )}

          <div className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-1.5 bg-blue-900 text-white text-xs font-black uppercase tracking-[0.1em] rounded-lg mb-3 shadow-md">
                {selectedImage.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                {selectedImage.alt}
              </h3>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
