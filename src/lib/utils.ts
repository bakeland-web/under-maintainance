import clsx, { type ClassValue } from 'clsx';
import { extendTailwindMerge, validators } from 'tailwind-merge';
import { THEME_COLORS } from './globals';

const customTwMerge = extendTailwindMerge<
  | 'text-stroke'
  | 'text-stroke-color'
  | 'text-stroke-width'
  | 'bg-overlay'
  | 'bg-overlay-color'
  | 'bg-overlay-width'
>({
  extend: {
    classGroups: {
      'text-stroke': [
        'text-stroke',
        'text-stroke-shadow',
        'text-stroke-expanded',
        'text-stroke-expanded-shadow',
      ],
      'text-stroke-color': [
        {
          'text-stroke': THEME_COLORS,
        },
      ],
      'text-stroke-width': [
        {
          'text-stroke': [validators.isArbitraryLength, validators.isNumber],
        },
      ],
    },
  },
});

export const cn = (...classes: ClassValue[]) => customTwMerge(clsx(classes));
