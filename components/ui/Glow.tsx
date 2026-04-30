"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowProps {
  color?: string;
  className?: string;
  opacity?: number;
  variant?: "primary" | "secondary" | "accent";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
}

const Glow = ({ 
  color, 
  className, 
  opacity = 1,
  variant = "primary",
  position = "center"
}: GlowProps) => {
  const variantColors = {
    primary: "bg-brand-primary",
    secondary: "bg-brand-secondary",
    accent: "bg-brand-accent",
  };

  const positions = {
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div 
      className={cn(
        "absolute w-[500px] h-[500px] rounded-full blur-[128px] pointer-events-none -z-10",
        variantColors[variant],
        positions[position],
        className
      )}
      style={{ 
        opacity: opacity,
        backgroundColor: color || undefined 
      }}
    />
  );
};

export { Glow };
