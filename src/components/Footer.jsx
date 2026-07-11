import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About */}
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-white mb-6 block">
              Gurukul <span className="text-purple-500">ITI</span>
            </span>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Pioneering excellence in technical education. We blend traditional values with modern industrial training to create the leaders of tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link href="/courses" className="hover:text-purple-400 transition-colors">Courses</Link></li>
              <li><Link href="/admission" className="hover:text-purple-400 transition-colors">Admission</Link></li>
      
              <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Trades */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Top IT Courses</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/courses/full-stack-web-development" className="hover:text-purple-400 transition-colors">Full Stack Web Development</Link></li>
              <li><Link href="/courses/ui-ux-graphic-design" className="hover:text-purple-400 transition-colors">UI/UX & Graphic Design</Link></li>
              <li><Link href="/courses/digital-marketing-pro" className="hover:text-purple-400 transition-colors">Digital Marketing Pro</Link></li>
              <li><Link href="/courses/data-science-ai" className="hover:text-purple-400 transition-colors">Data Science & AI</Link></li>
              <li><Link href="/courses/cyber-security-ethical-hacking" className="hover:text-purple-400 transition-colors">Cyber Security & Ethical Hacking</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-purple-500 mt-1 shrink-0" />
                <span>Gurukul ITI Campus, Industrial Area, Main Highway, City, State 123456</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-500 shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-purple-500 shrink-0" />
                <span>info@gurukuliti.edu.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Gurukul ITI. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
