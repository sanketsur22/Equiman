import Image from "next/image";

export default function FunnelSection() {
  return (
    <section
      id="funnel"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "rgb(11,13,17)" }}
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-90"
      >
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,110,56,0.22),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)] blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(148,163,184,0.18)] to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl md:text-5xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(168,110,56)] via-amber-400 to-[rgb(168,110,56)]">
                Equimantum System
              </span>
            </h2>

            <p className="mt-4 max-w-prose text-base leading-relaxed text-slate-300 sm:text-lg">
              A clear, step-by-step funnel that moves audiences from awareness to
              action—designed to be measured, optimized, and scaled.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Awareness", desc: "Top-of-funnel reach & positioning" },
                { title: "Consideration", desc: "Trust-building & education" },
                { title: "Conversion", desc: "Offers, objections & close" },
                { title: "Retention", desc: "Follow-up loops & referrals" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <div className="text-sm font-semibold text-slate-100">
                    {item.title}
                  </div>
                  <div className="mt-0.5 text-sm text-slate-300">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-3 sm:p-4">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black/20">
                <Image
                  src="/images/funnel.png"
                  alt="Equimantum funnel diagram"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                  className="object-contain object-center p-2 sm:p-3"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 px-1">
                <div className="text-xs text-slate-400">
                  Tip: On mobile, pinch-to-zoom works best.
                </div>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(168,110,56,0.55)] to-transparent sm:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

