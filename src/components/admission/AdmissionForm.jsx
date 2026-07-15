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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'name') value = value.replace(/[^A-Za-z\s]/g, '');
    if (name === 'phone') value = value.replace(/\D/g, '');
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, course, message } = formData;
    
    // Construct WhatsApp message
    const whatsappMessage = `*New Admission Inquiry*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Course:* ${course}%0A*Message:* ${message}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/917836004409?text=${whatsappMessage}`, '_blank');
    
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
              <h2 className="text-4xl sm:text-[3.5rem] lg:text-[4.5rem] font-bold text-slate-900 mb-6 tracking-tight leading-[1.05]">
                Start Your Tech Career
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
                      pattern="[A-Za-z\s]+"
                      title="Please enter only alphabets"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white"
                      placeholder="Enter your name"
                    />
                  </div>
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
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white"
                      placeholder="Enter your mobile number"
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
                      pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                      title="Please enter a valid email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2 relative">
                    <label className="text-sm font-bold text-slate-900 pl-2">Interested Course</label>
                    <div 
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-transparent focus:border-white cursor-pointer flex justify-between items-center"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className={formData.course ? "text-slate-900" : "text-slate-400"}>
                        {formData.course ? formData.course : "Select a Program..."}
                      </span>
                      <svg className={`w-4 h-4 text-slate-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>

                    {isDropdownOpen && (
                      <div className="absolute top-[105%] left-0 right-0 bg-white border border-slate-100 rounded-2xl shadow-xl z-50 max-h-[240px] overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-slate-200">
                        {[
                          { label: "Master in Android Phone Repairing", value: "Android Phone Repairing" },
                          { label: "Expert in Smartphone Repairing", value: "Smartphone Repairing" },
                          { label: "Specialist in iPhone Repairing", value: "iPhone Repairing" },
                          { label: "Laptop Hardware & Software Engineer", value: "Laptop Hardware & Software" },
                          { label: "Laptop (Card Level) Engineering", value: "Laptop Card Level" },
                          { label: "Laptop (Chip Level) Engineering", value: "Laptop Chip Level" },
                          { label: "ADFA (Advance Diploma in Financial Accounting)", value: "ADFA" },
                          { label: "Computer Basic", value: "Computer Basic" },
                          { label: "Tally.ERP 9", value: "Tally.ERP 9" },
                          { label: "Advance Excel", value: "Advance Excel" },
                          { label: "Web Development", value: "Web Development" },
                          { label: "Graphic Designing", value: "Graphic Designing" },
                          { label: "C & C++", value: "C & C++" },
                          { label: "Digital Marketing", value: "Digital Marketing" },
                          { label: "English Speaking & Personality Development", value: "English Speaking" },
                          { label: "ITI (NCVT)", value: "ITI (NCVT)" },
                          { label: "ITI COPA (Computer Operator and Programming)", value: "ITI COPA" }
                        ].map((courseOption, idx) => (
                          <div
                            key={idx}
                            className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer text-slate-600 text-sm font-medium transition-colors"
                            onClick={() => {
                              setFormData({ ...formData, course: courseOption.label });
                              setIsDropdownOpen(false);
                            }}
                          >
                            {courseOption.label}
                          </div>
                        ))}
                      </div>
                    )}
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
                    placeholder="Enter your message"
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
            <a href="mailto:gurukulitifme@gmail.com" className="text-slate-500 font-medium hover:text-purple-500 transition-colors block">gurukulitifme@gmail.com</a>
          </div>

          {/* Card 2: Call */}
          <div className="bg-[#EBEDFA] border border-transparent hover:border-blue-500/30 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-6 text-xl shadow-md group-hover:scale-110 group-hover:bg-blue-950 transition-all duration-300">
              <FaPhoneAlt />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Call Us Now</h4>
            <a href="tel:+917836004409" className="text-slate-500 font-medium hover:text-purple-500 transition-colors block">+91 7836004409</a>
          </div>

          {/* Card 3: Location */}
          <div className="bg-[#EBEDFA] border border-transparent hover:border-blue-500/30 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-6 text-xl shadow-md group-hover:scale-110 group-hover:bg-blue-950 transition-all duration-300">
              <FaMapMarkerAlt />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Our Campus</h4>
            <p className="text-slate-500 font-medium">1st Floor, C-2, in front of GDA Commercial Complex, Navyug Market, Naya Ganj, Ghaziabad, UP 201001</p>
          </div>

        </div>

      </div>
    </section>
  );
}
