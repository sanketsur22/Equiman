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
            {/* Placeholder for video - replace with actual video embed */}
            <div className="text-center p-8">
              <svg
                className="w-24 h-24 mx-auto mb-4"
                style={{ color: "rgb(168, 110, 56)" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <p className="text-white mb-4">Video about our services</p>
              <p className="text-gray-400 text-sm">
                Replace this placeholder with your video embed code
              </p>
            </div>
          </div>
        </div>
        
        {/* Example: If you have a YouTube/Vimeo video, use this format:
        <iframe
          className="w-full h-full"
          src="YOUR_VIDEO_EMBED_URL"
          title="Services Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        */}
      </div>
    </section>
  );
}

