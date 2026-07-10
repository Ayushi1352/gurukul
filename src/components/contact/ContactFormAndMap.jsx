"use client";
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

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
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Connect</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Drop Us a Message</h2>
          <p className="text-lg text-slate-600">
            Fill out the form below or visit our campus. We are always happy to help.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-50 p-8 sm:p-10 rounded-[2.5rem] shadow-lg border border-slate-100">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Send an Enquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm font-medium"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                    <input 
                      type="text" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm font-medium"
                      placeholder="Admission Enquiry"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                  <textarea 
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm font-medium resize-none"
                    placeholder="Write your query here..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg py-4 rounded-2xl transition-all shadow-lg shadow-purple-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  Send Message <FaPaperPlane />
                </button>

              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 lg:mt-0 mt-8">Locate Us</h3>
            <div className="w-full flex-grow min-h-[400px] lg:min-h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50 relative group">
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

      </div>
    </section>
  );
}
