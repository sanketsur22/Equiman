export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">
            About the <span style={{ color: "rgb(168, 110, 56)" }}>Owner</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-96 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-gray-400">Owner Photo</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-black">
              Meet the Expert
            </h3>
            <p className="text-black mb-4 leading-relaxed">
              With years of experience in the trading industry, our founder has dedicated
              their career to helping others succeed in the markets. Through comprehensive
              courses and personalized guidance, they have helped countless traders achieve
              their financial goals.
            </p>
            <p className="text-black mb-4 leading-relaxed">
              The journey began with a passion for understanding market dynamics and a
              commitment to sharing knowledge. Today, Equiman stands as a trusted platform
              for traders seeking to enhance their skills and build sustainable trading
              strategies.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-black">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-2 text-black">
                <li>Years of successful trading experience</li>
                <li>Helped hundreds of students master trading</li>
                <li>Expert in multiple trading strategies</li>
                <li>Committed to continuous learning and improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

