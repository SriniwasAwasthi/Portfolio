'use client';

import dynamic from 'next/dynamic';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';

/* ─────────────────────────────────────────────
   All below-fold sections are dynamically loaded
   from this Client Component so that ssr: false
   is valid (only allowed inside 'use client').
───────────────────────────────────────────── */

const AboutSection = dynamic(
  () => import('@/features/about/AboutSection').then((m) => ({ default: m.AboutSection })),
  { loading: () => <SectionSkeleton rows={2} />, ssr: false },
);

const SkillsSection = dynamic(
  () => import('@/features/skills/SkillsSection').then((m) => ({ default: m.SkillsSection })),
  { loading: () => <SectionSkeleton rows={3} />, ssr: false },
);

const AIEcosystem = dynamic(
  () => import('@/features/skills/AIEcosystem').then((m) => ({ default: m.AIEcosystem })),
  { loading: () => <SectionSkeleton rows={2} />, ssr: false },
);

const ProjectsSection = dynamic(
  () => import('@/features/projects/ProjectsSection').then((m) => ({ default: m.ProjectsSection })),
  { loading: () => <SectionSkeleton rows={3} />, ssr: false },
);

const GithubSection = dynamic(
  () => import('@/features/github/GithubSection').then((m) => ({ default: m.GithubSection })),
  { loading: () => <SectionSkeleton rows={2} />, ssr: false },
);

const MindsetSection = dynamic(
  () => import('@/features/about/MindsetSection').then((m) => ({ default: m.MindsetSection })),
  { loading: () => <SectionSkeleton rows={2} />, ssr: false },
);

const AchievementsSection = dynamic(
  () =>
    import('@/features/timeline/AchievementsSection').then((m) => ({
      default: m.AchievementsSection,
    })),
  { loading: () => <SectionSkeleton rows={2} />, ssr: false },
);

const EducationSection = dynamic(
  () =>
    import('@/features/education/EducationSection').then((m) => ({ default: m.EducationSection })),
  { loading: () => <SectionSkeleton rows={2} />, ssr: false },
);

const JourneyTimeline = dynamic(
  () => import('@/features/timeline/JourneyTimeline').then((m) => ({ default: m.JourneyTimeline })),
  { loading: () => <SectionSkeleton rows={4} />, ssr: false },
);

const PhilosophySection = dynamic(
  () =>
    import('@/features/about/PhilosophySection').then((m) => ({ default: m.PhilosophySection })),
  { loading: () => <SectionSkeleton rows={2} />, ssr: false },
);

const ContactSection = dynamic(
  () => import('@/features/contact/ContactSection').then((m) => ({ default: m.ContactSection })),
  { loading: () => <SectionSkeleton rows={2} />, ssr: false },
);

/**
 * DynamicSections — Client Component boundary.
 * Houses all below-fold dynamic imports so `ssr: false`
 * is valid and each section is error-isolated.
 */
export function DynamicSections() {
  return (
    <>
      <ErrorBoundary sectionName="About">
        <AboutSection />
      </ErrorBoundary>

      <ErrorBoundary sectionName="Skills">
        <SkillsSection />
      </ErrorBoundary>

      <ErrorBoundary sectionName="AI Ecosystem">
        <AIEcosystem />
      </ErrorBoundary>

      <ErrorBoundary sectionName="Projects">
        <ProjectsSection />
      </ErrorBoundary>

      <ErrorBoundary sectionName="GitHub">
        <GithubSection />
      </ErrorBoundary>

      <ErrorBoundary sectionName="Engineering Mindset">
        <MindsetSection />
      </ErrorBoundary>

      <ErrorBoundary sectionName="Achievements">
        <AchievementsSection />
      </ErrorBoundary>

      <ErrorBoundary sectionName="Education">
        <EducationSection />
      </ErrorBoundary>

      <ErrorBoundary sectionName="Journey Timeline">
        <JourneyTimeline />
      </ErrorBoundary>

      <ErrorBoundary sectionName="Philosophy">
        <PhilosophySection />
      </ErrorBoundary>

      <ErrorBoundary sectionName="Contact">
        <ContactSection />
      </ErrorBoundary>
    </>
  );
}
