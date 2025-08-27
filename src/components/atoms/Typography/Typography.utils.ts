import type { Font, TextStroke } from './Typography.types';

export const fontVariants: Record<Font, string> = {
  'upheaval-tt': 'font-upheaval-tt',
  pixellari: 'font-pixellari',
};

export const textStrokeVariants: Record<TextStroke, string> = {
  none: '',
  normal: 'text-stroke',
  normalWithShadow: 'text-stroke-shadow',
  expanded: 'text-stroke-expanded',
  expandedWithShadow: 'text-stroke-expanded-shadow',
};
