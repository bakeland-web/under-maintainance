import type { SizeVariant, ColorVariant, Variant } from './Box.types';

export const sizeVariants: Record<SizeVariant, string> = {
  sm: 'w-16 h-16',
  lg: 'w-[120px] h-[120px]',
};

export const colorVariants: Record<Variant, ColorVariant> = {
  wood: {
    backgrounds: { outer: 'bg-wood-100', inner: 'bg-wood-300' },
    corner: 'before:bg-wood-400',
    shadow: 'var(--color-wood-400)',
  },
  steel: {
    backgrounds: { outer: 'bg-steel-100', inner: 'bg-steel-300' },
    corner: 'before:bg-steel-400',
    shadow: 'var(--color-steel-400)',
  },
};
