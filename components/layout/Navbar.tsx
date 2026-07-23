'use client';

import * as React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import BorderGlow from '@/components/ui/BorderGlow';
import PillNav from './PillNav';

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState('#home');

  React.useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];

    // Intersection Observer to track active section while scrolling
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const logoNode = (
    <div className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-foreground select-none">
      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center font-extrabold">
        SN
      </span>
      <span className="hidden sm:inline-block font-bold">
        <span className="text-white">Sri</span>
        <span className="text-[#39FF14]">niwas</span>
      </span>
    </div>
  );

  const rightActions = (
    <>
      {/* Resume Button with BorderGlow */}
      <BorderGlow
        borderRadius={9999}
        glowColor="111 100 54"
        backgroundColor="transparent"
        glowIntensity={1.0}
        glowRadius={24}
        edgeSensitivity={40}
        colors={['#39FF14', '#7CFF6B', '#50FA7B']}
      >
        <a
          href="/SRINIWAS_RESUME.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            'gap-2 text-xs rounded-full cursor-pointer hover:bg-accent border-0 bg-transparent py-1.5 px-4 h-9',
          )}
        >
          <FileText className="w-3.5 h-3.5 text-[#39FF14]" />
          Resume
        </a>
      </BorderGlow>

      {/* Contact Button with BorderGlow */}
      <BorderGlow
        borderRadius={9999}
        glowColor="111 100 54"
        backgroundColor="transparent"
        glowIntensity={1.0}
        glowRadius={24}
        edgeSensitivity={40}
        colors={['#39FF14', '#7CFF6B', '#50FA7B']}
      >
        <a
          href="#contact"
          className={cn(
            buttonVariants({ variant: 'default', size: 'sm' }),
            'gap-2 text-xs rounded-full cursor-pointer hover:bg-[#7CFF6B] border-0 bg-[#39FF14] text-[#030503] py-1.5 px-4 h-9 flex items-center justify-center font-bold shadow-[0_0_20px_rgba(57,255,20,0.4)]',
          )}
        >
          Contact
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </BorderGlow>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <PillNav
          logo={logoNode}
          items={siteConfig.navItems}
          activeHref={activeSection}
          rightActions={rightActions}
          ease="power2.easeOut"
          baseColor="hsl(var(--background))"
          pillColor="hsl(var(--secondary))"
          pillTextColor="hsl(var(--muted-foreground))"
          hoveredPillTextColor="hsl(var(--foreground))"
          initialLoadAnimation={true}
        />
      </div>
    </header>
  );
}
