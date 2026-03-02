"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Which countries are best for MBBS abroad?",
      answer:
        "The choice depends on budget, regulatory compliance, language medium, and long-term licensing goals. We guide students through country comparison, university recognition, and eligibility evaluation before finalizing options.",
    },
    {
      question: "Is MBBS abroad valid in India?",
      answer:
        "Yes, provided the university is recognized and students qualify the required licensing examinations as per Indian medical regulatory guidelines. We ensure all recommended institutions meet compliance standards.",
    },
    {
      question: "What is the complete cost structure?",
      answer:
        "We provide transparent fee breakdowns covering tuition, hostel, documentation, visa, and other associated expenses — ensuring there are no hidden charges.",
    },
    {
      question: "Do you provide visa and travel assistance?",
      answer:
        "Yes. Our team supports documentation verification, visa application processing, and pre-departure orientation for a smooth transition.",
    },
    {
      question: "What happens after admission confirmation?",
      answer:
        "Our support continues post-admission with onboarding guidance, academic advisory support, and structured career planning aligned with future licensing requirements.",
    },
    {
      question: "Do you assist with FMGE / NExT preparation guidance?",
      answer:
        "Yes. We provide structured advisory guidance regarding licensing pathways and exam preparation strategy aligned with long-term medical career planning.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#020617] py-24 px-6 md:px-12 overflow-hidden">

      {/* Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 40%, rgba(0,168,150,0.12) 0%, transparent 70%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />

      {/* Brand Glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#00A896]/10 rounded-full blur-[160px]" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00A896]/10 border border-[#00A896]/30 mb-6">
            <HelpCircle size={16} className="text-[#00A896]" />
            <span className="text-xs font-semibold text-[#00A896] uppercase tracking-widest">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Clarifying Your Admission Journey
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Transparent, structured answers to common questions regarding MBBS
            admissions, compliance, cost, and long-term medical careers.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-[#00A896]/40 transition-colors"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-white font-medium text-sm md:text-base pr-6">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#00A896] bg-white/10 p-2.5 rounded-full hover:bg-[#00A896]/20 transition-colors flex items-center justify-center"
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faqs;