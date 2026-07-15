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
            <Link href="/" className="block mb-6">
              <img src="https://res.cloudinary.com/duqjiaiwk/image/upload/v1783928883/gurukul_iti_logo_jtu9pg.png" alt="Gurukul Jyoti I.T.I Logo" className="h-20 w-auto bg-white/10 rounded-xl p-1 backdrop-blur-sm" />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Pioneering excellence in technical education. We blend traditional values with modern industrial training to create the leaders of tomorrow.
            </p>
           
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
              <li><Link href="/courses/master-in-android-phone-repairing" className="hover:text-purple-400 transition-colors">Master in Android Repairing</Link></li>
              <li><Link href="/courses/web-development" className="hover:text-purple-400 transition-colors">Web Development</Link></li>
              <li><Link href="/courses/digital-marketing" className="hover:text-purple-400 transition-colors">Digital Marketing</Link></li>
              <li><Link href="/courses/iti-copa-computer-operator-and-programming" className="hover:text-purple-400 transition-colors">ITI COPA</Link></li>
              <li><Link href="/courses/adfa-advance-diploma-in-financial-accounting" className="hover:text-purple-400 transition-colors">ADFA</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-purple-500 mt-1 shrink-0" />
                <span>1st Floor, C-2, in front of GDA Commercial Complex, Navyug Market, Naya Ganj, Ghaziabad, Uttar Pradesh 201001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-500 shrink-0" />
                <a href="tel:+917836004409" className="hover:text-purple-500 transition-colors">+91 7836004409</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-purple-500 shrink-0" />
                <a href="mailto:gurukulitifme@gmail.com" className="hover:text-purple-500 transition-colors">gurukulitifme@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Gurukul Jyoti I.T.I. All Rights Reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}
