export type Variant = 'wood' | 'steel';

export type SizeVariant = 'sm' | 'lg';

export type ColorVariant = {
  backgrounds: { outer: string; inner: string };
  corner: string;
  shadow: string;
};

export type Props = {
  variant?: Variant;
  size?: SizeVariant;
  isSelected?: boolean;
  className?: string;
  innerStyles?: string;
  children: React.ReactNode;
};
