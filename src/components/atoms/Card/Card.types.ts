export type Variant = 'wood' | 'steel';

export type ColorVariant = {
  background: string;
  corners: { light: string; dark: string };
  shadows: { light: string; medium: string; dark: string };
};

export type CardProps = {
  variant?: Variant;
  className?: string;
  innerStyles?: string;
  children: React.ReactNode;
};
