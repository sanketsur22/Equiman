 "use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const rotatingPhrases = [
    "Backtested Trading Rules",
    "Clarity, Confidence and Consistency",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="min-h-screen px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20 relative flex items-start md:items-center justify-center"
    >
      {/* Background image - only top half of hero */}
      <div
        className="absolute top-0 left-0 right-0 h-[60%] sm:h-[70%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/bg_image.avif)',
        }}
      ></div>
      {/* Dots overlay - only top half of hero */}
      <div 
        className="absolute top-0 left-0 right-0 h-[60%] sm:h-[70%] bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/images/dots.png)',
        }}
      ></div>
      {/* Dark overlay to darken the image (top half only) */}
      <div className="absolute top-0 left-0 right-0 h-[60%] sm:h-[70%] bg-black/20"></div>
      {/* Gradient fade from images into white at the end of hero images */}
      <div className="absolute top-0 left-0 right-0 h-[60%] sm:h-[70%] bg-gradient-to-b from-transparent via-transparent to-white"></div>
      <div className="max-w-5xl w-full mx-auto px-2 sm:px-0 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-sm mx-auto mb-6">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "rgb(168, 110, 56)" }}></span>
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-slate-600">
            Backtested trading systems
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-slate-900 leading-tight">
          <span className="block font-light text-slate-800/90 text-[1.18em] sm:text-[1.22em]">
            Build Second Income With
          </span>
          <span
            key={currentIndex}
            className="mt-1 block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(168,110,56)] via-amber-400 to-[rgb(168,110,56)] text-[1.18em] sm:text-[1.22em] md:text-[1.22em] leading-snug rotating-phrase"
          >
            {rotatingPhrases[currentIndex]}
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-800/90 leading-relaxed mb-8 max-w-3xl mx-auto">
          We design institutional-grade trading systems for professionals, business owners, and 7-figure capital,
          built to generate a second income with under 4 hours a week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm md:text-base text-white shadow-[0_18px_45px_rgba(148,91,40,0.6)] hover:shadow-[0_26px_65px_rgba(148,91,40,0.75)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-150"
            style={{ backgroundImage: "linear-gradient(to right, rgb(168, 110, 56), #fbbf24)" }}
          >
            Book a Call Now
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm md:text-base border border-[rgb(168,110,56)] text-[rgb(168,110,56)] bg-white/70 hover:bg-white transition-colors duration-150"
          >
            Know More
          </a>
        </div>
      </div>
      <style jsx>{`
        .rotating-phrase {
          animation: fadeInUp 0.5s ease-in-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

