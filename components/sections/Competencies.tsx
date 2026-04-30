"use client";

import React, { useEffect, useRef, useState } from "react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData, type ContributionArea } from "@/data/portfolio";
import { 
  Layout, 
  Server, 
  Database, 
  GitBranch, 
  Palette, 
  BrainCircuit, 
  type LucideIcon 
} from "lucide-react";
import { cn } from "@/lib/utils";

const Competencies = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const iconMap: Record<string, LucideIcon> = {
    "Desarrollo Frontend": Layout,
    "Desarrollo Backend": Server,
    "Bases de Datos": Database,
    "Análisis y Arquitectura": GitBranch,
    "UI/UX Aplicado": Palette,
    "Datos e IA Aplicada": BrainCircuit,
  };

  return (
    <div ref={sectionRef as any}>
      <SectionShell 
        id="competencias" 
        showGrid={true}
        gridOpacity={0.03}
        background="transparent"
      >
        <SectionHeader 
          eyebrow="Core Competencies"
          title="Competencias"
          highlight="Técnicas"
          description="Especialización en ingeniería de software con enfoque en escalabilidad, experiencia de usuario y automatización inteligente."
          icon={<Layout className="w-3 h-3" />}
        />

        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000",
          sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {portfolioData.contributionAreas.map((area: ContributionArea, index: number) => (
            <SkillCard
              key={area.title}
              title={area.title}
              description={area.description}
              icon={iconMap[area.title] || Layout}
              skills={area.keyTechs}
              index={index}
              isVisible={sectionVisible}
            />
          ))}
        </div>
      </SectionShell>
    </div>
  );
};

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
  index: number;
  isVisible: boolean;
}

function SkillCard({ title, description, icon: Icon, skills, index, isVisible }: SkillCardProps) {
  const animationDelay = `${index * 100}ms`;

  return (
    <article
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border-subtle bg-surface-card p-8 transition-all duration-500 hover:border-brand-primary/40 hover:bg-slate-900/50 hover:shadow-2xl hover:shadow-brand-primary/10"
      style={{ 
        transitionDelay: isVisible ? animationDelay : '0ms',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-px bg-linear-to-br from-brand-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border-subtle bg-slate-800/50 text-brand-primary transition-all duration-500 group-hover:scale-110 group-hover:border-brand-primary/50 group-hover:bg-brand-primary/10 group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-h3 text-white mb-3">
          {title}
        </h3>
        <p className="text-body-sm text-text-muted group-hover:text-slate-300 transition-colors duration-300">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="rounded-lg border border-border-subtle bg-white/5 px-2.5 py-1 text-micro text-text-muted transition-colors duration-300 group-hover:border-brand-primary/20 group-hover:bg-brand-primary/5 group-hover:text-brand-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Bottom Pattern */}
      <div className="absolute bottom-0 right-0 h-24 w-24 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
        </svg>
      </div>
    </article>
  );
}

export { Competencies };
export default Competencies;

