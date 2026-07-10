import React from 'react';
import { FaCheckCircle, FaIdCard, FaFileAlt, FaImages, FaGraduationCap, FaUserTie } from 'react-icons/fa';

export default function EligibilityAndDocs() {
  const criteria = [
    {
      title: "10th Pass Students",
      desc: "Eligible for fundamental programs like Digital Marketing, Hardware & Networking, and Basic IT Literacy.",
      icon: <FaGraduationCap className="text-blue-600" />
    },
    {
      title: "12th Pass Students",
      desc: "Eligible for advanced programs including Full Stack Web Development, UI/UX Design, and Cyber Security.",
      icon: <FaGraduationCap className="text-purple-600" />
    },
    {
      title: "Graduates / Professionals",
      desc: "Ideal candidates for Data Science, AI, and Advanced Leadership tracks. Any stream graduate can apply.",
      icon: <FaUserTie className="text-emerald-600" />
    }
  ];

  const documents = [
    { name: "10th/12th Marksheet & Certificate", icon: <FaFileAlt /> },
    { name: "Graduation Degree (If applicable)", icon: <FaGraduationCap /> },
    { name: "Aadhar Card or Govt. ID Proof", icon: <FaIdCard /> },
    { name: "4 Recent Passport Size Photographs", icon: <FaImages /> },
    { name: "Migration / Transfer Certificate", icon: <FaFileAlt /> }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Eligibility Criteria */}
          <div>
            <div className="mb-10">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Who Can Apply</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Eligibility Criteria</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We believe in providing equal opportunities. Our programs are designed to accommodate students from various educational backgrounds.
              </p>
            </div>
            
            <div className="space-y-6">
              {criteria.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div>
            <div className="mb-10 lg:pl-10">
              <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-3 block">Be Prepared</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Required Documents</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Please ensure you have both original and photocopies of the following documents ready at the time of your final enrollment.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 sm:p-10 rounded-[2rem] border border-purple-100 shadow-sm lg:ml-10">
              <ul className="space-y-6">
                {documents.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                      {doc.icon}
                    </div>
                    <span className="text-slate-700 font-bold text-base sm:text-lg">{doc.name}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 bg-blue-100/50 p-5 rounded-xl border border-blue-200 flex gap-4">
                <FaCheckCircle className="text-blue-600 text-2xl shrink-0 mt-1" />
                <p className="text-sm text-blue-800 font-medium leading-relaxed">
                  Note: All documents will be verified during the counseling session. Do not submit original marksheets; only show them for verification.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
