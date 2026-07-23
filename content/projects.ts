import type { Project } from '@/types';

/**
 * ─────────────────────────────────────────────
 * PROJECTS DATA
 * ─────────────────────────────────────────────
 * Exactly 9 public featured projects matching Sriniwas's GitHub repositories:
 * https://github.com/SriniwasAwasthi
 * ─────────────────────────────────────────────
 */
export const projectsData: Project[] = [
  {
    id: 'meridian-living',
    name: 'Meridian Living (E-commerce)',
    summary:
      'Online luxury shopping platform for smart home devices, desk setups, home decor, wellness, and gifts with interactive room scenes.',
    problem:
      'Shoppers struggle to visualize luxury home decor, desk setups, and smart home tech in interactive room settings before making purchasing decisions.',
    solution:
      'Built Meridian Living — an online luxury shopping website featuring 90 curated items, interactive room scene previews, AI shopping assistant support, and dynamic product catalog filtering.',
    features: [
      'Interactive room scene shopping experience for desk & home setups',
      'Catalog of 90+ luxury products across 5 curated categories',
      'AI shopping assistant for personalized product recommendations',
      'Interactive cart management, wishlist, and checkout UI',
    ],
    tech: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'AI Chat'],
    learnings:
      'Optimizing state for 90+ interactive items and room scene coordinates required modular cart state stores and clean responsive image rendering.',
    future: [
      'Integrate Stripe payment processing gateway',
      'Add 3D room preview using Three.js / WebGL',
    ],
    github: 'https://github.com/SriniwasAwasthi/E-commerce-Meridian-Living-',
    coverColor: 'bg-[#39FF14]',
  },
  {
    id: 'java-dsa-tracker',
    name: 'Java & DSA Study Tracker',
    summary:
      'Adaptive AI study planner for Java & DSA interview prep with auto-rescheduling, spaced repetition, and 5-in-1 Gemini AI mentor.',
    problem:
      'Students and job seekers frequently drop out of coding interview prep due to rigid study schedules, lack of spaced repetition memory retention, and overwhelming DSA problem sets.',
    solution:
      'Created an adaptive AI study planner that auto-reschedules missed study days, prevents forgetting using spaced repetition algorithms, and features a 5-in-1 Google Gemini AI mentor for real-time problem assistance.',
    features: [
      'Adaptive AI study planner with automatic schedule re-balancing',
      'Spaced repetition memory system preventing concept forgetting',
      '5-in-1 Google Gemini AI mentor for real-time DSA guidance & debugging',
      'Structured Java Data Structures & Algorithms topic tracking',
    ],
    tech: ['TypeScript', 'Java', 'Google Gemini AI', 'React', 'Tailwind CSS'],
    learnings:
      'Implementing spaced repetition memory decay curves required fine-tuning algorithm interval weights and prompt engineering for Gemini AI.',
    future: [
      'Add interactive code execution sandbox',
      'Connect LeetCode / HackerRank API for auto-syncing solved problems',
    ],
    github: 'https://github.com/SriniwasAwasthi/Java-DSA-tracker',
    coverColor: 'bg-[#7CFF6B]',
  },
  {
    id: 'engineering-student-assistant',
    name: 'Engineering Student Assistant',
    summary:
      'All-in-one student dashboard managing attendance, assignments, exam alerts, GPA calculation, and coding interview prep.',
    problem:
      'Engineering students struggle to track class attendance thresholds, exam calendars, homework deadlines, and placement coding practice across fragmented tools.',
    solution:
      'Built an all-in-one student dashboard for tracking attendance thresholds, calculating GPA, scheduling assignments, monitoring exams, and practicing interview coding.',
    features: [
      'Attendance threshold tracker & dynamic GPA calculator',
      'Assignment manager & exam countdown dashboard',
      'Coding practice & placement preparation modules',
      'Interactive study schedule & alert reminders',
    ],
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Python'],
    learnings:
      'Structuring multi-module student workflows into a single responsive client app required decoupled state modules and persistent LocalStorage syncing.',
    future: [
      'Implement calendar export (.ics support)',
      'Add peer study group schedule sharing features',
    ],
    github: 'https://github.com/SriniwasAwasthi/Engineering-Student-Assistant',
    coverColor: 'bg-[#50FA7B]',
  },
  {
    id: 'thinkr-ai',
    name: 'THINKR AI',
    summary:
      'Super-smart AI study buddy that builds customized, step-by-step learning roadmaps based on available time.',
    problem:
      'Students get overwhelmed trying to structure study materials when deadlines approach, wasting valuable time deciding what to study.',
    solution:
      'Built THINKR AI — an intelligent study buddy assistant that takes any topic and time constraint, then instantly builds a step-by-step custom learning plan with interactive prompts.',
    features: [
      'Instant step-by-step custom study roadmap generation',
      'Time-bounded study session partitioning & countdowns',
      'Interactive AI Q&A study buddy assistant',
      'Clean, dark-mode responsive web interface',
    ],
    tech: ['HTML', 'JavaScript', 'CSS', 'AI API'],
    learnings:
      'Optimizing prompt response flows was crucial for providing instantaneous feedback when students break down complex technical topics.',
    future: [
      'Add PDF document ingestion & automated quiz generator',
      'Incorporate spaced study notifications',
    ],
    github: 'https://github.com/SriniwasAwasthi/THINKR_AI',
    demo: 'https://thinkr-ai-ruby.vercel.app',
    coverColor: 'bg-[#9DFF85]',
  },
  {
    id: 'stellar-assault',
    name: 'Stellar Assault Space Shooter',
    summary:
      'Browser-based arcade space shooter game featuring alien waves, boss battles, shop upgrades, medals, and particle effects.',
    problem:
      'Browser games often suffer from frame rate drops and uneven game physics when managing high numbers of bullet and particle sprites.',
    solution:
      'Developed a high-performance Canvas game engine with delta-time physics, wave generation, upgrade store system, particle FX, and boss fight mechanics.',
    features: [
      'Delta-time physics & 60 FPS requestAnimationFrame rendering engine',
      'Multiple waves of alien invaders & giant boss fights',
      'In-game upgrade shop & medal unlock achievements',
      'Custom laser, missile & particle FX animations',
    ],
    tech: ['TypeScript', 'HTML5 Canvas', 'JavaScript', 'React', 'Vite'],
    learnings:
      'Designing quad-tree collision detection algorithms optimized frame rates from O(N^2) down to O(N log N) during intense missile fire.',
    future: [
      'Add global online high-score leaderboards',
      'Implement local storage save states and multiplayer co-op',
    ],
    github: 'https://github.com/SriniwasAwasthi/-stellar-assault-space-shooter',
    coverColor: 'bg-[#B7FFAE]',
  },
  {
    id: 'focus-flow',
    name: 'FocusFlow Ultimate',
    summary:
      'Full-stack AI-powered productivity platform featuring task management, Pomodoro sessions, smart planning, and analytics.',
    problem:
      'Fragmented productivity tools isolate session timers from actual task management, making deep focus work hard to track and analyze.',
    solution:
      'Built FocusFlow Ultimate — a full-stack platform combining Pomodoro focus timers, smart Kanban task boards, AI study planning, analytics, and calendar integration.',
    features: [
      'Pomodoro focus session timer linked directly to active Kanban task cards',
      'Smart study planner with AI task suggestions & priority grouping',
      'Focus analytics charts & productivity telemetry dashboards',
      'Calendar view & customizable reminder notifications',
    ],
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Lucide Icons', 'AI'],
    learnings:
      'Handling cross-tab timer state synchronization required leveraging BroadcastChannel and LocalStorage events for seamless transitions.',
    future: [
      'Incorporate cloud database authentication',
      'Add collaborative shared focus lobbies for team study',
    ],
    github: 'https://github.com/SriniwasAwasthi/FocusFlow',
    coverColor: 'bg-[#7CFF6B]',
  },
  {
    id: 'book-matrix',
    name: 'Book Matrix Library Management',
    summary:
      'Modern AI-powered Library Management System built with Python, SQLite, C, HTML, CSS, and JavaScript.',
    problem:
      'Traditional library management software is clunky, slow to search, and lacks automated backups, fine calculations, and AI reporting.',
    solution:
      'Created Book Matrix — a multi-language library system managing books, member checkouts/returns, automated fines, system backups, and AI-assisted catalog reports.',
    features: [
      'Book & member management grid with instant multi-column search',
      'Automated borrowing, return, & late fee calculation formulas',
      'System database backup & restore functionality',
      'AI-assisted catalog insights & usage telemetry reports',
    ],
    tech: ['Python', 'SQLite', 'C', 'JavaScript', 'HTML/CSS'],
    learnings:
      'Integrating C execution routines with Python database operations achieved high execution speed for inventory backups and sorting.',
    future: [
      'Add barcode reader scanner integration',
      'Expand REST API endpoints for mobile patron apps',
    ],
    github: 'https://github.com/SriniwasAwasthi/Book-Matrix-Library-Management-system-',
    coverColor: 'bg-[#50FA7B]',
  },
  {
    id: 'calcall',
    name: 'CalcAll Universal Calculator Platform',
    summary:
      'High-performance, privacy-focused calculator ecosystem featuring 190+ tools across Math, Finance, Health, and Construction.',
    problem:
      'Standard calculators lack specialized formulas for multi-field calculations across math, finance, health, and engineering construction.',
    solution:
      'Developed CalcAll — a zero-dependency privacy-focused platform hosting over 190 calculators with instant search, formula history, and shareable calculations.',
    features: [
      '190+ specialized tools across Math, Finance, Health, and Construction',
      'Zero-dependency client-side execution architecture',
      'History ledger & instant keyword search filtering',
      'Full keyboard navigation and ARIA accessibility standards',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'A11y Standards'],
    learnings:
      'Building a safe custom mathematical expression parser avoided dangerous eval() calls while supporting complex nested formulas.',
    future: [
      'Add live currency conversion API integration',
      'Export calculation ledger to PDF / CSV',
    ],
    github: 'https://github.com/SriniwasAwasthi/calcall-universal-calculator-platform',
    coverColor: 'bg-[#39FF14]',
  },
  {
    id: 'hackforge-ai',
    name: 'HackForge (AI Agents for Hackathons)',
    summary:
      'Hackathon command center with AI tool suggestions, custom tech stack suggestions, task planning, and API testing.',
    problem:
      'Hackathon participants waste critical initial hours configuring tech stacks, finding tools, organizing tasks, and testing APIs manually.',
    solution:
      'Created HackForge — an AI command center that evaluates project goals, suggests optimal tech stacks, tracks task timers, and provides an API testing sandbox.',
    features: [
      'AI tool comparison & tech stack recommendation engine',
      'Task planning dashboard & countdown session timer',
      'API testing sandbox & prompt storage scratchpad',
      'Dark-mode streamlined hackathon UI',
    ],
    tech: ['TypeScript', 'React', 'Gemini API', 'Tailwind CSS'],
    learnings:
      'Structuring reliable LLM JSON outputs for stack recommendations ensured consistent rendering of tool recommendations without breaking components.',
    future: [
      'One-click project boilerplate starter generator',
      'Team role delegation & task assignment board',
    ],
    github: 'https://github.com/SriniwasAwasthi/AI-Agents-for-hackathons',
    coverColor: 'bg-[#50FA7B]',
  },
];
