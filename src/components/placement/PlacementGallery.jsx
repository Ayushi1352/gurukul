import React from 'react';

export default function PlacementGallery() {
  const images = [
    "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784027233/placement_ph61f4.jpg",
    "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784026998/Offer_Letter_Distribute_csgagw.avif",
    "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784026998/Placement_Drive_ylcgce.avif",
    "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784026998/Joyful_Moments_of_Placed_Candidates_olytx8.avif",
    "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784026998/Corporate_Seminars_abiyqe.avif",
    "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784010361/hero_banner_image_ai04tz.avif"
  ];

  return (
    <section id="placement-gallery" className="py-24 bg-[#EBEDFA] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-900 font-bold tracking-wider uppercase text-sm mb-4 block">Glimpses</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">Placement Gallery</h2>
          <p className="text-lg text-slate-600">
            A sneak peek into our mega placement drives, corporate seminars, and joyful moments of our placed candidates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-[2rem] shadow-sm aspect-video cursor-pointer border border-transparent hover:border-blue-500/30">
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 z-10"></div>
              <img
                src={img}
                alt="Placement Drive"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
