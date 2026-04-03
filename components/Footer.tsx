import Link from "next/link";
import YoutubeIcon from "@/components/icons/Youtube";
import InstaIcon from "@/components/icons/Insta";

export default function Footer() {
  const brandColor = "rgb(168, 110, 56)";

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[rgba(168,110,56,0.14)] blur-3xl" />
        <div className="absolute right-[-96px] top-24 h-72 w-72 rounded-full bg-[rgba(15,23,42,0.06)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Top label (pill) */}
        <div className="max-w-2xl">
          <p
            className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/80 px-4 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-amber-700/80 shadow-[0_10px_30px_rgba(148,91,40,0.18)]"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: brandColor }} />
            Built for disciplined execution
          </p>
        </div>

        {/* Footer columns */}
        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:gap-16">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(168,110,56)] via-amber-400 to-[rgb(168,110,56)]">
                Equiman
              </span>
            </h4>
            <p className="mt-3 text-slate-700 text-sm leading-relaxed">
              Expert trading courses built for process, risk control, and repeatable execution.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.youtube.com/@sanuukr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Equiman on YouTube"
                className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-amber-200/70 bg-white/80 shadow-sm hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(168,110,56)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                style={{ color: brandColor }}
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/equiman.in?igsh=MTJ0cTUxeDc5NWZyNA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Equiman on Instagram"
                className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-amber-200/70 bg-white/80 shadow-sm hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(168,110,56)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                style={{ color: brandColor }}
              >
                <InstaIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 xl:gap-20 lg:shrink-0">
            <div className="min-w-[10rem]">
              <h5 className="text-sm font-semibold tracking-wide text-slate-900">Quick Links</h5>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/"
                    className="group text-slate-700 hover:text-slate-900 transition inline-flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(168,110,56)] opacity-0 group-hover:opacity-100 transition" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="group text-slate-700 hover:text-slate-900 transition inline-flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(168,110,56)] opacity-0 group-hover:opacity-100 transition" />
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fellowship"
                    className="group text-slate-700 hover:text-slate-900 transition inline-flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(168,110,56)] opacity-0 group-hover:opacity-100 transition" />
                    Fellowship
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="group text-slate-700 hover:text-slate-900 transition inline-flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(168,110,56)] opacity-0 group-hover:opacity-100 transition" />
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-[10rem]">
              <h5 className="text-sm font-semibold tracking-wide text-slate-900">Programs</h5>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link
                    href="#services"
                    className="group text-slate-700 hover:text-slate-900 transition inline-flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(168,110,56)] opacity-0 group-hover:opacity-100 transition" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#funnel"
                    className="group text-slate-700 hover:text-slate-900 transition inline-flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(168,110,56)] opacity-0 group-hover:opacity-100 transition" />
                    Equimantum System
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="group text-slate-700 hover:text-slate-900 transition inline-flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(168,110,56)] opacity-0 group-hover:opacity-100 transition" />
                    Owner&apos;s Approach
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-700">
          <p>&copy; {new Date().getFullYear()} Equiman. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#faq" className="hover:text-slate-900 transition">
              FAQ
            </Link>
            <Link href="#services" className="hover:text-slate-900 transition">
              Services
            </Link>
            <a
              href="https://eqiman.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition"
            >
              eqiman.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

