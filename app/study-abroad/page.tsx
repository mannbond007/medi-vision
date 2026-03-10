import AnimatedSection, {
  StaggerChildren,
  StaggerItem,
} from "@/components/AnimatedSection";
import {
  Plane,
  Award,
  FileText,
  Landmark,
  GraduationCap,
  Globe,
  Compass,
  Trophy,
  BadgeCheck,
  Wallet,
  Globe2,
  FileCheck,
  Home,
  PlaneTakeoff,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StudyAbroad() {
  return (
    <>
      <section className="relative overflow-hidden bg-black text-white py-28">
        {/* Ocean Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.25), transparent 70%), #000000",
          }}
        />

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#ffffff15_1px,transparent_1px),linear-gradient(90deg,#ffffff15_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="max-w-[1450px] mx-auto px-8 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-24 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              <Globe /> Global Education Consultancy
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Helping Students
              <span className="text-cyan-400"> Study Abroad</span>
              <br />
              and Build Global Careers
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              We guide students to secure admissions in top universities across
              the world. From course selection to visa processing, our team
              provides complete support for your international education
              journey.
            </p>

            {/* Professional Badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-lg text-sm backdrop-blur-sm">
                <GraduationCap size={18} className="text-cyan-400" />
                500+ Universities
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-lg text-sm backdrop-blur-sm">
                <Globe size={18} className="text-cyan-400" />
                30+ Countries
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-lg text-sm backdrop-blur-sm">
                <Compass size={18} className="text-cyan-400" />
                End-to-End Guidance
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-lg text-sm backdrop-blur-sm">
                <Trophy size={18} className="text-cyan-400" />
                10,000+ Students Guided
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-lg text-sm backdrop-blur-sm">
                <BadgeCheck size={18} className="text-cyan-400" />
                Visa Assistance
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-lg text-sm backdrop-blur-sm">
                <Wallet size={18} className="text-cyan-400" />
                Scholarship Support
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="relative flex justify-center">
            <div className="grid grid-cols-2 gap-8 max-w-2xl">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop"
                className="rounded-xl h-[340px] w-full object-cover shadow-lg border border-white/10 
                transition-all duration-300 ease-out 
                hover:scale-[1.04] hover:border-cyan-400/70 hover:shadow-cyan-500/20"
                alt="Students studying abroad"
              />

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                className="rounded-xl h-[340px] w-full object-cover shadow-lg border border-white/10 mt-16
                transition-all duration-300 ease-out 
                hover:scale-[1.04] hover:border-cyan-400/70 hover:shadow-cyan-500/20"
                alt="University campus"
              />

              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
                className="rounded-xl h-[340px] w-full object-cover shadow-lg border border-white/10
                transition-all duration-300 ease-out 
                hover:scale-[1.04] hover:border-cyan-400/70 hover:shadow-cyan-500/20"
                alt="International students"
              />

              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
                className="rounded-xl h-[340px] w-full object-cover shadow-lg border border-white/10 mt-16
                transition-all duration-300 ease-out 
                hover:scale-[1.04] hover:border-cyan-400/70 hover:shadow-cyan-500/20"
                alt="Students discussion"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="relative py-24">
        {/* Background */}
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

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Top Medical Universities in Uzbekistan
            </h3>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Study MBBS in Uzbekistan with globally recognized universities,
              modern medical infrastructure and affordable tuition fees.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                name: "Samarkand State Medical University",
                logo: "/ssmu.png",
                location: "Samarkand, Uzbekistan",
                ranking: "Top Government Medical University",
                courses: "MBBS, Dentistry, General Medicine",
                fees: "$3500 – $4000 / year",
                placement: "Global Medical Recognition",
                facilities: "Teaching Hospitals, Clinical Training",
              },

              {
                name: "Tashkent Medical Academy",
                logo: "/tsmu.png",
                location: "Tashkent, Uzbekistan",
                ranking: "Leading Medical Academy",
                courses: "MBBS, Pediatrics, Surgery",
                fees: "$3200 – $4200 / year",
                placement: "International Medical Practice",
                facilities: "Advanced Medical Laboratories",
              },

              {
                name: "Bukhara State Medical Institute",
                logo: "/bsmu.png",
                location: "Bukhara, Uzbekistan",
                ranking: "Top Medical Institute",
                courses: "MBBS, Pharmacy",
                fees: "$3000 – $3800 / year",
                placement: "Clinical Hospital Training",
                facilities: "Simulation Labs",
              },

              {
                name: "Bukhara Innovative Medical Institute",
                logo: "/bimi.png",
                location: "Bukhara, Uzbekistan",
                ranking: "Modern Medical Institute",
                courses: "MBBS, Dentistry",
                fees: "$3300 – $3700 / year",
                placement: "Medical Research Programs",
                facilities: "Advanced Clinical Labs",
              },

              {
                name: "Gulistan State University",
                logo: "/gsu.png",
                location: "Gulistan, Uzbekistan",
                ranking: "Public State University",
                courses: "MBBS, Medical Science",
                fees: "$2800 – $3500 / year",
                placement: "Medical Internship Programs",
                facilities: "Research Centers",
              },

              {
                name: "Navoi State Medical University",
                logo: "/nsmu.png",
                location: "Navoi, Uzbekistan",
                ranking: "Government Medical University",
                courses: "MBBS, Public Health",
                fees: "$3000 – $3700 / year",
                placement: "Hospital Internships",
                facilities: "Modern Teaching Hospitals",
              },

              {
                name: "Fergana Institute of Public Health",
                logo: "/fergana.png",
                location: "Fergana, Uzbekistan",
                ranking: "Public Health Institute",
                courses: "Public Health, MBBS",
                fees: "$2700 – $3400 / year",
                placement: "Public Health Programs",
                facilities: "Clinical Research Centers",
              },

              {
                name: "Profi University",
                logo: "/profi.png",
                location: "Tashkent, Uzbekistan",
                ranking: "Private Medical University",
                courses: "MBBS, Medical Sciences",
                fees: "$3200 – $3900 / year",
                placement: "Industry Medical Training",
                facilities: "Modern Medical Campus",
              },

              {
                name: "Kokan University",
                logo: "/kokan.png",
                location: "Kokand, Uzbekistan",
                ranking: "Regional Medical University",
                courses: "MBBS, Medical Programs",
                fees: "$2800 – $3600 / year",
                placement: "Medical Training Programs",
                facilities: "Advanced Labs",
              },

              {
                name: "Asia International University",
                logo: "/aiu.png",
                location: "Bukhara, Uzbekistan",
                ranking: "International Medical University",
                courses: "MBBS, Medical Sciences",
                fees: "$3200 – $4000 / year",
                placement: "International Clinical Training",
                facilities: "Global Research Labs",
              },

              {
                name: "Central Asian University",
                logo: "/central-asia.png",
                location: "Tashkent, Uzbekistan",
                ranking: "Modern International University",
                courses: "MBBS, Health Sciences",
                fees: "$3200 – $3800 / year",
                placement: "Medical Research Opportunities",
                facilities: "Advanced Medical Infrastructure",
              },
            ].map((uni, i) => (
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
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition">
                        {uni.name}
                      </h4>

                      <p className="text-sm text-gray-400">{uni.location}</p>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 text-sm flex-grow">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">Ranking</p>
                      <p className="text-white font-medium">{uni.ranking}</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">Fees</p>
                      <p className="text-white font-medium">{uni.fees}</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">Courses</p>
                      <p className="text-white font-medium">{uni.courses}</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">Placement</p>
                      <p className="text-white font-medium">{uni.placement}</p>
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
        </div>
      </section>

      {/* Support Services (Visa & Scholarships) */}
      <section className="relative py-28 overflow-hidden">
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
              className="inline-flex items-center gap-2 px-4 py-2
            bg-emerald-500/10 border border-emerald-400/30
              rounded-full text-sm font-semibold text-emerald-400 mb-6"
            >
              <GraduationCap className="w-5 h-5" />
              Our Services
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Admission Consultancy Services
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              We simplify the study abroad journey by providing expert guidance
              from university selection to visa approval and pre-departure
              support.
            </p>
          </AnimatedSection>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1400px] mx-auto">
            {[
              {
                icon: <GraduationCap className="w-12 h-12 text-emerald-400" />,
                title: "University Selection",
                desc: "We analyze your academic background, career interests and financial plans to recommend the most suitable universities.",
                points: [
                  "Profile evaluation",
                  "Country comparison",
                  "Course selection",
                ],
              },
              {
                icon: <FileText className="w-12 h-12 text-emerald-400" />,
                title: "Application Assistance",
                desc: "Our team prepares strong university applications that maximize your chances of admission.",
                points: [
                  "SOP & LOR guidance",
                  "Application submission",
                  "Document verification",
                ],
              },
              {
                icon: <Landmark className="w-12 h-12 text-emerald-400" />,
                title: "Scholarship Guidance",
                desc: "We help you identify and apply for scholarships that can significantly reduce tuition costs.",
                points: [
                  "Merit scholarships",
                  "Government funding",
                  "University grants",
                ],
              },
              {
                icon: <FileCheck className="w-12 h-12 text-emerald-400" />,
                title: "Visa Assistance",
                desc: "Our visa specialists guide you through every step to ensure your application is successful.",
                points: [
                  "Visa documentation",
                  "Financial review",
                  "Interview preparation",
                ],
              },
              {
                icon: <Home className="w-12 h-12 text-emerald-400" />,
                title: "Accommodation Support",
                desc: "We assist students in finding safe and affordable accommodation near their university.",
                points: [
                  "University hostels",
                  "Student apartments",
                  "Local housing guidance",
                ],
              },
              {
                icon: <PlaneTakeoff className="w-12 h-12 text-emerald-400" />,
                title: "Pre-Departure Guidance",
                desc: "Prepare for your international journey with our detailed pre-departure sessions.",
                points: [
                  "Travel preparation",
                  "Cultural orientation",
                  "Student checklist",
                ],
              },
              {
                icon: <Users className="w-12 h-12 text-emerald-400" />,
                title: "Career Counseling",
                desc: "Professional counselors help students choose programs aligned with their career goals.",
                points: [
                  "Career roadmap",
                  "Industry insights",
                  "Future opportunities",
                ],
              },
              {
                icon: <Globe className="w-12 h-12 text-emerald-400" />,
                title: "Global Universities",
                desc: "Access top universities across the world with globally recognized degrees.",
                points: [
                  "USA, UK, Canada",
                  "Europe & Australia",
                  "Emerging study destinations",
                ],
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="group h-[280px] [perspective:1000px]">
                  <div
                    className="relative w-full h-full transition-transform duration-500
            [transform-style:preserve-3d]
            group-hover:[transform:rotateY(180deg)]"
                  >
                    {/* FRONT */}
                    <div
                      className="absolute w-full h-full
              [backface-visibility:hidden]
              rounded-2xl p-8
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_10px_35px_rgba(0,0,0,0.6)]
              hover:border-emerald-400/40
              flex flex-col items-center justify-center text-center"
                    >
                      <div
                        className="w-[100px] h-[100px] rounded-full
                bg-emerald-500/10 border border-white/10
                flex items-center justify-center mb-5 "
                      >
                        {item.icon}
                      </div>

                      <h3 className="text-lg font-semibold text-gray-100 tracking-tight leading-snug transition-colors group-hover:text-emerald-400">
  {item.title}
</h3>
                    </div>

                    {/* BACK */}
                    <div
                      className="absolute w-full h-full
                      [backface-visibility:hidden]
                      [transform:rotateY(180deg)]
                      rounded-2xl p-7
                      bg-gradient-to-b from-emerald-500/10 to-emerald-600/10
                      backdrop-blur-xl
                      border border-emerald-400/30
                      text-white
                      shadow-[0_20px_60px_rgba(16,185,129,0.25)]
                      flex flex-col justify-center"
                    >
                      <h3 className="text-lg font-semibold mb-3 text-emerald-300">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-300 leading-relaxed mb-4">
                        {item.desc}
                      </p>

                      <ul className="space-y-2 text-sm text-gray-200">
                        {item.points.map((point, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
