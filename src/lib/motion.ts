import type { Transition } from 'motion/react';

export const SPRING_CONFIGS: Record<string, Transition> = {
  smooth: { type: 'spring', mass: 1, stiffness: 80, damping: 20 },
  bouncy: { type: 'spring', mass: 1, stiffness: 600, damping: 15 },
  snappy: { type: 'spring', mass: 1, stiffness: 4800, damping: 80 },
};
