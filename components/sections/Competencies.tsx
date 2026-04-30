"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
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

const Competencies = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section id="competencies" className="relative py-24 overflow-hidden" ref={sectionRef}>
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <header className="mb-16 flex flex-col gap-6 border-b border-white/10 pb-10 transition-all duration-700 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-indigo-400 font-mono">
              [ CORE COMPETENCIES ]
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Competencias Técnicas
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end text-right">
            <p className="max-w-sm text-sm text-slate-400 md:text-base">
              Especialización en ingeniería de software con enfoque en escalabilidad, 
              experiencia de usuario y automatización inteligente.
            </p>
          </div>
        </header>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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
      </Container>
    </section>
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
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/30 p-8 transition-all duration-500 hover:border-indigo-500/40 hover:bg-slate-900/50 hover:shadow-2xl hover:shadow-indigo-500/10"
      style={{ 
        transitionDelay: isVisible ? animationDelay : '0ms',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-px bg-linear-to-br from-indigo-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-800/50 text-indigo-400 transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:border-indigo-500/20 group-hover:bg-indigo-500/5 group-hover:text-indigo-300"
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
