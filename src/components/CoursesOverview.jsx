import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaCode, FaPalette, FaBullhorn, FaServer } from 'react-icons/fa';

export default function CoursesOverview() {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Dev",
      desc: "Master MERN stack and build scalable web applications.",
      duration: "1 Year",
      eligibility: "12th Pass / Grad",
      icon: <FaCode size={32} />,
      gradient: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/30",
      bgLight: "bg-blue-50"
    },
    {
      id: 2,
      title: "UI/UX & Design",
      desc: "Learn Figma, Adobe Suite and create stunning interfaces.",
      duration: "6 Months",
      eligibility: "10th Pass",
      icon: <FaPalette size={32} />,
      gradient: "from-pink-500 to-rose-600",
      shadow: "shadow-pink-500/30",
      bgLight: "bg-pink-50"
    },
    {
      id: 3,
      title: "Digital Marketing",
      desc: "SEO, SEM, Social Media, and Analytics mastery.",
      duration: "6 Months",
      eligibility: "12th Pass",
      icon: <FaBullhorn size={32} />,
      gradient: "from-purple-500 to-fuchsia-600",
      shadow: "shadow-purple-500/30",
      bgLight: "bg-purple-50"
    },
    {
      id: 4,
      title: "Cloud & Network",
      desc: "AWS, Linux, and advanced networking infrastructure.",
      duration: "1 Year",
      eligibility: "10th Pass",
      icon: <FaServer size={32} />,
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/30",
      bgLight: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">Future-Ready Skills</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Popular IT Courses</h2>
            <p className="text-slate-600 text-lg md:text-xl">Choose from our industry-demanded tech courses designed for immediate employment in top IT companies.</p>
          </div>
          <Link href="/courses" className="group shrink-0 inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
            Explore All <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map(course => (
            <div key={course.id} className="group relative bg-white rounded-[2rem] border border-slate-100 p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col h-full overflow-hidden z-10">
              
              {/* Top Right Glowing Orb */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${course.gradient} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-0`}></div>

              <div className="relative z-10 flex flex-col flex-grow">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${course.gradient} shadow-lg ${course.shadow} mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {course.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{course.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow">{course.desc}</p>
                
                <div className="flex flex-col gap-3 mb-8">
                  <div className={`flex items-center gap-3 px-4 py-2 rounded-xl ${course.bgLight} text-slate-700 font-medium text-sm`}>
                    <span>⏱️</span> {course.duration}
                  </div>
                  <div className={`flex items-center gap-3 px-4 py-2 rounded-xl ${course.bgLight} text-slate-700 font-medium text-sm`}>
                    <span>🎓</span> {course.eligibility}
                  </div>
                </div>

                <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className={`mt-auto block w-full text-center py-4 rounded-xl font-bold text-white bg-slate-900 hover:bg-gradient-to-r hover:${course.gradient} transition-all duration-500 shadow-md`}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
