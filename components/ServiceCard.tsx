"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  // @ts-ignore
  const IconComponent = Icons[icon] || Icons.HelpCircle;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-slate-50 text-accent flex items-center justify-center mb-6">
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
