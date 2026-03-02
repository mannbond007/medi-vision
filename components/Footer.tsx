import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { ROUTES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">M</span>
              </div>
              <span className="text-2xl font-bold text-white">Medi Vision</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Guiding Futures. Building Careers. Your trusted partner for global education, helping students secure admissions in top universities in India and Abroad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {ROUTES.map((route) => (
                <li key={route.path}>
                  <Link href={route.path} className="hover:text-accent transition-colors">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Study Destinations</h3>
            <ul className="space-y-3">
              <li><Link href="/study-abroad" className="hover:text-accent transition-colors">Study in USA</Link></li>
              <li><Link href="/study-abroad" className="hover:text-accent transition-colors">Study in UK</Link></li>
              <li><Link href="/study-abroad" className="hover:text-accent transition-colors">Study in Canada</Link></li>
              <li><Link href="/study-abroad" className="hover:text-accent transition-colors">Study in Australia</Link></li>
              <li><Link href="/study-abroad" className="hover:text-accent transition-colors">Study in Germany</Link></li>
              <li><Link href="/study-india" className="hover:text-accent transition-colors">Study in India</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <span>123 Education Hub, Sector 62, Noida, Uttar Pradesh 201309, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent shrink-0" />
                <span>info@medivisioncareer.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-[1px] border-[#00A896]/70 pt-8 text-center text-sm text-slate-500">
          <p>© 2026 Medi Vision Career Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
