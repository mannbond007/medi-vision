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
    <footer className="bg-[#0f172a] text-slate-400 pt-20 pb-10">

      <div className="max-w-[1400px] mx-auto px-8 md:px-16">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
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
                  className="w-12 h-12 rounded-full bg-slate-800 
                             flex items-center justify-center
                             hover:bg-accent hover:text-white 
                             transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-base mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {ROUTES.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="hover:text-teal-500 transition-colors"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-white font-medium text-base mb-6">
              Study Destinations
            </h3>
            <ul className="space-y-3">
              {["USA", "UK", "Canada", "Australia", "Germany", "India"].map(
                (country, i) => (
                  <li key={i}>
                    <Link
                      href="/study-abroad"
                      className="hover:text-teal-500 transition-colors"
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
            <h3 className="text-white font-medium text-base mb-6">
              Contact
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1 shrink-0" />
                <span>
                  Nawal Kishor Road, Behind CBI Office, Front of Padmakar Bhawan,Hazratganj,Lucknow-226001
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91 8881966002</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>medivisoncareerpvtltd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
          <p>© 2026 Medi Vision Career Pvt. Ltd. All Rights Reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}