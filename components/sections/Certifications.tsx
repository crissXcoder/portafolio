"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Library,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData, type Education, type Certification } from "@/data/portfolio";
import { SectionShell } from "@/components/ui/SectionShell";
import { Glow } from "@/components/ui/Glow";

const Certifications = () => {
  return (
    <SectionShell 
      id="formacion" 
      containerClassName="relative"
      showGrid={true}
      gridOpacity={0.02}
    >
      {/* Visual Background Elements */}
      <Glow variant="primary" position="top-left" opacity={0.05} />
      <Glow variant="secondary" position="bottom-right" opacity={0.05} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Academic Timeline (5 cols) */}
          <div className="lg:col-span-5">
            <SectionHeader 
              eyebrow="Arquitectura Académica"
              title="Formación"
              highlight="Evolutiva"
              icon={<GraduationCap className="w-3 h-3" />}
            />

            <div className="relative space-y-16">
              {/* Timeline Main Line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-px bg-linear-to-b from-brand-primary/50 via-brand-primary/10 to-transparent" />

              {portfolioData.education.map((edu: Education, index: number) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-14 group"
                >
                  {/* Node Icon */}
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-xl bg-slate-900 border border-border-subtle flex items-center justify-center group-hover:border-brand-primary/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-500 z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Library className="w-5 h-5 text-text-muted group-hover:text-brand-primary transition-colors relative z-10" />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="primary" className="bg-brand-primary/5 border-brand-primary/10 text-brand-primary/90">
                        {edu.period}
                      </Badge>
                      {edu.status.includes("Cursando") && (
                        <div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-brand-secondary/5 border border-brand-secondary/10">
                           <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary/40 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-secondary"></span>
                          </span>
                          <span className="text-micro text-brand-secondary font-mono tracking-tighter uppercase font-bold">En curso</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-h3 font-bold text-white group-hover:text-brand-primary transition-colors leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-text-muted text-body-sm font-medium flex items-center gap-1.5">
                        {edu.institution}
                      </p>
                    </div>

                    <p className="text-text-muted/80 text-body-sm leading-relaxed max-w-md">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {edu.highlights.map((item) => (
                        <span key={item} className="text-micro text-white/70 bg-white/5 border border-border-subtle px-2 py-0.5 rounded-full font-medium group-hover:border-brand-primary/20 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications (7 cols) */}
          <div className="lg:col-span-7">
            <SectionHeader 
              eyebrow="Validación Técnica"
              title="Certificaciones"
              highlight="& Reconocimientos"
              icon={<Award className="w-3 h-3" />}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {portfolioData.certifications.map((cert: Certification, index: number) => (
                <GlassCard
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl border-border-subtle bg-surface-card"
                  glowColor={cert.color}
                >
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className="h-12 w-12 rounded-xl bg-slate-950 border border-border-subtle flex items-center justify-center text-text-muted group-hover:scale-110 transition-transform duration-500"
                           style={{ color: cert.color }}>
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="text-micro font-mono text-text-muted font-bold tracking-tighter">
                        {cert.year}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-micro font-mono font-bold text-brand-primary/80 uppercase tracking-widest block mb-1">
                        {cert.issuer}
                      </span>
                      <h4 className="text-h3 font-bold text-white group-hover:text-brand-primary transition-colors duration-300">
                        {cert.title}
                      </h4>
                    </div>

                    <p className="text-text-muted text-body-sm leading-relaxed mb-8 line-clamp-3">
                      {cert.description}
                    </p>

                    <div className="mt-auto">
                      {cert.url && cert.url !== "#" ? (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-micro font-bold text-white/40 hover:text-brand-primary transition-colors group/btn focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2"
                          aria-label={`Validar credencial de ${cert.title}`}
                        >
                          VALIDAR CREDENCIAL
                          <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-2 text-micro font-bold text-slate-700 cursor-not-allowed">
                          INTERNA / ACADÉMICA
                        </div>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}

              {/* Special Bento Item: Skills Sync */}
              <GlassCard
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="sm:col-span-2 mt-4 rounded-3xl border-brand-secondary/20 bg-surface-card"
                glowColor="var(--color-brand-secondary)"
              >
                <div className="p-8 flex flex-col md:flex-row items-center gap-8">
                  <div className="h-16 w-16 shrink-0 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div>
                    <h5 className="text-h3 font-bold text-white mb-2 flex items-center gap-2">
                      Sincronización Continua
                      <Zap className="w-4 h-4 text-brand-secondary fill-brand-secondary" />
                    </h5>
                    <p className="text-text-muted text-body leading-relaxed max-w-2xl">
                      Mi formación no se detiene. Actualmente exploro arquitecturas de baja latencia y el impacto de LLMs en la optimización de procesos de ingeniería.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

        </div>
    </SectionShell>
  );
};

export { Certifications };
export default Certifications;

