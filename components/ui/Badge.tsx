"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "warning";
  className?: string;
  icon?: React.ReactNode;
}

const Badge = ({ children, variant = "ghost", className, icon }: BadgeProps) => {
  const variants = {
    primary: "text-brand-primary bg-brand-primary/10 border-brand-primary/20",
    secondary: "text-brand-secondary bg-brand-secondary/10 border-brand-secondary/20",
    accent: "text-brand-accent bg-brand-accent/10 border-brand-accent/20",
    ghost: "text-slate-400 bg-white/5 border-white/10",
    warning: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-micro font-mono uppercase tracking-widest transition-colors",
      variants[variant],
      className
    )}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </div>
  );
};

export { Badge };
