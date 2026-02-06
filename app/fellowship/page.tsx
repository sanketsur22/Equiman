import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FellowshipPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-black">
              Equimantum <span style={{ color: "rgb(168, 110, 56)" }}>Fellowship</span>
            </h1>
            <p className="text-xl text-black max-w-2xl mx-auto">
              An exclusive program designed for serious traders who want to take their
              skills to the next level and build a successful trading career.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-black">
                What is Equimantum Fellowship?
              </h2>
              <p className="text-black leading-relaxed mb-4">
                The Equimantum Fellowship is an advanced, comprehensive program that goes
                beyond traditional trading courses. It&apos;s designed for traders who are
                committed to achieving excellence in the markets and want personalized
                guidance from experienced professionals.
              </p>
              <p className="text-black leading-relaxed">
                This fellowship program combines intensive learning, practical application,
                and community support to help you develop into a confident and profitable
                trader.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-black">
                What You&apos;ll Get
              </h2>
              <ul className="space-y-3 text-black">
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: "rgb(168, 110, 56)" }}>✓</span>
                  <span>Advanced trading strategies and techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: "rgb(168, 110, 56)" }}>✓</span>
                  <span>One-on-one mentorship sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: "rgb(168, 110, 56)" }}>✓</span>
                  <span>Access to exclusive trading resources and tools</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: "rgb(168, 110, 56)" }}>✓</span>
                  <span>Live trading sessions and market analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: "rgb(168, 110, 56)" }}>✓</span>
                  <span>Private community of fellow traders</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: "rgb(168, 110, 56)" }}>✓</span>
                  <span>Continuous support and guidance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-black">
                Who Should Join?
              </h2>
              <p className="text-black leading-relaxed mb-4">
                The Equimantum Fellowship is ideal for:
              </p>
              <ul className="space-y-2 text-black list-disc list-inside">
                <li>Traders who have completed basic courses and want to advance</li>
                <li>Serious traders committed to long-term success</li>
                <li>Those seeking personalized mentorship and guidance</li>
                <li>Traders who want to be part of an exclusive community</li>
              </ul>
            </div>
            
            <div className="text-center mt-12">
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg font-semibold text-white transition hover:opacity-90 inline-block"
                style={{ backgroundColor: "rgb(168, 110, 56)" }}
              >
                Apply for Fellowship
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

