"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { portfolioData, type ContributionArea } from "@/data/portfolio";
import { Layout, Server, BrainCircuit, Terminal, type LucideIcon } from "lucide-react";

const Competencies = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "bento2-animations";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      @keyframes bento2-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6%); }
      }
      @keyframes bento2-pulse {
        0%, 100% { transform: scale(1); opacity: 0.85; }
        50% { transform: scale(1.08); opacity: 1; }
      }
      @keyframes bento2-tilt {
        0% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg); }
        100% { transform: rotate(-2deg); }
      }
      @keyframes bento2-drift {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50% { transform: translate3d(6%, -6%, 0); }
      }
      @keyframes bento2-glow {
        0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 0 rgba(0,0,0,0.4)); }
        50% { opacity: 1; filter: drop-shadow(0 0 6px rgba(0,0,0,0.2)); }
      }
      @keyframes bento2-card {
        0% { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.96); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

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

  const spans = [
    "md:col-span-4 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-6 md:row-span-1", // Spanning full width for the last one if it's the 4th
  ];

  const animations = [
    "bento2-float 6s ease-in-out infinite",
    "bento2-pulse 4s ease-in-out infinite",
    "bento2-tilt 5.5s ease-in-out infinite",
    "bento2-glow 7s ease-in-out infinite",
  ];

  return (
    <section id="competencies" className="relative py-24 overflow-hidden" ref={sectionRef}>
      <Container>
        <header className="mb-16 flex flex-col gap-6 border-b border-white/10 pb-10 transition-colors duration-500 md:flex-row md:items-end md:justify-between">
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
              Un enfoque disciplinado en la ingeniería de software, combinando rigor académico con ejecución práctica.
            </p>
          </div>
        </header>

        <div className={`grid grid-cols-1 gap-4 md:auto-rows-[minmax(140px,auto)] md:grid-cols-6 transition-all duration-1000 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {portfolioData.contributionAreas.map((area: ContributionArea, index: number) => {
            const iconMap: Record<string, LucideIcon> = {
              "Desarrollo Web Full-stack": Layout,
              "Arquitectura de Datos": Server,
              "IA & Automatización": BrainCircuit,
              "Sistemas Backend": Terminal, // Using Terminal for Backend as a placeholder
            };

            const competency = {
              title: area.title,
              description: area.description,
              icon: iconMap[area.title] || Layout,
              skills: area.keyTechs,
              color: "indigo"
            };

            return (
              <BentoItem
                key={area.title}
                span={spans[index] || "md:col-span-3 md:row-span-1"}
                competency={competency}
                animation={animations[index] || "none"}
                index={index}
                isVisible={sectionVisible}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

interface BentoItemProps {
  competency: {
    title: string;
    description: string;
    icon: LucideIcon;
    skills: string[];
    color: string;
  };
  animation: string;
  span: string;
  index: number;
  isVisible: boolean;
}

function BentoItem({ competency, animation, span, index, isVisible }: BentoItemProps) {
  const { icon: Icon, title, description, skills } = competency;
  const animationDelay = `${Math.max(index * 0.12, 0)}s`;

  return (
    <article
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 p-6 shadow-2xl transition-all duration-300 ease-out hover:border-indigo-500/30 hover:bg-slate-900/60 ${span}`}
      style={{ 
        animation: isVisible ? `bento2-card 0.8s ease-out ${animationDelay} forwards` : 'none',
        opacity: isVisible ? 1 : 0
      }}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-slate-800/50 transition-colors duration-500 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10">
            <Icon
              className="h-6 w-6 text-white group-hover:text-indigo-400"
              strokeWidth={1.5}
              style={{ animation }}
            />
          </div>
          <div className="flex flex-wrap gap-1 justify-end max-w-[150px]">
            {skills.map(skill => (
              <span key={skill} className="rounded-full border border-white/5 bg-white/5 px-2 py-0.5 text-[8px] uppercase tracking-wider text-slate-500 font-mono">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold tracking-tight text-white transition-colors duration-500">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative Blueprint Corner */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-indigo-500/40" />
      </div>
    </article>
  );
}

export { Competencies };
export default Competencies;
