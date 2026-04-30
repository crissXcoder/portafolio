"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  icon?: React.ReactNode;
}

const SectionHeader = ({ 
  eyebrow, 
  title, 
  highlight, 
  description, 
  align = "left", 
  className,
  icon 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-16",
      align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-4xl",
      className
    )}>
      <motion.div
        initial={{ opacity: 0, x: align === "center" ? 0 : -20, y: align === "center" ? 20 : 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-micro font-mono tracking-[0.3em] uppercase mb-6 shadow-[0_0_15px_rgba(99,102,241,0.1)]",
          align === "center" && "mx-auto"
        )}
      >
        {icon && icon}
        {eyebrow}
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-h2 md:text-h1 font-sans font-bold text-white tracking-tight leading-tight"
      >
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-brand-accent to-brand-secondary font-serif italic font-medium">
            {highlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-text-muted text-body-lg leading-relaxed text-balance"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export { SectionHeader };

