import {
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const topLanguages = [
  "Java", "Python", "C", "C++", "Linux"
];

export default function Footer() {
  return (
    <footer className="text-gray-400 font-mono">
      <div className="border-t border-gray-800 mt-10 pt-6 max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 font-mono" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-200">
        {/* Left Section: Logo + tagline + top languages */}
        <div>
          <div className="flex items-center gap-20 mb-6">
            {/* Replace with your own logo if you want */}
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-3xl">
              <Image src="/logo.png" alt="DevTyper" width={35} height={24} />
              DevTyper
            </Link>
            <p className="text-white whitespace-nowrap">
              Code Faster Think Sharper.
            </p>
          </div>

          <h4 className="text-white font-bold mb-3">Top languages</h4>
          <div className="flex flex-wrap gap-2">
            {topLanguages.map((lang) => (
              <span
                key={lang}
                className="bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Column */}
        <div>
          <h5 className="text-white font-bold mb-4 tracking-widest">CONTACT</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="https://x.com/aaravshukla_10" aria-label="Twitter" className="hover:text-white">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/aarav-shukla10/" aria-label="LinkedIn" className="hover:text-white">Linkedin</a></li>
            <li><a href="https://github.com/aarav-shukla07" aria-label="GitHub" className="hover:text-white">Github</a></li>
            <li><a href="https://www.instagram.com/_aaravshukla_/" aria-label="Instagram" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-center text-center text-sm text-gray-500 font-mono">
        <div>
          © Developed and Designed by Aarav Shukla😎
        </div>
      </div>
    </footer>
  );
}
