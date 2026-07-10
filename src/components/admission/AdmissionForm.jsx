"use client";
import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhoneAlt, FaGraduationCap } from 'react-icons/fa';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit
    alert("Application submitted successfully! Our counselors will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  return (
    <section id="admission-form" className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Form Left Side - Info */}
          <div className="lg:w-5/12 bg-gradient-to-br from-blue-600 to-purple-600 p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold mb-4">Start Your Application</h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Fill out the form below to register your interest. Our academic counselors will reach out to guide you through the next steps of the admission process.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl shrink-0 backdrop-blur-sm">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-medium">Call Us Now</p>
                    <p className="font-bold text-lg">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl shrink-0 backdrop-blur-sm">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-medium">Email Address</p>
                    <p className="font-bold text-lg">admission@gurukuliti.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right Side - Inputs */}
          <div className="lg:w-7/12 p-10 lg:p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-3.5 text-slate-400" />
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <div className="relative">
                    <FaPhoneAlt className="absolute left-4 top-3.5 text-slate-400" />
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-3.5 text-slate-400" />
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Interested Course</label>
                <div className="relative">
                  <FaGraduationCap className="absolute left-4 top-3.5 text-slate-400" />
                  <select 
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-slate-700 appearance-none"
                  >
                    <option value="" disabled>Select a Program...</option>
                    <option value="Web Development">Full Stack Web Development</option>
                    <option value="Data Science">Data Science & AI</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="UI/UX Design">UI/UX & Graphic Design</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Hardware Networking">Hardware & Networking</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Any Questions? (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Ask us anything..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-slate-900 hover:bg-purple-600 text-white text-lg font-bold rounded-xl transition-colors duration-300 flex items-center justify-center gap-3 group"
              >
                Submit Application <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
