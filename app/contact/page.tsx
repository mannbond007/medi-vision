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
      <section className="relative py-32 text-white overflow-hidden">
        {/* Base Ocean Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%)",
          }}
        />

        {/* Animated Glow */}
        <div className="absolute inset-0 z-0 animate-oceanGlow opacity-60" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm tracking-wider uppercase mb-8">
              Connect With Us
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Let’s Build Your Global Career Path
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Whether you're planning overseas education or exploring medical
              pathways, our advisors are here to guide you with clarity and
              precision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative py-32 overflow-hidden bg-black">
        {/* ===== SECTION BACKGROUND ===== */}
        <div
          className="absolute inset-0 -z-30"
          style={{
            background: `
        radial-gradient(75% 55% at 50% 35%, #1c4b68 0%, #123a56 30%, #0c2b45 55%, #071f35 75%, #041425 100%)
      `,
          }}
        />

        {/* Subtle Accent Glow */}
        <div
          className="absolute inset-0 -z-20 opacity-60"
          style={{
            background: `
        radial-gradient(60% 60% at 80% 20%, rgba(0,200,255,0.08), transparent 70%),
        radial-gradient(60% 60% at 20% 80%, rgba(138,43,226,0.06), transparent 70%)
      `,
          }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* ===== AURORA GLASS CARD ===== */}
          <div className="relative overflow-hidden rounded-[36px] p-10 md:p-20 shadow-[0_60px_160px_-30px_rgba(0,0,0,0.85)] border border-white/20 backdrop-blur-3xl bg-black/40">
            {/* Northern Aurora (Inside Card) */}
            <div
              className="absolute inset-0 -z-20"
              style={{
                background: `
            radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255, 20, 147, 0.15), transparent 50%),
            radial-gradient(ellipse 160% 130% at 10% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
            radial-gradient(ellipse 160% 130% at 90% 90%, rgba(138, 43, 226, 0.18), transparent 65%),
            radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
            #000000
          `,
              }}
            />

            {/* Dark Overlay for Text Visibility */}
            <div className="absolute inset-0 -z-10 bg-black/55" />

            <div className="relative z-10">
              <div className="grid lg:grid-cols-5 gap-20 max-w-7xl mx-auto items-start">
                {/* ===== LEFT SIDE ===== */}
                <div className="lg:col-span-2">
                  <AnimatedSection>
                    <h3 className="text-3xl font-bold text-white mb-12">
                      Contact Information
                    </h3>

                    <div className="space-y-10">
                      {[
                        {
                          icon: MapPin,
                          title: "Corporate Office",
                          content: "Nawal Kishore Road,Behind CBI Office, Front of Padmakar Bhawan Hazrtganj, Lucknow, Uttar Pradesh 226001",
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
                        <div key={i} className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-white/10 text-accent rounded-full flex items-center justify-center shrink-0 backdrop-blur-md">
                            <item.icon size={26} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2 text-lg">
                              {item.title}
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>

                {/* ===== RIGHT SIDE FORM ===== */}
                <div className="lg:col-span-3">
                  <AnimatedSection delay={0.1}>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Send a Message
                    </h3>

                    <p className="text-slate-300 mb-12">
                      Our team typically responds within 24 hours.
                    </p>

                    {formStatus === "success" ? (
                      <div className="text-center py-16">
                        <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Send size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-green-400">
                          Message Sent Successfully
                        </h4>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="grid md:grid-cols-2 gap-8">
                          <input
                            required
                            placeholder="Full Name"
                            className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/10 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition backdrop-blur-sm"
                          />
                          <input
                            type="email"
                            required
                            placeholder="Email Address"
                            className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/10 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition backdrop-blur-sm"
                          />
                        </div>

                        <textarea
                          rows={6}
                          required
                          placeholder="Tell us about your goals..."
                          className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/10 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition resize-none backdrop-blur-sm"
                        />

                        <button
                          type="submit"
                          disabled={formStatus === "submitting"}
                          className="w-full bg-gradient-to-r from-primary to-accent text-white py-5 rounded-2xl font-semibold hover:shadow-xl transition flex justify-center items-center gap-3"
                        >
                          {formStatus === "submitting" ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message <Send size={18} />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SINGLE CLEAN STYLE BLOCK ================= */}
      <style jsx>{`
        .animate-floatSlow {
          animation: floatSlow 20s ease-in-out infinite alternate;
        }

        .animate-floatSlowReverse {
          animation: floatSlowReverse 25s ease-in-out infinite alternate;
        }

        .animate-oceanGlow {
          background:
            radial-gradient(
              40% 40% at 30% 30%,
              rgba(0, 150, 255, 0.15),
              transparent 70%
            ),
            radial-gradient(
              40% 40% at 70% 70%,
              rgba(0, 200, 255, 0.12),
              transparent 70%
            );
          animation: floatGlow 18s ease-in-out infinite alternate;
        }

        @keyframes floatSlow {
          0% {
            transform: translate(0px, 0px);
          }
          100% {
            transform: translate(40px, -40px);
          }
        }

        @keyframes floatSlowReverse {
          0% {
            transform: translate(0px, 0px);
          }
          100% {
            transform: translate(-40px, 40px);
          }
        }

        @keyframes floatGlow {
          0% {
            transform: translateY(-20px) translateX(-20px) scale(1);
          }
          100% {
            transform: translateY(20px) translateX(20px) scale(1.1);
          }
        }
      `}</style>
    </>
  );
}
