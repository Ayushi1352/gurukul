import React from 'react';
import Link from 'next/link';
import { FaClock, FaGraduationCap, FaCheckCircle, FaBriefcase, FaArrowRight, FaLaptopCode } from 'react-icons/fa';

// Mock database of courses mapping exactly to our CourseList
const courseDetails = {
  "full-stack-web-development": {
    name: "Full Stack Web Development",
    duration: "12 Months",
    eligibility: "12th Pass / Graduate",
    description: "Master both front-end and back-end technologies. Build responsive, dynamic web applications from scratch using the MERN stack (MongoDB, Express, React, Node.js). This intensive program is designed to take you from a beginner to a highly employable software engineer with a strong portfolio of real-world projects.",
    opportunities: ["Frontend Developer", "Backend Engineer", "Full Stack Developer", "UI Developer", "Tech Lead"],
    modules: [
      { title: "Module 1: Web Fundamentals", topics: ["HTML5 & CSS3 Deep Dive", "JavaScript ES6+ & Async Programming", "DOM Manipulation & Events", "Responsive UI Design with Tailwind CSS"] },
      { title: "Module 2: Frontend Mastery", topics: ["React.js Core Concepts & Hooks", "Advanced State Management (Redux/Zustand)", "Next.js & Server-Side Rendering", "API Integration & Data Fetching"] },
      { title: "Module 3: Backend Development", topics: ["Node.js Architecture", "Express.js Routing & Middleware", "RESTful API Design & GraphQL", "Authentication & JWT Authorization"] },
      { title: "Module 4: Database & DevOps", topics: ["MongoDB & Mongoose Modeling", "SQL Basics (PostgreSQL)", "Git, GitHub & CI/CD Basics", "Vercel & AWS Deployment"] }
    ],
    theme: "blue",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
  "digital-marketing-pro": {
    name: "Digital Marketing Pro",
    duration: "6 Months",
    eligibility: "10th / 12th Pass",
    description: "Learn SEO, Social Media Marketing, Google Ads, and advanced content strategies to dominate the digital landscape and drive massive traffic. Become an expert in driving growth, analyzing performance metrics, and creating compelling digital campaigns that convert.",
    opportunities: ["SEO Specialist", "Social Media Manager", "Digital Marketer", "Content Strategist", "Performance Marketer"],
    modules: [
      { title: "Module 1: Marketing Fundamentals", topics: ["Digital Marketing Landscape Overview", "Creating Buyer Personas", "Market Research & Competitor Analysis", "Brand Positioning"] },
      { title: "Module 2: SEO & Content Strategy", topics: ["On-page & Off-page SEO", "Technical SEO & Core Web Vitals", "Keyword Research Mastery", "Google Analytics 4 & Search Console"] },
      { title: "Module 3: Social Media Mastery", topics: ["Facebook & Instagram Ads Manager", "LinkedIn B2B Marketing", "Content Calendars & Scheduling", "Community Management"] },
      { title: "Module 4: Performance Marketing", topics: ["Google Ads (Search, Display, Video)", "Email Marketing & Automation", "Conversion Rate Optimization (CRO)", "ROI Tracking & Reporting"] }
    ],
    theme: "purple",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
  },
  "ui-ux-graphic-design": {
    name: "UI/UX & Graphic Design",
    duration: "6 Months",
    eligibility: "10th / 12th Pass",
    description: "Transform ideas into stunning visual experiences. Master industry-standard tools like Figma, Adobe Illustrator, and Photoshop to create user-centric designs. Learn the psychology of colors, typography, and human-computer interaction to build applications people love.",
    opportunities: ["UI/UX Designer", "Graphic Designer", "Creative Director", "Product Designer", "Web Designer"],
    modules: [
      { title: "Module 1: Design Fundamentals", topics: ["Color Theory & Typography", "Visual Hierarchy & Layouting", "Design Psychology", "Introduction to Adobe Suite"] },
      { title: "Module 2: Graphic Design Mastery", topics: ["Logo & Branding Design", "Vector Illustration (Illustrator)", "Photo Manipulation (Photoshop)", "Print & Digital Media Assets"] },
      { title: "Module 3: UI Design & Prototyping", topics: ["Figma Mastery", "Wireframing & Mockups", "Interactive Prototyping", "Design Systems & Components"] },
      { title: "Module 4: UX Research & Strategy", topics: ["User Journey Mapping", "Usability Testing & Feedback", "Information Architecture", "Portfolio Building"] }
    ],
    theme: "pink",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
  },
  "data-science-ai": {
    name: "Data Science & AI",
    duration: "12 Months",
    eligibility: "Graduate (Math/Science)",
    description: "Dive deep into Python programming, Machine Learning algorithms, Data Visualization, and Artificial Intelligence to solve complex data problems. Equip yourself with the analytical and engineering skills needed to thrive in the era of Big Data.",
    opportunities: ["Data Analyst", "Machine Learning Engineer", "Data Scientist", "AI Researcher", "Business Intelligence Analyst"],
    modules: [
      { title: "Module 1: Python & Statistics", topics: ["Advanced Python Programming", "Probability & Statistics", "Data Structures & Algorithms", "Numpy & Pandas for Data Manipulation"] },
      { title: "Module 2: Data Visualization", topics: ["Matplotlib & Seaborn", "Tableau & PowerBI Dashboards", "Exploratory Data Analysis (EDA)", "Data Storytelling"] },
      { title: "Module 3: Machine Learning", topics: ["Supervised & Unsupervised Learning", "Regression & Classification Models", "Decision Trees & Random Forests", "Model Evaluation & Tuning"] },
      { title: "Module 4: Deep Learning & AI", topics: ["Neural Networks Basics", "TensorFlow & PyTorch", "Natural Language Processing (NLP)", "Computer Vision Fundamentals"] }
    ],
    theme: "emerald",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  "cyber-security-ethical-hacking": {
    name: "Cyber Security & Ethical Hacking",
    duration: "8 Months",
    eligibility: "12th Pass / Basic IT",
    description: "Protect systems and networks from digital attacks. Learn penetration testing, network security, threat analysis, and advanced cryptography. Become the digital shield for organizations in an increasingly vulnerable cyber landscape.",
    opportunities: ["Security Analyst", "Ethical Hacker", "Network Security Engineer", "Penetration Tester", "Cyber Security Consultant"],
    modules: [
      { title: "Module 1: Networking Basics", topics: ["OSI & TCP/IP Models", "IP Subnetting & Routing", "Network Protocols (HTTP, DNS, FTP)", "Packet Analysis with Wireshark"] },
      { title: "Module 2: Security Fundamentals", topics: ["Cryptography Basics", "Linux Administration for Hackers", "Windows Security & Active Directory", "Threats, Vulnerabilities & Exploits"] },
      { title: "Module 3: Ethical Hacking", topics: ["Information Gathering & Reconnaissance", "Network Scanning & Enumeration", "System Hacking & Metasploit", "Web Application Penetration Testing"] },
      { title: "Module 4: Advanced Defense", topics: ["Firewalls, IDS & IPS", "Incident Response & Forensics", "Malware Analysis Basics", "Security Auditing & Compliance"] }
    ],
    theme: "rose",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
  },
  "hardware-networking": {
    name: "Hardware & Networking",
    duration: "6 Months",
    eligibility: "10th Pass",
    description: "Get hands-on experience with computer hardware assembling, operating system installation, network configuration, and advanced troubleshooting. Build the foundational infrastructure skills required by every IT department.",
    opportunities: ["IT Support Specialist", "Network Administrator", "Hardware Technician", "System Administrator", "Cloud Support Associate"],
    modules: [
      { title: "Module 1: Computer Hardware", topics: ["PC Architecture & Motherboards", "Processors, RAM & Storage Devices", "Assembling & Disassembling PCs", "Hardware Troubleshooting & BIOS"] },
      { title: "Module 2: Operating Systems", topics: ["Windows 10/11 Installation & config", "Linux Fundamentals (Ubuntu/CentOS)", "Driver Installation & Updates", "OS Troubleshooting & Recovery"] },
      { title: "Module 3: Networking Fundamentals", topics: ["Cabling & Network Topologies", "Switches, Routers & Modems", "IP Addressing & Subnetting", "Wireless Networking setup"] },
      { title: "Module 4: Server & Cloud Basics", topics: ["Windows Server Setup", "Active Directory & Group Policies", "Basic Cloud Computing (AWS/Azure)", "Network Security & Firewalls"] }
    ],
    theme: "cyan",
    heroImage: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2070&auto=format&fit=crop"
  }
};

export default async function CourseDetail({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const course = courseDetails[slug];

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#EBEDFA] font-sans">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Course Not Found</h1>
        <p className="text-slate-600 mb-8">The course you are looking for does not exist.</p>
        <Link href="/courses" className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors shadow-lg">
          Browse All Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#EBEDFA] min-h-screen font-sans pb-24">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img src={course.heroImage} alt={course.name} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start">
          <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-700/50 rounded-full p-1.5 pr-5 mb-8 backdrop-blur-md shadow-2xl">
            <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold tracking-wide px-3 py-1 rounded-full flex items-center gap-2">
              <FaLaptopCode /> IT Program
            </span>
            <span className="text-slate-200 text-xs sm:text-sm font-medium">
              Industry Ready Course
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold text-white mb-6 tracking-tight leading-[1.05] drop-shadow-2xl">
            {course.name}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal mb-10 max-w-3xl leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 mb-12">
            <div className="flex items-center gap-3 text-slate-200 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400">
                <FaClock />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Duration</p>
                <p className="font-semibold text-sm">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-200 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400">
                <FaGraduationCap />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Eligibility</p>
                <p className="font-semibold text-sm">{course.eligibility}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/admission" className="w-full sm:w-auto bg-white hover:bg-slate-200 text-slate-900 font-semibold px-8 py-3.5 rounded-full transition-colors text-sm sm:text-base whitespace-nowrap shadow-xl flex items-center justify-center gap-2">
              Apply For Admission <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left Column: Curriculum */}
          <div className="lg:col-span-2 space-y-12">

            <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-[1.75rem] font-extrabold text-[#0a192f] tracking-tight">Course Curriculum</h2>
              <div className="w-16 h-1.5 bg-blue-600 rounded-full mt-3 mb-4"></div>
              <p className="text-sm text-slate-500 font-medium mb-8">A structured learning path to take you from zero to job-ready.</p>

              <div className="space-y-6">
                {course.modules.map((module, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row border border-slate-200 rounded-[1.5rem] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">

                    {/* Left Dark Blue Panel */}
                    <div className="bg-[#0a1435] w-full md:w-[35%] p-6 flex flex-col justify-center relative overflow-hidden">
                      <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4">
                        0{idx + 1}
                      </div>
                      <p className="text-slate-400 text-xs font-semibold mb-1 uppercase tracking-wider">Module {idx + 1}</p>
                      <h3 className="text-white font-bold text-lg leading-tight mb-8 pr-4">
                        {module.title.split(': ')[1] || module.title}
                      </h3>
                    </div>

                    {/* Right White Panel */}
                    <div className="w-full md:w-[65%] p-6 sm:p-8 flex items-center">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 w-full">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1.5"></div>
                            <span className="text-[#0a192f] font-semibold text-[13px] leading-snug">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">

            {/* Opportunities Card */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-slate-100 sticky top-8">
              <div className="w-full h-48 rounded-[1.5rem] overflow-hidden mb-8 shadow-sm border border-slate-100 relative group">
                <img src={course.heroImage} alt={course.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg border-2 border-white">
                  <FaBriefcase />
                </div>
              </div>

              <h3 className="text-[1.35rem] font-extrabold text-[#0a192f] tracking-tight">Career Opportunities</h3>
              <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4"></div>

              <p className="text-slate-500 text-[13px] mb-8 leading-relaxed font-medium">
                Upon successfully completing this course, you will be prepared for the following roles in top IT companies:
              </p>

              <ul className="space-y-4">
                {course.opportunities.map((role, idx) => (
                  <li key={idx} className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <FaLaptopCode size={14} />
                    </div>
                    <span className="text-[#0a192f] text-[14px] font-bold">{role}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h4 className="font-extrabold text-[#0a192f] mb-2 text-[15px]">Need Help Choosing?</h4>
                <p className="text-slate-500 text-[13px] mb-6 font-medium">Talk to our expert counselors to find the right path for you.</p>
                <Link href="/contact" className="w-full bg-[#0a1435] hover:bg-blue-900 text-white font-semibold text-sm py-3.5 px-5 rounded-[14px] transition-colors shadow-md flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      💬
                    </div>
                    <span>Contact Counselor</span>
                  </div>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
