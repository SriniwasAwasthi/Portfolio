'use client';

import * as React from 'react';
import { Brain, Cpu, Workflow, MessageSquare, Terminal, Eye } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';

const aiInterests = [
  {
    title: 'Language Models',
    description:
      'Exploring prompt engineering, model behavior, structured outputs, and practical AI applications.',
    icon: MessageSquare,
    badge: 'Core Interest',
  },
  {
    title: 'Intelligent Agents',
    description:
      'Building AI systems that can reason, automate tasks, and interact with real-world tools.',
    icon: Brain,
    badge: 'Active Coding',
  },
  {
    title: 'Automation',
    description:
      'Connecting APIs, databases, and intelligent workflows to reduce repetitive work and improve productivity.',
    icon: Workflow,
    badge: 'Tool Integration',
  },
  {
    title: 'AI-Assisted Development',
    description:
      'Using AI to prototype faster, write cleaner code, and improve development efficiency while maintaining engineering quality.',
    icon: Cpu,
    badge: 'Developer Productivity',
  },
];

export function AIEcosystem() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-card/10 border-t border-border/20 overflow-hidden">
      {/* Absolute floating glow shape */}
      <div className="absolute right-0 top-1/4 w-[30rem] h-[30rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal delay={0.1}>
          <div className="flex flex-col mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono mb-2">
              03 // AI Exploration
            </span>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">
                Artificial Intelligence
              </h2>
              <div className="h-[1px] bg-border flex-grow max-w-[200px] hidden sm:block" />
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mt-4 leading-relaxed">
              I see AI as a tool that enhances creativity and accelerates development—not as a
              replacement for engineering thinking.
            </p>
          </div>
        </Reveal>

        {/* AI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {aiInterests.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Reveal key={item.title} delay={0.15 * (index + 1)}>
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`p-6 md:p-8 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm transition-all duration-300 relative group cursor-default overflow-hidden ${
                    isHovered
                      ? 'border-primary/30 bg-card/65 shadow-md shadow-primary/5'
                      : 'hover:border-border'
                  }`}
                >
                  {/* Glowing background highlights */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent transition-opacity duration-500 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`p-3 rounded-lg border transition-colors ${
                        isHovered
                          ? 'bg-primary/10 border-primary/20 text-primary'
                          : 'bg-secondary/40 border-border/60 text-muted-foreground'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-secondary/80 text-muted-foreground border border-border/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Visual Lab Demo Widget (Abstract Terminal) */}
        <Reveal delay={0.4}>
          <div className="mt-12 border border-border/60 bg-card/30 rounded-xl overflow-hidden shadow-xl max-w-3xl mx-auto">
            <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/40 border-b border-border/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                <Terminal className="w-3 h-3" />
                agent-workflow.log
              </span>
              <div className="w-8" />
            </div>
            <div className="p-4 font-mono text-[10px] sm:text-xs text-foreground/80 space-y-2.5 bg-card/50 max-h-56 overflow-y-auto">
              <p className="text-muted-foreground">
                [2026-07-16 13:29:16] INFO: Initializing intelligent agent workflow...
              </p>
              <p className="text-indigo-400">
                [Agent] Task: &quot;Automated code review and refactoring&quot;
              </p>
              <p className="text-emerald-400">
                [Tool] Calling: &quot;analyze_codebase&quot; in ./features
              </p>
              <p className="text-emerald-400">
                [Tool] Response: 8 modules analyzed, 3 optimization suggestions
              </p>
              <p className="text-indigo-400">[Agent] Applying structured improvements...</p>
              <div className="flex items-center gap-1.5 text-primary text-[11px] font-semibold animate-pulse pt-1">
                <Eye className="w-3.5 h-3.5" />
                <span>Running optimization loop...</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
