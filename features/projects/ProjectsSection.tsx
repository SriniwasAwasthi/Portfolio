'use client';

import * as React from 'react';
import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';
import { Reveal } from '@/components/animations/Reveal';
import {
  X,
  Github,
  ExternalLink,
  HelpCircle,
  Lightbulb,
  Code2,
  AlertTriangle,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { projectsData } from '@/content/projects';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  React.useEffect(() => {
    // Focus modal container when opened for accessibility
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-secondary/5 dark:bg-transparent border-t border-border/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal delay={0.1}>
          <div className="flex flex-col mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono mb-2">
              04 // Projects
            </span>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">
                Projects
              </h2>
              <div className="h-[1px] bg-border flex-grow max-w-[200px] hidden sm:block" />
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mt-4 leading-relaxed">
              A selection of projects that represent real challenges, practical solutions, and
              lessons learned.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <Reveal key={project.id} delay={0.1 * ((idx % 3) + 1)}>
              <ProjectCard project={project} onOpenDetails={setSelectedProject} />
            </Reveal>
          ))}
        </div>

        {/* Detailed Modal/Case Study Container */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-background/80 backdrop-blur-md"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                className="relative w-full max-w-3xl max-h-[85vh] bg-card border border-border/80 rounded-xl shadow-2xl overflow-y-auto z-10 flex flex-col focus:outline-none"
                role="dialog"
                aria-modal="true"
                tabIndex={0}
              >
                {/* Visual Top Highlight */}
                <div className={`h-2 w-full ${selectedProject.coverColor}`} />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Title & Metadata */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-2">
                      {selectedProject.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium italic">
                      {selectedProject.summary}
                    </p>
                  </div>

                  {/* Problem & Solution Split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-secondary/20 border border-border/40 p-5 rounded-lg flex flex-col gap-2">
                      <h4 className="text-xs font-bold tracking-widest text-rose-500 uppercase flex items-center gap-1.5 font-heading">
                        <AlertTriangle className="w-4 h-4" />
                        The Problem
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div className="bg-primary/5 border border-primary/10 p-5 rounded-lg flex flex-col gap-2">
                      <h4 className="text-xs font-bold tracking-widest text-primary uppercase flex items-center gap-1.5 font-heading">
                        <Lightbulb className="w-4 h-4" />
                        The Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase flex items-center gap-1.5 font-heading">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground pl-1">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase flex items-center gap-1.5 font-heading">
                      <Code2 className="w-5 h-5 text-primary" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-semibold bg-secondary/80 text-secondary-foreground border border-border/40 px-3 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Learnings */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase font-heading">
                      Challenges & Key Learnings
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed bg-secondary/10 border border-border/40 p-4 rounded-lg">
                      {selectedProject.learnings}
                    </p>
                  </div>

                  {/* Future enhancements */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase font-heading">
                      Future Improvements Plan
                    </h4>
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 pl-1">
                      {selectedProject.future.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ArrowRight className="w-3.5 h-3.5 text-[#39FF14] shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links / Action Bar */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#39FF14]/20">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: 'sm' }),
                        'rounded-full bg-[#39FF14] text-[#030503] hover:bg-[#7CFF6B] cursor-pointer text-xs font-extrabold px-4 py-2 inline-flex items-center shadow-[0_0_20px_rgba(57,255,20,0.35)] transition-all duration-300',
                      )}
                    >
                      <Github className="mr-2 w-4 h-4" />
                      Code Repository
                    </a>
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: 'outline', size: 'sm' }),
                          'rounded-full cursor-pointer border border-[#39FF14]/30 hover:border-[#39FF14] hover:bg-[#39FF14]/10 hover:text-[#39FF14] text-xs font-semibold px-4 py-2 inline-flex items-center transition-all duration-300',
                        )}
                      >
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
