"use client";
import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactFormAndMap() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully! We will get back to you soon.");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact-form" className="py-24 bg-[#f6f6f8] font-sans relative">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-12 lg:gap-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Connect</span>
          <h2 className="text-[3.5rem] lg:text-[4rem] font-bold text-slate-900 mb-6 tracking-tight leading-[1.05]">
            Drop Us a Message
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Fill out the form below or visit our campus. We are always happy to help.
          </p>
        </div>

        {/* Form and Cards Split Area */}
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-12 lg:gap-16">

          {/* Left Content - Contact Cards (2x2 Grid) */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              
              {/* Card 1: Address */}
              <div className="bg-white/70 backdrop-blur-xl border-2 border-white hover:border-purple-500 rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(147,51,234,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-5 text-xl shadow-md group-hover:scale-110 group-hover:bg-purple-700 transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Institute Address</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">Sector 62, Tech Blvd<br />New Delhi - 110062</p>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-white/70 backdrop-blur-xl border-2 border-white hover:border-purple-500 rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(147,51,234,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-5 text-xl shadow-md group-hover:scale-110 group-hover:bg-purple-700 transition-all duration-300">
                  <FaPhoneAlt />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Phone Number</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">+91 98765 43210<br />+91 11 2345 6789</p>
              </div>

              {/* Card 3: Email */}
              <div className="bg-white/70 backdrop-blur-xl border-2 border-white hover:border-purple-500 rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(147,51,234,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-5 text-xl shadow-md group-hover:scale-110 group-hover:bg-purple-700 transition-all duration-300">
                  <FaEnvelope />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Email Address</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">admissions@gurukuliti.edu<br />info@gurukuliti.edu</p>
              </div>

              {/* Card 4: Hours */}
              <div className="bg-white/70 backdrop-blur-xl border-2 border-white hover:border-purple-500 rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(147,51,234,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-5 text-xl shadow-md group-hover:scale-110 group-hover:bg-purple-700 transition-all duration-300">
                  <FaClock />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Office Hours</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">Mon - Sat<br />09:00 AM - 05:00 PM</p>
              </div>

            </div>
          </div>

          {/* Right Content - Form Box */}
          <div className="flex-[1.2]">
            <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <form onSubmit={handleSubmit} className="space-y-6">

                <h3 className="text-2xl font-bold text-slate-900 mb-6 pl-2">Send an Enquiry</h3>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 pl-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 pl-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 pl-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 pl-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white"
                      placeholder="Admission Enquiry"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 pl-2">Your Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white resize-none"
                    placeholder="Write your query here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="p-1.5 rounded-[1.25rem] border border-slate-300 bg-transparent mt-8">
                  <button
                    type="submit"
                    className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg rounded-xl transition-colors duration-300 shadow-md flex items-center justify-center gap-3"
                  >
                    Send Message <FaPaperPlane />
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

        {/* Bottom Map Section */}
        <div className="mt-8">
          <div className="w-full h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative group">
            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112151.78912882196!2d77.10860533088198!3d28.552467540292323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%] contrast-125"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
