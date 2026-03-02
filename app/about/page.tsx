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
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

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
                { value: "10+ Years", label: "Industry Experience" },
                { value: "Hundreds+", label: "Students Guided" },
                { value: "3 Platforms", label: "Education Ecosystem" },
                { value: "India & CIS", label: "Expansion Vision" },
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
                <div className="absolute -bottom-10 -left-4 sm:-bottom-[65px] sm:-left-12 bg-white/90 backdrop-blur-xl border border-emerald-200/70 rounded-2xl px-10 py-3 shadow-xl">
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
                <div className="absolute top-8 right-8 sm:-top-[65px] sm:-right-5 bg-white/85 backdrop-blur-xl border border-emerald-200/70 px-10 py-3 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Award size={20} />
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
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
              Our Growth & Expansion
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary">
              From Education to Healthcare Vision
            </h3>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

            <StaggerChildren className="space-y-12">
              {[
                {
                  year: "Experience",
                  title: "Over a Decade in Education",
                  desc: "Successfully guided hundreds of students toward the right academic paths, especially in medical education.",
                },
                {
                  year: "Vision",
                  title: "Integrated Ecosystem",
                  desc: "Connecting education, healthcare professionals, institutions, and global medical services.",
                },
                {
                  year: "Healthcare Expansion",
                  title: "Medical & Pharmaceutical Solutions",
                  desc: "Planning expansion into medical instruments, pharmaceutical distribution, and healthcare solutions.",
                },
                {
                  year: "Future Roadmap",
                  title: "Medical Tourism",
                  desc: "Aiming to facilitate cross-border healthcare services connecting hospitals and international patients.",
                },
              ].map((item, i) => (
                <StaggerItem
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 md:w-1/2 pl-16 md:pl-0">
                    <div
                      className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow bg-opacity-80 backdrop-blur-sm ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                    >
                      <div className="text-accent font-black text-2xl mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-xl font-bold text-primary mb-3">
                        {item.title}
                      </h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 top-6 w-14 h-14 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                    <div className="w-5 h-5 bg-accent rounded-full" />
                  </div>

                  <div className="hidden md:block flex-1 md:w-1/2" />
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
                title: "Values",
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
                <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">
                  {item.title}
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
