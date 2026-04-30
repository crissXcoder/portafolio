"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Library,
  BookOpen,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { portfolioData, type Education, type Certification } from "@/data/portfolio";

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Visual Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Academic Timeline (5 cols) */}
          <div className="lg:col-span-5">
            <header className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono tracking-widest uppercase mb-6"
              >
                <GraduationCap className="w-3 h-3" />
                Arquitectura Académica
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Formación <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 font-serif italic font-light">
                  Evolutiva
                </span>
              </h3>
            </header>

            <div className="relative space-y-16">
              {/* Timeline Main Line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-px bg-linear-to-b from-amber-500/50 via-amber-500/10 to-transparent" />

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
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-500 z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Library className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors relative z-10" />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/5 px-2 py-0.5 rounded-md border border-amber-500/10 backdrop-blur-sm">
                        {edu.period}
                      </span>
                      {edu.status.includes("Cursando") && (
                        <div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-emerald-500/5 border border-emerald-500/10">
                           <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          <span className="text-[9px] text-emerald-400 font-mono tracking-tighter uppercase font-bold">In-Progress</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-400 text-sm font-medium flex items-center gap-1.5">
                        {edu.institution}
                      </p>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {edu.highlights.map((item) => (
                        <span key={item} className="text-[9px] text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full font-medium group-hover:border-amber-500/20 transition-colors">
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
            <header className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono tracking-widest uppercase mb-6"
              >
                <Award className="w-3 h-3" />
                Validación Técnica
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Certificaciones <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-emerald-400 to-indigo-500 font-serif italic font-light">
                  & Reconocimientos
                </span>
              </h3>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {portfolioData.certifications.map((cert: Certification, index: number) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  {/* Background Card */}
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md rounded-[32px] border border-white/5 group-hover:border-white/10 transition-all duration-500" />
                  
                  {/* Color Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: `${cert.color}10` }}
                  />

                  <div className="relative p-8 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className="h-12 w-12 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center text-slate-500 group-hover:scale-110 transition-transform duration-500"
                           style={{ color: cert.color }}>
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 font-bold tracking-tighter">
                        {cert.year}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[9px] font-mono font-bold text-indigo-400/80 uppercase tracking-widest block mb-1">
                        {cert.issuer}
                      </span>
                      <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                        {cert.title}
                      </h4>
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed mb-8 line-clamp-3">
                      {cert.description}
                    </p>

                    <div className="mt-auto">
                      {cert.url && cert.url !== "#" ? (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[10px] font-bold text-white/40 hover:text-indigo-400 transition-colors group/btn focus-visible:outline-2 focus-visible:outline-indigo-400 focus-visible:outline-offset-2"
                          aria-label={`Validar credencial de ${cert.title}`}
                        >
                          VALIDAR CREDENCIAL
                          <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-700 cursor-not-allowed">
                          INTERNA / ACADÉMICA
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Special Bento Item: Skills Sync */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="sm:col-span-2 relative group mt-4 overflow-hidden rounded-[32px]"
              >
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 via-indigo-500/5 to-transparent backdrop-blur-sm border border-emerald-500/20" />
                <div className="relative p-8 flex flex-col md:flex-row items-center gap-8">
                  <div className="h-16 w-16 shrink-0 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      Sincronización Continua
                      <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                    </h5>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                      Mi formación no se detiene. Actualmente exploro arquitecturas de baja latencia y el impacto de LLMs en la optimización de procesos de ingeniería.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export { Certifications };
export default Certifications;

