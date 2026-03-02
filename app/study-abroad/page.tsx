import AnimatedSection, { StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import CountryCard from "@/components/CountryCard";
import { COUNTRIES } from "@/lib/data";
import { Plane, Award, FileText, Landmark } from "lucide-react";
import Image from "next/image";

export default function StudyAbroad() {
  return (
    <>
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Plane size={32} className="text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Take Your Ambitions Global</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Unlock international career prospects with degrees from the world's most prestigious universities. We decode the complex process of overseas admissions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Destinations</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Top Study Abroad Options</h3>
          </AnimatedSection>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {COUNTRIES.map((country, i) => (
              <StaggerItem key={i}>
                <div className="h-full">
                  <CountryCard {...country} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Support Services (Visa & Scholarships) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
           <div className="grid md:grid-cols-2 gap-12">
             
             {/* Visa */}
             <AnimatedSection className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col items-start gap-6 relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm text-primary flex items-center justify-center z-10">
                  <FileText size={28} />
                </div>
                <div className="z-10">
                  <h3 className="text-2xl font-bold text-primary mb-4">Visa Assistance</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Our dedicated visa team ensures your documentation is flawless. We conduct mock interviews, financial documentation checks, and guide you through the embassy protocols.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">✓ Document Checklist Preparation</li>
                    <li className="flex items-center gap-2">✓ Financial Statement Review</li>
                    <li className="flex items-center gap-2">✓ Interview Preparation</li>
                  </ul>
                </div>
             </AnimatedSection>

             {/* Scholarships */}
             <AnimatedSection delay={0.1} className="bg-primary text-white p-10 rounded-3xl flex flex-col items-start gap-6 relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />
                <div className="w-14 h-14 bg-white/10 rounded-xl text-accent flex items-center justify-center z-10 backdrop-blur-sm">
                  <Landmark size={28} />
                </div>
                <div className="z-10">
                  <h3 className="text-2xl font-bold mb-4">Scholarship Guidance</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Studying abroad doesn't have to be a financial burden. We help you identify and apply for merit-based, need-based, and country-specific scholarships.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-200 font-medium">
                     <li className="flex items-center gap-2">✓ Profile-based Scholarship Search</li>
                     <li className="flex items-center gap-2">✓ Application Essay Assistance</li>
                     <li className="flex items-center gap-2">✓ University Grant Negotiation</li>
                  </ul>
                </div>
             </AnimatedSection>

           </div>
        </div>
      </section>
    </>
  );
}
