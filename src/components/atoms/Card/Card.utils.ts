import type { ColorVariant, Variant } from './Card.types';

export const colorVariants: Record<Variant, ColorVariant> = {
  wood: {
    background: 'bg-wood-200',
    corners: { light: 'before:bg-wood-100', dark: 'after:bg-wood-300' },
    shadows: {
      light: 'var(--color-wood-100)',
      medium: 'var(--color-wood-300)',
      dark: 'var(--color-wood-500)',
    },
  },
  steel: {
    background: 'bg-steel-200',
    corners: { light: 'before:bg-steel-100', dark: 'after:bg-steel-300' },
    shadows: {
      light: 'var(--color-steel-100)',
      medium: 'var(--color-steel-300)',
      dark: 'var(--color-steel-400)',
    },
  },
};
