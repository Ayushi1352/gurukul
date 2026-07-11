"use client";
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHistory, FaHeadset, FaUserCheck, FaArrowRight } from 'react-icons/fa';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully! Our counselors will contact you shortly.");
    setFormData({ name: '', phone: '', email: '', course: '', message: '' });
  };

  return (
    <section id="admission-form" className="py-24 bg-white font-sans relative">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-12 lg:gap-16">

        {/* Top Split Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-between pt-4">
            <div>
              <h2 className="text-[3.5rem] lg:text-[4.5rem] font-bold text-slate-900 mb-6 tracking-tight leading-[1.05]">
                Start Your <br className="hidden lg:block" /> Application
              </h2>
              <p className="text-slate-600 text-lg mb-12 max-w-md leading-relaxed">
                Fill out the form below to register your interest. Our academic counselors will reach out to guide you through the next steps of the admission process.
              </p>

              {/* Feature List matching screenshot */}
              <div className="space-y-5 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-md">
                    <FaHistory className="text-sm" />
                  </div>
                  <span className="text-slate-800 font-semibold">24 hours reply time</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-md">
                    <FaHeadset className="text-sm" />
                  </div>
                  <span className="text-slate-800 font-semibold">Personal assistance</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-md">
                    <FaUserCheck className="text-sm" />
                  </div>
                  <span className="text-slate-800 font-semibold">Expert academic counselors</span>
                </div>
              </div>
            </div>


          </div>

          {/* Right Content - Form Box */}
          <div className="flex-[1.2]">
            <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 pl-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 pl-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 pl-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 pl-2">Interested Course</label>
                    <select
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white appearance-none"
                    >
                      <option value="" disabled>Select a Program...</option>
                      <option value="Web Development">Full Stack Web Development</option>
                      <option value="Data Science">Data Science & AI</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="UI/UX Design">UI/UX & Graphic Design</option>
                      <option value="Hardware Networking">Hardware & Networking</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 pl-2">Any Questions? (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white resize-none"
                    placeholder="Ask us anything..."
                  ></textarea>
                </div>

                {/* Submit Button with inner border effect matching screenshot */}
                <div className="p-1.5 rounded-[1.25rem] border border-slate-300 bg-transparent mt-8">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#191313] hover:bg-black text-white font-semibold text-lg rounded-xl transition-colors duration-300 shadow-md flex items-center justify-center"
                  >
                    Submit Application
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

        {/* Bottom Cards (Bento Style Contact Info) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">

          {/* Card 1: Email */}
          <div className="bg-[#EBEDFA] border border-transparent hover:border-blue-500/30 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-6 text-xl shadow-md group-hover:scale-110 group-hover:bg-blue-950 transition-all duration-300">
              <FaEnvelope />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Email Address</h4>
            <p className="text-slate-500 font-medium">admission@gurukuliti.com</p>
          </div>

          {/* Card 2: Call */}
          <div className="bg-[#EBEDFA] border border-transparent hover:border-blue-500/30 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-6 text-xl shadow-md group-hover:scale-110 group-hover:bg-blue-950 transition-all duration-300">
              <FaPhoneAlt />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Call Us Now</h4>
            <p className="text-slate-500 font-medium">+91 98765 43210</p>
          </div>

          {/* Card 3: Location */}
          <div className="bg-[#EBEDFA] border border-transparent hover:border-blue-500/30 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-6 text-xl shadow-md group-hover:scale-110 group-hover:bg-blue-950 transition-all duration-300">
              <FaMapMarkerAlt />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Our Campus</h4>
            <p className="text-slate-500 font-medium">Tech Park, Phase 1, India</p>
          </div>

        </div>

      </div>
    </section>
  );
}
