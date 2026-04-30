"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionShellProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "transparent" | "slate" | "surface";
  showGrid?: boolean;
  gridOpacity?: number;
  as?: React.ElementType;
}

const SectionShell = ({
  id,
  children,
  className,
  containerClassName,
  background = "transparent",
  showGrid = false,
  gridOpacity = 0.05,
  as: Component = "section"
}: SectionShellProps) => {
  const backgrounds = {
    transparent: "bg-transparent",
    slate: "bg-slate-950",
    surface: "bg-slate-950/50",
  };

  return (
    <Component 
      id={id} 
      className={cn(
        "relative py-32 overflow-hidden",
        backgrounds[background],
        className
      )}
    >
      {showGrid && (
        <div 
          className="absolute inset-0 blueprint-grid pointer-events-none -z-10" 
          style={{ opacity: gridOpacity }} 
        />
      )}
      
      <Container className={cn("relative z-10", containerClassName)}>
        {children}
      </Container>
    </Component>
  );
};

export { SectionShell };
