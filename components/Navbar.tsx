"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-3xl relative">
        <div className="flex items-center justify-between h-14 px-4 md:px-6 rounded-full border border-white/30 bg-white/60 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-lg md:text-xl font-semibold tracking-tight"
              style={{ color: "rgb(168, 110, 56)" }}
            >
              Equiman.in
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-3 lg:space-x-5">
              <Link
                href="/"
                className="text-xs md:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:-translate-y-[1px] transition-all duration-150"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-xs md:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:-translate-y-[1px] transition-all duration-150"
              >
                About
              </Link>
              <Link
                href="/fellowship"
                className="text-xs md:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:-translate-y-[1px] transition-all duration-150"
              >
                Fellowship
              </Link>
              <Link
                href="#faq"
                className="text-xs md:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:-translate-y-[1px] transition-all duration-150"
              >
                FAQ
              </Link>
              <Link 
                href="#contact" 
                className="px-4 py-1.5 md:px-5 md:py-2 rounded-full text-white text-xs md:text-sm font-semibold shadow-[0_12px_30px_rgba(148,91,40,0.5)] hover:shadow-[0_18px_45px_rgba(148,91,40,0.65)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-150"
                style={{ backgroundColor: "rgb(168, 110, 56)" }}
              >
                Book a Call Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-800 focus:outline-none rounded-full p-1.5 bg-white/70 backdrop-blur-md border border-white/60 shadow-sm"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2">
          <div className="px-4 pt-3 pb-4 space-y-2 rounded-2xl backdrop-blur-xl bg-white/80 border border-white/30 shadow-[0_22px_55px_rgba(15,23,42,0.25)] mx-4">
            <Link
              href="/"
              className="block px-3 py-2 text-slate-800 hover:text-slate-900 hover:bg-white/70 rounded-lg transition-all text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-slate-800 hover:text-slate-900 hover:bg-white/70 rounded-lg transition-all text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/fellowship"
              className="block px-3 py-2 text-slate-800 hover:text-slate-900 hover:bg-white/70 rounded-lg transition-all text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Fellowship
            </Link>
            <Link
              href="#faq"
              className="block px-3 py-2 text-slate-800 hover:text-slate-900 hover:bg-white/70 rounded-lg transition-all text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-full text-white font-semibold shadow-[0_12px_30px_rgba(148,91,40,0.5)] hover:shadow-[0_18px_45px_rgba(148,91,40,0.65)] transition-all text-sm mt-3 text-center"
              style={{ backgroundImage: "linear-gradient(to right, rgb(168, 110, 56), #fbbf24)" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

