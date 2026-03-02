"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-white"
      aria-label="Hero Section"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle background blob */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl order-2 lg:order-1">
            <AnimatedSection>
              <div
                className="inline-flex border-[#00A896]/70 items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-sm font-semibold text-accent mb-6 lg:mb-8 tracking-wide"
                role="doc-subtitle"
              >
                <Globe size={16} aria-hidden="true" />
                Guiding Futures. Building Careers.
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary leading-[1.15] mb-6 lg:mb-8 tracking-tight">
                Your Trusted Partner for{" "}
                <span className="text-accent relative whitespace-nowrap">
                  Global Education
                  <svg
                    className="absolute w-full h-2 md:h-3 -bottom-0.5 left-0 text-accent/20"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,5 Q50,10 100,5"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p
                className="text-base sm:text-lg md:text-md 
  text-slate-700 
  mb-8 lg:mb-10 
  leading-relaxed 
  font-normal 
  tracking-tight 
  max-w-5xl"
              >
                Medi Vision Career Pvt. Ltd. provides structured admission
                guidance for medical and professional programs across India and
                international destinations, ensuring regulatory clarity, ethical
                processes, and long-term career alignment.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-6 sm:px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-lg shadow-primary/20 group"
                  aria-label="Book a Free Consultation"
                >
                  Book Free Consultation
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="/universities"
                  className="bg-white text-primary border border-slate-200 px-6 sm:px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:border-primary hover:bg-slate-50 transition-all shadow-sm"
                  aria-label="Explore Partner Universities"
                >
                  Explore Universities
                </Link>
              </div>
            </AnimatedSection>

            {/* Quick Trust Indicators */}
            <AnimatedSection
              delay={0.4}
              className="mt-8 lg:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium text-slate-500"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"
                      style={{
                        backgroundImage: `url(https://i.pravatar.cc/100?img=${i})`,
                        backgroundSize: "cover",
                      }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="ml-2">10k+ Students</span>
              </div>
              <div
                className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"
                aria-hidden="true"
              />
              <div className="flex items-center gap-1">
                <Star
                  size={16}
                  className="text-accent fill-accent"
                  aria-hidden="true"
                />
                <span>4.9/5 Rating</span>
              </div>
            </AnimatedSection>
          </div>

          {/* Visual/Image Area - Asymmetric Grid */}
          <div className="w-full relative order-1 lg:order-2 mb-10 lg:mb-0">
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
                {/* Left Column (shifted down) */}
                <div className="space-y-4 sm:space-y-6 pt-12 sm:pt-16">
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                      alt="Students collaborating and studying"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      priority
                    />
                  </div>
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                      alt="University campus building"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Right Column (shifted up) */}
                <div className="space-y-4 sm:space-y-6 pb-12 sm:pb-16">
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image
                      src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop"
                      alt="Counseling session"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image
                      src="https://images.unsplash.com/photo-1756755599512-59a28cb5f93a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwY29sbGVnZXN8ZW58MHwxfDB8fHww"
                      alt="Graduation success"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Floating Glassmorphism Center Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-12 -left-12 sm:-left-12 bg-white/90 backdrop-blur-2xl border border-slate-100 px-10 py-2 
                    rounded-2xl shadow-xl w-auto max-w-[300px] z-20"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100/80 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                      98%
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-slate-800">
                        Visa Success
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        Industry leading rate
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
