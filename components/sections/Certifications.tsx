"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { portfolioData, type Certification } from "@/data/portfolio";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-900/20">
      <Container>
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-mono text-indigo-400 tracking-[0.3em] uppercase mb-3">
            [ RECOGNITION ]
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Formación & Certificaciones
          </h3>
          <p className="mt-4 text-slate-400 text-lg">
            Compromiso con el aprendizaje continuo y la validación de competencias en entornos profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.certifications.map((cert: Certification, index: number) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-indigo-500/30 transition-all group"
            >
              <div className="shrink-0 h-14 w-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                <Award className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono text-indigo-400/70 uppercase tracking-widest px-2 py-0.5 bg-indigo-500/5 rounded border border-indigo-500/10">
                    {cert.issuer}
                  </span>
                  <div className="flex items-center gap-1 text-slate-500 text-[10px] font-mono">
                    <Calendar className="w-3 h-3" />
                    {cert.year}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                {cert.url && cert.url !== "#" && (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-indigo-400 transition-colors"
                  >
                    Ver Credencial
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { Certifications };
export default Certifications;
