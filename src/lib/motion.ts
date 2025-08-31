import type { Transition } from 'motion/react';

export const SPRING_CONFIGS = {
  smooth: { type: 'spring', mass: 1, stiffness: 80, damping: 20 },
  bouncy: { type: 'spring', mass: 1, stiffness: 600, damping: 15 },
  snappy: { type: 'spring', mass: 1, stiffness: 4800, damping: 80 },
} satisfies Record<string, Transition>;
