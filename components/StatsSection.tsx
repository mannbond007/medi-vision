"use client";

import AnimatedSection, { StaggerChildren, StaggerItem } from "./AnimatedSection";
import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Track Record</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We take pride in our impressive history of placing students globally.
            </p>
          </div>
        </AnimatedSection>
        
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <StaggerItem key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-slate-300 font-medium">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
