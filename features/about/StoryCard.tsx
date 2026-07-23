'use client';

import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StoryCardProps {
  category: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
}

export function StoryCard({ category, title, description, icon: Icon, className }: StoryCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-xl border border-[#39FF14]/20 bg-[#060806]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#39FF14]/60 hover:bg-[#060806] shadow-[0_0_20px_rgba(57,255,20,0.05)] hover:shadow-[0_0_35px_rgba(57,255,20,0.25)]',
        className,
      )}
      tabIndex={0}
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-tr from-[#39FF14]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header block */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-[10px] font-bold tracking-widest text-[#39FF14] uppercase bg-[#39FF14]/10 border border-[#39FF14]/30 px-2.5 py-1 rounded-full">
          {category}
        </span>
        {Icon && (
          <div className="p-1.5 rounded-lg bg-[#39FF14]/10 text-[#39FF14] group-hover:bg-[#39FF14]/20 transition-colors duration-300">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-[#39FF14] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
