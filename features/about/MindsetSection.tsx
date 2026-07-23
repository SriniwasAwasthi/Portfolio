'use client';

import * as React from 'react';
import { ShieldCheck, Lightbulb, Compass } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';

const principles = [
  {
    title: 'Clarity Over Complexity',
    description:
      'I value code that is readable, self-explanatory, and maintainable. Clean architecture and thoughtful abstractions are not luxuries—they are responsibilities.',
    icon: Lightbulb,
  },
  {
    title: 'Quality Over Shortcuts',
    description:
      'I write software with future developers in mind. Type-safety, explicit schemas, and testable design are standard obligations, not optional extras.',
    icon: ShieldCheck,
  },
  {
    title: 'Continuous Learning',
    description:
      'Technology evolves every day, but strong fundamentals remain timeless. I focus on learning deeply, building consistently, and improving with every project.',
    icon: Compass,
  },
];

export function MindsetSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-secondary/5 dark:bg-transparent border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal delay={0.1}>
          <div className="flex flex-col mb-16 items-center text-center">
            <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono mb-2">
              06 // Engineering Mindset
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight mb-4">
              Engineering Philosophy
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              Technology evolves every day, but strong fundamentals remain timeless. I focus on
              learning deeply, building consistently, and improving with every project.
            </p>
          </div>
        </Reveal>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, idx) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={0.15 * (idx + 1)}>
                <div className="flex flex-col items-center text-center p-6 bg-card/20 border border-border/40 rounded-xl hover:border-primary/20 transition-all duration-300 relative group">
                  {/* Icon Wrapper */}
                  <div className="p-3.5 rounded-full bg-primary/5 dark:bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5.5 h-5.5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-base text-foreground mb-3">
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
      </div>
    </section>
  );
}
