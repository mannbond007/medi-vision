"use client";

import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface UniversityCardProps {
  name: string;
  country: string;
  description: string;
}

export default function UniversityCard({ name, country, description }: UniversityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
    >
      <div className="flex-1">
        <div className="flex items-center gap-2 text-accent text-sm font-medium mb-3">
          <MapPin size={16} />
          {country}
        </div>
        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{name}</h3>
        <p className="text-slate-600 text-sm line-clamp-3 mb-6">{description}</p>
      </div>
      <button className="mt-auto w-full py-2.5 rounded-xl border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
        Apply Now <ArrowRight size={16} />
      </button>
    </motion.div>
  );
}
