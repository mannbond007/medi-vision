"use client";

import React from "react";
import { GraduationCap, Users, Globe, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

export default function StudentSuccess() {
  const [stopScroll, setStopScroll] = React.useState(false);

  const students = [
    {
      name: "Rahul Sharma",
      university: "Tbilisi State Medical University",
      country: "Georgia",
      image: "/tes_01.png",
    },
    {
      name: "Ananya Verma",
      university: "Kazan Federal University",
      country: "Russia",
      image: "/tes_02.png",
    },
    {
      name: "Arjun Singh",
      university: "Osh State University",
      country: "Kyrgyzstan",
      image: "/tes_04.jpg",
    },
    {
      name: "Priya Mehta",
      university: "Al-Farabi Medical University",
      country: "Kazakhstan",
      image: "/tes_03.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">

      {/* Emerald Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.25), transparent 70%), #000000",
        }}
      />

      <div className="relative z-10">

        {/* ================= STUDENT SUCCESS ================= */}

        <section className="py-28 overflow-hidden">

          <style jsx>{`
            .marquee-inner {
              animation: marqueeScroll linear infinite;
              will-change: transform;
            }

            @keyframes marqueeScroll {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-3xl mx-auto mb-16">

              <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-emerald-500/10 border border-emerald-400/30 rounded-full text-base font-medium text-emerald-400">
                <Trophy size={18} className="text-emerald-400" />
                Student Success
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Successful Students Worldwide
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Thousands of students have secured MBBS admissions through
                Medi Vision Career Pvt Ltd. Our expert guidance helps students
                reach top medical universities globally.
              </p>

            </div>

            {/* MARQUEE */}

            <div
              className="overflow-hidden w-full relative"
              onMouseEnter={() => setStopScroll(true)}
              onMouseLeave={() => setStopScroll(false)}
            >

              <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />

              <div
                className="marquee-inner flex w-fit"
                style={{
                  animationPlayState: stopScroll ? "paused" : "running",
                  animationDuration: students.length * 3000 + "ms",
                }}
              >
                <div className="flex">

                  {[...students, ...students].map((student, index) => (
                    <div
                      key={index}
                      className="w-60 mx-4 h-[22rem] rounded-xl overflow-hidden relative group border border-white/10 hover:border-emerald-400/40 transition duration-300 ease-out"
                    >

                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">

                        <h4 className="text-white font-semibold">
                          {student.name}
                        </h4>

                        <p className="text-emerald-400 text-sm">
                          {student.university}
                        </p>

                        <p className="text-gray-300 text-xs">
                          {student.country}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>
              </div>

              <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />

            </div>

            {/* STATS */}

            <div className="grid md:grid-cols-3  gap-8 mt-32">

              <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-400/40 hover:-translate-y-2 hover:bg-white/[0.07]">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-400/20">
                    <Users className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">1000+</h3>
                    <p className="text-sm text-gray-400">Students Guided</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Over a thousand aspiring medical students have successfully
                  secured admissions in top international universities through
                  our expert counseling and admission support.
                </p>

                <div className="mt-5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-emerald-400"></div>
                </div>
              </div>

              <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-400/40 hover:-translate-y-2 hover:bg-white/[0.07]">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-400/20">
                    <Globe className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">50+</h3>
                    <p className="text-sm text-gray-400">Global Universities</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Our partnerships with internationally recognized universities
                  ensure globally respected medical education.
                </p>

                <div className="mt-5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-emerald-400"></div>
                </div>
              </div>

              <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-400/40 hover:-translate-y-2 hover:bg-white/[0.07]">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-400/20">
                    <GraduationCap className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">95%</h3>
                    <p className="text-sm text-gray-400">Admission Success</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Our experienced counselors help students secure seats in
                  reputable medical universities worldwide.
                </p>

                <div className="mt-5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-emerald-400"></div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= TEAM ================= */}

        <section className="py-20 px-6 md:px-16">

          <div className="max-w-7xl mx-auto">

            <div className="text-center max-w-3xl mx-auto mb-20">

              <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-emerald-500/10 border border-emerald-400/30 rounded-full text-base font-medium text-emerald-400">
                <Users size={18} className="text-emerald-400" />
                Our Team
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Meet the Experts Behind Your Success
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Our experienced counselors and advisors help students secure
                admissions in leading medical universities worldwide.
              </p>

            </div>

            {/* TEAM GRID */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}

              <div className="flex flex-col items-center lg:items-start gap-6">

                <h3 className="text-4xl md:text-5xl font-semibold text-white leading-tight text-center lg:text-left">
                  Meet the team shaping your
                  <span className="block text-emerald-400">
                    medical career journey
                  </span>
                </h3>

                <p className="text-gray-400 max-w-md text-center lg:text-left">
                  Our dedicated admission counselors and visa experts guide
                  students through every step of the MBBS admission process.
                </p>

                <button className="mt-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition text-sm font-medium">
                  Meet Our Advisors
                </button>

              </div>

              {/* RIGHT GALLERY */}

              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">

                <div className="flex flex-col gap-4 pt-12">
                  <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop" alt="Team member" className="w-full h-44 object-cover rounded-2xl transition duration-300 hover:-translate-y-1"/>
                  <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop" alt="Team member" className="w-full h-44 object-cover rounded-2xl transition duration-300 hover:-translate-y-1"/>
                </div>

                <div className="flex flex-col gap-4">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop" alt="Team member" className="w-full h-44 object-cover rounded-2xl transition duration-300 hover:-translate-y-1"/>
                  <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop" alt="Team member" className="w-full h-44 object-cover rounded-2xl transition duration-300 hover:-translate-y-1"/>
                  <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop" alt="Team member" className="w-full h-44 object-cover rounded-2xl transition duration-300 hover:-translate-y-1"/>
                </div>

                <div className="flex flex-col gap-4 pt-8">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop" alt="Team member" className="w-full h-44 object-cover rounded-2xl transition duration-300 hover:-translate-y-1"/>
                  <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop" alt="Team member" className="w-full h-44 object-cover rounded-2xl transition duration-300 hover:-translate-y-1"/>
                </div>

              </div>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
}