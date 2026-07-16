import React from 'react';
import Link from 'next/link';
import { FaClock, FaGraduationCap, FaCheckCircle, FaBriefcase, FaArrowRight, FaLaptopCode, FaMoneyBillWave } from 'react-icons/fa';

// Mock database of courses mapping exactly to our CourseList
const courseDetails = {
  "master-in-android-phone-repairing": {
    name: "Master in Android Phone Repairing",
    duration: "Flexible",
    eligibility: "10th Pass",
    description: "Learn advanced hardware and software troubleshooting for all major Android smartphones. Get practical, hands-on training to repair complex issues like dead phones, network issues, and software flashing.",
    opportunities: ["Mobile Technician", "Service Center Expert", "Business Owner"],
    modules: [
      { title: "Module 1: Basics of Electronics", topics: ["Multimeter & Basic Components", "SMD Components", "Soldering & Desoldering"] },
      { title: "Module 2: Hardware Repairing", topics: ["Disassembling & Assembling", "Screen & Touch Replacement", "Charging Port & Mic Repair"] },
      { title: "Module 3: Advanced Hardware", topics: ["Motherboard Tracing", "IC Replacement", "Water Damage Repair"] },
      { title: "Module 4: Software Repairing", topics: ["Flashing & Unlocking", "FRP Bypass", "Software Tools & Boxes"] }
    ],
    theme: "blue",
    heroImage: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023937/Master_in_Android_Phone_Repairing_jilqer.avif"
  },
  "expert-in-smartphone-repairing": {
    name: "Expert in Smartphone Repairing",
    duration: "Flexible",
    eligibility: "10th Pass",
    description: "Become an expert at diagnosing and fixing complex smartphone issues, including circuit tracing and component replacement.",
    opportunities: ["Smartphone Expert", "Business Owner", "Senior Technician"],
    modules: [
      { title: "Module 1: Smartphone Architecture", topics: ["Block Diagrams", "Schematic Reading", "Fault Finding"] },
      { title: "Module 2: Advanced IC Repair", topics: ["Power IC & CPU Reballing", "eMMC/UFS Programming", "Dead Boot Repair"] },
      { title: "Module 3: Software & Flashing", topics: ["Advanced Flashing", "Country Unlock", "Data Recovery"] },
      { title: "Module 4: Business Setup", topics: ["Shop Setup & Tools", "Customer Handling", "Spare Parts Sourcing"] }
    ],
    theme: "purple",
    heroImage: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784024181/Expert_in_Smartphone_Repairing_2_pr2hoj.avif"
  },
  "specialist-in-iphone-repairing": {
    name: "Specialist in iPhone Repairing",
    duration: "Flexible",
    eligibility: "10th Pass",
    description: "Master Apple iPhone hardware and software repairing. Learn iOS troubleshooting, screen replacement, and micro-soldering for all iPhone models.",
    opportunities: ["iPhone Specialist", "Premium Technician", "Apple Service Expert"],
    modules: [
      { title: "Module 1: iPhone Basics", topics: ["iOS Ecosystem", "Disassembling iPhones", "Battery & Screen Replacement"] },
      { title: "Module 2: Motherboard Repair", topics: ["Face ID Repair", "Audio IC Issue", "Baseband/Network Repair"] },
      { title: "Module 3: Micro-Soldering", topics: ["NAND Upgrade", "CPU Reballing", "Traces & Jumpers"] },
      { title: "Module 4: Software & Tools", topics: ["iTunes & 3uTools", "DFU Mode & Restore", "iCloud Basics"] }
    ],
    theme: "pink",
    heroImage: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023937/Expert_in_Smartphone_Repairing_o7hrpz.avif"
  },
  "laptop-hardware-software-engineer": {
    name: "Laptop Hardware & Software Engineer",
    duration: "Flexible",
    eligibility: "10th Pass / 12th Pass",
    description: "Comprehensive training to become a skilled Laptop Hardware & Software engineer. Cover all brands and operating systems.",
    opportunities: ["Laptop Engineer", "IT Support", "Hardware Specialist"],
    modules: [
      {
        title: "Module 1: Fundamentals of Electronics",
        topics: [
          "Basic Electrical Concepts: Understanding voltage, current, resistance, and different types of components like resistors, capacitors, inductors, and diodes.",
          "SMT Electronics Introduction: Familiarity with surface-mount technology (SMT) components, which are commonly used in laptops.",
          "Digital Electronics: Introduction to logic gates, digital circuits, and their applications in laptops."
        ]
      },
      {
        title: "Module 2: Laptop Hardware",
        topics: [
          "Laptop Components: Identifying and understanding the function of various parts like the motherboard, CPU, RAM, hard drive, SSD, display, keyboard, touchpad, power adapter, and battery.",
          "Motherboard Basics: Understanding the structure and function of the motherboard.",
          "Laptop Motherboard Power Sequence: Learning about the different power stages on the motherboard and how they work."
        ]
      },
      {
        title: "Module 3: Software Aspects",
        topics: [
          "Operating System (OS) Installation: Understanding how to install and configure different operating systems on laptops.",
          "Drivers: Learning how to install and configure drivers for various hardware components.",
          "Troubleshooting: Identifying and resolving software-related issues and system failures.",
          "Data Recovery: Understanding the basics of data recovery and how to restore data from damaged hard drives or SSDs."
        ]
      },
      {
        title: "Module 4: Repairing Techniques",
        topics: [
          "Laptop Disassembly and Reassembly: Learning how to disassemble and reassemble different types of laptops.",
          "Soldering Techniques: Practicing soldering and desoldering techniques, including BGA (ball grid array) and SMD (surface mount device) components.",
          "Chip-Level Repair: Learning how to repair and troubleshoot chip-level faults on the motherboard.",
          "Testing and Repairing Tools: Becoming familiar with different testing tools like a multimeter, oscilloscope and logic analyzer."
        ]
      },
      {
        title: "Module 5: Advanced Topic",
        topics: [
          "Circuit Tracing: Learning how to trace circuits on the motherboard using schematics and other resources.",
          "BIOS Programming: Understanding BIOS and how to program it.",
          "Adapter and Battery Repair: Learning how to troubleshoot and repair power adapters and batteries.",
          "Display Repair: Understanding how to diagnose and repair display issues, including LCD/LED panels and inverters.",
          "Keyboard and Touchpad Repair: Learning how to diagnose and repair keyboard and touchpad issues."
        ]
      },
      {
        title: "Practical Training",
        topics: [
          "Hands-on Practice: Gaining practical experience by working on real laptops and performing repairs under the guidance of experienced instructors.",
          "Case Studies: Analyzing and resolving common laptop repair scenarios.",
          "Troubleshooting and Fault Finding: Learning how to diagnose and troubleshoot various laptop issues."
        ]
      }
    ],
    theme: "emerald",
    heroImage: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop"
  },
  "adfa-advance-diploma-in-financial-accounting": {
    name: "ADFA (Advance Diploma in Financial Accounting)",
    duration: "6 Months",
    eligibility: "12th Pass / Graduate",
    description: "Advanced diploma covering modern financial accounting practices, taxation, and business accounting software.",
    opportunities: ["Accountant", "Finance Executive", "Tax Consultant"],
    modules: [
      { title: "Module 1: Manual Accounting", topics: ["Journal & Ledger", "Trial Balance", "Final Accounts"] },
      { title: "Module 2: Tally & ERP", topics: ["Company Creation", "Voucher Entry", "Inventory Management"] },
      { title: "Module 3: Taxation", topics: ["GST Concepts", "TDS & TCS", "Income Tax Basics"] },
      { title: "Module 4: Advanced Tools", topics: ["Advance Excel for Finance", "Payroll Management", "Audit Preparation"] }
    ],
    theme: "rose",
    heroImage: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784116726/adfaa_otdaet.jpg"
  },
  "computer-basic": {
    name: "Computer Basic",
    duration: "3 Months",
    eligibility: "Anyone",
    description: "Learn the fundamentals of computers, operating systems, internet usage, and basic office applications.",
    opportunities: ["Data Entry", "Office Assistant", "Receptionist"],
    modules: [
      { title: "Module 1: Intro to Computers", topics: ["Hardware & Software Basics", "Windows OS", "File Management"] },
      { title: "Module 2: MS Office", topics: ["MS Word", "MS Excel Basics", "MS PowerPoint"] },
      { title: "Module 3: Internet & Email", topics: ["Web Browsing", "Email Etiquette", "Online Security Basics"] },
      { title: "Module 4: Typing & Tools", topics: ["Touch Typing", "Google Workspace", "Basic Troubleshooting"] }
    ],
    theme: "cyan",
    heroImage: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop"
  },
  "tally-erp-9": {
    name: "Tally.ERP 9",
    duration: "3 Months",
    eligibility: "10th / 12th Pass",
    description: "Master one of the most popular accounting software. Learn voucher entry, inventory management, and GST.",
    opportunities: ["Tally Operator", "Account Assistant", "Billing Clerk"],
    modules: [
      { title: "Module 1: Tally Basics", topics: ["Company Setup", "Ledger Creation", "Accounting Vouchers"] },
      { title: "Module 2: Inventory", topics: ["Stock Groups & Items", "Purchase & Sales Orders", "Godown Management"] },
      { title: "Module 3: Taxation in Tally", topics: ["Enabling GST", "GST Invoicing", "E-Way Bills"] },
      { title: "Module 4: Reporting", topics: ["Balance Sheet", "P&L Statement", "Bank Reconciliation"] }
    ],
    theme: "blue",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
  },
  "advance-excel": {
    name: "Advance Excel",
    duration: "2 Months",
    eligibility: "10th Pass",
    description: "Dive deep into pivot tables, VLOOKUP, macros, and advanced data analysis techniques in Microsoft Excel.",
    opportunities: ["MIS Executive", "Data Analyst", "Operations Executive"],
    modules: [
      { title: "Module 1: Excel Essentials", topics: ["Formatting & Conditional Formatting", "Data Validation", "Sorting & Filtering"] },
      { title: "Module 2: Formulas & Functions", topics: ["VLOOKUP/HLOOKUP", "Logical & Text Functions", "Date & Math Functions"] },
      { title: "Module 3: Data Analysis", topics: ["Pivot Tables", "What-If Analysis", "Charts & Dashboards"] },
      { title: "Module 4: Automation", topics: ["Introduction to Macros", "VBA Basics", "Data Import/Export"] }
    ],
    theme: "emerald",
    heroImage: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023957/Advance_Excel_za4gut.avif"
  },
  "web-development": {
    name: "Web Development",
    duration: "4 Months",
    eligibility: "12th Pass",
    description: "Learn modern web development technologies to build responsive, dynamic web applications from scratch.",
    opportunities: ["Web Developer", "Frontend Engineer", "Freelancer"],
    modules: [
      { title: "Module 1: Frontend Basics", topics: ["HTML5", "CSS3 & Flexbox", "Bootstrap"] },
      { title: "Module 2: JavaScript", topics: ["Variables & Functions", "DOM Manipulation", "ES6 Features"] },
      { title: "Module 3: Advanced Frontend", topics: ["React.js Basics", "State Management", "API Integration"] },
      { title: "Module 4: Backend & DB Basics", topics: ["Node.js Intro", "Express Server", "MongoDB Basics"] }
    ],
    theme: "purple",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
  },
  "graphic-designing": {
    name: "Graphic Designing",
    duration: "3 Months",
    eligibility: "10th Pass",
    description: "Transform ideas into stunning visual experiences using industry-standard tools like Photoshop and Illustrator.",
    opportunities: ["Graphic Designer", "Creative Artist", "UI Designer"],
    modules: [
      { title: "Module 1: Design Theory", topics: ["Color Theory", "Typography", "Composition"] },
      { title: "Module 2: Adobe Photoshop", topics: ["Layers & Masks", "Photo Retouching", "Poster Design"] },
      { title: "Module 3: Adobe Illustrator", topics: ["Vector Graphics", "Logo Design", "Illustration Techniques"] },
      { title: "Module 4: Layout & UI", topics: ["InDesign Basics", "Figma Intro", "Portfolio Creation"] }
    ],
    theme: "pink",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop"
  },
  "c-c": {
    name: "C & C++",
    duration: "3 Months",
    eligibility: "12th Pass",
    description: "Build a strong programming foundation. Learn procedural and object-oriented programming with C and C++.",
    opportunities: ["Software Developer", "Programmer", "System Engineer"],
    modules: [
      { title: "Module 1: C Fundamentals", topics: ["Data Types & Operators", "Control Statements", "Functions & Arrays"] },
      { title: "Module 2: Advanced C", topics: ["Pointers", "Structures & Unions", "File Handling"] },
      { title: "Module 3: C++ OOP Concepts", topics: ["Classes & Objects", "Inheritance", "Polymorphism"] },
      { title: "Module 4: Advanced C++", topics: ["Templates", "Exception Handling", "STL Basics"] }
    ],
    theme: "blue",
    heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop"
  },
  "digital-marketing": {
    name: "Digital Marketing",
    duration: "4 Months",
    eligibility: "12th Pass",
    description: "Learn SEO, Social Media Marketing, and ad campaigns to dominate the digital landscape and drive traffic.",
    opportunities: ["Digital Marketer", "SEO Expert", "Social Media Manager"],
    modules: [
      { title: "Module 1: SEO", topics: ["On-page Optimization", "Off-page SEO", "Keyword Research"] },
      { title: "Module 2: Social Media", topics: ["Facebook & IG Ads", "Organic Growth", "Content Calendar"] },
      { title: "Module 3: Search Engine Marketing", topics: ["Google Ads", "PPC Campaigns", "Analytics"] },
      { title: "Module 4: Email & Content", topics: ["Email Campaigns", "Blogging Strategies", "Lead Generation"] }
    ],
    theme: "rose",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2070&auto=format&fit=crop"
  },
  "english-speaking-personality-development": {
    name: "English Speaking & Personality Development",
    duration: "3 Months",
    eligibility: "Anyone",
    description: "Improve your communication skills, build confidence, and develop a strong professional personality.",
    opportunities: ["Customer Executive", "Corporate Professional", "Sales Rep"],
    modules: [
      { title: "Module 1: Spoken English Basics", topics: ["Grammar Fundamentals", "Vocabulary Building", "Pronunciation"] },
      { title: "Module 2: Advanced Communication", topics: ["Public Speaking", "Group Discussions", "Debates"] },
      { title: "Module 3: Personality Grooming", topics: ["Body Language", "Dressing Sense", "Confidence Building"] },
      { title: "Module 4: Professional Skills", topics: ["Interview Preparation", "Resume Writing", "Email Etiquette"] }
    ],
    theme: "cyan",
    heroImage: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023114/English_Speaking_Personality_Development_ux11xx.avif"
  },
  "laptop-card-level-engineering": {
    name: "Laptop (Card Level) Engineering",
    duration: "3 Months",
    eligibility: "10th Pass",
    description: "Focus on card-level laptop repair. Learn to identify and replace faulty modules, RAM, hard drives, and screens.",
    opportunities: ["Hardware Technician", "IT Support", "Service Engineer"],
    modules: [
      { title: "Module 1: Laptop Assembly", topics: ["Disassembling Procedures", "Identifying Internal Parts", "Screen Replacement"] },
      { title: "Module 2: Upgrades", topics: ["RAM Upgrades", "HDD to SSD Migration", "Keyboard Replacement"] },
      { title: "Module 3: Basic Troubleshooting", topics: ["Battery & Charger Issues", "Wi-Fi Card Replacement", "Heating Issues"] },
      { title: "Module 4: Software Solutions", topics: ["OS Installation", "Driver Updates", "Data Backup"] }
    ],
    theme: "purple",
    heroImage: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2070&auto=format&fit=crop"
  },
  "laptop-chip-level-engineering": {
    name: "Advanced Mobile Chip Level Training (AMCLT)",
    duration: "3 Months",
    fees: "35,000",
    eligibility: "12th Pass / Card Level Knowledge",
    description: "Advanced chip-level training. Learn motherboard tracing, IC replacement, BGA reballing, and micro-soldering.",
    opportunities: ["Chip Level Expert", "Service Center Head", "Motherboard Repair Tech"],
    modules: [
      { 
        title: "Module 1: BASIC ELECTRONICS", 
        topics: [
          "Mobile Components Identification Knowledge",
          "Knowledge about P.C.B (Printed Circuit Board)",
          "Working of Components (How it Work)",
          "Checking of components & practical testing (by using of multimeters)"
        ] 
      },
      { 
        title: "Module 2: HARDWARE CLASS", 
        topics: [
          "Assembling & Dissembling of different types of mobile phone.",
          "I.C Rebolling & White Pasted I.C.",
          "Samsung Dual & IPhone Dual C.P.U",
          "IPhone Troubling Shooting.",
          "Solving Issue of Touch Glass By OCA Machine.",
          "Android & Window Phone Technology",
          "Soldering & Desoldering of all type of Component.",
          "Proper Use of Micro Iron (S.M.D Machine)",
          "Jumper Practice.",
          "Solving Problem of Network Issue /Charging/ Ringer/ Mice Issue."
        ] 
      },
      { 
        title: "Module 3: SOFTWARE CLASS", 
        topics: [
          "Smartphone Set Formatting.",
          "Application Installation.",
          "Hanging Problem.",
          "Hand On Logo.",
          "Unlocking of Different Types of Smartphone.",
          "Flashing - (Anroid Operating System)",
          "IPhone - (IOS) Formet Reset.",
          "EMMC Programming."
        ] 
      },
      { 
        title: "Module 4: TRACING CLASS", 
        topics: [
          "Physically Testing of Smartphone.",
          "Tracing & Reading of Circuit Diagram.",
          "Track Checking of Mobile Board (Practically Checking By Multimeters)",
          "Fault Find Out of All Different Types of Smart Phones.",
          "Fault Finding of I.C Problem.",
          "In Condition of Dead Phone Repairing."
        ] 
      }
    ],
    theme: "emerald",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  "iti-ncvt": {
    name: "ITI (NCVT)",
    duration: "2 Years",
    eligibility: "10th Pass",
    description: "Government-recognized traditional ITI program for specialized trades with comprehensive practical and theoretical learning.",
    opportunities: ["Government Jobs", "Technical Staff", "Industrial Worker"],
    modules: [
      { title: "Module 1: Trade Theory", topics: ["Safety & Hand Tools", "Measurement Instruments", "Basic Workshop Practice"] },
      { title: "Module 2: Trade Practical", topics: ["Machinery Operation", "Job Making", "Maintenance Practices"] },
      { title: "Module 3: Workshop Calculation & Science", topics: ["Mathematics", "Physics Basics", "Material Science"] },
      { title: "Module 4: Employability Skills", topics: ["IT Literacy", "Communication Skills", "Entrepreneurship"] }
    ],
    theme: "blue",
    heroImage: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023061/iti_NCVT_bkgzhq.jpg"
  },
  "iti-copa-computer-operator-and-programming": {
    name: "ITI COPA (Computer Operator and Programming)",
    duration: "1 Year",
    eligibility: "10th Pass",
    description: "Learn computer hardware basics, software installation, data entry, basic programming, and office automation tools.",
    opportunities: ["Computer Operator", "Data Entry Operator", "Lab Assistant"],
    modules: [
      {
        title: "Introduction to Computers and Windows Operating System",
        topics: [
          "History, Generations, Types, Advantages and Applications of Computers.",
          "Concepts of Hardware and Software. Basics of Computer Hardware.",
          "Introduction to Various Processors.",
          "Introduction to the Functions of an Operating Systems in Use.",
          "Main features of Windows O.S.",
          "Various Input/Output Devices in Use and their Features.",
          "Using Scanner, Printer and Webcam."
        ]
      },
      {
        title: "Computer Hardware Basics and Software Installation",
        topics: [
          "Introduction to the Booting Process, BIOS Setting and their Modification.",
          "Introduction to Various Types of Memories and their Features.",
          "Basic Hardware and Software Issues and their Solutions.",
          "Formatting and Loading of OS and Application Software and Antivirus."
        ]
      },
      {
        title: "Word Processing",
        topics: [
          "Introduction to the Various Applications of Office.",
          "Introduction to Word Features, Office Button, Toolbars.",
          "Creating, Saving Formatting and Printing Documents Using Word.",
          "Working with Inserting Objects, Macro, Mail Merge, Templates and other Tools in Word.",
          "Page Setup and Printing Documents Using word."
        ]
      },
      {
        title: "Spread Sheet Application",
        topics: [
          "Introduction to excel features and Data Types.",
          "Cell Referencing, Use of Functions in all Categories, Linking Sheets.",
          "Introduction to Various Functions in all Categories of Excel.",
          "Concepts of Sorting, Filtering and Validating Data.",
          "Analyzing Data Using Charts, Data Tables, Pivot Tables, Goal Seeking and scenarios.",
          "Introduction to Reporting."
        ]
      },
      {
        title: "Image Editing, Creating Presentation and Using Open Office",
        topics: [
          "Introduction to Open Office.",
          "Introduction to the Properties and Editing of Images.",
          "Introduction to PowerPoint and its Advantages.",
          "Creating Slide Shows.",
          "Fine Tuning the Presentation and Good Presentation Techniques.",
          "Introduction to Macros, Designer Objects Controls, their Properties and Behavior."
        ]
      },
      {
        title: "Internet Concepts",
        topics: [
          "Introduction to WWW, Concept of Internet, Web Browsers, Internet Servers and Search Engines.",
          "Concept of Domain Naming System and E-mail Communication.",
          "Introduction to video chatting Tools, VoIP and Social Networking Concept.",
          "Concept of Cloud Storage and Open Web Server.",
          "Introduction to Internet Security, Threats and Attacks, Malicious Software Types, Internet Security Products and their Advantages."
        ]
      }
    ],
    theme: "pink",
    heroImage: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784023060/ITI_COPA_y82neh.avif"
  },
  "java-script": {
    name: "Java Script",
    duration: "3 Months",
    eligibility: "12th Pass",
    description: "Master modern web development with a comprehensive curriculum covering algorithms, scripting fundamentals, and DOM manipulation.",
    opportunities: ["Web Developer", "Frontend Engineer"],
    modules: [
      { 
        title: "Module 1: Introduction & Basics", 
        topics: [
          "Algorithm and Flowcharts.",
          "Introduction to web Servers and their features.",
          "Introduction to Java Script and its Application for the Web.",
          "Introduction to Programming and Scripting Languages."
        ] 
      },
      { 
        title: "Module 2: Core Concepts", 
        topics: [
          "Java scripts Basics-Data types, Variables, Constants. Conversion between Data Types.",
          "The Arithmetic, Comparison, Logical and String Operators in Java Script. Operator Precedence.",
          "Arrays in Java Script- Concepts, Types and Usage.",
          "Program Control Statements and Loops in Java Script."
        ] 
      },
      { 
        title: "Module 3: Advanced Topics", 
        topics: [
          "Introduction to Functions in Java Script. Built in Java Script Functions Overview.",
          "The String Data Type in Java Script. Introduction to String Math and Data Functions.",
          "Concepts of Pop Up boxes in Java script.",
          "Introduction to the Document Object Model."
        ] 
      }
    ],
    theme: "blue",
    heroImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
  },
  "smart-accounting": {
    name: "Smart Accounting",
    duration: "3 Months",
    eligibility: "12th Pass",
    description: "Learn comprehensive accounting principles and digital tools. Master everything from voucher entries to advanced Tally features.",
    opportunities: ["Accountant", "Finance Executive"],
    modules: [
      { 
        title: "Module 1: Accounting Fundamentals", 
        topics: [
          "Basics of Accounting, Golden Rules of Accounting, Voucher Entry, Ledger Posting, Final Accounts Preparation.",
          "Cash Book, Ratio Analysis, Depreciation, Stock Management.",
          "Analysis of VAT, Cash Flow, Fund Flow Accounting."
        ] 
      },
      { 
        title: "Module 2: Tally Implementation", 
        topics: [
          "Introduction to Tally, Features and Advantages.",
          "Implementing Accounts in Tally.",
          "Double Entry System of Bookkeeping."
        ] 
      },
      { 
        title: "Module 3: Advanced Management & Analysis", 
        topics: [
          "Budgeting System, Scenario Management and Variance Analysis.",
          "Costing System, Concept of Ratios, Analysis of Financial Statements, Inventory Basics, POS Invoicing, TDS, TCS, FBT, VAT and Service Tax Processing in Tally.",
          "Tally Interface in Different Languages."
        ] 
      }
    ],
    theme: "orange",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2072&auto=format&fit=crop"
  },
  "e-commerce": {
    name: "E-Commerce",
    duration: "2 Months",
    eligibility: "12th Pass",
    description: "Dive into the world of digital business. Understand online catalogues, payment gateways, and e-commerce infrastructure.",
    opportunities: ["E-Commerce Manager", "Digital Marketer"],
    modules: [
      { 
        title: "Module 1: Fundamentals of E-Commerce", 
        topics: [
          "Definition of E-Commerce Types Scope and Benefits of E-commerce.",
          "Difference Between E-commerce and Traditional Commerce.",
          "Capabilities Requirements and Technology issues for E commerce.",
          "Types of E-commerce Websites. Building Business on the Net."
        ] 
      },
      { 
        title: "Module 2: Processing & Security", 
        topics: [
          "Concept of Online Catalogues, Shopping Carts, Checkout Pages.",
          "Payment and Order Processing.",
          "Authorization, Charge Back and Other Payment Methods.",
          "Security Issues and Payment Gateways."
        ] 
      }
    ],
    theme: "purple",
    heroImage: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784018605/e-commerce_wttmci.jpg"
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
          <img src={course.heroImage} alt={course.name} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40 "></div>
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
            {course.fees && (
              <div className="flex items-center gap-3 text-slate-200 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-green-400">
                  <FaMoneyBillWave />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Fees</p>
                  <p className="font-semibold text-sm">₹{course.fees}</p>
                </div>
              </div>
            )}
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
