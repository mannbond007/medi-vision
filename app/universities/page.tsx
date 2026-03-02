"use client";

import { useState } from "react";
import AnimatedSection, { StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import UniversityCard from "@/components/UniversityCard";
import { UNIVERSITIES, COUNTRIES } from "@/lib/data";
import { Filter } from "lucide-react";

export default function UniversitiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredUniversities = activeFilter === "All" 
    ? UNIVERSITIES 
    : UNIVERSITIES.filter(u => u.country === activeFilter);

  const filters = ["All", "India", ...COUNTRIES.map(c => c.name)];

  return (
    <>
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-[0.05]" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Partner Universities</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Explore our extensive network of top-ranked institutions across the globe and find the perfect match for your academic profile.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-slate-50 min-h-[50vh]">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Filters */}
          <AnimatedSection className="mb-12 flex flex-col items-center">
            <div className="flex items-center gap-2 text-slate-500 font-medium mb-4">
              <Filter size={18} /> Filter by Destination
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter 
                      ? "bg-accent text-white shadow-md" 
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <StaggerChildren key={activeFilter} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((uni, i) => (
                <StaggerItem key={i}>
                  <div className="h-full">
                    <UniversityCard {...uni} />
                  </div>
                </StaggerItem>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-slate-500">
                No universities found for this destination yet.
              </div>
            )}
          </StaggerChildren>
          
        </div>
      </section>
    </>
  );
}
