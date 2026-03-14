"use client";

import AnimatedSection, {
  StaggerChildren,
  StaggerItem,
} from "@/components/AnimatedSection";
import {
  Award,
  FileText,
  Globe,
  GraduationCap,
  Plane,
  Stethoscope,
  Users,
} from "lucide-react";

export default function PlatformsPage() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Global Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), #000000",
        }}
      />

      <div className="relative z-10">
        {/* HERO */}
        <section className="py-28 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Explore Our Education Platforms
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
              Our digital platforms are designed to help students discover
              leading universities, explore global education opportunities, and
              navigate the admission process with confidence and expert
              guidance.
            </p>
          </AnimatedSection>
        </section>

        {/* PLATFORM SHOWCASE */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {/* MBBS Route */}
              <StaggerItem className="h-full">
                <div className="h-full flex flex-col p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                    <Globe className="text-purple-400" size={34} />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    MBBS Route
                  </h3>

                  <p className="text-slate-400 mb-6">
                    A trusted platform helping students secure MBBS admission in
                    top medical universities across Russia, Georgia and
                    Kazakhstan.
                  </p>

                  <a
                    href="https://mbbsroute.com/"
                    target="_blank"
                    className="mt-auto text-purple-400 font-medium hover:text-purple-300"
                  >
                    Visit Platform →
                  </a>
                </div>
              </StaggerItem>

              {/* University Discovery */}
              <StaggerItem className="h-full">
                <div className="h-full flex flex-col p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                    <GraduationCap className="text-purple-400" size={34} />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    University Discovery
                  </h3>

                  <p className="text-slate-400 mb-6">
                    Explore medical universities worldwide and compare admission
                    requirements, tuition fees and ranking information.
                  </p>

                  <span className="mt-auto text-purple-400 font-medium">
                    Explore Universities →
                  </span>
                </div>
              </StaggerItem>

              {/* Admission Assistance */}
              <StaggerItem className="h-full">
                <div className="h-full flex flex-col p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                    <FileText className="text-purple-400" size={34} />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Admission Assistance
                  </h3>

                  <p className="text-slate-400 mb-6">
                    Professional support for application submission,
                    documentation verification and admission confirmation.
                  </p>

                  <span className="mt-auto text-purple-400 font-medium">
                    Learn More →
                  </span>
                </div>
              </StaggerItem>

              {/* Scholarship Guidance */}
              <StaggerItem className="h-full">
                <div className="h-full flex flex-col p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                    <Award className="text-purple-400" size={34} />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Scholarship Guidance
                  </h3>

                  <p className="text-slate-400 mb-6">
                    Discover available scholarships and financial support
                    programs for international medical students.
                  </p>

                  <span className="mt-auto text-purple-400 font-medium">
                    View Opportunities →
                  </span>
                </div>
              </StaggerItem>

              {/* Visa & Travel */}
              <StaggerItem className="h-full">
                <div className="h-full flex flex-col p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                    <Plane className="text-purple-400" size={34} />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Visa & Travel Support
                  </h3>

                  <p className="text-slate-400 mb-6">
                    Complete assistance for visa applications, travel
                    arrangements and pre-departure guidance.
                  </p>

                  <span className="mt-auto text-purple-400 font-medium">
                    Get Guidance →
                  </span>
                </div>
              </StaggerItem>

              {/* Student Community */}
              <StaggerItem className="h-full">
                <div className="h-full flex flex-col p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                    <Users className="text-purple-400" size={34} />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Student Community
                  </h3>

                  <p className="text-slate-400 mb-6">
                    Connect with students already studying abroad and learn from
                    their real experiences.
                  </p>

                  <span className="mt-auto text-purple-400 font-medium">
                    Join Community →
                  </span>
                </div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </section>

        {/* TRUST STATS */}
        <section className="py-24">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Trusted by Thousands of Students
              </h2>

              <div className="w-28 h-1 mx-auto mt-4 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]"></div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Universities */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
                <h3 className="text-4xl md:text-5xl font-bold text-purple-400 mb-3">
                  400+
                </h3>
                <p className="text-slate-400 text-lg">Partner Universities</p>
              </div>

              {/* Admissions */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
                <h3 className="text-4xl md:text-5xl font-bold text-purple-400 mb-3">
                  2500+
                </h3>
                <p className="text-slate-400 text-lg">Successful Admissions</p>
              </div>

              {/* Experience */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
                <h3 className="text-4xl md:text-5xl font-bold text-purple-400 mb-3">
                  15+
                </h3>
                <p className="text-slate-400 text-lg">Years of Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24">
          <div className="container mx-auto px-6 md:px-12">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                How MBBS Route Helps Students
              </h2>

              <div className="w-28 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Feature Card */}
              <div className="md:col-span-2 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src="/bento_01.png"
                    alt="Discover Universities"
                    className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-purple-600 text-white rounded-full">
                    Featured
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Discover Top Medical Universities
                </h3>

                <p className="text-slate-400 leading-relaxed max-w-xl">
                  MBBS Route helps students explore leading medical universities
                  across Russia, Georgia, Kazakhstan and other destinations.
                  Compare tuition fees, admission requirements and choose the
                  right university for your future medical career.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-5 aspect-[16/9]">
                  <img
                    src="/bento_02.jpg"
                    alt="Expert Counseling"
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Soft Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  Expert Counseling
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  Get personalized guidance from experienced counselors who help
                  students choose the right country and university.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src="/bento_03.jpg"
                    alt="Admission Assistance"
                    className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Soft Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  Admission Assistance
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  Our team supports students with application submission,
                  document preparation, and admission confirmation to leading
                  medical universities abroad.
                </p>
              </div>

              {/* Card 4 */}
              <div className="md:col-span-2 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src="/bento_04.png"
                    alt="Visa & Travel Assistance"
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Soft Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Visa & Travel Assistance
                </h3>

                <p className="text-slate-400 leading-relaxed max-w-xl">
                  From visa documentation to travel preparation, MBBS Route
                  ensures students are fully prepared before beginning their
                  medical education abroad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 relative">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#0b0615] to-black" />

          <div className="md:grid md:grid-cols-2 max-w-6xl bg-white/5 border border-white/10 backdrop-blur-xl mx-4 md:mx-auto rounded-3xl overflow-hidden shadow-xl">
            {/* Image */}
            <img
              src="/cta.png"
              alt="Students studying MBBS abroad"
              className="hidden md:block w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative flex items-center justify-center">
              <div className="py-20 px-8 md:px-14 text-center md:text-left">
                {/* Small Label */}
                <span className="inline-flex items-center gap-2 text-sm text-purple-400 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
  <Stethoscope size={16} className="text-purple-400" />
  Medical Education Consultancy
</span>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Begin Your{" "}
                  <span className="text-purple-400">MBBS Abroad</span> Journey
                  With Expert Guidance
                </h2>

                {/* Paragraph */}
                <p className="mt-6 text-slate-400 max-w-lg leading-relaxed">
                  Turn your dream of becoming a doctor into reality. Our expert
                  counselors help you secure admission in top medical
                  universities across Russia, Georgia, Kazakhstan, Uzbekistan
                  and other leading destinations with complete support from
                  admission to visa.
                </p>

                {/* Trust Line */}
                <p className="mt-4 text-sm text-slate-500">
                  Trusted by hundreds of students for medical admissions abroad.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://mbbsroute.com/contact-us/"
                    target="_blank"
                    className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium transition shadow-lg shadow-purple-600/30"
                  >
                    Get Free Consultation
                  </a>

                  <button className="px-6 py-3 rounded-xl border border-white/20 text-slate-300 hover:bg-white/10 transition">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
