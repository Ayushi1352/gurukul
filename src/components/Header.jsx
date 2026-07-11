"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown, FiMoon } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Admission", href: "/admission" },
  { name: "Placement", href: "/placement" },
  { name: "Gallery", href: "/gallery" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobileDropdowns, setExpandedMobileDropdowns] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu completely on any route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Handle scroll animation state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (name) => {
    setExpandedMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      {/* 
        Header Container
        Manages the transition between floating transparent pill and full-width scrolled state
      */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <header
          className={`pointer-events-auto w-full flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isScrolled
              ? "max-w-[100vw] rounded-none bg-white/85 backdrop-blur-md py-3.5 px-6 lg:px-10 border-b border-gray-200 mt-0 shadow-sm"
              : "w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-7xl rounded-[2.5rem] bg-white/95 backdrop-blur-sm py-2.5 px-4 lg:px-6 border border-white/50 mt-4 sm:mt-6 shadow-lg"
            }
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 bg-[#3D69AB] rounded-xl flex items-center justify-center text-[#EBEDFA] font-black text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
              G
            </div>
            <span className="font-extrabold text-xl tracking-tight text-[#191313]">
              Gurukul <span className="text-[#3D69AB]">ITI</span>
            </span>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) =>
              item.children ? (
                <div className="relative group" key={item.name}>
                  <button
                    className={`flex items-center gap-1.5 text-[14px] font-medium transition-colors duration-300 ${pathname?.startsWith(`/${item.name.toLowerCase()}`)
                      ? "text-[#3D69AB]"
                      : "text-gray-600 hover:text-[#3D69AB]"
                      }`}
                  >
                    {item.name}
                    <FiChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xl min-w-[200px] overflow-hidden p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[14px] font-medium transition-colors duration-300 ${pathname === item.href
                    ? "text-[#3D69AB]"
                    : "text-gray-600 hover:text-[#3D69AB]"
                    }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link href="/contact" className="px-5 py-2.5 rounded-full border border-gray-300 text-[14px] font-medium text-gray-800 hover:border-[#3D69AB] hover:text-[#3D69AB] hover:bg-[#EBEDFA] transition-all">
              Contact Us
            </Link>

            <Link href="/admission" className="px-5 py-2.5 rounded-full bg-[#191313] text-[#EBEDFA] text-[14px] font-medium hover:bg-black transition-all shadow-md hover:shadow-lg">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <Link href="/admission" className="bg-[#191313] text-[#EBEDFA] px-4 py-2 rounded-full font-medium text-sm shadow-md">
              Apply
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 p-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/50 hover:bg-white/80 transition-colors shadow-sm"
            >
              {menuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[350px] bg-white shadow-2xl transform transition-transform duration-500 ease-out z-[60] flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white">
          <span className="font-extrabold text-xl tracking-tight text-[#191313]">
            Gurukul <span className="text-[#3D69AB]">ITI</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2.5 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1 bg-gray-50/50">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="flex flex-col">
                <button
                  onClick={() => toggleMobileDropdown(item.name)}
                  className="flex justify-between items-center text-[15px] font-medium text-gray-700 px-4 py-3 rounded-2xl hover:bg-white hover:shadow-sm transition-all w-full"
                >
                  {item.name}
                  <FiChevronDown
                    className={`transition-transform duration-300 ${expandedMobileDropdowns[item.name] ? "rotate-180 text-black" : ""
                      }`}
                  />
                </button>
                <div
                  className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${expandedMobileDropdowns[item.name] ? "max-h-64 mt-1" : "max-h-0"
                    }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-black hover:bg-white rounded-xl transition-colors"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center text-[15px] font-medium px-4 py-3 rounded-2xl transition-all ${pathname === item.href
                  ? "text-[#3D69AB] bg-[#EBEDFA] shadow-sm"
                  : "text-gray-700 hover:text-[#3D69AB] hover:bg-[#EBEDFA]/50 hover:shadow-sm"
                  }`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="p-6 border-t border-gray-100 bg-white space-y-3">
          <Link href="/admission" className="flex justify-center items-center w-full bg-[#191313] text-[#EBEDFA] px-4 py-3.5 rounded-full font-medium text-[15px] shadow-md hover:bg-black transition-colors duration-300">
            Apply For Admission
          </Link>
        </div>
      </div>

      {/* Background overlay when mobile menu is open */}
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-slate-900/60 z-[55] transition-all duration-500 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
