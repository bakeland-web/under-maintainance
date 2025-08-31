import type { ColorVariant, Variant } from './Tab.types';

export const colorVariants: Record<Variant, ColorVariant> = {
  wood: {
    active: {
      background: { class: 'bg-wood-200', var: 'var(--color-wood-200)' },
      corner: 'before:bg-wood-100',
      shadows: {
        light: 'var(--color-wood-100)',
        medium: 'var(--color-wood-300)',
        dark: 'var(--color-wood-500)',
      },
      textStroke: 'text-stroke-green-400',
    },
    inactive: {
      background: { class: 'bg-wood-300', var: 'var(--color-wood-300)' },
      corner: 'before:bg-wood-200',
      shadows: {
        light: 'var(--color-wood-200)',
        medium: 'var(--color-wood-400)',
        dark: 'var(--color-wood-500)',
      },
      textStroke: 'text-stroke-green-400',
    },
  },
  steel: {
    active: {
      background: { class: 'bg-steel-200', var: 'var(--color-steel-200)' },
      corner: 'before:bg-steel-100',
      shadows: {
        light: 'var(--color-steel-100)',
        medium: 'var(--color-steel-300)',
        dark: 'var(--color-steel-400)',
      },
      textStroke: 'text-stroke-steel-500',
    },
    inactive: {
      background: { class: 'bg-steel-300', var: 'var(--color-steel-300)' },
      corner: 'before:bg-steel-200',
      shadows: {
        light: 'var(--color-steel-200)',
        medium: 'var(--color-steel-400)',
        dark: 'var(--color-steel-400)',
      },
      textStroke: 'text-stroke-steel-500',
    },
  },
};
