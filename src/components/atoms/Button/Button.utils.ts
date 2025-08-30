import type {
  BaseColor,
  BaseColorVariant,
  Color,
  ColorVariant,
  Variant as ButtonVariant,
  MotionVariant,
} from './Button.types';
import type { Variant } from 'motion/react';
import { SPRING_CONFIGS } from '@/lib/motion';

export const baseColorVariants: Record<BaseColor, BaseColorVariant> = {
  wood: {
    background: 'bg-wood-400',
    shadow: 'var(--color-wood-500)',
    corner: 'before:bg-wood-500 after:bg-wood-500',
  },
  steel: {
    background: 'bg-steel-300',
    shadow: 'var(--color-steel-400)',
    corner: 'before:bg-steel-400 after:bg-steel-400',
  },
};

export const colorVariants: Record<Color, ColorVariant> = {
  green: {
    frame: 'bg-green-400',
    surface: 'bg-green-200',
    stroke: { text: 'text-stroke-green-400', icon: 'text-green-400' },
    shadows: {
      light: 'var(--color-green-100)',
      dark: 'var(--color-green-300)',
    },
    corners: {
      light: 'before:bg-green-100',
      dark: 'after:bg-green-300',
    },
  },
  blue: {
    frame: 'bg-blue-400',
    surface: 'bg-blue-200',
    stroke: { text: 'text-stroke-blue-400', icon: 'text-blue-400' },
    shadows: {
      light: 'var(--color-blue-100)',
      dark: 'var(--color-blue-300)',
    },
    corners: {
      light: 'before:bg-blue-100',
      dark: 'after:bg-blue-300',
    },
  },
  red: {
    frame: 'bg-red-400',
    surface: 'bg-red-200',
    stroke: { text: 'text-stroke-red-400', icon: 'text-red-400' },
    shadows: {
      light: 'var(--color-red-100)',
      dark: 'var(--color-red-300)',
    },
    corners: {
      light: 'before:bg-red-100',
      dark: 'after:bg-red-300',
    },
  },
  orange: {
    frame: 'bg-orange-400',
    surface: 'bg-orange-200',
    stroke: { text: 'text-stroke-orange-400', icon: 'text-orange-400' },
    shadows: {
      light: 'var(--color-orange-100)',
      dark: 'var(--color-orange-300)',
    },
    corners: {
      light: 'before:bg-orange-100',
      dark: 'after:bg-orange-300',
    },
  },
  grey: {
    frame: 'bg-grey-400',
    surface: 'bg-grey-200',
    stroke: { text: 'text-stroke-grey-400', icon: 'text-grey-400' },
    shadows: {
      light: 'var(--color-grey-100)',
      dark: 'var(--color-grey-300)',
    },
    corners: {
      light: 'before:bg-grey-100',
      dark: 'after:bg-grey-300',
    },
  },
  lavender: {
    frame: 'bg-lavender-400',
    surface: 'bg-lavender-200',
    stroke: { text: 'text-stroke-lavender-400', icon: 'text-lavender-400' },
    shadows: {
      light: 'var(--color-lavender-100)',
      dark: 'var(--color-lavender-300)',
    },
    corners: {
      light: 'before:bg-lavender-100',
      dark: 'after:bg-lavender-300',
    },
  },
  wood: {
    frame: 'bg-wood-500',
    surface: 'bg-wood-200',
    stroke: { text: 'text-stroke-wood-600', icon: 'text-wood-600' },
    shadows: {
      light: 'var(--color-wood-100)',
      dark: 'var(--color-wood-300)',
    },
    corners: {
      light: 'before:bg-wood-100',
      dark: 'after:bg-wood-300',
    },
  },
  steel: {
    frame: 'bg-steel-500',
    surface: 'bg-steel-200',
    stroke: { text: 'text-stroke-steel-500', icon: 'text-steel-500' },
    shadows: {
      light: 'var(--color-steel-100)',
      dark: 'var(--color-steel-300)',
    },
    corners: {
      light: 'before:bg-steel-100',
      dark: 'after:bg-steel-300',
    },
  },
};

export const motionVariants = (
  variant: ButtonVariant
): Record<MotionVariant, Variant> => {
  if (variant === 'primary') {
    return {
      initial: {
        paddingBottom: '0.4em',
        transition: SPRING_CONFIGS.bouncy,
      },
      hover: {
        paddingBottom: '0.6em',
        transition: SPRING_CONFIGS.bouncy,
      },
      hoverWithDelay: {
        paddingBottom: '0.6em',
        transition: {
          ...SPRING_CONFIGS.bouncy,
          delay: 0.1,
        },
      },
      tap: {
        paddingBottom: '0.2em',
        transition: SPRING_CONFIGS.snappy,
      },
    };
  }
  return {
    initial: {
      paddingBottom: '0.2em',
      transition: SPRING_CONFIGS.bouncy,
    },
    hover: {
      paddingBottom: '0.4em',
      transition: SPRING_CONFIGS.bouncy,
    },
    hoverWithDelay: {
      paddingBottom: '0.4em',
      transition: {
        ...SPRING_CONFIGS.bouncy,
        delay: 0.1,
      },
    },
    tap: {
      paddingBottom: '0.1em',
      transition: SPRING_CONFIGS.snappy,
    },
  };
};
