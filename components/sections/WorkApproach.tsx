"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Cpu
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";
import { Glow } from "@/components/ui/Glow";

const approaches = [
  {
    id: "01",
    title: "Análisis & Investigación",
    highlight: "Científico",
    description: "Cada proyecto comienza con una fase rigurosa de recolección de requisitos y análisis de datos para entender el problema desde su raíz técnica.",
    icon: <Search className="w-6 h-6" />,
    color: "var(--color-brand-primary)",
    steps: ["Auditoría de Sistemas", "Modelado de Datos", "Benchmark Técnico"]
  },
  {
    id: "02",
    title: "Desarrollo & Optimización",
    highlight: "Eficiente",
    description: "Implementación de arquitecturas robustas y escalables, priorizando la legibilidad del código y el rendimiento computacional.",
    icon: <Terminal className="w-6 h-6" />,
    color: "var(--color-brand-accent)",
    steps: ["Clean Code", "Optimización de Latencia", "CI/CD Automático"]
  },
  {
    id: "03",
    title: "Verificación & Despliegue",
    highlight: "Resiliente",
    description: "QA exhaustivo y monitorización continua para asegurar que la solución no solo funcione, sino que evolucione de forma segura.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    color: "var(--color-brand-secondary)",
    steps: ["Testing Unitario/E2E", "Hardening de Seguridad", "Iteración de Producto"]
  }
];

const WorkApproach = () => {
  return (
    <SectionShell 
      id="metodologia" 
      showGrid={true}
      gridOpacity={0.05}
      containerClassName="relative"
    >
      {/* Background Decor */}
      <Glow variant="secondary" position="center" opacity={0.03} />
      
      <SectionHeader 
        eyebrow="Algoritmo de Trabajo"
        title="Mi Metodología de"
        highlight="Ingeniería"
        description="Abordo el desarrollo de software no solo como una tarea creativa, sino como una disciplina de ingeniería basada en el rigor, la eficiencia y la escalabilidad."
        align="left"
        icon={<Cpu className="w-3 h-3" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {approaches.map((item, index) => (
          <GlassCard
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="group p-8 rounded-3xl border-border-subtle bg-surface-card"
            glowColor={item.color}
          >
            <div className="relative z-10">
              {/* Header: ID and Icon */}
              <div className="flex items-center justify-between mb-12">
                <span className="text-micro font-mono font-bold text-text-muted/60 group-hover:text-brand-primary transition-colors">
                  ID_{item.id}
                </span>
                <div className="h-14 w-14 rounded-xl bg-white/5 border border-border-subtle flex items-center justify-center text-text-muted group-hover:text-brand-primary group-hover:border-brand-primary/30 transition-all duration-500 shadow-xl"
                      style={{ color: index === 0 ? 'var(--color-brand-primary)' : index === 1 ? 'var(--color-brand-accent)' : 'var(--color-brand-secondary)' }}>
                  {item.icon}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-h3 font-bold text-white mb-2 leading-tight">
                  {item.title}{" "}
                  <span className="text-brand-primary font-medium">{item.highlight}</span>
                </h4>
                <p className="text-text-muted text-body-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Sub-steps */}
              <div className="space-y-3 pt-6 border-t border-border-subtle">
                {item.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-1 w-1 rounded-full bg-slate-700 group-hover:bg-brand-primary transition-colors" />
                    <span className="text-micro font-mono text-text-muted/70 group-hover:text-white/90 transition-colors uppercase tracking-wider">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connector line for large screens */}
            {index < approaches.length - 1 && (
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                <ArrowRight className="w-8 h-8 text-white/10 group-hover:text-brand-primary/30 transition-colors" />
              </div>
            )}
          </GlassCard>
        ))}
      </div>

      {/* Closing Feature: Tools of Choice */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 p-8 rounded-3xl bg-linear-to-r from-brand-primary/5 via-brand-accent/5 to-transparent border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="flex items-center gap-6">
          <div className="h-12 w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h5 className="text-white font-bold text-h3 mb-1">Stack Tecnológico Dinámico</h5>
            <p className="text-text-muted text-body-sm">Selecciono herramientas basadas en escalabilidad y rendimiento real.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center md:justify-end">
          {["Next.js", "TypeScript", "Python", "Docker", "AWS"].map((tech) => (
            <Badge key={tech} variant="ghost" className="bg-slate-950/40 border-border-subtle text-text-muted">{tech}</Badge>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
};

export { WorkApproach };
export default WorkApproach;
