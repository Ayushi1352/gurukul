import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function FeeInformation() {
  const plans = [
    {
      name: "Standard Courses",
      price: "₹25,000",
      period: "per semester",
      description: "For Digital Marketing, Hardware & Networking, and Basic IT.",
      features: [
        "Full access to computer labs",
        "Printed study materials",
        "Library membership",
        "100% Placement Assistance"
      ],
      theme: "blue"
    },
    {
      name: "Advanced IT Programs",
      price: "₹45,000",
      period: "per semester",
      description: "For Full Stack, Data Science, Cyber Security, and UI/UX.",
      features: [
        "Everything in Standard",
        "Cloud hosting & premium tools",
        "1-on-1 industry mentorship",
        "Guaranteed Internship placement"
      ],
      theme: "purple",
      popular: true
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Fee Structure</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Transparent & Affordable</h2>
          <p className="text-lg text-slate-600">
            We believe high-quality technical education should be accessible. We offer flexible payment plans and scholarship opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${plan.popular ? 'border-purple-500 shadow-xl shadow-purple-900/10' : 'border-slate-100 shadow-md'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 mb-6">{plan.description}</p>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className={`text-5xl font-black ${plan.popular ? 'text-purple-600' : 'text-blue-600'}`}>{plan.price}</span>
                </div>
                <span className="text-slate-400 font-medium">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <FaCheckCircle className={plan.popular ? 'text-purple-500' : 'text-blue-500'} />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-md ${plan.popular ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-purple-600/30' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-600/30'}`}>
                Inquire About Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <p className="text-slate-700 font-medium">
            <span className="font-bold text-purple-600">Need financial assistance?</span> We offer up to 50% merit-based scholarships. Ask our counselors during the admission process.
          </p>
        </div>

      </div>
    </section>
  );
}
