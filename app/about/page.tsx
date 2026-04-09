"use client";

import AnimatedSection, {
  StaggerChildren,
  StaggerItem,
} from "@/components/AnimatedSection";
import {
  CheckCircle2,
  Award,
  Users,
  GraduationCap,
  Target,
  Eye,
  Gem,
  Globe2,
  Plane,
  Stethoscope,
  Layers3,
} from "lucide-react";

export default function About() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        {/* Background Layers */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-emerald-500/20 rounded-full blur-[180px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[140px]" />

        {/* Grid Texture */}
        <div
          className="absolute inset-0 opacity-5 
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:50px_50px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36 text-center">
          <AnimatedSection>
            <div
              className="inline-block mb-8 px-5 py-2 
            rounded-full bg-white/10 border border-white/20 
            text-emerald-300 text-sm font-semibold tracking-wide backdrop-blur-sm"
            >
              Medi Vision Career Pvt. Ltd.
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto mb-8">
              Who We Are
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-5xl mx-auto leading-relaxed mb-16 px-2">
              Medi Vision Career Pvt. Ltd. is a professionally managed
              organization committed to building strong careers in education and
              healthcare. We primarily operate in the education sector with a
              special focus on medical education, scholarships, and structured
              career guidance, while actively planning expansion into healthcare
              services and medical solutions across India and CIS countries.
            </p>

            {/* Metrics */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
                         gap-6 md:gap-8 max-w-7xl mx-auto px-4"
            >
              {[
                { value: "15+ Years", label: "Industry Experience" },
                { value: "1000+", label: "Students Guided for MBBS" },
                { value: "25+", label: "Medical University Partners" },
                {
                  value: "India & International",
                  label: "MBBS Admission Services",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative group rounded-2xl 
                bg-white/5 backdrop-blur-md 
                border border-white/10 
                px-6 md:px-8 py-7 md:py-8 
                text-center
                transition-all duration-300
                hover:border-emerald-400/40 
               hover:bg-white/10"
                >
                  {/* Accent Line */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 
                  w-16 md:w-20 h-[3px] bg-emerald-400 opacity-70"
                  />

                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400">
                    {item.value}
                  </div>

                  <div className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed break-words">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= EDUCATION ECOSYSTEM ================= */}
      <section className="py-28 bg-white relative ">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection>
              <div className="relative aspect-square rounded-3xl shadow-2xl">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl" />

                <div className="relative grid grid-cols-2 gap-4 p-6 h-full">
                  {[
                    "/about_img_02.png",
                    "/about_img_03.png",
                    "/about_img_04.png",
                    "/about_image_05.png",
                  ].map((img, i) => (
                    <div
                      key={i}
                      className="relative rounded-2xl overflow-hidden shadow-lg border border-emerald-200/60 h-full"
                    >
                      <img
                        src={img}
                        alt="Medi Vision"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-18 -left-4 sm:-bottom-[65px] sm:-left-12 bg-white/90 backdrop-blur-xl border border-emerald-200/70 rounded-2xl px-10 py-3 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Users size={22} />
                    </div>
                    <div>
                      <div className="text-emerald-600 font-bold text-lg leading-none">
                        10+ Years
                      </div>
                      <div className="text-slate-600 text-sm">
                        Education Expertise
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Excellence Card */}
                <div className="absolute -top-20 right-8 sm:-top-[65px] sm:-right-5 bg-white/85 backdrop-blur-xl border border-emerald-200/70 px-10 py-1 rounded-2xl shadow-xl sm:py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 min-w-[40px] min-h-[40px] flex-shrink-0 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Award size={22} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-medium">
                        Ethical & Transparent
                      </div>
                      <div className="text-base font-bold text-slate-800">
                        Student-Centric Approach
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div
                className="inline-flex items-center gap-3 
                px-4 py-1.5 
                rounded-full 
                bg-white/60 backdrop-blur-md 
                border border-[#00A896]/40 
                text-[#00A896] 
                text-sm font-semibold 
                tracking-wide mb-4 shadow-sm"
              >
                <div
                  className="w-9 h-9 flex items-center justify-center 
                rounded-full bg-[#00A896] text-white"
                >
                  <GraduationCap size={18} />
                </div>

                <span className="uppercase font-bold tracking-wider">
                  Our Education Ecosystem
                </span>
              </div>

              <h3 className="text-3xl md:text-[45px] font-bold text-primary mb-8 leading-tight">
                Platforms Supporting Academic & Professional Growth
              </h3>

              <div className="space-y-7">
                {[
                  {
                    title: "MBBS Route",
                    desc: "Overseas medical education guidance and MBBS admissions support.",
                  },
                  {
                    title: "Milestone Scholarship Program",
                    desc: "Merit-based and need-based scholarship initiatives.",
                  },
                  {
                    title: "Study in India",
                    desc: "Admissions guidance for medical, engineering, management, and professional courses in India.",
                  },
                  {
                    title: "Career & Licensing Support",
                    desc: "Guidance for FMGE/NExT preparation, licensing pathways, documentation support, and structured transition into professional medical careers.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <CheckCircle2 className="text-accent" size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}

      <section className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-24">
            <h2
              className="inline-flex items-center gap-3 px-6 py-2
        bg-accent/10 text-accent text-xs font-semibold uppercase
        tracking-[0.35em] rounded-full mb-6 border border-accent/20"
            >
              <span className="flex items-center justify-center w-8 h-8 bg-accent/15 rounded-full">
                <Globe2 className="w-4 h-4 text-accent" />
              </span>
              Corporate Evolution
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              From Education Leadership to Healthcare Expansion
            </h3>

            <p className="mt-6 text-slate-600 text-base leading-relaxed">
              Medi Vision Career Pvt. Ltd. is building a structured ecosystem
              that connects education, healthcare, and global medical
              opportunities through ethical and transparent frameworks.
            </p>
          </AnimatedSection>

          {/* Timeline Wrapper */}
          <div className="max-w-6xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

            <StaggerChildren className="space-y-20">
              {[
                {
                  label: "Foundation",
                  icon: GraduationCap,
                  title: "Over a Decade in Education Advisory",
                  description:
                    "With more than 10 years of structured experience, Medi Vision has guided students toward sustainable academic and professional careers, particularly in the medical education domain.",
                  highlights: [
                    "1000+ students guided with structured career planning",
                    "Specialized expertise in MBBS pathways (India & Overseas)",
                    "Strong institutional collaborations",
                  ],
                },
                {
                  label: "Education Ecosystem",
                  icon: Layers3,
                  title: "Multi-Platform Academic Network",
                  description:
                    "Operating under Medi Vision Career Pvt. Ltd., multiple platforms deliver transparent, long-term student support across diverse professional programs.",
                  highlights: [
                    "MBBS Route – Overseas medical education guidance",
                    "Milestone Scholarship Program – Merit & need-based support",
                    "Study in India – Admissions for medical, engineering & management",
                  ],
                },
                {
                  label: "Strategic Expansion",
                  icon: Stethoscope,
                  title: "Healthcare & Medical Solutions (Planned)",
                  description:
                    "As part of its long-term growth roadmap, the organization is expanding into structured healthcare services across India and CIS countries.",
                  highlights: [
                    "Medical instruments & equipment supply planning",
                    "Pharmaceutical & drug distribution framework",
                    "Clinical and hospital infrastructure advisory",
                  ],
                },
                {
                  label: "Future Vision",
                  icon: Plane,
                  title: "Global Medical Tourism Network",
                  description:
                    "The future roadmap includes facilitating international patients by connecting hospitals, specialists, and support systems across borders.",
                  highlights: [
                    "International patient facilitation",
                    "Hospital & specialist alignment",
                    "End-to-end treatment logistics",
                  ],
                },
              ].map((item, i) => (
                <StaggerItem
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-12 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}
                  <div className="flex-1 md:w-[58%] pl-16 md:pl-0">
                    <div
                      className="bg-white p-10 rounded-3xl
                border border-slate-200
                shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)]
                hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.12)]
                transition-all duration-500"
                    >
                      {/* Label Badge with Icon */}
                      <div
                        className="inline-flex items-center gap-2 px-4 py-2 
                  bg-accent/10 border border-accent/20 
                  rounded-full text-accent text-xs font-semibold 
                  uppercase tracking-[0.25em] w-fit"
                      >
                        <item.icon className="w-4 h-4 text-accent" />
                        {item.label}
                      </div>

                      {/* Title */}
                      <h4 className="text-2xl font-semibold text-primary mt-4 mb-4">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-3">
                        {item.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-slate-700 text-sm">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-10 -translate-x-1/2 z-10">
                    <div className="w-14 h-14 bg-white border-4 border-accent/30 rounded-full flex items-center justify-center shadow-md">
                      <div className="w-6 h-6 bg-accent rounded-full" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1 md:w-[42%]" />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ================= FINAL SECTION ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black py-32">
        {/* Ocean Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
        radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.28), transparent 70%),
        #000000
      `,
          }}
        />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
        linear-gradient(to right, #ffffff 1px, transparent 1px),
        linear-gradient(to bottom, #ffffff 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Our Strategic Foundation
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
              The principles guiding Medi Vision Career Pvt. Ltd. in delivering
              structured education pathways and responsibly expanding into
              global healthcare ecosystems.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Mission",
                icon: <Target size={26} strokeWidth={1.8} />,
                points: [
                  "Ethical and transparent guidance",
                  "Structured admission processes",
                  "Long-term career planning",
                  "Compliance-focused advisory support",
                ],
              },
              {
                title: "Vision",
                icon: <Eye size={26} strokeWidth={1.8} />,
                points: [
                  "Global education ecosystem development",
                  "Healthcare integration roadmap",
                  "Cross-border institutional partnerships",
                  "Sustainable long-term expansion",
                ],
              },
              {
                title: "Commitment",
                icon: <Gem size={26} strokeWidth={1.8} />,
                points: [
                  "Integrity in every interaction",
                  "Transparency in financial processes",
                  "Regulatory compliance standards",
                  "Commitment to student success",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/6 backdrop-blur-xl border border-white/10 rounded-3xl p-10 transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]"
              >
                {/* Circular Icon */}
                <div className="w-16 h-16 rounded-full bg-cyan-400/15 border border-cyan-400/40 text-cyan-400 flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-6 tracking-wide relative inline-block">
                  {item.title}
                  <span className="absolute  left-0 -bottom-1 w-[70%] h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
                </h3>

                {/* Bullet Points */}
                <div className="space-y-4 mb-8">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-cyan-400 mt-1 shrink-0"
                      />
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Engagement */}
                {/* <div className="flex items-center text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </div> */}

                {/* Bottom Accent */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[5px] w-0 
                  bg-gradient-to-r from-transparent via-cyan-400 to-transparent 
                  opacity-80 blur-[1px]
                  transition-all duration-500 group-hover:w-[80%]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
