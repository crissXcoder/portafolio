"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { Terminal } from "lucide-react";

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-background/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-micro font-mono text-brand-primary tracking-[0.3em] uppercase mb-4 font-bold">
              [ PERFIL ]
            </h2>
            <h3 className="text-h2 font-bold text-white tracking-tight mb-6">
              Sobre mí
            </h3>
            <div className="space-y-6 text-slate-400 text-body-lg leading-relaxed">
              <p>
                {portfolioData.profile.description}
              </p>
              <p>
                Como estudiante avanzado de <span className="text-white font-medium">Ingeniería en Sistemas de Comunicación</span>, mi objetivo es cerrar la brecha entre los requisitos de negocio y la implementación técnica, asegurando que cada línea de código aporte valor real.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-border-subtle bg-surface-card flex items-center justify-center relative group">
              <div className="absolute inset-0 blueprint-grid opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-slate-500">
                <Terminal className="w-20 h-20 text-brand-primary/50" />
                <span className="font-mono text-micro tracking-widest uppercase">Inicialización del Sistema...</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 h-2 w-2 rounded-full bg-emerald-500/50" />
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-brand-primary/50" />
              <div className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-amber-500/50" />
              <div className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-slate-500/50" />
            </div>
            
            {/* Status Card */}
            <div className="absolute -bottom-6 -right-6 p-6 bg-surface-card border border-border-subtle rounded-2xl shadow-2xl backdrop-blur-xl max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-micro font-mono text-white uppercase tracking-wider font-bold">Estado: Disponible</span>
              </div>
              <p className="text-slate-400 text-small leading-relaxed">
                Abierto a colaboraciones técnicas y proyectos desafiantes en desarrollo y datos.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export { About };
export default About;
