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
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Sneha Patel",
      title: "UI/UX & Design Head",
      country: "india",
      description: "Sneha is a seasoned UI/UX designer with a passion for creating intuitive, accessible, and beautiful user interfaces. She leads our design curriculum, teaching students how to bridge the gap between human psychology and digital product design.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Rohan Gupta",
      title: "Cloud & Security Expert",
      country: "india",
      description: "An AWS certified solutions architect and cybersecurity enthusiast. Rohan mentors our infrastructure students, providing hands-on training in cloud deployment, server management, and network defense strategies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Pooja Desai",
      title: "Data Science Lead",
      country: "india",
      description: "Pooja is a former AI researcher who simplifies complex machine learning concepts. Her curriculum covers everything from Python fundamentals to advanced neural networks, ensuring students are ready for the AI-driven future.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    }
  ];

  const flags = {
    india: "https://res.cloudinary.com/dbjc1bef7/image/upload/v1762433524/flag_xm6gdt.png",
    nepal: "https://res.cloudinary.com/dbjc1bef7/image/upload/v1762433524/flag_1_ax223e.png",
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,  
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, centerMode: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerMode: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" },
      },
    ],
  };

  return (
    <section className="w-full py-24 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">Expert Mentors</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Learn from Industry Leaders</h2>
          <p className="text-lg text-slate-600">Our faculty consists of seasoned tech professionals who bring real-world experience directly into the classroom.</p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...sliderSettings}>
            {experts.map((expert, index) => (
              <div key={index} className="px-3 pb-8">
                <div
                  className="relative rounded-2xl overflow-hidden bg-white shadow-md border border-slate-100 h-full flex flex-col transition-all duration-500 hover:shadow-xl group"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  onTouchStart={() => setActiveCard(activeCard === index ? null : index)}
                >
                  <div
                    className="aspect-[4/5] overflow-hidden relative flex-1 cursor-pointer"
                    onClick={() => setSelectedExpert(expert)}
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
                        {expert.country && (
                          <img
                            src={flags[expert.country]}
                            alt="flag"
                            className="w-5 h-5 rounded shadow-sm ml-2"
                          />
                        )}
                      </div>

                      <p className="text-sm text-slate-200 line-clamp-3 mb-4">{expert.description}</p>

                      <div className="mt-2 flex gap-3">
                        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                          <FaLinkedin size={14} />
                        </span>
                        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-slate-900 transition-colors">
                          <FaGithub size={14} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div className="bg-white border-t border-slate-100 p-5 z-10 relative">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-slate-900 text-base">{expert.name}</h3>
                      <button
                        className="text-blue-600 cursor-pointer hover:text-purple-600 text-sm font-bold transition-all duration-300 transform group-hover:scale-105"
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
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 mx-2 md:mx-0 overflow-hidden">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 w-full bg-slate-100">
                  <img
                    src={selectedExpert.image}
                    alt={selectedExpert.name}
                    className="w-full h-[300px] md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 w-full p-8 md:p-12 flex flex-col relative">
                  <button
                    onClick={() => setSelectedExpert(null)}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-200 text-xl font-bold z-10"
                  >
                    ×
                  </button>
                  <div className="mb-6 mt-4 md:mt-0">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                      {selectedExpert.name}
                    </h3>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mb-4 rounded-full"></div>
                    <p className="text-xl text-blue-600 font-bold">{selectedExpert.title}</p>
                  </div>
                  <div className="flex-1 mb-6">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {selectedExpert.description}
                    </p>
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                      Connect on LinkedIn
                    </button>
                    <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl transition-colors">
                      View Portfolio
                    </button>
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
