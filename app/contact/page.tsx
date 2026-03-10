"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative py-16 sm:py-20 md:py-32 text-white overflow-hidden">

  {/* Dark Horizon Base */}
  <div
    className="absolute inset-0 -z-30"
    style={{
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
    }}
  />

  {/* Emerald Glow Layer */}
  <div
    className="absolute inset-0 -z-20"
    style={{
      backgroundImage: `
        radial-gradient(circle at 50% 60%, rgba(34,197,94,0.18) 0%, transparent 55%),
        radial-gradient(circle at 80% 20%, rgba(16,185,129,0.12) 0%, transparent 60%)
      `,
    }}
  />

  {/* Subtle animated glow */}
  <div className="absolute inset-0 -z-10 opacity-50 animate-oceanGlow" />

  {/* Text readability overlay */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

  <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">

    <AnimatedSection>

      <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm tracking-wider uppercase mb-8">
        Connect With Us
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        Let’s Build Your Global Career Path
      </h1>

      <p className="text-base md:text-xl text-slate-300 leading-relaxed">
        Whether you're planning overseas education or exploring medical
        pathways, our advisors are here to guide you with clarity and precision.
      </p>

    </AnimatedSection>

  </div>

</section>

      {/* ================= CONTACT SECTION ================= */}

<section className="relative py-24 overflow-hidden">

  {/* Emerald Void Background */}
  <div
    className="absolute inset-0 -z-30"
    style={{
      background:
        "radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)",
    }}
  />

  {/* Emerald Glow */}
  <div
    className="absolute inset-0 -z-20"
    style={{
      background:
        "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,0.15), transparent 60%)",
    }}
  />

  {/* Subtle grid overlay */}
  <div className="absolute inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:90px_90px]" />

  <div className="max-w-7xl mx-auto px-6 md:px-12">

    {/* Glass Container */}
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">

      <div className="grid lg:grid-cols-5 gap-16">

        {/* LEFT INFO */}
        <div className="lg:col-span-2">

          <AnimatedSection>

            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">

              {[
                {
                  icon: MapPin,
                  title: "Corporate Office",
                  content:
                    "Nawal Kishore Road, Behind CBI Office, Front of Padmakar Bhawan Hazratganj, Lucknow, Uttar Pradesh 226001",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+91 8881966002 | 8881966001",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "medivisioncareerpvtlt@gmail.com",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  content: "Mon – Sat: 10 AM – 6:30 PM",
                },
              ].map((item, i) => (

                <div key={i} className="flex gap-5">

                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <item.icon size={20} />
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                </div>

              ))}

            </div>

          </AnimatedSection>

        </div>


        {/* CONTACT FORM */}
        <div className="lg:col-span-3">

          <AnimatedSection delay={0.1}>

            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              Send a Message
            </h3>

            <p className="text-gray-400 mb-10">
              Our team typically responds within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  required
                  placeholder="Full Name"
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 outline-none transition"
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 outline-none transition"
                />

              </div>

              <textarea
                rows={6}
                required
                placeholder="Tell us about your goals..."
                className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 outline-none transition resize-none"
              />

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold flex items-center justify-center gap-3 hover:shadow-[0_10px_40px_rgba(16,185,129,0.35)] transition"
              >

                {formStatus === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}

              </button>

            </form>

          </AnimatedSection>

        </div>

      </div>

    </div>

  </div>

</section>
    </>
  );
}