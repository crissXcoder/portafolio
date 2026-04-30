"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: string;
}

const GlassCard = ({ 
  children, 
  className, 
  hoverEffect = true, 
  glowColor = "var(--color-brand-primary)",
  ...props 
}: GlassCardProps) => {
  return (
    <motion.div
      {...props}
      className={cn(
        "glass-card group relative",
        hoverEffect && "glass-card-hover",
        className
      )}
    >
      {/* Dynamic Glow Effect */}
      {hoverEffect && (
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl pointer-events-none rounded-[inherit]"
          style={{ backgroundColor: glowColor }}
        />
      )}
      
      {/* Content wrapper to ensure z-index priority over glow */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export { GlassCard };
