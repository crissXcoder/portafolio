"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Globe, Database, Sparkles, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

const capabilities = [
  {
    title: "Sistemas Web",
    description: "Desarrollo de interfaces dinámicas y escalables con enfoque en rendimiento.",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
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
    color: "from-indigo-500/30 to-purple-500/10",
    iconColor: "text-indigo-400",
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
    color: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-400",
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
    <section id="capabilities" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-mono tracking-widest uppercase mb-6"
          >
            Líneas de Trabajo
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Áreas donde puedo <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">aportar</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Soluciones técnicas adaptadas a necesidades específicas, con enfoque en calidad y mantenibilidad.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex-1 group ${item.isHighlighted ? 'lg:scale-105 z-20' : 'z-10'}`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-px bg-linear-to-b ${item.color} rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative h-full flex flex-col bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[32px] p-8 lg:p-10 hover:border-white/10 transition-all duration-500">
                  <div className="mb-8">
                    <div className={`h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center ${item.iconColor} mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mb-8" />

                  <ul className="space-y-4 mb-10 grow">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm">
                        <div className={`mt-1 shrink-0 ${item.iconColor}`}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className="w-full group/btn relative py-4 px-6 rounded-2xl bg-white/5 border border-white/10 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-2 overflow-hidden focus-visible:outline-2 focus-visible:outline-indigo-400"
                    aria-label={`Conversar sobre un proyecto de ${item.title}`}
                  >
                    <span className="relative z-10">Conversar sobre un proyecto</span>
                    <MessageCircle className="w-4 h-4 relative z-10 opacity-60 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CapabilityFramework;
