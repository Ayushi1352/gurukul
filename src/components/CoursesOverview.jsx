import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaClock, FaUserGraduate } from 'react-icons/fa';

export default function CoursesOverview() {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      desc: "Master MERN stack and build scalable web applications and create stunning interfaces.",
      duration: "1 Year",
      eligibility: "12th Pass / Grad"
    },
    {
      id: 2,
      title: "UI/UX & Graphic Design",
      desc: "Learn Figma, Adobe Suite and create stunning interfaces and create stunning interfaces.",
      duration: "6 Months",
      eligibility: "10th Pass"
    },
    {
      id: 3,
      title: "Digital Marketing Pro",
      desc: "SEO, SEM, Social Media, and Analytics mastery and create stunning interfaces.",
      duration: "6 Months",
      eligibility: "12th Pass"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#EBEDFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-900 font-bold tracking-wider uppercase text-sm mb-4 block">Future-Ready Skills</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our Popular IT Courses</h2>
            <p className="text-gray-700 text-lg md:text-xl">Choose from our industry-demanded tech courses designed for immediate employment in top IT companies.</p>
          </div>
          <Link href="/courses" className="group shrink-0 inline-flex items-center gap-3 bg-[#191313] text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-all duration-300 shadow-lg">
            Explore All <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-[1.5rem] p-3 sm:p-3.5 pb-4 sm:pb-5 border flex flex-col h-full overflow-hidden transition-all duration-300 bg-white text-slate-900 border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-[#3C64B1] hover:text-white hover:border-[#3C64B1]"
            >

              {/* Image Container */}
              <div className="w-full h-48 sm:h-52 rounded-[1rem] overflow-hidden mb-5">
                <img
                  src={`https://picsum.photos/seed/${course.id * 10}/600/400`}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-bold mb-3 leading-tight">{course.title}</h3>

              <p className="text-sm mb-6 flex-grow text-slate-600 group-hover:text-blue-100 transition-colors line-clamp-2">{course.desc}</p>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-3 mb-6 text-[13px] font-medium">
                <div className="flex items-center gap-2 text-slate-500 group-hover:text-blue-100 transition-colors">
                  <FaClock className="text-slate-400 group-hover:text-white transition-colors" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 group-hover:text-blue-100 transition-colors">
                  <FaUserGraduate className="text-slate-400 group-hover:text-white transition-colors" />
                  <span>{course.eligibility}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-auto">
                <Link
                  href={`/courses/${course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                  className="flex-1 text-center py-2.5 rounded-full border font-semibold text-sm transition-colors border-slate-300 text-slate-700 hover:bg-slate-50 group-hover:border-white group-hover:text-white hover:!bg-white hover:!text-[#3C64B1]"
                >
                  Learn More
                </Link>
                <Link
                  href="/admission"
                  className="flex-1 text-center py-2.5 rounded-full font-semibold text-sm transition-colors bg-[#191313] text-white hover:bg-black group-hover:bg-white group-hover:text-[#3C64B1] hover:!bg-blue-50"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
