'use client';

import * as React from 'react';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuoteCalloutProps {
  quote: string;
  author?: string;
  role?: string;
  className?: string;
}

export function QuoteCallout({ quote, author, role, className }: QuoteCalloutProps) {
  return (
    <div
      className={cn(
        'relative rounded-xl border border-primary/10 bg-primary/[0.02] dark:bg-primary/[0.04] p-6 md:p-8 overflow-hidden backdrop-blur-sm',
        className,
      )}
    >
      {/* Decorative large quotes */}
      <Quote className="absolute -right-4 -bottom-4 w-28 h-28 text-primary/5 dark:text-primary/10 pointer-events-none select-none" />

      <div className="relative flex flex-col gap-4">
        {/* Quote Icon */}
        <div className="text-primary/80">
          <Quote className="w-8 h-8 rotate-180 fill-primary/10" />
        </div>

        {/* Text content */}
        <blockquote className="text-base md:text-lg font-medium leading-relaxed italic text-foreground/90 font-heading">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Citation */}
        {(author || role) && (
          <div className="mt-2 flex flex-col">
            {author && (
              <cite className="not-italic text-sm font-semibold text-foreground">{author}</cite>
            )}
            {role && <span className="text-xs text-muted-foreground">{role}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
