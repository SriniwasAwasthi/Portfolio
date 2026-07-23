# Developer Documentation — Sri Nivas Portfolio

A complete technical reference for understanding, extending, and maintaining this codebase.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Folder Structure](#folder-structure)
3. [Design System](#design-system)
4. [Adding Content](#adding-content)
5. [Component Guide](#component-guide)
6. [Animation System](#animation-system)
7. [Theme Configuration](#theme-configuration)
8. [Environment Variables](#environment-variables)
9. [SEO & Structured Data](#seo--structured-data)
10. [Deployment](#deployment)
11. [Future Expansion Guide](#future-expansion-guide)
12. [QA Checklist](#qa-checklist)

---

## Architecture Overview

```
Portfolio
├── Server Component (page.tsx)      ← Static, SSR
│   ├── InteractiveBackground         ← Client (WebGL)
│   ├── Navbar                        ← Client (state)
│   ├── Hero                          ← Client (Framer Motion)
│   └── DynamicSections               ← Client wrapper (ssr:false lazy loads)
│       ├── AboutSection
│       ├── SkillsSection ──────── reads from content/skills.ts
│       ├── AIEcosystem
│       ├── ProjectsSection ─────── reads from content/projects.ts
│       ├── GithubSection
│       ├── MindsetSection
│       ├── AchievementsSection ─── reads from content/achievements.ts
│       ├── EducationSection ─────── reads from content/education.ts
│       ├── JourneyTimeline ──────── reads from content/journey.ts
│       ├── PhilosophySection
│       └── ContactSection
└── Footer                            ← Client
```

**Key rule:** `ssr: false` is only valid inside a `'use client'` component. All lazy-loaded sections are wrapped in `components/DynamicSections.tsx` for this reason.

**Error isolation:** Each section is wrapped in `<ErrorBoundary sectionName="...">`. A crash in one section never takes down the entire page.

---

## Folder Structure

```
app/                    Next.js App Router root
├── fonts.ts            Google Fonts (Inter + Outfit)
├── globals.css         CSS design tokens, HSL variables, scrollbar, reduced-motion
├── layout.tsx          Root layout: metadata, viewport, JSON-LD, ThemeProvider
├── not-found.tsx       Custom branded 404 page
├── opengraph-image.tsx Auto-generated 1200×630 OG image (edge runtime)
├── page.tsx            Home page: above-fold static + DynamicSections
├── robots.ts           /robots.txt generator
└── sitemap.ts          /sitemap.xml generator

components/
├── animations/
│   ├── InteractiveBackground.tsx   R3F 3D particle background
│   ├── MotionPresets.tsx           Shared Framer Motion variants
│   └── Reveal.tsx                  Scroll-triggered reveal wrapper
├── layout/
│   ├── Footer.tsx                  Footer with signature, nav, socials
│   └── Navbar.tsx                  Sticky navbar with theme toggle, mobile drawer
├── providers/
│   └── theme-provider.tsx          next-themes ThemeProvider wrapper
├── ui/
│   ├── button.tsx                  shadcn/ui Button
│   ├── SectionSkeleton.tsx         Pulse skeleton loading placeholder
│   └── theme-toggle.tsx            Dark/light mode toggle button
├── DynamicSections.tsx             Client boundary for all lazy-loaded sections
├── ErrorBoundary.tsx               React class ErrorBoundary (per-section)
└── JsonLd.tsx                      JSON-LD Person + WebSite structured data

config/
└── site.ts             Central site config: name, URL, links, nav items

content/                ← EDIT THESE to update content
├── achievements.ts     Achievement cards + future placeholders
├── education.ts        Degree info, coursework, now-learning entries
├── journey.ts          Journey timeline nodes (Beginning → Future)
├── projects.ts         All 9 project definitions
└── skills.ts           (To be extracted — currently inline in SkillsSection)

features/               Domain-scoped feature modules
├── about/              AboutSection, LearningMilestones, MindsetSection,
│                       PhilosophySection, QuoteCallout, StoryCard
├── contact/            ContactSection (email, GitHub, LinkedIn, CV)
├── education/          EducationSection (card + now tracker)
├── github/             GithubSection (heatmap + language chart)
├── hero/               Hero (IDE panel, CTAs, social links)
├── projects/           ProjectCard, ProjectsSection (modal system)
├── skills/             SkillsSection (grid), AIEcosystem (terminal)
└── timeline/           AchievementsSection, JourneyTimeline

types/
└── index.ts            Shared TypeScript interfaces (Skill, Project)
```

---

## Design System

All colors are defined as **HSL CSS custom properties** in `app/globals.css`.

### Color Tokens

| Token                | Light                 | Dark               | Usage                        |
| -------------------- | --------------------- | ------------------ | ---------------------------- |
| `--background`       | `hsl(0 0% 100%)`      | `hsl(240 15% 2%)`  | Page background              |
| `--foreground`       | `hsl(240 10% 3.9%)`   | `hsl(0 0% 98%)`    | Body text                    |
| `--primary`          | `hsl(250 85% 55%)`    | `hsl(250 85% 65%)` | Brand purple — CTAs, accents |
| `--card`             | `hsl(0 0% 99%)`       | `hsl(240 10% 4%)`  | Card backgrounds             |
| `--border`           | `hsl(240 5.9% 90%)`   | `hsl(240 4% 12%)`  | Dividers, card borders       |
| `--muted-foreground` | `hsl(240 3.8% 46.1%)` | `hsl(240 5% 65%)`  | Secondary text               |

### Typography

| Variable         | Value                          | Usage                   |
| ---------------- | ------------------------------ | ----------------------- |
| `--font-heading` | `var(--font-heading)` (Outfit) | H1–H4, section labels   |
| `--font-sans`    | `var(--font-sans)` (Inter)     | Body text, descriptions |
| `--font-mono`    | system-mono                    | Code snippets, labels   |

Apply: `className="font-heading"` or `className="font-sans"` or `className="font-mono"`.

### Spacing & Radius

- Section padding: `py-24 px-6 md:px-12 lg:px-24`
- Max content width: `max-w-7xl mx-auto`
- Card radius: `rounded-xl`
- Pill radius: `rounded-full`

---

## Adding Content

### ➕ Add a New Project

1. Open [`content/projects.ts`](./content/projects.ts)
2. Append a new object to the `projectsData` array:

```typescript
{
  id: 'my-new-project',          // unique slug
  name: 'My New Project',
  summary: 'One line description.',
  problem: 'What problem does it solve?',
  solution: 'How did you solve it?',
  features: ['Feature 1', 'Feature 2'],
  tech: ['Next.js', 'PostgreSQL'],
  learnings: 'What did you learn?',
  future: ['Future idea 1'],
  github: 'https://github.com/your-username/repo',
  coverColor: 'bg-violet-500',   // any Tailwind bg color
}
```

The project card and modal appear automatically. No component editing needed.

---

### ➕ Add a New Achievement

1. Open [`content/achievements.ts`](./content/achievements.ts)
2. Append to `achievements`:

```typescript
{
  title: 'Your Achievement Title',
  level: 'National / State / College Level',
  description: 'What you did and how you did it.',
  date: '2025',
  iconName: 'Trophy',            // 'Trophy' | 'Award' | 'Star' | 'Medal'
  category: 'Hackathon',
}
```

---

### ✏️ Update "Now Learning" Entries

1. Open [`content/education.ts`](./content/education.ts)
2. Edit the `nowLearning` array:

```typescript
export const nowLearning: CourseEntry[] = [{ topic: 'Your Topic', status: 'Your Status' }];
```

---

### ✏️ Update the Journey Timeline

1. Open [`content/journey.ts`](./content/journey.ts)
2. Edit or add stages to `journeyData`
3. Valid iconNames: `'Terminal'` | `'Code'` | `'BrainCircuit'` | `'Target'` | `'GitBranch'`

---

### ✏️ Update Social Links / Site Config

1. Open [`config/site.ts`](./config/site.ts)
2. Update `links.github`, `links.linkedin`, `links.email`, and `url`
3. This propagates to: Navbar, Footer, ContactSection, JSON-LD, OG image, sitemap

---

## Component Guide

### `<Reveal>` — Scroll-triggered fade-in

```tsx
import { Reveal } from '@/components/animations/Reveal';

<Reveal delay={0.15} yOffset={30}>
  <YourContent />
</Reveal>;
```

| Prop       | Default    | Description                          |
| ---------- | ---------- | ------------------------------------ |
| `delay`    | `0`        | Animation delay in seconds           |
| `duration` | `0.6`      | Animation duration in seconds        |
| `yOffset`  | `30`       | Vertical offset from which to reveal |
| `xOffset`  | `0`        | Horizontal offset                    |
| `width`    | `'w-full'` | Wrapper width class                  |

Respects `prefers-reduced-motion` automatically.

---

### `<ErrorBoundary>` — Section error isolation

```tsx
import { ErrorBoundary } from '@/components/ErrorBoundary';

<ErrorBoundary sectionName="My Section">
  <MySection />
</ErrorBoundary>;
```

If `MySection` throws, a fallback card is shown instead of crashing the page.

---

### `<SectionSkeleton>` — Loading placeholder

```tsx
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';

// Automatically used inside DynamicSections.tsx loading callbacks
<SectionSkeleton rows={3} />;
```

---

## Animation System

Shared motion variants live in `components/animations/MotionPresets.tsx`.

```tsx
const { fadeIn, slideUp, staggerContainer } = useMotionPresets();
```

| Preset             | Effect                         |
| ------------------ | ------------------------------ |
| `fadeIn`           | Opacity 0 → 1                  |
| `slideUp`          | Opacity + Y translate up       |
| `staggerContainer` | Staggers children by 0.1s each |

All presets call `useReducedMotion()` and collapse to instant transitions when the system preference is set.

---

## Theme Configuration

Theme is managed by `next-themes` via `ThemeProvider` in `layout.tsx`.

```tsx
// components/providers/theme-provider.tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
```

- Default: `dark`
- Persisted in `localStorage`
- CSS variables switch between `:root` (light) and `.dark` (dark) blocks in `globals.css`

The `ThemeToggle` button in `Navbar.tsx` and `Footer.tsx` calls `setTheme()` from `next-themes`.

---

## Environment Variables

See [`.env.example`](./.env.example) for the full reference.

| Variable                      | Effect                                  |
| ----------------------------- | --------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | Overrides canonical URL in SEO metadata |
| `NEXT_PUBLIC_EMAIL`           | Contact email                           |
| `NEXT_PUBLIC_GITHUB_USERNAME` | For future live GitHub API integration  |
| `NEXT_PUBLIC_LINKEDIN_URL`    | LinkedIn profile URL                    |

Variables prefixed `NEXT_PUBLIC_` are safe to expose to the browser.

---

## SEO & Structured Data

### Metadata

Defined in `app/layout.tsx` using Next.js 15's `Metadata` type. Key fields:

- `metadataBase` — required for relative OG image paths
- `alternates.canonical` — prevents duplicate content penalties
- `robots` — `index: true, follow: true` with Googlebot fine-tuning
- `openGraph` + `twitter` — social sharing cards

### JSON-LD

`components/JsonLd.tsx` injects `Person` and `WebSite` schemas in `<head>`.

Test at: [Google Rich Results Test](https://search.google.com/test/rich-results)

### OG Image

Auto-generated at `/opengraph-image` via `app/opengraph-image.tsx` (Next.js `ImageResponse`, edge runtime). No external service needed.

Test at: [opengraph.xyz](https://www.opengraph.xyz)

---

## Deployment

### Vercel (Recommended)

```bash
# 1. Push to GitHub
git add . && git commit -m "chore: deploy" && git push

# 2. Import at vercel.com/new
# 3. Set environment variables in Vercel dashboard
# 4. Deploy
```

`vercel.json` configures:

- Framework: `nextjs`
- Security headers on all routes
- Immutable cache on static assets (`/_next/static/`, `/fonts/`)
- Trailing slash normalization

### Manual

```bash
npm run build
npm run start       # runs on port 3000
```

---

## Future Expansion Guide

The architecture is intentionally open for growth. Here's how to add common future sections:

### Technical Blog

1. Create `content/posts/` directory with MDX files
2. Create `app/blog/[slug]/page.tsx` — read MDX with `next-mdx-remote` or `contentlayer`
3. Add `{ label: 'Blog', href: '/blog' }` to `config/site.ts` navItems

### Certifications

1. Add `certifications` array to `content/achievements.ts`
2. Render a new card block in `AchievementsSection.tsx` using the existing card pattern

### Testimonials

1. Create `content/testimonials.ts` with name, role, company, quote
2. Add a `TestimonialsSection` inside `features/about/` following the Reveal + grid pattern

### Case Studies (extended projects)

1. Add a `caseStudyPath` field to project objects in `content/projects.ts`
2. Create `app/work/[id]/page.tsx` for full case-study pages

### Photography / Videos

Create a `features/gallery/` module using Next.js `<Image>` with blur placeholder.

---

## QA Checklist

Use this before every deployment.

### Code Quality

- [ ] `npx tsc --noEmit` → 0 errors
- [ ] `npm run lint` → 0 warnings
- [ ] `npx prettier --check .` → all files formatted
- [ ] No `console.log()` calls in production code

### Functionality

- [ ] All section anchor links work (`#about`, `#projects`, etc.)
- [ ] Dark / light theme toggle works
- [ ] Email copy button in Hero works
- [ ] Project modals open, display, and close correctly
- [ ] Keyboard: Tab navigates all interactive elements
- [ ] Keyboard: Escape closes modal
- [ ] Mobile: Hamburger menu opens and closes

### SEO & Meta

- [ ] `/robots.txt` is accessible
- [ ] `/sitemap.xml` lists all routes
- [ ] `/opengraph-image` renders the branded OG card
- [ ] JSON-LD validates at [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] `<title>` and `<meta description>` are set and correct

### Performance

- [ ] `npm run build` completes with no errors
- [ ] Lighthouse Performance ≥ 95
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse Best Practices ≥ 95
- [ ] Lighthouse SEO ≥ 95

### Accessibility

- [ ] All images have `alt` text
- [ ] All icon-only buttons have `aria-label`
- [ ] Heading hierarchy: h1 → h2 → h3 (no skips)
- [ ] Focus rings are visible on all interactive elements
- [ ] Color contrast ratios meet WCAG AA

### Content

- [ ] No placeholder text ("Lorem ipsum", "TODO", "example.com")
- [ ] No empty sections
- [ ] GitHub and LinkedIn links point to real profiles
- [ ] Email address is real and reachable
- [ ] Resume link (if active) points to a live PDF

---

_Last updated: July 2026 — Phase 7 completion_
