import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import {
  ArrowRight,
  Plane,
  Building2,
  Users,
  Star,
  Award,
  GraduationCap,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Premium Uniform Bento Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4">
              <div
                className="inline-flex items-center gap-2
  px-4 py-2
  rounded-full
  bg-[#00A896]/10
  border border-[#00A896]/30"
              >
                <ShieldCheck size={16} className="text-[#00A896]" />

                <h2 className="text-md font-semibold text-[#00A896] uppercase">
                  Why Medi Vision
                </h2>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Complete Admission & Career Support
            </h3>
            <p className="text-slate-600 text-base md:text-lg">
              Structured admission planning, expert documentation, and global
              partnerships designed to secure your academic and professional
              future.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Study Abroad */}
            <AnimatedSection className="bg-primary text-white rounded-2xl p-8 shadow-lg flex flex-col">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/20 shadow-sm">
                <Plane size={24} className="text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Study Abroad Programs
              </h3>
              <ul className="space-y-3 text-sm text-blue-200">
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </span>
                  University Shortlisting
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </span>
                  SOP & LOR Assistance
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </span>
                  Visa Interview Preparation
                </li>
              </ul>
            </AnimatedSection>

            {/* Visa Success */}
            <AnimatedSection className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/20 shadow-sm">
                <Award size={24} className="text-accent" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <h3 className="text-lg font-semibold mb-4">Visa Success Rate</h3>
              <p className="text-sm text-slate-600">
                High approval rate through structured documentation and expert
                review.
              </p>
            </AnimatedSection>

            {/* Partner Universities */}
            <AnimatedSection className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/20 shadow-sm">
                <Building2 size={24} className="text-accent" />
              </div>
              <div className="text-4xl font-bold text-slate-800 mb-2">500+</div>
              <h3 className="text-lg font-semibold mb-4">
                Partner Universities
              </h3>
              <p className="text-sm text-slate-600">
                Collaborations with globally accredited institutions.
              </p>
            </AnimatedSection>

            {/* Study in India */}
            <AnimatedSection className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/20 shadow-sm">
                <GraduationCap size={24} className="text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                Study in India
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </span>
                  Entrance Exam Guidance
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </span>
                  Direct Admission Support
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </span>
                  Documentation Assistance
                </li>
              </ul>
            </AnimatedSection>

            {/* Students Placed */}
            <AnimatedSection className="bg-accent text-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm">
                <Users size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <h3 className="text-lg font-semibold mb-4">
                Students Placed Globally
              </h3>
              <p className="text-sm text-teal-100">
                Helping students achieve international academic success for over
                a decade.
              </p>
            </AnimatedSection>

            {/* NEW CARD – Career Counseling */}
            <AnimatedSection className="bg-primary text-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Career Counseling & Profile Building
              </h3>
              <ul className="space-y-3 text-sm text-blue-200">
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </span>
                  Personalized Career Roadmap
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </span>
                  Academic Profile Enhancement
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </span>
                  Long-Term Planning Strategy
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Faqs Section */}
      <Faqs />

      {/* Simplified CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <AnimatedSection className="relative bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-12 md:p-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-6 leading-tight">
                Start Your Global Education Journey Today
              </h2>

              <p className="text-slate-600 text-lg mb-8">
                With over a decade of experience, Medi Vision provides
                structured admission strategy, documentation expertise, and
                international university partnerships to maximize your success.
              </p>

              {/* Professional Check Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5" />
                  Free Profile Evaluation
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5" />
                  Dedicated Visa Assistance
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5" />
                  Scholarship & Financial Guidance
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5" />
                  Post-Admission Support
                </div>
              </div>
            </div>

            {/* Right Side - Buttons + Branding */}
            <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  Book Free Consultation
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-300 text-primary font-semibold text-base hover:bg-slate-100 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>

              {/* Company Branding Below Buttons */}
              <div className="mt-20 w-full flex justify-end">
                <div className="relative text-right">
                  {/* Subtle Accent Line */}
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 h-10 w-[2px] bg-accent/40 hidden sm:block" />

                  <div className="flex flex-col items-end space-y-1">
                    <span className="text-2xl mr-[17.5px] font-extrabold text-primary tracking-tight leading-none">
                      Medi Vision
                    </span>

                    <span className="text-[11px] uppercase font-semibold text-accent tracking-[0.35em] leading-none">
                      Career Pvt. Ltd.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
