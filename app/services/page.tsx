import AnimatedSection, { StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary py-24 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-[20vw] -left-[20vw] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              We offer a comprehensive suite of services designed to make your journey to global education as smooth and successful as possible.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICES.map((service, i) => (
              <StaggerItem key={i}>
                <div className="h-full">
                  <ServiceCard {...service} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
         <div className="container mx-auto px-6 md:px-12">
           <AnimatedSection className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 p-12 rounded-3xl shadow-sm">
             <h2 className="text-3xl font-bold text-primary mb-4">Need a Custom Solution?</h2>
             <p className="text-slate-600 mb-8">
               Every student's profile is unique. Contact us to discuss your specific requirements and get a tailored application strategy.
             </p>
             <a href="/contact" className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-xl hover:bg-slate-800 transition-colors">
               Speak with a Counselor
             </a>
           </AnimatedSection>
         </div>
      </section>
    </>
  );
}
