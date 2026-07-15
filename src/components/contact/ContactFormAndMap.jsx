"use client";
import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactFormAndMap() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    
    // Construct WhatsApp message
    const whatsappMessage = `*New Contact Form Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/917836004409?text=${whatsappMessage}`, '_blank');
    
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact-form" className="py-24 bg-[#EBEDFA] font-sans relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-12 lg:gap-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <span className="text-blue-900 font-bold tracking-wider uppercase text-sm mb-4 block">Connect</span>
          <h2 className="text-4xl sm:text-[3.5rem] lg:text-[4rem] font-bold text-black mb-6 tracking-tight leading-[1.05]">
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
              <div className="bg-white border border-transparent hover:border-blue-500/30 rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-5 text-xl shadow-md group-hover:scale-110 transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Institute Address</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">1st Floor, C-2, in front of GDA Commercial Complex<br />Navyug Market, Naya Ganj, Ghaziabad, UP 201001</p>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-white border border-transparent hover:border-blue-500/30 rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-5 text-xl shadow-md group-hover:scale-110 transition-all duration-300">
                  <FaPhoneAlt />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Phone Number</h4>
                <a href="tel:+917836004409" className="text-slate-500 text-sm font-medium leading-relaxed hover:text-blue-900 transition-colors block">+91 7836004409</a>
              </div>

              {/* Card 3: Email */}
              <div className="bg-white border border-transparent hover:border-blue-500/30 rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-5 text-xl shadow-md group-hover:scale-110 transition-all duration-300">
                  <FaEnvelope />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Email Address</h4>
                <a href="mailto:gurukulitifme@gmail.com" className="text-slate-500 text-sm font-medium leading-relaxed hover:text-blue-900 transition-colors block">gurukulitifme@gmail.com</a>
              </div>

              {/* Card 4: Hours */}
              <div className="bg-white border border-transparent hover:border-blue-500/30 rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-5 text-xl shadow-md group-hover:scale-110 transition-all duration-300">
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

                <h3 className="text-2xl font-bold text-black tracking-tight mb-6 pl-2">Send an Enquiry</h3>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 pl-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      pattern="[A-Za-z\s]+"
                      title="Please enter only alphabets"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value.replace(/[^A-Za-z\s]/g, '') })}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all border border-slate-200 focus:border-blue-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 pl-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                      title="Please enter a valid email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all border border-slate-200 focus:border-blue-500"
                      placeholder="Enter your email"
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
                      maxLength={10}
                      pattern="\d{10}"
                      title="Please enter exactly 10 digits"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all border border-slate-200 focus:border-blue-500"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 pl-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all border border-slate-200 focus:border-blue-500"
                      placeholder="Enter your subject"
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
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="5"
                    className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all border border-slate-200 focus:border-blue-500 resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="p-1.5 rounded-[1.25rem] border border-slate-300 bg-transparent mt-8">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#191313] hover:bg-black text-white font-semibold text-lg rounded-xl transition-colors duration-300 shadow-md flex items-center justify-center gap-3"
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
              src="https://www.google.com/maps?q=Navyug+Market,+Naya+Ganj,+Ghaziabad,+Uttar+Pradesh+201001&output=embed"
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
