"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaEye, FaBullseye, FaRocket } from 'react-icons/fa';

export default function VisionMission() {
  const cards = [
    {
      title: "Our Vision",
      icon: <FaEye className="w-8 h-8 sm:w-10 sm:h-10 text-blue-200" />,
      description:
        "To emerge as a premier IT institute that nurtures talent, fosters innovation, and empowers students to become globally competent technology professionals capable of shaping the digital future.",
    },
    {
      title: "Our Mission",
      icon: <FaBullseye className="w-8 h-8 sm:w-10 sm:h-10 text-purple-200" />,
      description:
        "• Provide industry-aligned technical education.\n• Cultivate an environment of continuous learning and research.\n• Ensure 100% placement assistance in top-tier companies.",
    },
    {
      title: "Our Goal",
      icon: <FaRocket className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-200" />,
      description:
        "To establish a 100% tech-driven campus and become the top-ranked IT training institute, bridging the gap between academia and modern industry demands.",
    },
  ];

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-slate-50 border-t border-slate-100 py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-2 sm:px-6">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Vision, Mission</span>
            <br className="hidden md:block" /> And{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Goal</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the driving forces behind our commitment to excellence in technical education.
          </p>
        </div>

        {/* Carousel */}
        <div className="w-full px-1 sm:px-3 md:px-6 pb-12 relative z-10">
          <Slider {...sliderSettings}>
            {cards.map((card, idx) => (
              <div key={idx} className="px-3 h-full">
                <div
                  className="text-white rounded-3xl shadow-lg h-full flex flex-col justify-start items-center p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
                  style={{
                    background: "linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)",
                  }}
                >
                  <div className="bg-white/10 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner flex-shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center w-full flex-shrink-0">
                    {card.title}
                  </h3>
                  <div className="text-base leading-relaxed text-blue-50 whitespace-pre-line text-center w-full flex-grow">
                    {card.description}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        /* Ensures all cards stretch to be equal height */
        .slick-track {
          display: flex !important;
        }
        .slick-slide {
          height: inherit !important;
        }
        .slick-slide > div {
          height: 100%;
        }
        
        .slick-dots {
          bottom: -20px !important;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #94a3b8 !important;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          color: #7c3aed !important;
          opacity: 1;
        }
      `}} />
    </section>
  );
}
