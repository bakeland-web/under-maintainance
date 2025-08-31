import type { Font } from '@/types';
import type { TextStroke } from './Typography.types';

export const fontVariants: Record<Font, string> = {
  'upheaval-tt': 'font-upheaval-tt',
  pixellari: 'font-pixellari',
  'pixel-gothic': 'font-pixel-gothic',
};

export const textStrokeVariants: Record<TextStroke, string> = {
  none: '',
  normal: 'text-stroke',
  normalWithShadow: 'text-stroke-shadow',
  expanded: 'text-stroke-expanded',
  expandedWithShadow: 'text-stroke-expanded-shadow',
};
