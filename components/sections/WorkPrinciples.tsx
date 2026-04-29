"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle2, Zap, ArrowUpRight } from "lucide-react";

export function WorkPrinciples() {
  return (
    <section id="principles" className="py-24 bg-slate-950/50">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-indigo-400 font-mono text-sm tracking-[0.2em] uppercase"
            >
              Metodología & Ética
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white tracking-tight"
            >
              Principios que guían mi trabajo
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg max-w-sm mb-2"
          >
            La ingeniería de software no se trata solo de escribir código, sino de resolver problemas con criterio técnico.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.workPrinciples.map((principle: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Index Number */}
              <div className="text-5xl font-bold text-white/5 absolute top-4 right-6 group-hover:text-indigo-500/10 transition-colors">
                0{i + 1}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-mono uppercase tracking-widest border border-indigo-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  {principle.highlight}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-2 text-indigo-400 text-xs font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  <span>Compromiso de calidad</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              {/* Decorative Blur */}
              <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-indigo-600/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
