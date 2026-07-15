import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactDetails() {
  const details = [
    {
      title: "Institute Address",
      info: "1st Floor, C-2, in front of GDA Commercial Complex, Navyug Market, Naya Ganj, Ghaziabad, Uttar Pradesh 201001",
      icon: <FaMapMarkerAlt />,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      title: "Phone Number",
      info: <a href="tel:+917836004409" className="hover:text-purple-500 transition-colors">+91 7836004409</a>,
      icon: <FaPhoneAlt />,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-100"
    },
    {
      title: "Email Address",
      info: <a href="mailto:gurukulitifme@gmail.com" className="hover:text-pink-500 transition-colors">gurukulitifme@gmail.com</a>,
      icon: <FaEnvelope />,
      color: "text-pink-500",
      bg: "bg-pink-50",
      border: "border-pink-100"
    },
    {
      title: "Office Hours",
      info: "Monday - Saturday\n09:00 AM - 05:00 PM",
      icon: <FaClock />,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative -mt-20 z-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {details.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-[2rem] p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${item.border} group`}
            >
              <div className={`w-20 h-20 rounded-2xl ${item.bg} flex items-center justify-center text-4xl mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                <span className={item.color}>{item.icon}</span>
              </div>
              
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{item.title}</h3>
              
              <p className="text-slate-600 text-lg font-medium leading-relaxed whitespace-pre-line">
                {item.info}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
