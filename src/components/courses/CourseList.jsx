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
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">Course Catalog</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Popular IT Courses</h2>
          <p className="text-lg text-slate-600">
            Choose from a wide range of specialized programs designed to launch your career in the tech industry.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              {/* Card Header (Icon & Title) */}
              <div className="p-8 pb-6 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${getGradientText(course.theme)} opacity-5 rounded-bl-[100px] z-0 transition-transform duration-500 group-hover:scale-110`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border ${getThemeColors(course.theme)}`}>
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2 line-clamp-2">
                    {course.name}
                  </h3>
                </div>
              </div>

              {/* Course Meta Data (Duration & Eligibility) */}
              <div className="px-8 flex flex-col sm:flex-row gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-slate-100 px-4 py-2 rounded-xl flex-1">
                  <FaClock className="text-slate-400" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-slate-100 px-4 py-2 rounded-xl flex-1">
                  <FaGraduationCap className="text-slate-400" />
                  <span className="truncate">{course.eligibility}</span>
                </div>
              </div>

              {/* Description */}
              <div className="px-8 mb-8 flex-grow">
                <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
                  {course.description}
                </p>
              </div>

              {/* Career Opportunities */}
              <div className="px-8 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <FaBriefcase className="text-slate-400" />
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Career Opportunities</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.opportunities.map((job, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${getThemeColors(course.theme)} bg-opacity-50`}
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Footer */}
              <div className="p-8 pt-0 mt-auto">
                <Link href="/admission" className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r ${getGradientText(course.theme)} hover:brightness-110`}>
                  Apply Now <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
