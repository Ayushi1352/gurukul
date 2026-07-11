import React from 'react';
import { 
  FaCode, FaBullhorn, FaPaintBrush, 
  FaDatabase, FaShieldAlt, FaServer,
  FaClock, FaGraduationCap, FaBriefcase, FaArrowRight
} from 'react-icons/fa';
import Link from 'next/link';

export default function CourseList() {
  const courses = [
    {
      id: 1,
      name: "Full Stack Web Development",
      duration: "12 Months",
      eligibility: "12th Pass / Graduate",
      description: "Master both front-end and back-end technologies. Build responsive, dynamic web applications from scratch using the MERN stack (MongoDB, Express, React, Node.js).",
      opportunities: ["Frontend Developer", "Backend Engineer", "Full Stack Developer"],
      icon: <FaCode />,
      theme: "blue"
    },
    {
      id: 2,
      name: "Digital Marketing Pro",
      duration: "6 Months",
      eligibility: "10th / 12th Pass",
      description: "Learn SEO, Social Media Marketing, Google Ads, and advanced content strategies to dominate the digital landscape and drive massive traffic.",
      opportunities: ["SEO Specialist", "Social Media Manager", "Digital Marketer"],
      icon: <FaBullhorn />,
      theme: "purple"
    },
    {
      id: 3,
      name: "UI/UX & Graphic Design",
      duration: "6 Months",
      eligibility: "10th / 12th Pass",
      description: "Transform ideas into stunning visual experiences. Master industry-standard tools like Figma, Adobe Illustrator, and Photoshop to create user-centric designs.",
      opportunities: ["UI/UX Designer", "Graphic Designer", "Creative Director"],
      icon: <FaPaintBrush />,
      theme: "pink"
    },
    {
      id: 4,
      name: "Data Science & AI",
      duration: "12 Months",
      eligibility: "Graduate (Math/Science)",
      description: "Dive deep into Python programming, Machine Learning algorithms, Data Visualization, and Artificial Intelligence to solve complex data problems.",
      opportunities: ["Data Analyst", "Machine Learning Engineer", "Data Scientist"],
      icon: <FaDatabase />,
      theme: "emerald"
    },
    {
      id: 5,
      name: "Cyber Security & Ethical Hacking",
      duration: "8 Months",
      eligibility: "12th Pass / Basic IT",
      description: "Protect systems and networks from digital attacks. Learn penetration testing, network security, threat analysis, and advanced cryptography.",
      opportunities: ["Security Analyst", "Ethical Hacker", "Network Security Engineer"],
      icon: <FaShieldAlt />,
      theme: "rose"
    },
    {
      id: 6,
      name: "Hardware & Networking",
      duration: "6 Months",
      eligibility: "10th Pass",
      description: "Get hands-on experience with computer hardware assembling, operating system installation, network configuration, and advanced troubleshooting.",
      opportunities: ["IT Support Specialist", "Network Administrator", "Hardware Technician"],
      icon: <FaServer />,
      theme: "cyan"
    }
  ];

  const getThemeColors = (theme) => {
    const themes = {
      blue: "from-blue-600 to-blue-800 text-blue-600 bg-blue-50 border-blue-100",
      purple: "from-purple-600 to-purple-800 text-purple-600 bg-purple-50 border-purple-100",
      pink: "from-pink-500 to-rose-500 text-pink-600 bg-pink-50 border-pink-100",
      emerald: "from-emerald-500 to-teal-600 text-emerald-600 bg-emerald-50 border-emerald-100",
      rose: "from-rose-500 to-red-600 text-rose-600 bg-rose-50 border-rose-100",
      cyan: "from-cyan-500 to-blue-500 text-cyan-600 bg-cyan-50 border-cyan-100"
    };
    return themes[theme] || themes.blue;
  };

  const getGradientText = (theme) => {
    const themes = {
      blue: "from-blue-600 to-blue-800",
      purple: "from-purple-600 to-purple-800",
      pink: "from-pink-500 to-rose-500",
      emerald: "from-emerald-500 to-teal-600",
      rose: "from-rose-500 to-red-600",
      cyan: "from-cyan-500 to-blue-500"
    };
    return themes[theme] || themes.blue;
  };

  return (
    <section className="py-24 bg-[#EBEDFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-900 font-bold tracking-wider uppercase text-sm mb-4 block">Course Catalog</span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-semibold text-black mb-6 leading-[1.1] tracking-tight">Our Popular IT Courses</h2>
          <p className="text-lg text-gray-700 font-normal">
            Choose from a wide range of specialized programs designed to launch your career in the tech industry.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-[1.5rem] p-3 sm:p-3.5 pb-4 sm:pb-5 border flex flex-col h-full overflow-hidden transition-all duration-300 bg-white text-slate-900 border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-[#3C64B1] hover:text-white hover:border-[#3C64B1]"
            >
              {/* Image Container */}
              <div className="w-full h-48 sm:h-52 rounded-[1rem] overflow-hidden mb-5 relative">
                <img
                  src={`https://picsum.photos/seed/${course.id * 10}/600/400`}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg text-xl ${getThemeColors(course.theme).split(' ')[1]}`}>
                  {course.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 leading-tight px-1">{course.name}</h3>

              <p className="text-sm mb-5 flex-grow text-slate-600 group-hover:text-blue-100 transition-colors line-clamp-2 px-1">{course.description}</p>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-3 mb-5 text-[13px] font-medium px-1">
                <div className="flex items-center gap-2 text-slate-500 group-hover:text-blue-100 transition-colors">
                  <FaClock className="text-slate-400 group-hover:text-white transition-colors" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 group-hover:text-blue-100 transition-colors truncate">
                  <FaGraduationCap className="text-slate-400 group-hover:text-white transition-colors" />
                  <span className="truncate">{course.eligibility}</span>
                </div>
              </div>

              {/* Opportunities */}
              <div className="mb-6 px-1">
                <div className="flex flex-wrap gap-2">
                  {course.opportunities.slice(0,2).map((job, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 group-hover:bg-blue-800/30 group-hover:border-blue-400 group-hover:text-white transition-colors"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-auto">
                <Link
                  href={`/courses/${course.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
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
