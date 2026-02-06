export default function HeroSection() {
  return (
    <section 
      className="min-h-screen px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/bg_image.avif)',
      }}
    >
      {/* Dots overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/images/dots.png)',
        }}
      ></div>
      {/* Dark overlay to darken the image */}
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Gradient fade from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
          Build Second Income With
          <span className="block" style={{ color: "rgb(168, 110, 56)" }}>
          Backtested Trading Rules
          </span>
        </h1>
        <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
        We design institutional-grade trading systems for professionals, business owners, 
        and 7-figure capital built to generate a second income with under 4 hours a week
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: "rgb(168, 110, 56)" }}
          >
            Get in Touch
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg font-semibold border-2 transition hover:opacity-70"
            style={{ borderColor: "rgb(168, 110, 56)", color: "rgb(168, 110, 56)" }}
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
}

