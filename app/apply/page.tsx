"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Globe,
  Award,
  Headphones,
  BookOpen,
  FileText,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ApplySection() {
  return (
    <div className="min-h-screen w-full relative bg-black overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.25), transparent 70%), #000000",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[550px] h-[550px] bg-emerald-500/25 rounded-full blur-[220px]" />

      <section className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-20 grid lg:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="flex flex-col"
        >
          <motion.h1
            variants={item}
            className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent leading-[1.2]"
          >
            Start Your Admission Journey
          </motion.h1>

          <motion.p
            variants={item}
            className="text-gray-400 mt-6 w-full leading-relaxed text-sm md:text-base"
          >
           Our experts guide you from choosing the right university to securing your admission.
          </motion.p>

          {/* Bento Grid */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10"
          >
            {[
              {
                icon: GraduationCap,
                title: "Experience",
                value: "15+ Years",
                desc: "Guiding students toward successful admissions.",
                span: "md:col-span-2",
              },
              {
                icon: Users,
                title: "Students",
                value: "1000+",
                desc: "Placed worldwide",
              },
              {
                icon: Globe,
                title: "Universities",
                value: "50+",
                desc: "Partner institutions",
              },
              {
                icon: BookOpen,
                title: "Services",
                list: [
                  "University shortlisting",
                  "Admission documentation",
                  "Scholarship guidance",
                  "Application assistance",
                ],
                span: "md:col-span-2",
              },
              {
                icon: Award,
                title: "Success Rate",
                value: "95%",
                desc: "Admission success",
              },
              {
                icon: Headphones,
                title: "Support",
                value: "24/7",
                desc: "Counseling assistance",
              },
              {
                icon: FileText,
                title: "Applications",
                value: "5000+",
                desc: "Applications processed",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                className={`${card.span || ""} bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg transition`}
              >
                <div
                  className="inline-flex items-center justify-center
                  w-10 h-10
                  border border-emerald-400/20
                  bg-emerald-500/10
                  rounded-full
                  mb-2"
                >
                  <card.icon className="text-emerald-400" size={18} />
                </div>

                <p className="text-emerald-400 text-sm">{card.title}</p>

                {card.value && (
                  <h3 className="text-lg md:text-xl text-white font-semibold">
                    {card.value}
                  </h3>
                )}

                {card.desc && (
                  <p className="text-gray-400 text-xs mt-1">{card.desc}</p>
                )}

                {card.list && (
                  <ul className="mt-3 space-y-2 text-sm text-gray-300">
                    {card.list.map((l, index) => (
                      <li key={index}>✔ {l}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full"
        >
          <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-8">
              Application Form
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Full Name", "Email", "Phone", "Preferred Course"].map(
                (label, i) => (
                  <div key={i}>
                    <label className="text-sm text-white mb-2 block">
                      {label}
                    </label>
                    <input
                      type="text"
                      placeholder={label}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                ),
              )}

              <div className="md:col-span-2">
                <label className="text-sm text-white mb-2 block">Message</label>
                <textarea
                  rows="6"
                  placeholder="Tell us about your preferred university..."
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition"
                >
                  Submit Application
                </motion.button>

                <div className="mt-10 border-t border-white/20 pt-4 text-center">
                  <p className="text-xs text-gray-400 tracking-wide">
  © {new Date().getFullYear()}
  <span className="font-semibold ml-1 text-[15px] bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
    Medi Vision Career Pvt Ltd
  </span>
</p>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
