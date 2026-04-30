"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Box, 
  ShieldCheck, 
  Users, 
  RefreshCcw, 
  FileCode2,
  ChevronRight
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { portfolioData, type WorkPrinciple } from "@/data/portfolio";

const iconsMap = [
  Brain,         // Análisis
  Box,           // Modular
  ShieldCheck,   // Seguridad
  Users,         // UX
  RefreshCcw,    // Mejora
  FileCode2      // Documentación
];

const WorkApproach = () => {
  return (
    <section id="approach" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Visual Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-6"
          >
            Metodología de Ingeniería
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Cómo abordo los <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400">proyectos</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Mi proceso no se basa en la intuición, sino en un sistema de principios técnicos diseñados para garantizar solidez, escalabilidad y una experiencia de usuario excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.workPrinciples.map((principle: WorkPrinciple, index: number) => {
            const Icon = iconsMap[index] || Box;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card Glow Background */}
                <div className="absolute -inset-px bg-linear-to-br from-blue-500/20 via-indigo-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-500">
                  <div className="flex items-start justify-between mb-8">
                    <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-tighter">
                      Principio 0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {principle.title}
                      </h4>
                      <span className="inline-block text-[10px] font-mono text-indigo-400/80 uppercase tracking-widest">
                        {principle.highlight}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>

                  {/* Visual Detail: Corner Square */}
                  <div className="absolute top-0 right-0 h-8 w-8 pointer-events-none overflow-hidden">
                    <div className="absolute -top-px -right-px h-3 w-3 border-t border-r border-white/10 group-hover:border-blue-500/50 transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Professional Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-[32px] bg-linear-to-r from-blue-500/5 via-indigo-500/5 to-transparent border border-white/5 text-center"
        >
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            "Este enfoque modular y ordenado me permite integrar de manera eficiente el frontend, backend y base de datos, buscando siempre soluciones mantenibles y seguras."
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default WorkApproach;
