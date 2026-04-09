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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Fix: Lock background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
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

      </nav>

      {/* MOBILE MENU - Premium Side Drawer Layout */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop Shadow Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[300px] sm:w-[360px] bg-white/95 backdrop-blur-2xl shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col border-l border-white/20"
            >
              {/* Drawer Header (Matches Navbar Height) */}
              <div className="h-[72px] px-6 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <span className="font-bold text-primary">Medi Vision</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all text-primary"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-grow py-8 px-6 flex flex-col gap-2 overflow-y-auto">
                {ROUTES.map((route, index) => {
                  const isActive = pathname === route.path;
                  return (
                    <motion.div
                      key={route.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={route.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all group ${
                          isActive
                            ? "bg-primary/5 text-accent"
                            : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                        }`}
                      >
                        <span className="text-lg font-semibold">{route.name}</span>
                        <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                          isActive ? "bg-accent scale-100" : "bg-slate-300 scale-0 group-hover:scale-100"
                        }`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-slate-100">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: ROUTES.length * 0.05 + 0.1 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    Get Consulting
                  </Link>
                </motion.div>
                
                <p className="text-center text-[10px] text-slate-400 mt-6 font-medium uppercase tracking-[0.2em]">
                  Medi Vision Career Pvt Ltd
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

