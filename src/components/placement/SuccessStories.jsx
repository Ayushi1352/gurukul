import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export default function SuccessStories() {
  const stories = [
    {
      name: "Rahul Sharma",
      course: "Web Development",
      company: "Microsoft",
      package: "18 LPA",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
      text: "The rigorous training completely transformed my technical abilities. The placement cell guided me at every step."
    },
    {
      name: "Priya Patel",
      course: "Data Science",
      company: "Amazon",
      package: "15 LPA",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      text: "Coming from a non-IT background, I never thought I could land a job at Amazon. The faculty made it possible."
    },
    {
      name: "Amit Kumar",
      course: "Cyber Security",
      company: "Cisco",
      package: "12 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      text: "Practical exposure to real-world threats in the labs gave me the exact skills companies like Cisco are looking for."
    },
    {
      name: "Neha Singh",
      course: "UI/UX Design",
      company: "Google",
      package: "22 LPA",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop",
      text: "The portfolio sessions were a game-changer. They don't just teach software, they teach you how to think like a professional."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">Hall of Fame</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Student Success Stories</h2>
          <p className="text-lg text-slate-600">
            Real stories from our alumni who transformed their dreams into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, idx) => (
            <div 
              key={idx} 
              className="relative rounded-3xl overflow-hidden h-[450px] group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <img 
                src={story.image} 
                alt={story.name}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content Box */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full">
                
                <div className="mb-4 text-purple-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <FaQuoteLeft className="text-3xl" />
                </div>
                
                <p className="text-slate-200 text-sm leading-relaxed mb-6 italic drop-shadow-md">
                  "{story.text}"
                </p>
                
                <div className="border-t border-slate-600/50 pt-4 flex flex-col gap-3">
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1 drop-shadow-md">{story.name}</h4>
                    <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider">{story.course}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-bold border border-white/20 shadow-sm">
                      {story.company}
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-bold border border-emerald-500/30 shadow-sm">
                      {story.package}
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
