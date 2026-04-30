"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  Box, 
  ShieldCheck, 
  Users, 
  RotateCw, 
  FileCode,
  Layers
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import { Glow } from "@/components/ui/Glow";

const principles = [
  {
    id: "01",
    title: "Análisis Predictivo",
    subtitle: "ARQUITECTURA PRIMERO",
    description: "Entiendo el problema en su totalidad antes de escribir la primera línea de código. Analizo la relación entre el modelo de datos y la interfaz.",
    icon: BrainCircuit,
    color: "var(--color-brand-primary)"
  },
  {
    id: "02",
    title: "Organización Modular",
    subtitle: "ESTRUCTURA ATÓMICA",
    description: "Sistemas construidos por módulos independientes y reutilizables. Facilito el escalado y la mantenibilidad del software a largo plazo.",
    icon: Box,
    color: "var(--color-brand-accent)"
  },
  {
    id: "03",
    title: "Validación & Seguridad",
    subtitle: "DATA INTEGRITY",
    description: "La integridad de los datos es innegociable. Implemento validaciones estrictas y capas de seguridad en cada punto de entrada.",
    icon: ShieldCheck,
    color: "var(--color-brand-secondary)"
  },
  {
    id: "04",
    title: "Experiencia de Usuario",
    subtitle: "UX FOCUSED",
    description: "No solo construyo funciones; diseño flujos. El software debe ser intuitivo, rápido y accesible para cualquier perfil de usuario.",
    icon: Users,
    color: "var(--color-brand-primary)"
  },
  {
    id: "05",
    title: "Mejora Continua",
    subtitle: "EVOLUCIÓN TÉCNICA",
    description: "Refactorización constante y adopción de nuevas tecnologías. Busco soluciones que no solo funcionen hoy, sino que perduren mañana.",
    icon: RotateCw,
    color: "var(--color-brand-accent)"
  },
  {
    id: "06",
    title: "Documentación & Claridad",
    subtitle: "CLEAN DOCUMENTATION",
    description: "Código limpio y autodocumentado. Valoro que el sistema sea fácil de entender para otros desarrolladores y para el cliente.",
    icon: FileCode,
    color: "var(--color-brand-secondary)"
  }
];

const ProjectApproach = () => {
  return (
    <SectionShell 
      id="enfoque-proyectos" 
      showGrid={true}
      gridOpacity={0.03}
      containerClassName="relative"
    >
      <Glow variant="primary" position="top-right" opacity={0.05} />
      
      <SectionHeader 
        eyebrow="Metodología de Ingeniería"
        title="Cómo abordo los"
        highlight="proyectos"
        description="Mi proceso no se basa en la intuición, sino en un sistema de principios técnicos diseñados para garantizar solidez, escalabilidad y una experiencia de usuario excepcional."
        align="left"
        icon={<Layers className="w-3 h-3" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {principles.map((item, index) => {
          const Icon = item.icon;
          return (
            <GlassCard
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl border-border-subtle bg-surface-card h-full flex flex-col"
              glowColor={item.color}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-border-subtle flex items-center justify-center text-text-muted group-hover:text-white group-hover:border-brand-primary/30 transition-all duration-500 shadow-lg"
                     style={{ color: item.color }}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-micro font-mono font-bold text-text-muted/40 uppercase tracking-widest">
                  Principio {item.id}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-h3 font-bold text-white mb-1 tracking-tight">
                    {item.title}
                  </h4>
                  <span className="text-micro font-mono font-bold text-brand-primary/70 uppercase tracking-[0.2em]">
                    {item.subtitle}
                  </span>
                </div>
                <p className="text-text-muted text-body-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </SectionShell>
  );
};

export default ProjectApproach;
