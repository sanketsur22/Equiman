export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* soft backdrop accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[rgba(168,110,56,0.12)] blur-3xl" />
        <div className="absolute right-[-60px] bottom-[-40px] h-72 w-72 rounded-full bg-[rgba(15,23,42,0.06)] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/80 px-4 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-amber-700/80 shadow-[0_10px_30px_rgba(148,91,40,0.18)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(168,110,56)]" />
            About the Founder
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-semibold tracking-tight text-slate-900">
            The mind behind{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(168,110,56)] via-amber-400 to-[rgb(168,110,56)]">
              Equiman Systems
            </span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            A practitioner-first approach to trading systems, built from years in real
            markets and refined for professionals who value process, risk control, and
            repeatability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Portrait / visual card */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-tr from-[rgba(168,110,56,0.20)] via-[rgba(249,210,140,0.12)] to-[rgba(15,23,42,0.08)] opacity-80" />
              <div className="relative rounded-[30px] border border-amber-100/80 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)] overflow-hidden px-3 py-3 sm:px-4 sm:py-4">
                <div className="relative overflow-hidden rounded-[24px] h-72 sm:h-80 md:h-[21rem] bg-white">
                  <img
                    src="/images/founder.jpg"
                    alt="Founder of Equiman"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-full bg-white/85 border border-amber-100 px-4 py-2 flex items-center justify-between gap-3 text-xs sm:text-sm text-slate-900">
                    <span className="font-medium tracking-[0.18em] uppercase" style={{ color: "rgb(168, 110, 56)" }}>
                      Founder
                    </span>
                    <span className="text-[11px] sm:text-xs text-slate-600">
                      Direction, discipline, and courage to start.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 md:order-2">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-slate-900 tracking-tight">
              Meet the expert behind the framework
            </h3>
            <p className="text-slate-700 mb-4 leading-relaxed text-sm sm:text-base">
              With years inside the markets, the founder of Equiman has dedicated their
              work to building trading systems that behave like businesses—structured,
              audited, and designed to protect capital first while compounding over time.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed text-sm sm:text-base">
              The journey started with a frustration at discretionary, emotion-led
              decisions. What followed was an obsessive focus on research, building,
              and live-testing rule-based strategies that busy professionals can execute
              in under a few hours a week—without turning trading into a second job.
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-slate-900 text-sm sm:text-base">
                  Key pillars of the Equiman approach:
                </h4>
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
                  <li className="flex gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "rgb(168, 110, 56)" }}
                    />
                    <span>
                      Years of refined, rules-based trading experience across varying
                      market regimes.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "rgb(168, 110, 56)" }}
                    />
                    <span>
                      Hundreds of traders and professionals coached in translating systems
                      into real-world execution.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "rgb(168, 110, 56)" }}
                    />
                    <span>
                      Deep expertise across multiple trading styles, unified under a
                      consistent risk and position-sizing framework.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "rgb(168, 110, 56)" }}
                    />
                    <span>
                      A commitment to continuous iteration, data, and transparent metrics
                      over shortcuts and hype.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200/70 bg-white/80 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
                <p className="text-[11px] tracking-[0.24em] uppercase text-amber-700/80 mb-2">
                  For every trader starting out
                </p>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold" style={{ color: "rgb(168, 110, 56)" }}>
                    Remember:
                  </span>{" "}
                  You don&apos;t need a perfect background to build a great future.
                </p>
                <p className="mt-2 text-slate-700 text-sm sm:text-base leading-relaxed">
                  You just need direction, discipline, and the courage to start.
                </p>
                <p className="mt-1.5 text-slate-700 text-sm sm:text-base leading-relaxed">
                  Let&apos;s move forward, one step, one skill, one leap at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
