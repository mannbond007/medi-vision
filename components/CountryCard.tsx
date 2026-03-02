"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CountryCardProps {
  name: string;
  description: string;
}

export default function CountryCard({ name, description }: CountryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
    >
      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
        🌍
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{name}</h3>
      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex items-center text-accent font-medium text-sm gap-1 group-hover:gap-2 transition-all">
        Explore <ArrowRight size={16} />
      </div>
    </motion.div>
  );
}
