"use client";

import React from "react";
import { Check, Globe, Database, Sparkles, MessageCircle, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { SectionShell } from "@/components/ui/SectionShell";
import { Glow } from "@/components/ui/Glow";

const capabilities = [
  {
    title: "Sistemas Web",
    description: "Desarrollo de interfaces dinámicas y escalables con enfoque en rendimiento.",
    icon: Globe,
    color: "var(--color-brand-accent)",
    features: [
      "Interfaces modernas y responsivas",
      "Formularios dinámicos y validación",
      "Dashboards de administración",
      "Integración con APIs REST/GraphQL",
      "Sitios institucionales y landings",
    ],
  },
  {
    title: "Bases de Datos",
    description: "Arquitectura y optimización de capas de datos para sistemas complejos.",
    icon: Database,
    color: "var(--color-brand-primary)",
    isHighlighted: true,
    features: [
      "Modelado relacional (PostgreSQL/MySQL)",
      "Optimización de consultas SQL",
      "Procesos de carga y migración de datos",
      "Vistas, scripts y automatización DB",
      "Estructuración y organización de info",
    ],
  },
  {
    title: "Datos e IA Aplicada",
    description: "Integración de inteligencia artificial y automatización en flujos reales.",
    icon: Sparkles,
    color: "var(--color-brand-secondary)",
    features: [
      "Automatización de procesos repetitivos",
      "Asistentes inteligentes (LLMs)",
      "Análisis de datos y reportería",
      "Sistemas de recomendación básicos",
      "IA integrada en plataformas web",
    ],
  },
];

const CapabilityFramework = () => {
  return (
    <SectionShell 
      id="aportes" 
      containerClassName="relative"
      showGrid={true}
      gridOpacity={0.02}
    >
      {/* Subtle background glow */}
      <Glow variant="primary" position="center" opacity={0.05} className="w-[800px] h-[800px]" />

      <SectionHeader 
        eyebrow="Líneas de Trabajo"
        title="Áreas donde puedo"
        highlight="aportar"
        description="Soluciones técnicas adaptadas a necesidades específicas, con enfoque en calidad, mantenibilidad y escalabilidad arquitectónica."
        align="left"
        icon={<Layers className="w-3 h-3" />}
      />

      <div className="flex flex-col lg:flex-row gap-8 justify-start items-stretch mt-16">
        {capabilities.map((item, index) => {
          const Icon = item.icon;
          return (
            <GlassCard
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={cn(
                  "flex-1 p-8 lg:p-10 rounded-3xl group/card border-border-subtle bg-surface-card",
                  item.isHighlighted ? "lg:scale-105 z-20 border-brand-primary/30" : "z-10"
              )}
              glowColor={item.color}
            >
              <div className="mb-8">
                <div className="h-14 w-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform duration-500 shadow-xl border border-border-subtle"
                      style={{ color: item.color }}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-h3 font-bold text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-text-muted text-body-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="h-px w-full bg-linear-to-r from-transparent via-border-subtle to-transparent mb-8" />

              <ul className="space-y-4 mb-10 grow">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-white/80 text-body-sm group/feature">
                    <div className="mt-1 h-5 w-5 shrink-0 flex items-center justify-center rounded-lg bg-slate-900 border border-border-subtle group-hover/feature:border-brand-primary/40 transition-colors">
                      <Check className="w-3 h-3 text-brand-secondary" />
                    </div>
                    <span className="leading-snug group-hover/feature:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`mailto:${portfolioData.profile.email}?subject=Interés en proyecto de ${item.title}`}
                className="w-full group/btn relative py-4 px-6 rounded-xl bg-white/5 border border-border-subtle text-white font-bold text-micro uppercase tracking-[0.2em] transition-all duration-300 hover:bg-brand-primary/10 hover:border-brand-primary/30 flex items-center justify-center gap-3 overflow-hidden cursor-pointer"
                aria-label={`Conversar sobre un proyecto de ${item.title}`}
              >
                <span className="relative z-10">Conectar Proyecto</span>
                <MessageCircle className="w-4 h-4 relative z-10 opacity-60 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </GlassCard>
          );
        })}
      </div>
    </SectionShell>
  );
};

export default CapabilityFramework;

