"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, BarChart3 } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Container } from "@/components/ui/Container";
import { portfolioData, type Project } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-indigo-400 tracking-[0.3em] uppercase mb-3">
              [ PORTFOLIO ]
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Proyectos Destacados
            </h3>
            <p className="mt-4 text-slate-400 text-lg">
              Una selección de sistemas institucionales, herramientas de IA y aplicaciones académicas que reflejan mi capacidad técnica.
            </p>
          </div>
          <a 
            href={portfolioData.socialLinks.find((s: any) => s.platform === 'github')?.url || "#"} 
            target="_blank" 
            className="group flex items-center gap-2 text-white font-medium hover:text-indigo-400 transition-colors"
          >
            Explorar todo en GitHub
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project: Project, index: number) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-slate-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500"
    >
      {/* Category Header */}
      <div className="px-6 pt-6 pb-2">
        <span className="text-[10px] text-indigo-400/80 font-mono uppercase tracking-[0.2em]">
          {project.subtitle}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-3">
          {project.title}
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
          {project.description}
        </p>

        {/* Metrics/Impact (if any) */}
        {project.highlights.length > 0 && (
<div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400/80 mb-6 bg-emerald-500/5 px-2 py-1 rounded border border-emerald-500/10 w-fit">
            <BarChart3 className="w-3 h-3" />
            {project.highlights[0]}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-0.5 bg-slate-950/80 text-slate-300 text-[10px] font-mono rounded border border-white/10 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
          {project.githubUrl !== "#" && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              className="text-white hover:text-indigo-400 transition-colors flex items-center gap-2 text-xs font-semibold"
            >
              <GithubIcon className="w-4 h-4" />
              Ver Código
            </a>
          )}
          {project.liveUrl !== "#" && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              className="text-white hover:text-indigo-400 transition-colors flex items-center gap-2 text-xs font-semibold"
            >
              <Globe className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Corner Square Deco */}
      <div className="absolute top-0 right-0 h-8 w-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-0 right-0 h-px w-4 bg-indigo-500" />
        <div className="absolute top-0 right-0 h-4 w-px bg-indigo-500" />
      </div>
    </motion.div>
  );
};

export { Projects };
export default Projects;
