import React from 'react';
import { FaCode, FaCalculator, FaShoppingCart } from 'react-icons/fa';

export default function Facilities() {
  const facilities = [
    {
      title: "JAVA SCRIPT",
      desc: "Master modern web development with a comprehensive curriculum covering algorithms, scripting fundamentals, and DOM manipulation.",
      icon: <FaCode size={28} className="text-blue-600" />,
      img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
      badge: "Programming",
      theme: "blue",
      topics: [
        "Algorithm and Flowcharts.",
        "Introduction to web Servers and their features.",
        "Introduction to Java Script and its Application for the Web.",
        "Introduction to Programming and Scripting Languages.",
        "Java scripts Basics-Data types, Variables, Constants. Conversion between Data Types.",
        "The Arithmetic, Comparison, Logical and String Operators in Java Script. Operator Precedence.",
        "Arrays in Java Script- Concepts, Types and Usage.",
        "Program Control Statements and Loops in Java Script.",
        "Introduction to Functions in Java Script. Built in Java Script Functions Overview.",
        "The String Data Type in Java Script. Introduction to String Math and Data Functions.",
        "Concepts of Pop Up boxes in Java script.",
        "Introduction to the Document Object Model."
      ]
    },
    {
      title: "SMART ACCOUNTING",
      desc: "Learn comprehensive accounting principles and digital tools. Master everything from voucher entries to advanced Tally features.",
      icon: <FaCalculator size={28} className="text-orange-600" />,
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2072&auto=format&fit=crop",
      badge: "Finance",
      theme: "orange",
      topics: [
        "Basics of Accounting, Golden Rules of Accounting, Voucher Entry, Ledger Posting, Final Accounts Preparation.",
        "Cash Book, Ratio Analysis, Depreciation, Stock Management.",
        "Analysis of VAT, Cash Flow, Fund Flow Accounting.",
        "Introduction to Tally, Features and Advantages.",
        "Implementing Accounts in Tally.",
        "Double Entry System of Bookkeeping.",
        "Budgeting System, Scenario Management and Variance Analysis.",
        "Costing System, Concept of Ratios, Analysis of Financial Statements, Inventory Basics, POS Invoicing, TDS, TCS, FBT, VAT and Service Tax Processing in Tally.",
        "Tally Interface in Different Languages."
      ]
    },
    {
      title: "E-COMMERCE",
      desc: "Dive into the world of digital business. Understand online catalogues, payment gateways, and e-commerce infrastructure.",
      icon: <FaShoppingCart size={28} className="text-purple-600" />,
      img: "https://res.cloudinary.com/w4kwyx1p/image/upload/v1784018605/e-commerce_wttmci.jpg",
      badge: "Business",
      theme: "purple",
      topics: [
        "Definition of E-Commerce Types Scope and Benefits of E-commerce.",
        "Difference Between E-commerce and Traditional Commerce.",
        "Capabilities Requirements and Technology issues for E commerce.",
        "Types of E-commerce Websites. Building Business on the Net.",
        "Concept of Online Catalogues, Shopping Carts, Checkout Pages.",
        "Payment and Order Processing.",
        "Authorization, Charge Back and Other Payment Methods.",
        "Security Issues and Payment Gateways."
      ]
    }
  ];

  const getThemeColor = (theme, type) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' }
    };
    return colors[theme]?.[type] || colors.blue[type];
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Specialized Training</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Core Programs</h2>
          <p className="text-xl text-slate-600">Explore our expertly crafted curriculum designed to prepare you for the digital workforce.</p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {facilities.map((fac, idx) => {
            const isEven = idx % 2 === 0;
            const bgClass = getThemeColor(fac.theme, 'bg');
            const textClass = getThemeColor(fac.theme, 'text');
            
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>

                {/* Image Side */}
                <div className="w-full lg:w-5/12 relative group shrink-0">
                  <div className={`absolute inset-0 rounded-[2rem] transform ${isEven ? '-rotate-3 translate-x-4' : 'rotate-3 -translate-x-4'} ${bgClass} transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0`}></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-[400px] lg:h-[500px]">
                    <img src={fac.img} alt={fac.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-7/12 lg:px-4">
                  <div className="block mb-2">
                    <span className={`inline-block px-1 ${textClass} text-xs font-bold tracking-widest uppercase`}>
                      {fac.badge}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{fac.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    {fac.desc}
                  </p>
                  
                  {/* Grid for Topics to save vertical space */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {fac.topics.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 font-medium text-sm">
                        <span className={`w-5 h-5 rounded-full ${bgClass} ${textClass} flex items-center justify-center text-[10px] shrink-0 mt-0.5`}>✓</span>
                        <span className="leading-tight">{item}</span>
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
