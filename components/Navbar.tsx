"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-4xl relative">
        <div className="flex justify-between items-center h-12 px-6 rounded-full backdrop-blur-md bg-white/70 border border-white/20 shadow-lg">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold" style={{ color: "rgb(168, 110, 56)" }}>
              Equiman.in
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-black hover:opacity-70 transition text-sm">
                Home
              </Link>
              <Link href="#about" className="text-black hover:opacity-70 transition text-sm">
                About
              </Link>
              <Link href="/fellowship" className="text-black hover:opacity-70 transition text-sm">
                Fellowship
              </Link>
              <Link href="#faq" className="text-black hover:opacity-70 transition text-sm">
                FAQ
              </Link>
              <Link 
                href="#contact" 
                className="px-4 py-1.5 rounded-full text-white text-sm font-medium hover:opacity-90 transition"
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
              className="text-black focus:outline-none"
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
          <div className="px-4 pt-3 pb-4 space-y-2 rounded-2xl backdrop-blur-md bg-white/70 border border-white/20 shadow-lg mx-4">
            <Link
              href="/"
              className="block px-3 py-2 text-black hover:opacity-70 transition text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-black hover:opacity-70 transition text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/fellowship"
              className="block px-3 py-2 text-black hover:opacity-70 transition text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Fellowship
            </Link>
            <Link
              href="#faq"
              className="block px-3 py-2 text-black hover:opacity-70 transition text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-full text-white font-medium hover:opacity-90 transition text-sm mt-2 text-center"
              style={{ backgroundColor: "rgb(168, 110, 56)" }}
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

