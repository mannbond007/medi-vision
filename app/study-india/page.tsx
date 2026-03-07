import AnimatedSection, {
  StaggerChildren,
  StaggerItem,
} from "@/components/AnimatedSection";
import UniversityCard from "@/components/UniversityCard";
import { UNIVERSITIES } from "@/lib/data";
import {
  BookOpen,
  GraduationCap,
  Building2,
  HelpCircle,
  CheckCircle,
  Workflow,
} from "lucide-react";
import Link from "next/link";

export default function StudyIndia() {
  const indianUniversities = UNIVERSITIES.filter((u) => u.country === "India");

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] py-28">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <AnimatedSection>
              <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Global Education Hub
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Study in <span className="text-cyan-400">India</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                Experience world-class education combined with India’s rich
                cultural heritage. Access top universities, globally recognized
                degrees, and affordable education opportunities for
                international students.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="px-7 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30">
                  Explore Universities
                </button>

                <button className="px-7 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
                  View Scholarships
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-3 rounded-xl border border-white/10 hover:border-cyan-500/40 transition">
                  <Building2 size={22} className="text-cyan-400" />
                  <span className="text-white text-sm">1000+ Universities</span>
                </div>

                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-3 rounded-xl border border-white/10 hover:border-cyan-500/40 transition">
                  <GraduationCap size={22} className="text-cyan-400" />
                  <span className="text-white text-sm">
                    Globally Recognized Degrees
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT SIDE HERO IMAGE */}
            <AnimatedSection delay={0.2}>
              <div className="relative flex justify-center items-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full"></div>

                {/* Image Wrapper */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-purple-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                  {/* Image */}
                  <img
                    src="/about_hero.png"
                    alt="Study in India"
                    className="rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="relative py-24">
        {/* Emerald Background */}
        <div className="absolute inset-0 bg-gray-900 -z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
        radial-gradient(circle at 50% 50%, 
        rgba(34,197,94,0.18) 0%, 
        rgba(34,197,94,0.1) 25%, 
        rgba(34,197,94,0.04) 35%, 
        transparent 50%)
      `,
            }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-12">
          {/* Heading */}
          <AnimatedSection className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div
                className="inline-flex items-center gap-2 px-4 py-2
  bg-emerald-500/10 border border-emerald-400/30
  rounded-full text-emerald-400 text-sm font-semibold
  tracking-widest uppercase backdrop-blur-sm"
              >
                <GraduationCap className="w-6 h-6" />
                Institutions
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Top Universities in India
              </h3>

              <div className="flex justify-center mt-1.5">
                <svg
                  width="220"
                  height="18"
                  viewBox="0 0 220 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 drop-shadow-[0_0_6px_rgba(16,185,129,0.45)]"
                >
                  <defs>
                    <linearGradient
                      id="emeraldMarker"
                      x1="0"
                      y1="0"
                      x2="220"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#34D399" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M6 12 C50 4, 110 16, 170 10 S210 8, 214 12"
                    stroke="url(#emeraldMarker)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore India's leading universities offering world-class
              education, modern infrastructure, global collaborations and strong
              career opportunities.
            </p>
          </AnimatedSection>

          {(() => {
            const universities = [
              {
                name: "Mahindra University",
                logo: "/mahindra_uni.png",
                location: "Hyderabad",
                ranking: "Emerging Tech University",
                courses: "Engineering, AI, Data Science",
                fees: "₹4L – ₹7L / year",
                placement: "Avg ₹8–10 LPA",
                facilities: "Innovation Labs, Research Centers",
              },

              {
                name: "SRM University",
                logo: "/srm_uni.png",
                location: "Chennai",
                ranking: "Top Private University",
                courses: "Engineering, Medicine, MBA",
                fees: "₹4L – ₹8L / year",
                placement: "Highest ₹52 LPA",
                facilities: "Global Research Centers",
              },

              {
                name: "UPES",
                logo: "/upes_uni.jpg",
                location: "Dehradun",
                ranking: "NIRF Top 100",
                courses: "Petroleum, Law, Computer Science",
                fees: "₹3L – ₹6L / year",
                placement: "Highest ₹50 LPA",
                facilities: "Industry Partnerships",
              },

              {
                name: "Bennett University",
                logo: "/bennett_uni.jpg",
                location: "Greater Noida",
                ranking: "Times Group University",
                courses: "Engineering, AI, Media",
                fees: "₹3.5L – ₹7L / year",
                placement: "Highest ₹44 LPA",
                facilities: "Startup Incubator",
              },

              {
                name: "RV University",
                logo: "/rv_uni.jpg",
                location: "Bangalore",
                ranking: "NAAC A Accredited",
                courses: "Engineering, Business, Law",
                fees: "₹2L – ₹5L / year",
                placement: "Avg ₹7–9 LPA",
                facilities: "Innovation Labs, Global Exchange",
              },

              {
                name: "Alliance University",
                logo: "/alliance_uni.jpg",
                location: "Bangalore",
                ranking: "Top Business School",
                courses: "MBA, Engineering, Law",
                fees: "₹3L – ₹6L / year",
                placement: "Avg ₹7 LPA",
                facilities: "Corporate Partnerships",
              },

              {
                name: "Uttaranchal University",
                logo: "/uit_uni.jpg",
                location: "Dehradun",
                ranking: "NAAC A+",
                courses: "Law, Engineering, MBA",
                fees: "₹2L – ₹4L / year",
                placement: "Avg ₹6 LPA",
                facilities: "Modern Campus Infrastructure",
              },

              {
                name: "KR Mangalam University",
                logo: "/kr_uni.jpg",
                location: "Gurugram",
                ranking: "Career Focused University",
                courses: "Engineering, Design, MBA",
                fees: "₹2.5L – ₹5L / year",
                placement: "Avg ₹6–7 LPA",
                facilities: "Modern Infrastructure",
              },

              {
                name: "Apeejay Stya University",
                logo: "/apeejay_uni.jpg",
                location: "Gurugram",
                ranking: "NAAC A Grade",
                courses: "Engineering, Design, Business",
                fees: "₹2L – ₹3.5L / year",
                placement: "Highest ₹52 LPA",
                facilities: "International Collaborations",
              },

              {
                name: "Sharda University",
                logo: "/sharda_uni.png",
                location: "Greater Noida",
                ranking: "Global University",
                courses: "Engineering, Medicine, MBA",
                fees: "₹3L – ₹6L / year",
                placement: "International Placements",
                facilities: "Students from 80+ Countries",
              },

              {
                name: "Noida International University",
                logo: "/niu_uni.png",
                location: "Greater Noida",
                ranking: "Emerging Global University",
                courses: "Engineering, Medical Sciences, MBA",
                fees: "₹2.5L – ₹5L / year",
                placement: "Industry Internships",
                facilities: "Smart Campus Infrastructure",
              },

              {
                name: "Graphic Era University",
                logo: "/graphic_uni.png",
                location: "Dehradun",
                ranking: "NAAC A+",
                courses: "Computer Science, Engineering",
                fees: "₹2.5L – ₹5L / year",
                placement: "Highest ₹84 LPA",
                facilities: "Advanced Research Labs",
              },

              {
                name: "Quantum University",
                logo: "/qu_uni.png",
                location: "Roorkee",
                ranking: "Interdisciplinary University",
                courses: "Engineering, Applied Sciences",
                fees: "₹2L – ₹4L / year",
                placement: "Industry Training Programs",
                facilities: "Innovation Programs",
              },

              {
                name: "DBS Global University",
                logo: "/dbs_uni.png",
                location: "Dehradun",
                ranking: "Modern Business University",
                courses: "Business, Technology",
                fees: "₹2L – ₹3.5L / year",
                placement: "Corporate Placements",
                facilities: "Industry Partnerships",
              },

              {
                name: "Shivalik University",
                logo: "/shivalik_uni.png",
                location: "Dehradun",
                ranking: "Private University",
                courses: "Engineering, Agriculture, Management",
                fees: "₹1.5L – ₹3L / year",
                placement: "Industry Training",
                facilities: "Large Green Campus",
              },

              {
                name: "Himalayan University",
                logo: "/himalyan_uni.png",
                location: "Itanagar",
                ranking: "Private University",
                courses: "Engineering, Management, Pharmacy",
                fees: "₹1L – ₹3L / year",
                placement: "Growing Placements",
                facilities: "Modern Infrastructure",
              },

              {
                name: "BFIT",
                logo: "/BFIT_uni.png",
                location: "Dehradun",
                ranking: "Professional Institute",
                courses: "IT, Management, Hotel Management",
                fees: "₹1L – ₹2.5L / year",
                placement: "Industry Internships",
                facilities: "Skill Development Labs",
              },

              {
                name: "RIT Roorkee",
                logo: "/RIT_uni.png",
                location: "Roorkee",
                ranking: "Engineering Institute",
                courses: "Engineering, Management",
                fees: "₹2L – ₹4L / year",
                placement: "Industry Training",
                facilities: "Technology Labs",
              },

              {
                name: "Panipat Institute of Technology",
                logo: "/PIET_uni.png",
                location: "Panipat",
                ranking: "Engineering Institute",
                courses: "Engineering, Computer Science",
                fees: "₹1.5L – ₹3L / year",
                placement: "Industry Placements",
                facilities: "Advanced Engineering Labs",
              },
            ];

            return (
              <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {universities.map((uni, i) => (
                  <StaggerItem key={i} className="h-full">
                    <div
                      className="group h-full flex flex-col rounded-2xl p-6
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              hover:border-emerald-400/40
              hover:shadow-[0_15px_60px_rgba(16,185,129,0.25)]
              transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden">
                          <img
                            src={uni.logo}
                            alt={uni.name}
                            className="w-full h-full object-cover "
                          />
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition">
                            {uni.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {uni.location}
                          </p>
                        </div>
                      </div>

                      {/* Info Grid */}
                      <div className="grid grid-cols-2 gap-3 text-sm flex-grow">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-gray-400 text-xs">Ranking</p>
                          <p className="text-white font-medium">
                            {uni.ranking}
                          </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-gray-400 text-xs">Fees</p>
                          <p className="text-white font-medium">{uni.fees}</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-gray-400 text-xs">Courses</p>
                          <p className="text-white font-medium">
                            {uni.courses}
                          </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-gray-400 text-xs">Placement</p>
                          <p className="text-white font-medium">
                            {uni.placement}
                          </p>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="mt-auto pt-6">
                        <p className="text-sm text-gray-400 mb-4">
                          <span className="text-gray-300 font-medium">
                            Facilities:
                          </span>{" "}
                          {uni.facilities}
                        </p>

                        <div className="flex gap-3">
                          <Link href="/apply" className="flex-1">
                            <button className="w-full bg-emerald-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition">
                              Apply
                            </button>
                          </Link>

                          <Link href="/view-more" className="flex-1">
                            <button className="w-full border border-white/20 text-gray-200 py-2 rounded-lg text-sm hover:bg-white/10 transition">
                              View More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            );
          })()}
        </div>
      </section>

      {/* Admission Process (Timeline) */}

      <section className="py-24  relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-black">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.25), transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-20">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5
        bg-emerald-500/10 border border-emerald-400/30
        rounded-full text-md font-semibold text-emerald-400 mb-5"
            >
              <Workflow className="w-5 h-5" />
              How It Works
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simplified Admission Process
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
              Applying to universities can sometimes feel confusing and
              stressful. Our team guides you through every stage of the
              admission journey so you can focus on choosing the right
              university and building your future.
            </p>
          </AnimatedSection>

          {/* Steps */}
          <div className="max-w-[1600px] py-12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Profile Evaluation",
                points: [
                  "Review academic background",
                  "Understand career goals",
                  "Check university eligibility",
                ],
              },
              {
                step: "02",
                title: "University Selection",
                points: [
                  "Shortlist best universities",
                  "Match budget and preferences",
                  "Select suitable programs",
                ],
              },
              {
                step: "03",
                title: "Application Process",
                points: [
                  "Prepare documents and SOP",
                  "Submit strong applications",
                  "Track application progress",
                ],
              },
              {
                step: "04",
                title: "Admission & Enrollment",
                points: [
                  "Receive admission offer",
                  "Complete enrollment formalities",
                  "Secure your university seat",
                ],
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="group relative flex flex-col min-h-[340px] p-12 rounded-2xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_10px_35px_rgba(0,0,0,0.5)]
            hover:border-emerald-400/40
            hover:shadow-[0_20px_60px_rgba(16,185,129,0.25)]
            hover:-translate-y-2
            transition-all duration-300"
                >
                  {/* Step Number */}
                  <div
                    className="absolute -top-7 left-10
                    w-16 h-16 rounded-full
                    bg-emerald-500/50
                    text-white font-semibold text-xl
                    flex items-center justify-center
                    border border-white/10
                    shadow-[0_12px_30px_rgba(0,0,0,0.45)]
                    backdrop-blur-md
                    transition-all duration-300"
                  >
                    {item.step}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-white mt-8 mb-6">
                    {item.title}
                  </h4>

                  {/* Points */}
                  <ul className="space-y-4">
                    {item.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-300 text-[15px]"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-[3px] flex-shrink-0" />

                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
