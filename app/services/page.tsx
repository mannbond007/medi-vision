import AnimatedSection, {
  StaggerChildren,
  StaggerItem,
} from "@/components/AnimatedSection";
import { SERVICES } from "@/lib/data";
import {
  GraduationCap,
  FileText,
  FileCheck,
  CircleCheckBig,
  Home,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-24 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 0%, #000000 30%, #072607 100%)",
          }}
        />

        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-center mb-16">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full 
                border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-300"
              >
                <CircleCheckBig className="w-5 h-5 text-emerald-400" />

                <span className="text-lg">Our Services</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                Study Abroad Made Easy
              </h2>

              {/* Decorative Line */}
              <div className="flex justify-center mt-6">
                <div className="w-52 h-[3px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"></div>
              </div>
            </div>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From selecting the right university to securing your visa, we
              guide students through every step of their international education
              journey.
            </p>
          </div>

          {/* Layout */}
          <div className="grid lg:grid-cols-2 items-center gap-14">
            {/* Image */}
            <div className="relative flex justify-center lg:justify-start w-full lg:pr-8">
              {/* Glow */}
              <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[420px] h-[420px] md:w-[520px] md:h-[520px] bg-emerald-500/20 blur-[150px] rounded-full"></div>

              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
                alt="Students studying abroad"
                className="
                relative
                w-[700px]
                max-w-full
                md:max-w-[700px]
                object-contain
                lg:-ml-6
    "
              />
            </div>

            {/* Services */}
            <div className="space-y-5">
              {/* Card */}
              <div className="flex gap-4 p-5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition">
                <div className="flex items-center justify-center size-14 rounded-full bg-gradient-to-br bg-emerald-500/15 border border-emerald-400/30 shrink-0">
                  <GraduationCap className="size-7 text-white" />
                </div>

                <div>
                  <h3 className="text-white font-medium">
                    University Selection
                  </h3>

                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Personalized counseling to help you choose the best
                    universities aligned with your academic and career goals.
                  </p>
                </div>
              </div>

              {/* Card */}
              <div className="flex gap-4 p-5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition">
                <div className="flex items-center justify-center size-14 rounded-full bg-cyan-500/20 border border-cyan-400/20 shrink-0">
                  <FileText className="size-7 text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-white font-medium">
                    Application Assistance
                  </h3>

                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Guidance for documentation, SOP writing, and application
                    submission to maximize acceptance chances.
                  </p>
                </div>
              </div>

              {/* Card */}
              <div className="flex gap-4 p-5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition">
                <div className="flex items-center justify-center size-14 rounded-full bg-orange-500/20 border border-orange-400/20 shrink-0">
                  <FileCheck className="size-7 text-orange-400" />
                </div>

                <div>
                  <h3 className="text-white font-medium">Visa Assistance</h3>

                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Complete visa guidance including financial documentation,
                    interview preparation, and application tracking.
                  </p>
                </div>
              </div>

              {/* Card */}
              <div className="flex gap-4 p-5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition">
                <div className="flex items-center justify-center size-14 rounded-full bg-purple-500/20 border border-purple-400/20 shrink-0">
                  <Home className="size-7 text-purple-400" />
                </div>

                <div>
                  <h3 className="text-white font-medium">
                    Accommodation Assistance
                  </h3>

                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Support in finding safe and affordable housing options
                    including university dormitories and private accommodations
                    near campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="relative w-full min-h-screen overflow-hidden py-36"
        style={{
          background: `
      radial-gradient(120% 120% at 50% 0%, rgba(34,197,94,0.25) 0%, transparent 60%),
      radial-gradient(100% 80% at 10% 20%, rgba(34,197,94,0.15), transparent 70%),
      radial-gradient(100% 80% at 90% 30%, rgba(34,197,94,0.12), transparent 70%),
      #000000
    `,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-28">
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Study Abroad Services
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              From choosing the right university to securing your visa, we guide
              you through every step of your international education journey.
            </p>
          </div>

          {/* Services Grid */}
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;

              return (
                <StaggerItem key={index}>
                  <div className="group relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-black/70 backdrop-blur-xl p-10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40">
                    {/* Subtle Card Highlight */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-emerald-500/10 blur-xl pointer-events-none" />

                    {/* Icon + Badge */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400">
                        <Icon size={26} />
                      </div>

                      {service.highlight && (
                        <span className="text-xs text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full">
                          {service.highlight}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && (
                      <ul className="mt-7 space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex text-sm text-gray-300">
                            <span className="text-emerald-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* cta */}
      <section className="relative w-full py-36 overflow-hidden">
        {/* Emerald Aurora Background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
        radial-gradient(120% 120% at 50% 0%, rgba(34,197,94,0.25) 0%, transparent 60%),
        radial-gradient(100% 80% at 10% 20%, rgba(34,197,94,0.15), transparent 70%),
        radial-gradient(100% 80% at 90% 30%, rgba(34,197,94,0.12), transparent 70%),
        #000000
      `,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-white">
              Talk With Our Experts
            </h2>

            <p className="mt-4 text-gray-400 text-lg">
              Our team is here to guide you through every step of your admission
              journey. Contact our experts and get personalized support.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 flex items-stretch justify-center gap-10">
            {/* Card 1 */}
            <div className="group text-gray-400 w-[360px] divide-y divide-white/10 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-xl hover:border-emerald-400/50 hover:scale-105 transition duration-300">
              <div className="flex items-start justify-between p-7">
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-xl text-white font-medium">
                      James Washington
                    </h2>
                    <p className="bg-emerald-500/20 px-2 py-0.5 rounded-full text-xs text-emerald-400 border border-emerald-500/30">
                      Admin
                    </p>
                  </div>

                  <p className="text-gray-400 mt-1 text-sm">
                    Content Marketing
                  </p>
                </div>

                <img
                  className="h-14 w-14 rounded-full ring-2 ring-emerald-500/30"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100"
                  alt="James Washington"
                />
              </div>

              <div className="flex items-center divide-x divide-white/10">
                <a
                  href="mailto:medivisoncareerpvtltd@gmail.com"
                  className="flex items-center justify-center gap-2 w-1/2 py-4 hover:bg-white/5 hover:text-white transition"
                >
                  Send Email
                </a>

                <a
                  href="tel:+91 8881966002"
                  className="flex items-center justify-center gap-2 w-1/2 py-4 hover:bg-white/5 hover:text-white transition"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group text-gray-400 w-[360px] divide-y divide-white/10 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-xl hover:border-emerald-400/50 hover:scale-105 transition duration-300">
              <div className="flex items-start justify-between p-7">
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-xl text-white font-medium">
                      Richard Nelson
                    </h2>
                    <p className="bg-emerald-500/20 px-2 py-0.5 rounded-full text-xs text-emerald-400 border border-emerald-500/30">
                      Admin
                    </p>
                  </div>

                  <p className="text-gray-400 mt-1 text-sm">Content Writer</p>
                </div>

                <img
                  className="h-14 w-14 rounded-full ring-2 ring-emerald-500/30"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"
                  alt="Richard Nelson"
                />
              </div>

              <div className="flex items-center divide-x divide-white/10">
                <button className="flex items-center justify-center gap-2 w-1/2 py-4 hover:bg-white/5 hover:text-white transition">
                  Send Email
                </button>
                <button className="flex items-center justify-center gap-2 w-1/2 py-4 hover:bg-white/5 hover:text-white transition">
                  Call Now
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group text-gray-400 w-[360px] divide-y divide-white/10 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-xl hover:border-emerald-400/50 hover:scale-105 transition duration-300">
              <div className="flex items-start justify-between p-7">
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-xl text-white font-medium">
                      Donald Jackman
                    </h2>
                    <p className="bg-emerald-500/20 px-2 py-0.5 rounded-full text-xs text-emerald-400 border border-emerald-500/30">
                      Admin
                    </p>
                  </div>

                  <p className="text-gray-400 mt-1 text-sm">Content Creator</p>
                </div>

                <img
                  className="h-14 w-14 rounded-full ring-2 ring-emerald-500/30"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
                  alt="Donald Jackman"
                />
              </div>

              <div className="flex items-center divide-x divide-white/10">
                <button className="flex items-center justify-center gap-2 w-1/2 py-4 hover:bg-white/5 hover:text-white transition">
                  Send Email
                </button>
                <button className="flex items-center justify-center gap-2 w-1/2 py-4 hover:bg-white/5 hover:text-white transition">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
