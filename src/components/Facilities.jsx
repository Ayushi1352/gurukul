import React from 'react';
import { FaWifi, FaDesktop, FaServer, FaCode } from 'react-icons/fa';

export default function Facilities() {
  const facilities = [
    {
      title: "Advanced Coding Labs",
      desc: "Immerse yourself in our high-performance labs equipped with the latest workstations, dual monitors, and industry-standard IDEs. We ensure every student has dedicated system access.",
      icon: <FaDesktop size={28} className="text-blue-600" />,
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      badge: "Tech Labs"
    },
    {
      title: "Hackathon Arenas",
      desc: "Dedicated collaborative spaces designed for 24-hour coding sprints. Work with peers, brainstorm architectures on glass boards, and build real-world tech solutions.",
      icon: <FaCode size={28} className="text-purple-600" />,
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      badge: "Innovation"
    },
    {
      title: "Cloud & Server Infrastructure",
      desc: "Gain hands-on experience with physical server racks and cloud deployment. Learn networking, cybersecurity, and server management in a real-world datacenter environment.",
      icon: <FaServer size={28} className="text-emerald-600" />,
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      badge: "Infrastructure"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Campus Infrastructure</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">World-Class IT Facilities</h2>
          <p className="text-xl text-slate-600">Experience a high-tech environment specifically designed to foster innovation, intense coding sessions, and digital growth.</p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {facilities.map((fac, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>

                {/* Image Side */}
                <div className="w-full md:w-1/2 relative group">
                  {/* Decorative background block */}
                  <div className={`absolute inset-0 rounded-[2rem] transform ${isEven ? '-rotate-3 translate-x-4 bg-blue-100' : 'rotate-3 -translate-x-4 bg-purple-100'} transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0`}></div>

                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-[350px] md:h-[450px]">
                    <img src={fac.img} alt={fac.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 lg:px-8">

                  <div className="block mb-2">
                    <span className="inline-block px-1 text-blue-600 text-xs font-bold tracking-widest uppercase">
                      {fac.badge}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{fac.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {fac.desc}
                  </p>
                  <ul className="space-y-3">
                    {['Industry-standard equipment', '24/7 high-speed internet', 'Air-conditioned environment'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
