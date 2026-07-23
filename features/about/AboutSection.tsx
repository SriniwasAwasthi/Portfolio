'use client';

import * as React from 'react';
import { StoryCard } from './StoryCard';
import { LearningMilestones } from './LearningMilestones';
import { QuoteCallout } from './QuoteCallout';
import { Reveal } from '@/components/animations/Reveal';
import { BookOpen, Code2, Brain, Compass, Cpu, Target } from 'lucide-react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-secondary/10 dark:bg-transparent border-t border-border/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal delay={0.1}>
          <div className="flex flex-col mb-16">
            <span className="text-xs font-bold tracking-widest text-[#39FF14] uppercase font-mono mb-2 neon-text-glow">
              01 // Profile &amp; Brand
            </span>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">
                Who I Am
              </h2>
              <div className="h-[1px] bg-[#39FF14]/20 flex-grow max-w-[200px] hidden sm:block" />
            </div>
          </div>
        </Reveal>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal delay={0.15}>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Building software with purpose.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  I am a Computer Science Engineering student passionate about creating thoughtful
                  digital experiences. I enjoy solving complex problems, writing clean code, and
                  building products that combine simplicity, performance, and reliability.
                </p>
              </div>
            </Reveal>

            {/* What Drives Me */}
            <Reveal delay={0.25}>
              <StoryCard
                category="What Drives Me"
                title="Curiosity became a career."
                description="Computer Science gives me the freedom to understand how technology works and the ability to create it. Every concept I learn becomes another tool for solving meaningful problems."
                icon={Cpu}
              />
            </Reveal>

            {/* Engineering Philosophy */}
            <Reveal delay={0.35}>
              <StoryCard
                category="Engineering Philosophy"
                title="Where ideas become reality."
                description="Software engineering allows me to transform ideas into products people can use. I believe great software is defined by clarity, reliability, and attention to detail—not complexity."
                icon={Code2}
              />
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.45}>
              <StoryCard
                category="Vision"
                title="Building for the future."
                description="My goal is to become a software engineer who creates scalable products, solves meaningful challenges, and never stops learning. I want my work to deliver lasting value through thoughtful engineering."
                icon={Target}
              />
            </Reveal>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-8">
            {/* AI Exploration */}
            <Reveal delay={0.2}>
              <StoryCard
                category="AI Exploration"
                title="Engineering the next generation."
                description="Artificial Intelligence is changing the way software is designed and experienced. I'm exploring how intelligent systems can automate workflows, improve decision-making, and create better user experiences."
                icon={Brain}
              />
            </Reveal>

            {/* Beyond Code */}
            <Reveal delay={0.3}>
              <StoryCard
                category="Beyond Code"
                title="Learn. Build. Improve. Repeat."
                description="Every project teaches something new. I believe consistent practice, curiosity, and continuous improvement are the foundations of long-term growth."
                icon={BookOpen}
              />
            </Reveal>

            {/* Quote Callout — updated to premium personal quote */}
            <Reveal delay={0.38}>
              <QuoteCallout
                quote="Technology changes every day. Curiosity, discipline, and the willingness to keep learning are what truly build great engineers."
                author="Sriniwas"
                role="Computer Science Engineering Student"
              />
            </Reveal>

            {/* Milestone Roadmap Component */}
            <Reveal delay={0.45}>
              <div className="pt-4">
                <LearningMilestones />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
