"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ROUTES } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-slate-200 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 h-full flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-800 flex items-center justify-center shadow-md"
          >
            <span className="text-white font-black text-lg">M</span>
          </motion.div>

          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black text-primary tracking-tight">
              Medi Vision
            </span>
            <span className="text-[10px] uppercase font-semibold text-accent tracking-widest">
              Career Pvt Ltd
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {ROUTES.map((route) => {
            const isActive = pathname === route.path;

            return (
              <Link
                key={route.path}
                href={route.path}
                className={`relative text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                {route.name}

                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-900 transition-all hover:shadow-lg hover:-translate-y-[1px]"
          >
            Get Consulting
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
  aria-expanded={isOpen}
>
  {isOpen ? <X size={26} /> : <Menu size={26} />}
</button>
</div>

{/* MOBILE DRAWER */}
<AnimatePresence>
  {isOpen && (
    <>
      {/* overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
      />

      {/* drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl lg:hidden p-6"
      >
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {ROUTES.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-semibold transition ${
                pathname === route.path
                  ? "text-accent"
                  : "text-slate-700 hover:text-primary"
              }`}
            >
              {route.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white px-5 py-3 rounded-lg text-center font-semibold mt-4 hover:shadow-md transition"
          >
            Get Consulting
          </Link>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </nav>
  );
}