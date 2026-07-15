import React from 'react';
import { 
  FaCode, FaBullhorn, FaPaintBrush, 
  FaDatabase, FaShieldAlt, FaServer,
  FaClock, FaGraduationCap, FaBriefcase, FaArrowRight,
  FaMobileAlt, FaLaptop, FaCalculator, FaDesktop, FaFileInvoiceDollar, FaFileExcel, FaMicrophone, FaTools, FaMicrochip, FaHardHat
} from 'react-icons/fa';
import Link from 'next/link';

export default function CourseList() {
    const courses = [
    {
      id: 1,
      name: "Master in Android Phone Repairing",
      duration: "Flexible",
      eligibility: "10th Pass",
      description: "Learn advanced hardware and software troubleshooting for all major Android smartphones. Get practical, hands-on training.",
      opportunities: ["Mobile Technician", "Service Center Expert"],
      icon: <FaMobileAlt />,
      theme: "blue",
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023937/Master_in_Android_Phone_Repairing_jilqer.avif"
    },
    {
      id: 2,
      name: "Expert in Smartphone Repairing",
      duration: "Flexible",
      eligibility: "10th Pass",
      description: "Become an expert at diagnosing and fixing complex smartphone issues, including circuit tracing and component replacement.",
      opportunities: ["Smartphone Expert", "Business Owner"],
      icon: <FaMobileAlt />,
      theme: "purple",
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784024181/Expert_in_Smartphone_Repairing_2_pr2hoj.avif"
    },
    {
      id: 3,
      name: "Specialist in iPhone Repairing",
      duration: "Flexible",
      eligibility: "10th Pass",
      description: "Master Apple iPhone hardware and software repairing. Learn iOS troubleshooting, screen replacement, and micro-soldering.",
      opportunities: ["iPhone Specialist", "Premium Technician"],
      icon: <FaMobileAlt />,
      theme: "pink",
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023937/Expert_in_Smartphone_Repairing_o7hrpz.avif"
    },
    {
      id: 4,
      name: "Laptop Hardware & Software Engineer",
      duration: "Flexible",
      eligibility: "10th Pass / 12th Pass",
      description: "Comprehensive training to become a skilled Laptop Hardware & Software engineer. Cover all brands and operating systems.",
      opportunities: ["Laptop Engineer", "IT Support"],
      icon: <FaLaptop />,
      theme: "emerald",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "ADFA (Advance Diploma in Financial Accounting)",
      duration: "6 Months",
      eligibility: "12th Pass / Graduate",
      description: "Advanced diploma covering modern financial accounting practices, taxation, and business accounting software.",
      opportunities: ["Accountant", "Finance Executive"],
      icon: <FaCalculator />,
      theme: "rose",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Computer Basic",
      duration: "3 Months",
      eligibility: "Anyone",
      description: "Learn the fundamentals of computers, operating systems, internet usage, and basic office applications.",
      opportunities: ["Data Entry", "Office Assistant"],
      icon: <FaDesktop />,
      theme: "cyan",
      image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Tally.ERP 9",
      duration: "3 Months",
      eligibility: "10th / 12th Pass",
      description: "Master one of the most popular accounting software. Learn voucher entry, inventory management, and GST.",
      opportunities: ["Tally Operator", "Account Assistant"],
      icon: <FaFileInvoiceDollar />,
      theme: "blue",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Advance Excel",
      duration: "2 Months",
      eligibility: "10th Pass",
      description: "Dive deep into pivot tables, VLOOKUP, macros, and advanced data analysis techniques in Microsoft Excel.",
      opportunities: ["MIS Executive", "Data Analyst"],
      icon: <FaFileExcel />,
      theme: "emerald",
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023957/Advance_Excel_za4gut.avif"
    },
    {
      id: 9,
      name: "Web Development",
      duration: "4 Months",
      eligibility: "12th Pass",
      description: "Learn modern web development technologies to build responsive, dynamic web applications from scratch.",
      opportunities: ["Web Developer", "Frontend Engineer"],
      icon: <FaCode />,
      theme: "purple",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 10,
      name: "Graphic Designing",
      duration: "3 Months",
      eligibility: "10th Pass",
      description: "Transform ideas into stunning visual experiences using industry-standard tools like Photoshop and Illustrator.",
      opportunities: ["Graphic Designer", "Creative Artist"],
      icon: <FaPaintBrush />,
      theme: "pink",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 11,
      name: "C & C++",
      duration: "3 Months",
      eligibility: "12th Pass",
      description: "Build a strong programming foundation. Learn procedural and object-oriented programming with C and C++.",
      opportunities: ["Software Developer", "Programmer"],
      icon: <FaCode />,
      theme: "blue",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 12,
      name: "Digital Marketing",
      duration: "4 Months",
      eligibility: "12th Pass",
      description: "Learn SEO, Social Media Marketing, and ad campaigns to dominate the digital landscape and drive traffic.",
      opportunities: ["Digital Marketer", "SEO Expert"],
      icon: <FaBullhorn />,
      theme: "rose",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 13,
      name: "English Speaking & Personality Development",
      duration: "3 Months",
      eligibility: "Anyone",
      description: "Improve your communication skills, build confidence, and develop a strong professional personality.",
      opportunities: ["Customer Executive", "Corporate Professional"],
      icon: <FaMicrophone />,
      theme: "cyan",
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023114/English_Speaking_Personality_Development_ux11xx.avif"
    },
    {
      id: 14,
      name: "Laptop (Card Level) Engineering",
      duration: "3 Months",
      eligibility: "10th Pass",
      description: "Focus on card-level laptop repair. Learn to identify and replace faulty modules, RAM, hard drives, and screens.",
      opportunities: ["Hardware Technician", "IT Support"],
      icon: <FaTools />,
      theme: "purple",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 15,
      name: "Laptop (Chip Level) Engineering",
      duration: "6 Months",
      eligibility: "12th Pass / Card Level Knowledge",
      description: "Advanced chip-level training. Learn motherboard tracing, IC replacement, BGA reballing, and micro-soldering.",
      opportunities: ["Chip Level Expert", "Service Center Head"],
      icon: <FaMicrochip />,
      theme: "emerald",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 16,
      name: "ITI (NCVT)",
      duration: "2 Years",
      eligibility: "10th Pass",
      description: "Government-recognized traditional ITI program for specialized trades with comprehensive practical and theoretical learning.",
      opportunities: ["Government Jobs", "Technical Staff"],
      icon: <FaHardHat />,
      theme: "blue",
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023061/iti_NCVT_bkgzhq.jpg"
    },
    {
      id: 17,
      name: "ITI COPA (Computer Operator and Programming)",
      duration: "1 Year",
      eligibility: "10th Pass",
      description: "Learn computer hardware basics, software installation, data entry, basic programming, and office automation tools.",
      opportunities: ["Computer Operator", "Data Entry Operator"],
      icon: <FaDesktop />,
      theme: "pink",
      image: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023060/ITI_COPA_y82neh.avif"
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
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-blue-900 font-bold tracking-wider uppercase text-sm mb-4 block">GURUKUL JYOTI I.T.I TECHNICAL & PROFESSIONAL COURSES :</span>
          <h2 className="text-3xl sm:text-4xl md:text-[3rem] font-bold text-black mb-6 leading-[1.2] tracking-tight uppercase">
            MOBILE & LAPTOP HARDWARE / SOFTWARE REPAIRING COURSE
          </h2>
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
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
