import AnimatedSection, { StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import UniversityCard from "@/components/UniversityCard";
import { UNIVERSITIES } from "@/lib/data";
import { BookOpen, GraduationCap, Building2, HelpCircle } from "lucide-react";

export default function StudyIndia() {
  const indianUniversities = UNIVERSITIES.filter(u => u.country === "India");

  return (
    <>
      {/* Header */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Study in India</h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
              Experience world-class education combined with rich cultural heritage. From premier engineering institutes to top medical colleges, India offers unparalleled academic opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 text-white flex items-center gap-2">
                 <Building2 size={20} className="text-accent" /> 1000+ Universities
               </div>
               <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 text-white flex items-center gap-2">
                 <GraduationCap size={20} className="text-accent" /> Globablly Recognized Degrees
               </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="mb-12">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Institutions</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Top Ranked Universities</h3>
          </AnimatedSection>
          
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indianUniversities.map((uni, i) => (
              <StaggerItem key={i}>
                <UniversityCard {...uni} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Admission Process (Timeline) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
           <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Simplified Admission Process</h3>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
             {[
               { step: "01", title: "Profile Evaluation", desc: "We assess your academic background and career goals." },
               { step: "02", title: "University Selection", desc: "Shortlisting colleges based on your preferences." },
               { step: "03", title: "Application & Documentation", desc: "Assistance with forms, SOPs, and LORs." },
               { step: "04", title: "Admission & Enrollment", desc: "Finalizing offer letters and securing your seat." },
             ].map((item, i) => (
               <AnimatedSection key={i} delay={i * 0.1} className="relative">
                 {/* Connecting line for desktop */}
                 {i < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-100 -z-10" />}
                 
                 <div className="bg-white border text-center border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden h-full">
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                       <div className="w-16 h-16 rounded-full bg-slate-50 text-accent font-black text-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                         {item.step}
                       </div>
                       <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors duration-300">{item.title}</h4>
                       <p className="text-slate-600 group-hover:text-slate-300 transition-colors duration-300">{item.desc}</p>
                    </div>
                 </div>
               </AnimatedSection>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <AnimatedSection className="text-center mb-16">
            <h3 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="text-accent" /> Frequently Asked Questions
            </h3>
          </AnimatedSection>

          <div className="space-y-4">
             {[
               { q: "What is the best time to apply for Indian universities?", a: "Most central and state universities accept applications between May and July. However, private university admissions often start as early as January." },
               { q: "Do you help with education loans?", a: "Yes, we have tie-ups with leading nationalized and private banks to help you secure education loans." },
               { q: "Is entrance exam coaching provided?", a: "While we specialize in admission consultancy, we provide guidance on which entrance exams to take and recommend top coaching partners." }
             ].map((faq, i) => (
               <AnimatedSection key={i} delay={i * 0.1}>
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-accent/30 transition-colors">
                    <h4 className="text-lg font-bold text-primary mb-2 flex justify-between items-center">
                      {faq.q}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                 </div>
               </AnimatedSection>
             ))}
          </div>
        </div>
      </section>
    </>
  );
}
