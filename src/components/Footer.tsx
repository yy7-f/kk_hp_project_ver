import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2c3e50] text-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Footer Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <i className="fas fa-sun text-[#ffd23f] text-2xl"></i>
              <span className="text-xl font-bold">SunlitPath</span>
            </div>
            <p className="text-[#bdc3c7] leading-relaxed">
              Practical apps for learning, focus, wellbeing, and life direction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 list-none p-0">
              <li>
                <Link
                  href="/vision"
                  className="text-[#bdc3c7] hover:text-[#ffd23f] transition-colors duration-300 no-underline"
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#bdc3c7] hover:text-[#ffd23f] transition-colors duration-300 no-underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/apps"
                  className="text-[#bdc3c7] hover:text-[#ffd23f] transition-colors duration-300 no-underline"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#bdc3c7] hover:text-[#ffd23f] transition-colors duration-300 no-underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[#bdc3c7] hover:text-[#ffd23f] transition-colors duration-300 no-underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#bdc3c7] hover:text-[#ffd23f] transition-colors duration-300 no-underline"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 list-none p-0">
              <li>
                <a
                  href="mailto:hello@sunlitpath.com"
                  className="text-[#bdc3c7] hover:text-[#ffd23f] transition-colors duration-300 no-underline"
                >
                  hello@sunlitpath.com
                </a>
              </li>
              <li className="text-[#bdc3c7]">Tokyo, Japan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#34495e] pt-6 text-center">
          <p className="text-[#bdc3c7] text-sm">
            © {currentYear} SunlitPath
          </p>
        </div>
      </div>
    </footer>
  );
}
