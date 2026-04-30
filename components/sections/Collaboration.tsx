"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Database, Server, Smartphone, Layout, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

import { portfolioData, type ContributionArea } from "@/data/portfolio";

const Collaboration = () => {
  return (
    <section id="collaboration" className="py-24 bg-slate-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-indigo-400 tracking-[0.3em] uppercase mb-3">
            [ SERVICES ]
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Áreas de Colaboración
          </h3>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Soluciones técnicas enfocadas en la eficiencia, la escalabilidad y la integración de tecnologías emergentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.contributionAreas.map((area: ContributionArea, index: number) => {
            const iconMap: Record<string, LucideIcon> = {
              "Desarrollo Frontend": Code,
              "Bases de Datos": Database,
              "Datos e IA Aplicada": Brain,
              "Desarrollo Backend": Server,
              "UI/UX Aplicado": Layout,
              "Sistemas Móviles": Smartphone,
              "Análisis y Arquitectura": Brain,
            };

            return (
              <CollaborationCard 
                key={area.title} 
                area={{
                  ...area,
                  icon: iconMap[area.title] || Code
                }} 
                index={index} 
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const CollaborationCard = ({ area, index }: { area: ContributionArea & { icon: LucideIcon }; index: number }) => {
  const Icon = area.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-slate-900/40 border border-white/5 rounded-2xl p-8 hover:border-indigo-500/30 hover:bg-slate-900/60 transition-all duration-300"
    >
      {/* Corner Squares (Engineering Deco) */}
      <div className="absolute -top-px -left-px h-3 w-3 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -top-px -right-px h-3 w-3 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-px -left-px h-3 w-3 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-px -right-px h-3 w-3 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-800/50 text-white mb-6 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors">
        <Icon className="h-6 w-6" />
      </div>

      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
        {area.title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {area.description}
      </p>

      <ul className="flex flex-wrap gap-2">
        {area.keyTechs.map((feature: string) => (
          <li key={feature} className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-2 py-1 bg-slate-950/50 rounded border border-white/5">
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export { Collaboration };
export default Collaboration;
