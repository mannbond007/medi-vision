"use client";

import React from "react";
import { GraduationCap, Users, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StudentSuccess() {
  const [stopScroll, setStopScroll] = React.useState(false);

  const students = [
    {
      name: "Rahul Sharma",
      university: "Tbilisi State Medical University",
      country: "Georgia",
      image: "/students/student1.jpg",
    },
    {
      name: "Ananya Verma",
      university: "Kazan Federal University",
      country: "Russia",
      image: "/students/student2.jpg",
    },
    {
      name: "Arjun Singh",
      university: "Osh State University",
      country: "Kyrgyzstan",
      image: "/students/student3.jpg",
    },
    {
      name: "Priya Mehta",
      university: "Al-Farabi Medical University",
      country: "Kazakhstan",
      image: "/students/student4.jpg",
    },
  ];

  const team = [
    {
      name: "Dr. Amit Verma",
      role: "Senior Admission Counselor",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop",
    },
    {
      name: "Priya Sharma",
      role: "Student Advisor",
      image:
        "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop",
    },
    {
      name: "Rahul Singh",
      role: "International Admissions",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
    },
    {
      name: "Anjali Mehta",
      role: "Career Counselor",
      image:
        "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop",
    },
    {
      name: "Arjun Kapoor",
      role: "Visa Guidance Specialist",
      image:
        "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop",
    },
  ];

  return (
    <>
      {/* ================= STUDENT SUCCESS ================= */}

      <section className="relative py-28 bg-black overflow-hidden">

        <style jsx>{`
          .marquee-inner {
            animation: marqueeScroll linear infinite;
          }

          @keyframes marqueeScroll {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.25), transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <div className="inline-flex items-center px-4 py-1.5 mb-5 bg-emerald-500/10 border border-emerald-400/30 rounded-full text-sm font-medium text-emerald-400">
              Student Success
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Successful Students Worldwide
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Thousands of students have secured MBBS admissions through Medi Vision Career Pvt Ltd.
              Our expert guidance helps students reach top medical universities globally.
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
                    className="w-60 mx-4 h-[22rem] rounded-xl overflow-hidden relative group border border-white/10 hover:border-emerald-400/40 transition"
                  >

                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-5">

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

          <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Users className="text-emerald-400 mx-auto mb-3" size={28} />
              <h3 className="text-xl font-semibold text-white">1000+</h3>
              <p className="text-gray-400 text-sm">
                Students Successfully Guided
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Globe className="text-emerald-400 mx-auto mb-3" size={28} />
              <h3 className="text-xl font-semibold text-white">50+</h3>
              <p className="text-gray-400 text-sm">
                Partner Universities Worldwide
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <GraduationCap className="text-emerald-400 mx-auto mb-3" size={28} />
              <h3 className="text-xl font-semibold text-white">95%</h3>
              <p className="text-gray-400 text-sm">
                Admission Success Rate
              </p>
            </div>

          </div>

          <div className="text-center mt-14">

            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-medium"
            >
              Start Your Admission Journey
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>



{/* ================= PROFESSIONAL TEAM SECTION ================= */}

<section className="relative bg-black py-32 px-6 md:px-16 overflow-hidden">

  {/* background glow */}

  <div
    className="absolute inset-0 -z-10"
    style={{
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.18), transparent 70%)",
    }}
  />

  <div className="max-w-7xl mx-auto">

    {/* header */}

    <div className="text-center max-w-3xl mx-auto mb-20">

      <div className="inline-flex items-center px-4 py-1.5 mb-5 bg-emerald-500/10 border border-emerald-400/30 rounded-full text-sm font-medium text-emerald-400">
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

    {/* BENTO GRID */}

    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">

      {/* BIG CARD */}

      <div className="col-span-2 row-span-2 relative group rounded-2xl overflow-hidden border border-white/10">

        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">

          <div>
            <h3 className="text-white text-xl font-semibold">
              Dr. Amit Verma
            </h3>
            <p className="text-emerald-400 text-sm">
              Senior Admission Counselor
            </p>
          </div>

        </div>

      </div>

      {/* SMALL CARDS */}

      {[
        {
          name: "Priya Sharma",
          role: "Student Advisor",
          img: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop",
        },
        {
          name: "Rahul Singh",
          role: "International Admissions",
          img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
        },
        {
          name: "Anjali Mehta",
          role: "Career Counselor",
          img: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop",
        },
        {
          name: "Arjun Kapoor",
          role: "Visa Specialist",
          img: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop",
        },
      ].map((member, i) => (

        <div
          key={i}
          className="relative group rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400/40 transition"
        >

          <img
            src={member.img}
            className="w-full h-full object-center object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-5">

            <div>
              <h4 className="text-white text-sm font-semibold">
                {member.name}
              </h4>

              <p className="text-emerald-400 text-xs">
                {member.role}
              </p>
            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>
    </>
  );
}