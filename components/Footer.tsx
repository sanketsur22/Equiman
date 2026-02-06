import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "rgb(168, 110, 56)" }}>
              Equiman
            </h3>
            <p className="text-black text-sm">
              Expert trading courses to help you master the markets.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-black hover:opacity-70 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-black hover:opacity-70 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/fellowship" className="text-black hover:opacity-70 transition">
                  Fellowship
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-black hover:opacity-70 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-black">Contact</h4>
            <p className="text-black text-sm">
              Website: <a href="https://eqiman.in" className="hover:opacity-70" style={{ color: "rgb(168, 110, 56)" }}>eqiman.in</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-black">
          <p>&copy; {new Date().getFullYear()} Equiman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

