import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { ROUTES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-black text-slate-400 pt-24 pb-10 overflow-hidden">

      {/* Cosmic Nebula Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
            #000000
          `,
        }}
      />

      {/* Footer Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">M</span>
              </div>

              <span className="text-xl font-semibold text-white tracking-wide">
                Medi Vision
              </span>
            </div>

            <p className="leading-relaxed text-slate-400 max-w-sm mb-6">
              Guiding futures with structured education and healthcare
              pathways, connecting students to leading institutions globally.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full border border-white/10
                             flex items-center justify-center
                             bg-white/5 backdrop-blur
                             hover:bg-teal-500 hover:text-white
                             hover:scale-110
                             transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {ROUTES.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="hover:text-white transition"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">
              Study Destinations
            </h3>

            <ul className="space-y-3">
              {["USA", "UK", "Canada", "Australia", "Germany", "India"].map(
                (country, i) => (
                  <li key={i}>
                    <Link
                      href="/study-abroad"
                      className="hover:text-white transition"
                    >
                      Study in {country}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">
              Contact
            </h3>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-400 mt-1 shrink-0" />
                <span>
                  Nawal Kishor Road, Behind CBI Office, Front of Padmakar
                  Bhawan, Hazratganj, Lucknow - 226001
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal-400 shrink-0" />
                <span>+91 8881966002</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal-400 shrink-0" />
                <span>medivisoncareerpvtltd@gmail.com</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">

          <p>© 2026 Medi Vision Career Pvt. Ltd. All Rights Reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}