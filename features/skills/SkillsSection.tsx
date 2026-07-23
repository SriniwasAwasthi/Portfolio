'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Skill } from '@/types';
import { Reveal } from '@/components/animations/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  Database,
  GitBranch,
  GraduationCap,
  Layers,
  CheckCircle,
} from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming',
    icon: Code2,
    description:
      'I build with Java, Python, C++, C, and SQL—choosing the right language for the problem rather than the other way around.',
    skills: [
      {
        name: 'Java',
        category: 'languages',
        description: 'Application logic, OOP frameworks, and clean structuring.',
        level: 'Intermediate',
        icon: Terminal,
      },
      {
        name: 'Python',
        category: 'languages',
        description: 'Data analysis, ML modeling, and FastAPI interfaces.',
        level: 'Intermediate',
        icon: Terminal,
      },
      {
        name: 'C++',
        category: 'languages',
        description: 'Algorithmic problem solving and low-level data control.',
        level: 'Intermediate',
        icon: Terminal,
      },
      {
        name: 'C',
        category: 'languages',
        description: 'Foundational memory management and pointer manipulation.',
        level: 'Familiar',
        icon: Terminal,
      },
      {
        name: 'SQL',
        category: 'languages',
        description: 'Complex relational queries, indexes, and database schemas.',
        level: 'Intermediate',
        icon: Terminal,
      },
    ] as Skill[],
  },
  {
    id: 'fundamentals',
    title: 'Computer Science',
    icon: GraduationCap,
    description:
      'My foundation is built on algorithms, data structures, object-oriented programming, operating systems, databases, and problem solving.',
    skills: [
      {
        name: 'Data Structures',
        category: 'fundamentals',
        description: 'Lists, trees, graphs, HashMaps, and custom structures.',
        level: 'Advanced Learner',
        icon: Layers,
      },
      {
        name: 'Algorithms',
        category: 'fundamentals',
        description: 'Complexity analysis, sorting, searching, DP, and graph traversals.',
        level: 'Advanced Learner',
        icon: Layers,
      },
      {
        name: 'OOP',
        category: 'fundamentals',
        description: 'Encapsulation, inheritance, polymorphism, and abstraction.',
        level: 'Advanced Learner',
        icon: Layers,
      },
      {
        name: 'Problem Solving',
        category: 'fundamentals',
        description: 'Breaking complex problems into testable algorithms and structures.',
        level: 'Advanced Learner',
        icon: Layers,
      },
    ] as Skill[],
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: Layers,
    description:
      'I create modern web applications using React, Next.js, TypeScript, Tailwind CSS, Node.js, and FastAPI with a focus on performance and user experience.',
    skills: [
      {
        name: 'Next.js 15',
        category: 'frontend',
        description: 'Server/Client components, API routes, and optimized builds.',
        level: 'Intermediate',
        icon: Code2,
      },
      {
        name: 'React & TypeScript',
        category: 'frontend',
        description: 'Component architectures, state management, and type-safe hooks.',
        level: 'Intermediate',
        icon: Code2,
      },
      {
        name: 'Tailwind CSS',
        category: 'frontend',
        description: 'Responsive layouts, fluid grids, and design system tokens.',
        level: 'Intermediate',
        icon: Code2,
      },
      {
        name: 'FastAPI & Node.js',
        category: 'backend',
        description: 'REST endpoints, JSON schemas, and server middleware.',
        level: 'Familiar',
        icon: Terminal,
      },
    ] as Skill[],
  },
  {
    id: 'data-tools',
    title: 'Databases & Tools',
    icon: Database,
    description:
      'I work with PostgreSQL, MySQL, Git, and GitHub to build reliable applications with organized development workflows.',
    skills: [
      {
        name: 'PostgreSQL & MySQL',
        category: 'databases',
        description: 'Schema design, relations, indexes, and table constraints.',
        level: 'Intermediate',
        icon: Database,
      },
      {
        name: 'Git & GitHub',
        category: 'tools',
        description: 'Branch workflows, commit histories, PR collaboration, and CI/CD.',
        level: 'Advanced Learner',
        icon: GitBranch,
      },
    ] as Skill[],
  },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 lg:px-24 border-t border-border/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal delay={0.1}>
          <div className="flex flex-col mb-12">
            <span className="text-xs font-bold tracking-widest text-[#39FF14] uppercase font-mono mb-2 neon-text-glow">
              02 // Technical Foundation
            </span>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">
                Skills
              </h2>
              <div className="h-[1px] bg-[#39FF14]/20 flex-grow max-w-[200px] hidden sm:block" />
            </div>
          </div>
        </Reveal>

        {/* Filter Controls */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-2.5 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'relative px-5 py-2 rounded-full text-xs font-bold tracking-wide border transition-all duration-300 cursor-pointer select-none',
                activeCategory === 'all'
                  ? 'bg-[#39FF14] text-[#030503] font-black border-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.5)] scale-105'
                  : 'bg-[#060806]/90 text-slate-200 border-[#39FF14]/30 hover:border-[#39FF14] hover:text-[#39FF14] hover:bg-[#39FF14]/10',
              )}
            >
              Show All
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'relative px-5 py-2 rounded-full text-xs font-bold tracking-wide border transition-all duration-300 cursor-pointer select-none',
                  activeCategory === cat.id
                    ? 'bg-[#39FF14] text-[#030503] font-black border-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.5)] scale-105'
                    : 'bg-[#060806]/90 text-slate-200 border-[#39FF14]/30 hover:border-[#39FF14] hover:text-[#39FF14] hover:bg-[#39FF14]/10',
                )}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skill Groups */}
        <motion.div layout className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, groupIdx) => {
              const GroupIcon = cat.icon;

              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="border border-[#39FF14]/20 bg-[#060806]/80 rounded-xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_20px_rgba(57,255,20,0.05)]"
                >
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-2 pb-4 border-b border-[#39FF14]/20">
                    <GroupIcon className="w-5 h-5 text-[#39FF14]" />
                    <h3 className="font-heading font-bold text-lg text-foreground">{cat.title}</h3>
                  </div>
                  {/* Category Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Skills Grid */}
                  <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  >
                    {cat.skills.map((skill) => {
                      return (
                        <motion.div
                          key={skill.name}
                          layout
                          className="flex flex-col justify-between p-5 rounded-lg border border-[#39FF14]/20 bg-[#090B09]/80 transition-all duration-300 hover:border-[#39FF14]/60 hover:bg-[#060806] hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(57,255,20,0.2)] group"
                        >
                          <div>
                            {/* Skill Header */}
                            <div className="flex items-start justify-between gap-3 mb-2.5">
                              <h4 className="font-heading font-bold text-sm text-foreground group-hover:text-[#39FF14] transition-colors">
                                {skill.name}
                              </h4>
                              <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14]">
                                {skill.level}
                              </span>
                            </div>
                            {/* Description */}
                            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                              {skill.description}
                            </p>
                          </div>

                          {/* Level indicator */}
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
                            <CheckCircle className="w-3.5 h-3.5 text-[#39FF14]" />
                            <span>Competency Verified</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
