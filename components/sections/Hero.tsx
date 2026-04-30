"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { 
  ChevronRight, 
  Mail, 
  Code2, 
  Database, 
  Cpu, 
  GraduationCap, 
  Award, 
  ScrollText,
  Activity,
  Terminal,
  type LucideIcon
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";

/**
 * TECHNICAL CARD COMPONENT
 * A floating blueprint-style card representing technical status.
 */
function TechnicalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full max-w-md hidden lg:block perspective-1000"
    >
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-indigo-500/10 overflow-hidden group">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-size-[24px_24px] pointer-events-none" />
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-2">system.status</span>
          </div>
          <Activity className="w-4 h-4 text-emerald-500/50 animate-pulse" />
        </div>

        {/* Content Sections */}
        <div className="space-y-6 relative">
          {/* Main Indicator */}
          <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
            <div className="flex items-center gap-3 mb-2">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-mono text-indigo-300">currently_building</span>
            </div>
            <div className="text-sm font-medium text-white">SIGADI-RC / Enterprise Solution</div>
            <div className="mt-2 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, delay: 1 }}
                className="bg-indigo-500 h-full"
              />
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Level", val: "4th Year", icon: GraduationCap, color: "text-emerald-400" },
              { label: "Focus", val: "Full Stack", icon: Code2, color: "text-blue-400" },
            ].map((item: { label: string; val: string; icon: LucideIcon; color: string }, i: number) => (
              <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <item.icon className={`w-4 h-4 ${item.color} mb-2`} />
                <div className="text-[10px] text-slate-500 uppercase font-mono">{item.label}</div>
                <div className="text-xs font-semibold text-white">{item.val}</div>
              </div>
            ))}
          </div>

          {/* Certifications Feed */}
          <div className="space-y-2">
            <div className="text-[10px] text-slate-500 uppercase font-mono mb-2 flex items-center gap-2">
              <Award className="w-3 h-3" />
              Verified Credentials
            </div>
            {portfolioData.certifications.slice(0, 2).map((cert: any, i: number) => (
              <div key={i} className="flex items-center gap-3 text-xs text-slate-400 bg-white/2 p-2 rounded-lg border border-white/5">
                <ScrollText className="w-3.5 h-3.5 text-indigo-400" />
                <span className="truncate">{cert.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative corner glow */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full" />
      </div>
    </motion.div>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % portfolioData.hero.rotatingTitles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-slate-950">
      {/* Background Engineering Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(79,70,229,0.15),transparent_70%)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              <div className="relative flex h-2 w-2">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></div>
              </div>
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest font-mono">
                {portfolioData.education[0].status}
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-400 text-xl font-medium"
              >
                {portfolioData.profile.name}
              </motion.h2>
              
              <div className="h-[60px] md:h-[120px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={index}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-tight"
                  >
                    {portfolioData.hero.rotatingTitles[index].split(' ').map((word: string, i: number) => (
                      <span key={i} className={i === 0 ? "text-indigo-400" : ""}>{word} </span>
                    ))}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-xl leading-relaxed font-light"
            >
              {portfolioData.profile.description}
            </motion.p>

            {/* FOCUS BADGES */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { label: "Sistemas Web", icon: Code2, color: "text-indigo-400" },
                { label: "Bases de Datos", icon: Database, color: "text-blue-400" },
                { label: "IA Aplicada", icon: Cpu, color: "text-emerald-400" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                  <badge.icon className={`w-3.5 h-3.5 ${badge.color}`} />
                  {badge.label}
                </div>
              ))}
            </motion.div>

            {/* CTAS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4 items-center"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-semibold overflow-hidden transition-all hover:scale-[1.02] active:scale-95 focus-visible:outline-2 focus-visible:outline-indigo-400 focus-visible:outline-offset-4"
                aria-label="Ver mis proyectos"
              >
                <div className="absolute inset-0 bg-linear-to-r from-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                Explorar proyectos
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              
              <div className="flex items-center gap-3 p-1 rounded-2xl bg-white/5 border border-white/10">
                {portfolioData.socialLinks.map((social: any, i: number) => {
                  const Icon = ({
                    github: GithubIcon,
                    linkedin: LinkedinIcon,
                    email: Mail,
                    other: ChevronRight
                  } as Record<string, any>)[social.platform] || ChevronRight;

                  return (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all focus-visible:outline-2 focus-visible:outline-indigo-400"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center lg:justify-end relative">
            <TechnicalCard />
            
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none lg:block hidden" />
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none lg:block hidden" />
          </div>

        </div>
      </Container>
    </section>
  );
}
