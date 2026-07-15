import React from 'react';
import { FaCalendarAlt, FaClock, FaBriefcase, FaSun, FaCloudSun, FaMoon } from 'react-icons/fa';

export default function BatchTimings() {
  const timings = [
    { shift: "Morning Shifts", times: "08:00 AM - 10:00 AM  |  10:00 AM - 12:00 PM", icon: <FaSun className="text-yellow-500 text-3xl" />, bg: "bg-orange-50 border-orange-100" },
    { shift: "Afternoon Shifts", times: "12:00 PM - 02:00 PM  |  03:00 PM - 05:00 PM", icon: <FaCloudSun className="text-orange-500 text-3xl" />, bg: "bg-blue-50 border-blue-100" },
    { shift: "Evening Shifts", times: "05:00 PM - 07:00 PM  |  07:00 PM - 09:00 PM", icon: <FaMoon className="text-indigo-500 text-3xl" />, bg: "bg-indigo-50 border-indigo-100" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Flexible Schedules</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Batch Timings</h2>
          <p className="text-lg text-slate-600 font-medium">
            We offer multiple shifts throughout the day so you can balance your education with your personal and professional life.
          </p>
        </div>

        {/* Timings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Morning Shifts */}
          <div className="rounded-[2rem] p-8 flex flex-col items-center text-center border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-orange-50 border-orange-200">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-orange-100">
              <FaSun className="text-orange-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Morning Shifts</h3>
            <div className="space-y-3 w-full flex flex-col">
              <div className="flex items-center justify-center gap-3 text-slate-800 font-bold bg-white px-5 py-3 rounded-xl border border-orange-100 shadow-sm">
                <FaClock className="text-orange-400" />
                <span className="tracking-wide">08:00 AM - 10:00 AM</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-800 font-bold bg-white px-5 py-3 rounded-xl border border-orange-100 shadow-sm">
                <FaClock className="text-orange-400" />
                <span className="tracking-wide">10:00 AM - 12:00 PM</span>
              </div>
            </div>
          </div>

          {/* Afternoon Shifts */}
          <div className="rounded-[2rem] p-8 flex flex-col items-center text-center border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-blue-50 border-blue-200">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-blue-100">
              <FaCloudSun className="text-blue-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Afternoon Shifts</h3>
            <div className="space-y-3 w-full flex flex-col">
              <div className="flex items-center justify-center gap-3 text-slate-800 font-bold bg-white px-5 py-3 rounded-xl border border-blue-100 shadow-sm">
                <FaClock className="text-blue-400" />
                <span className="tracking-wide">12:00 PM - 02:00 PM</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-800 font-bold bg-white px-5 py-3 rounded-xl border border-blue-100 shadow-sm">
                <FaClock className="text-blue-400" />
                <span className="tracking-wide">03:00 PM - 05:00 PM</span>
              </div>
            </div>
          </div>

          {/* Evening Shifts */}
          <div className="rounded-[2rem] p-8 flex flex-col items-center text-center border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-indigo-50 border-indigo-200">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-indigo-100">
              <FaMoon className="text-indigo-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Evening Shifts</h3>
            <div className="space-y-3 w-full flex flex-col">
              <div className="flex items-center justify-center gap-3 text-slate-800 font-bold bg-white px-5 py-3 rounded-xl border border-indigo-100 shadow-sm">
                <FaClock className="text-indigo-400" />
                <span className="tracking-wide">05:00 PM - 07:00 PM</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-800 font-bold bg-white px-5 py-3 rounded-xl border border-indigo-100 shadow-sm">
                <FaClock className="text-indigo-400" />
                <span className="tracking-wide">07:00 PM - 09:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Special Batch Banner */}
        <div className="bg-gradient-to-r from-[#0a192f] to-[#112240] rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500 opacity-10 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="relative z-10 text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full text-blue-300 font-semibold text-sm mb-6 border border-white/10 shadow-sm">
              <FaBriefcase /> Special Batch
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              रोजगार व व्यवसाय करने वाले<br className="hidden sm:block" /> सभी Students के लिए
            </h3>
            <p className="text-slate-400 font-medium text-lg">Specially designed for working professionals.</p>
          </div>

          <div className="relative z-10 shrink-0">
            <div className="bg-yellow-400 text-slate-900 px-8 py-5 rounded-2xl font-black text-xl sm:text-2xl tracking-widest shadow-[0_8px_30px_rgba(250,204,21,0.3)] border border-yellow-300 transform hover:scale-105 transition-transform">
              EVENING: 07:00 PM - 09:00 PM
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
