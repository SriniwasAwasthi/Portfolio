import * as React from 'react';

export interface Skill {
  name: string;
  category: 'languages' | 'fundamentals' | 'frontend' | 'backend' | 'databases' | 'tools' | 'ai';
  description: string;
  level: 'Advanced Learner' | 'Intermediate' | 'Familiar' | 'Exploratory';
  icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  learnings: string;
  future: string[];
  github: string;
  demo?: string;
  coverColor: string;
}
