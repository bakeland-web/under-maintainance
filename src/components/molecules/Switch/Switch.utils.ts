import type {
  ActiveOption,
  BaseColor,
  BaseColorVariant,
  Color,
  ColorVariant,
} from './Switch.types';
import type { Transition } from 'motion/react';

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

export const colorVariants: Record<
  Color,
  Record<ActiveOption, ColorVariant>
> = {
  green: {
    left: {
      frame: 'bg-green-400',
      stroke: 'text-stroke-green-400',
      surface: {
        leftSection:
          'bg-green-200 group-hover-or-focus:bg-overlay group-hover-or-focus:bg-overlay-green-200',
        rightSection:
          'bg-overlay bg-overlay-green-200 group-hover-or-focus:bg-overlay-[0.2]',
      },
      shadows: {
        leftSection: {
          light: 'var(--color-green-100)',
          medium: 'var(--color-green-300)',
          dark: 'var(--color-green-400)',
        },
        rightSection: {
          light: 'var(--color-green-100)',
          medium: 'var(--color-green-300)',
          dark: 'var(--color-green-400)',
        },
      },
      corners: {
        light: 'before:bg-green-200',
        dark: 'after:bg-green-300',
      },
    },
    right: {
      frame: 'bg-green-400',
      stroke: 'text-stroke-green-400',
      surface: {
        leftSection:
          'bg-green-300 group-hover-or-focus:bg-overlay group-hover-or-focus:bg-overlay-green-300',
        rightSection:
          'bg-green-200 group-hover-or-focus:bg-overlay group-hover-or-focus:bg-overlay-green-200',
      },
      shadows: {
        leftSection: {
          light: 'var(--color-green-200)',
          medium: 'var(--color-green-400)',
          dark: 'var(--color-green-400)',
        },
        rightSection: {
          light: 'var(--color-green-100)',
          medium: 'var(--color-green-300)',
          dark: 'var(--color-green-400)',
        },
      },
      corners: {
        light: 'before:bg-green-200',
        dark: 'after:bg-green-300',
      },
    },
  },
  red: {
    left: {
      frame: 'bg-red-400',
      stroke: 'text-stroke-blue-400',
      surface: {
        leftSection:
          'bg-red-200 group-hover-or-focus:bg-overlay group-hover-or-focus:bg-overlay-red-200',
        rightSection:
          'bg-overlay bg-overlay-red-200 group-hover-or-focus:bg-overlay-[0.2]',
      },
      shadows: {
        leftSection: {
          light: 'var(--color-red-100)',
          medium: 'var(--color-red-300)',
          dark: 'var(--color-red-400)',
        },
        rightSection: {
          light: 'var(--color-red-100)',
          medium: 'var(--color-red-300)',
          dark: 'var(--color-red-400)',
        },
      },
      corners: {
        light: 'before:bg-red-200',
        dark: 'after:bg-red-300',
      },
    },
    right: {
      frame: 'bg-red-400',
      stroke: 'text-stroke-blue-400',
      surface: {
        leftSection:
          'bg-red-300 group-hover-or-focus:bg-overlay group-hover-or-focus:bg-overlay-red-300',
        rightSection:
          'bg-red-200 group-hover-or-focus:bg-overlay group-hover-or-focus:bg-overlay-red-200',
      },
      shadows: {
        leftSection: {
          light: 'var(--color-red-200)',
          medium: 'var(--color-red-400)',
          dark: 'var(--color-red-400)',
        },
        rightSection: {
          light: 'var(--color-red-100)',
          medium: 'var(--color-red-300)',
          dark: 'var(--color-red-400)',
        },
      },
      corners: {
        light: 'before:bg-red-200',
        dark: 'after:bg-red-300',
      },
    },
  },
};

export const springConfigs: Record<string, Transition> = {
  bouncy: { type: 'spring', mass: 1, stiffness: 675, damping: 30 },
  snappy: { type: 'spring', mass: 1, stiffness: 2400, damping: 30 },
};
