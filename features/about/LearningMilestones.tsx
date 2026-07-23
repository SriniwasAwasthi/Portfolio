'use client';

import * as React from 'react';
import { CheckCircle2, Circle, GraduationCap, Code, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

interface Milestone {
  id: number;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
  status: 'completed' | 'current' | 'upcoming';
}

const milestones: Milestone[] = [
  {
    id: 1,
    period: 'Foundation',
    title: 'Core Fundamentals',
    subtitle: 'Strengthening the fundamentals that every great engineer depends on.',
    description:
      'Algorithms, data structures, discrete mathematics, and object-oriented programming. Building the foundation for everything that comes next.',
    skills: ['Algorithms', 'Data Structures', 'C/C++', 'OOP', 'Problem Solving'],
    icon: GraduationCap,
    status: 'completed',
  },
  {
    id: 2,
    period: 'Engineering',
    title: 'Full Stack Development',
    subtitle: 'Building complete applications with scalable architecture and modern technologies.',
    description:
      'Creating production-grade web applications with React, Next.js, TypeScript, and PostgreSQL. Focused on performance, clean architecture, and developer experience.',
    skills: ['TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Tailwind'],
    icon: Code,
    status: 'current',
  },
  {
    id: 3,
    period: 'Intelligence',
    title: 'AI & Automation',
    subtitle: 'Exploring AI, intelligent agents, and the future of software development.',
    description:
      'Building AI-powered workflows, experimenting with language models, and creating intelligent agents that automate real-world tasks.',
    skills: ['Python', 'FastAPI', 'AI Agents', 'LLMs', 'Automation'],
    icon: Brain,
    status: 'upcoming',
  },
];

export function LearningMilestones() {
  const [expandedId, setExpandedId] = React.useState<number | null>(2); // Default to current milestone

  return (
    <div className="w-full pl-2">
      <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-6 font-heading">
        Learning Roadmap
      </h3>

      <div className="relative border-l border-border/80 ml-4 pl-6 space-y-8 py-2">
        {milestones.map((item, index) => {
          const Icon = item.icon;
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="relative group/timeline">
              {/* Timeline marker */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`absolute -left-[37px] top-1 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  item.status === 'completed'
                    ? 'bg-emerald-500/10 border-emerald-500 text-emerald-500'
                    : item.status === 'current'
                      ? 'bg-primary/10 border-primary text-primary shadow-sm shadow-primary/20 scale-110'
                      : 'bg-card border-border text-muted-foreground'
                }`}
                aria-label={`Milestone ${item.title}`}
                aria-expanded={isExpanded}
              >
                {item.status === 'completed' ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : item.status === 'current' ? (
                  <Circle className="w-2.5 h-2.5 fill-primary" />
                ) : (
                  <Circle className="w-2 h-2" />
                )}
              </button>

              {/* Milestone Box */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`p-4 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'border-primary/20 bg-card/65 shadow-md'
                    : 'hover:border-border/100 hover:bg-card/40'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-muted-foreground font-semibold tracking-wider uppercase block">
                      {item.period}
                    </span>
                    <h4 className="text-sm font-heading font-bold text-foreground group-hover/timeline:text-primary/95 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <Icon
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? 'text-primary scale-110' : 'text-muted-foreground'
                    }`}
                  />
                </div>

                {/* Subtitle */}
                <p className="text-xs text-muted-foreground font-medium mt-1">{item.subtitle}</p>

                {/* Expandable Details */}
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden mt-3"
                  >
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[9px] font-semibold bg-secondary/80 text-secondary-foreground border border-border/40 px-2 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
