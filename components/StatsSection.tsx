"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 1357,
    label: "Trading System audited for Professionals",
  },
  {
    value: 153,
    label: "Trading System built on (1:1)",
  },
  {
    value: 3321,
    label: "Hours of (1:1) Training delivered",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(() => STATS.map(() => 0));

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1500;
    const start = performance.now();
    const targets = STATS.map((stat) => stat.value);

    let frameId: number;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const nextCounts = targets.map((target) =>
        Math.floor(target * progress)
      );
      setCounts(nextCounts);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="min-h-[70vh] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white flex items-center relative overflow-hidden"
    >
      {/* soft glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[rgba(168,110,56,0.12)] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[rgba(15,23,42,0.03)] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-amber-700/80 shadow-[0_10px_30px_rgba(148,91,40,0.15)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(168,110,56)]" />
            By the numbers
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Quantified trust from serious market participants
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            A tightly audited, performance-focused infrastructure that reflects real trading volume,
            bespoke 1:1 systems, and thousands of hours in live market training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {STATS.map((stat, index) => {
            const isFeatured = index === 1;

            return (
              <div
                key={stat.label}
                className={`group relative overflow-hidden rounded-3xl border bg-white px-7 py-8 sm:px-8 sm:py-10 shadow-[0_22px_70px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_90px_rgba(15,23,42,0.16)] hover:border-amber-200/90 ${
                  isFeatured
                    ? "sm:-mt-4 sm:scale-[1.02] border-amber-200/80"
                    : "border-slate-200/70"
                }`}
              >
                <div className="absolute inset-px rounded-[22px] bg-gradient-to-b from-white via-amber-50/40 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-500/80">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[10px] font-medium text-amber-100 shadow-[0_10px_25px_rgba(15,23,42,0.35)]">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-[rgba(168,110,56,0.25)] bg-amber-50/80 px-3 py-1 text-[10px] tracking-[0.24em] text-amber-700">
                      VERIFIED METRIC
                    </span>
                  </div>
                  <div className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(15,23,42)] via-[rgb(168,110,56)] to-[rgb(249,205,120)] drop-shadow-[0_0_25px_rgba(248,250,252,0.4)]">
                    {counts[index].toLocaleString()}+
                  </div>
                  <div className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xs">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

