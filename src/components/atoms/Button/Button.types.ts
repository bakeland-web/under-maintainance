import type { HTMLMotionProps } from 'motion/react';

export type Variant = 'primary' | 'secondary' | 'icon';

export type MotionVariant = 'initial' | 'hover' | 'hoverWithDelay' | 'tap';

export type BaseColor = 'wood' | 'steel';

export type Color =
  | 'green'
  | 'grey'
  | 'blue'
  | 'orange'
  | 'red'
  | 'lavender'
  | 'wood'
  | 'steel';

export type BaseColorVariant = {
  background: string;
  shadow: string;
  corner: string;
};

export type ColorVariant = {
  frame: string;
  surface: string;
  stroke: { text: string; icon: string };
  shadows: { light: string; dark: string };
  corners: { light: string; dark: string };
};

export type Props = {
  variant?: Variant;
  color?: Color;
  baseColor?: BaseColor;
  children: React.ReactNode;
} & Omit<HTMLMotionProps<'button'>, 'ref'>;

export type BaseProps = {
  baseColorStyles: BaseColorVariant;
};

export type FrameProps = {
  variant: Variant;
  colorStyles: ColorVariant;
  children: React.ReactNode;
};

export type SurfaceProps = {
  colorStyles: ColorVariant;
  children: React.ReactNode;
};
