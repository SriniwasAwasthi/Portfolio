'use client';

import * as React from 'react';
import { Project } from '@/types';
import { ArrowUpRight, FolderOpen, ExternalLink, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group flex flex-col justify-between p-6 rounded-xl border border-[#39FF14]/20 bg-[#060806]/80 hover:bg-[#060806] hover:border-[#39FF14]/60 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.08)] hover:shadow-[0_0_35px_rgba(57,255,20,0.25)] cursor-pointer relative backdrop-blur-md"
    >
      {/* Cover Color Accent (top border) */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-all duration-300 opacity-70 group-hover:opacity-100 shadow-[0_0_10px_#39FF14]',
          project.coverColor,
        )}
      />

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-[#39FF14]/10 text-[#39FF14] group-hover:bg-[#39FF14]/20 transition-colors">
            <FolderOpen className="w-5 h-5" />
          </div>
          <div className="text-muted-foreground group-hover:text-[#39FF14] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-[#39FF14] transition-colors">
          {project.name}
        </h3>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
          {project.summary}
        </p>
      </div>

      {/* Tech Stack and CTAs */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 3).map((item) => (
            <span
              key={item}
              className="text-[9px] font-semibold bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/30 px-2 py-0.5 rounded"
            >
              {item}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[9px] font-semibold text-muted-foreground px-1.5 py-0.5">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        {/* Case Study Callout */}
        <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest text-[#39FF14] uppercase opacity-90 group-hover:opacity-100 group-hover:underline decoration-1 transition-all">
          <Code className="w-3 h-3" />
          View Case Study
        </span>
      </div>
    </div>
  );
}
