import clsx, { type ClassValue } from 'clsx';
import { extendTailwindMerge, validators } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge<
  'text-stroke' | 'text-stroke-color' | 'text-stroke-width'
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
          'text-stroke': [
            'black',
            'white',
            'light-yellow',
            'wood-100',
            'wood-200',
            'wood-300',
            'wood-400',
            'wood-500',
            'wood-600',
            'steel-100',
            'steel-200',
            'steel-300',
            'steel-400',
            'steel-500',
            'green-100',
            'green-200',
            'green-300',
            'green-400',
            'grey-100',
            'grey-200',
            'grey-300',
            'grey-400',
            'blue-100',
            'blue-200',
            'blue-300',
            'blue-400',
            'red-100',
            'red-200',
            'red-300',
            'red-400',
            'lavender-100',
            'lavender-200',
            'lavender-300',
            'lavender-400',
            'orange-100',
            'orange-200',
            'orange-300',
            'orange-400',
          ],
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
