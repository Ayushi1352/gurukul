import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "Full Stack Web Dev Batch 2023",
      review: "The practical coding knowledge I gained helped me secure a software developer job at TCS right after graduation. The faculty is incredibly supportive and the live projects were a game-changer.",

    },
    {
      name: "Priya Singh",
      course: "Data Science Batch 2023",
      review: "Modern computer labs and excellent teaching staff. I learned not just coding, but how to be a professional data analyst in the IT industry. Highly recommended!",

    },
    {
      name: "Amit Kumar",
      course: "Digital Marketing Batch 2022",
      review: "Best IT institute in the region! The tech labs are well-equipped, and the placement cell works day and night to get us placed in top MNCs. The mentorship is top-notch.",

    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-4 block">Student Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">What Our Students Say</h2>
          <p className="text-xl text-slate-400">Don't just take our word for it. Discover how Gurukul Jyoti I.T.I has transformed careers and launched our students into the tech world.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-xl rounded-[2rem] p-10 border border-slate-700 hover:bg-slate-800 transition-all duration-500 hover:-translate-y-2 group relative shadow-2xl flex flex-col h-full">

              <div className="flex text-yellow-400 mb-6 text-lg gap-1">
                {[1, 2, 3, 4, 5].map(star => <FaStar key={star} />)}
              </div>

              <p className="text-slate-300 italic mb-8 leading-relaxed text-lg flex-1">"{t.review}"</p>

              <div className="mt-auto pt-6 border-t border-slate-700/50">
                <h4 className="text-xl font-bold text-white">{t.name}</h4>
                <p className="text-sm font-medium text-purple-400">{t.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
