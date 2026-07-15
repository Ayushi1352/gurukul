"use client";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dialog } from "@headlessui/react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function FacultyOverview() {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedExpert, setSelectedExpert] = useState(null);

  const experts = [
    {
      name: "Arjun Verma",
      title: "Lead Instructor - Web Dev",
      country: "india",
      description: "With 8+ years of industry experience building scalable web applications for Fortune 500 companies, Arjun brings deep expertise in full-stack JavaScript, React, and Node.js directly into the classroom. He focuses on clean code, architecture, and practical problem-solving.",
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784030329/arjun_verma_tp1uus.avif"
    },
    {
      name: "Sneha Patel",
      title: "UI/UX & Design Head",
      country: "india",
      description: "Sneha is a seasoned UI/UX designer with a passion for creating intuitive, accessible, and beautiful user interfaces. She leads our design curriculum, teaching students how to bridge the gap between human psychology and digital product design.",
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784030388/sneha_patel_a0fkld.jpg"
    },
    {
      name: "Rohan Gupta",
      title: "Lead Instructor - Laptop & Mobile Repair",
      country: "india",
      description: "With extensive experience in motherboard repair and mobile diagnostics, Rohan leads our hardware engineering courses. He provides hands-on training in chip-level and card-level repairs, ensuring students master the intricacies of modern electronics.",
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784030814/rohan_gupta_nas8yb.avif"
    },
    {
      name: "Pooja Desai",
      title: "Instructor - Digital Marketing & Accounting",
      country: "india",
      description: "Pooja is an expert in digital marketing strategies and financial accounting. She guides students through practical modules in SEO, social media marketing, and Tally.ERP 9, preparing them for dynamic roles in the modern business world.",
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784030815/pooja_desai_g7msxe.jpg"
    }
  ];

 

  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-900 font-bold tracking-wider uppercase text-sm mb-4 block">Expert Mentors</span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-semibold text-black mb-6 leading-[1.1] tracking-tight">Learn from Industry Leaders</h2>
          <p className="text-lg text-gray-700 font-normal">Our faculty consists of seasoned tech professionals who bring real-world experience directly into the classroom.</p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...sliderSettings}>
            {experts.map((expert, index) => (
              <div key={index} className="px-3 pb-8">
                <div
                  className="relative rounded-3xl overflow-hidden bg-[#EBEDFA] shadow-xl shadow-slate-200/40 h-full flex flex-col transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 group"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  onTouchStart={() => setActiveCard(activeCard === index ? null : index)}
                >
                  <div
                    className="aspect-[4/5] overflow-hidden relative flex-1 cursor-pointer"
                    onClick={() => {
                      if (window.innerWidth >= 1024) {
                        setSelectedExpert(expert);
                      }
                    }}
                  >
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover transform transition duration-700"
                      style={{
                        transform: activeCard === index ? "scale(1.1)" : "scale(1)",
                      }}
                    />

                    {/* Hover overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-transparent transition-all duration-500"
                      style={{ opacity: activeCard === index ? 1 : 0 }}
                    ></div>

                    {/* Hover content */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 delay-100"
                      style={{
                        transform: activeCard === index ? "translateY(0)" : "translateY(15px)",
                        opacity: activeCard === index ? 1 : 0,
                      }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <p className="font-bold text-sm text-blue-200">{expert.title}</p>

                      </div>

                      <p className="text-sm text-slate-200 line-clamp-3 mb-4">{expert.description}</p>


                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div className="bg-[#EBEDFA] p-5 z-10 relative">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-blue-900 text-base">{expert.name}</h3>
                      <button
                        className="text-black cursor-pointer hover:text-blue-900 text-sm font-bold transition-all duration-300 transform group-hover:scale-105"
                        onClick={() => setSelectedExpert(expert)}
                      >
                        View Profile →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Modal */}
        <Dialog
          open={!!selectedExpert}
          onClose={() => setSelectedExpert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
            aria-hidden="true"
            onClick={() => setSelectedExpert(null)}
          />
          {selectedExpert && (
            <div className="relative bg-[#EBEDFA] rounded-3xl shadow-2xl max-w-3xl w-full min-h-[450px] max-h-[90vh] overflow-y-auto transform transition-all duration-300 mx-2 md:mx-0 overflow-hidden flex items-center">
              <div className="flex flex-col md:flex-row w-full">
                <div className="md:w-2/5 w-full p-6 md:p-8 flex items-center justify-center">
                  <img
                    src={selectedExpert.image}
                    alt={selectedExpert.name}
                    className="w-full max-w-[260px] h-72 md:h-80 object-cover object-top rounded-2xl shadow-lg"
                  />
                </div>
                <div className="md:w-3/5 w-full p-8 md:p-12 md:pl-0 flex flex-col justify-center relative">
                  <button
                    onClick={() => setSelectedExpert(null)}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 text-gray-700 hover:text-black transition-all duration-200 text-xl font-bold z-10"
                  >
                    ×
                  </button>
                  <div className="mb-6 mt-4 md:mt-0">
                    <h3 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-3">
                      {selectedExpert.name}
                    </h3>
                    <div className="w-16 h-1.5 bg-black mb-4 rounded-full"></div>
                    <p className="text-xl text-black font-semibold">{selectedExpert.title}</p>
                  </div>
                  <div className="flex-1 mb-6">
                    <p className="text-gray-700 leading-relaxed text-[15px] font-normal">
                      {selectedExpert.description}
                    </p>
                  </div>
                
                </div>
              </div>
            </div>
          )}
        </Dialog>
      </div>

      <style jsx>{`
        :global(.slick-dots) {
          bottom: -40px !important;
        }
        :global(.slick-dots li button:before) {
          font-size: 12px;
          color: #cbd5e0;
          opacity: 0.5;
        }
        :global(.slick-dots li.slick-active button:before) {
          color: #2563eb;
          opacity: 1;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          width: 100%;
        }
        @media (max-width: 640px) {
          :global(.slick-slide > div) {
            margin: 0;
          }
          :global(.slick-list) {
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
}
