/**
 * ─────────────────────────────────────────────
 * JOURNEY TIMELINE DATA
 * ─────────────────────────────────────────────
 * Represents Sriniwas's learning and growth phases.
 * To update or add a stage: modify this array.
 * Each node maps to a card in the Journey Timeline section.
 * ─────────────────────────────────────────────
 */

export interface JourneyNode {
  id: string;
  stage: 'Beginning' | 'Growth' | 'Present' | 'Future';
  title: string;
  description: string;
  skills: string[];
  /** Lucide icon name to render in the component */
  iconName: 'Terminal' | 'Code' | 'BrainCircuit' | 'Target' | 'Rocket' | 'GitBranch';
  accentClass: string;
}

export const journeyData: JourneyNode[] = [
  {
    id: 'beg',
    stage: 'Beginning',
    title: 'First Lines of Code',
    description:
      'Started with fundamental programming — variables, loops, and CLI logic using C and C++. Built the discipline of writing code every day.',
    skills: ['C', 'C++', 'CLI Logic'],
    iconName: 'Terminal',
    accentClass: 'border-[#39FF14]/40 text-[#39FF14] bg-[#39FF14]/10',
  },
  {
    id: 'gro',
    stage: 'Growth',
    title: 'Object-Oriented Systems & Databases',
    description:
      'Expanded into object-oriented programming, relational database design, and writing structured queries. Built small projects to solidify fundamentals.',
    skills: ['Java', 'SQL', 'OOP', 'MySQL'],
    iconName: 'Code',
    accentClass: 'border-[#7CFF6B]/60 text-[#7CFF6B] bg-[#7CFF6B]/10',
  },
  {
    id: 'pre',
    stage: 'Present',
    title: 'Full Stack Development & AI',
    description:
      'Building production-grade web applications with modern frameworks. Exploring AI-powered workflows, intelligent agents, and data structures.',
    skills: ['Next.js', 'TypeScript', 'Python', 'DSA', 'AI Agents'],
    iconName: 'BrainCircuit',
    accentClass:
      'border-[#39FF14] text-[#39FF14] bg-[#39FF14]/20 shadow-[0_0_15px_rgba(57,255,20,0.4)]',
  },
  {
    id: 'fut',
    stage: 'Future',
    title: 'Professional Engineering',
    description:
      'Building scalable products, contributing to open source, and solving meaningful challenges through thoughtful engineering.',
    skills: ['Open Source', 'Internship', 'Scalable Systems', 'Software Engineer'],
    iconName: 'Target',
    accentClass:
      'border-[#50FA7B] text-[#50FA7B] bg-[#50FA7B]/15 shadow-[0_0_15px_rgba(80,250,123,0.3)]',
  },
];
