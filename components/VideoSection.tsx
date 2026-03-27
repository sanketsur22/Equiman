"use client";

export default function VideoSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Our <span style={{ color: "rgb(168, 110, 56)" }}>Services</span>
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Discover what makes our trading courses unique and effective
          </p>
        </div>
        
        <div className="aspect-video max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/G2XyXRiyzUY?si=8Hs-n70LVhF5VH6B"
              title="Equiman Services Video"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        {/* YouTube embed */}
      </div>
    </section>
  );
}

