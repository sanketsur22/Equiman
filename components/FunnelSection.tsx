export default function FunnelSection() {
  return (
    <section
      id="funnel"
      className="relative w-full min-h-[110vh] overflow-hidden flex flex-col items-center"
      style={{ backgroundColor: "rgb(11,13,17)" }}
    >
      <div className="w-full z-10 text-center px-4 pt-24 sm:pt-28">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-slate-100">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(168,110,56)] via-amber-400 to-[rgb(168,110,56)]">
            Equimantum System
          </span>
        </h2>
        <div className="mx-auto mt-4 h-px w-[min(22rem,72vw)] bg-gradient-to-r from-transparent via-[rgba(168,110,56,0.65)] to-transparent" />
      </div>

      <div className="w-full flex-1 flex items-start justify-center pt-6 sm:pt-8 pb-12 sm:pb-16">
        <img
          src="/images/funnel.png"
          alt="Funnel diagram"
          className="block w-full max-w-[90vw] max-h-[70vh] object-contain object-center"
        />
      </div>
    </section>
  );
}

