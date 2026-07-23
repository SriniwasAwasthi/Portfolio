'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  width?: 'w-full' | 'w-auto';
}

export function Reveal({
  children,
  delay = 0,
  yOffset = 80, // larger offset for slide-appearing feel
  xOffset = 0,
  width = 'w-full',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : yOffset,
      x: shouldReduceMotion ? 0 : xOffset,
      scale: shouldReduceMotion ? 1 : 0.96, // subtle scale-up for slide transition depth
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }} // triggers when 10% of element is on screen
      transition={{
        type: 'spring',
        stiffness: 45,
        damping: 18,
        mass: 1,
        delay: shouldReduceMotion ? 0 : delay,
      }}
      className={width}
    >
      {children}
    </motion.div>
  );
}
