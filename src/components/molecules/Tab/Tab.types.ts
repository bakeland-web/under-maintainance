export type Variant = 'wood' | 'steel';

type BaseColorVariant = {
  background: { class: string; var: string };
  corner: string;
  shadows: { light: string; medium: string; dark: string };
  textStroke: string;
};

export type ColorVariant = {
  active: BaseColorVariant;
  inactive: BaseColorVariant;
};

export type TabProps<T> = {
  variant?: Variant;
  value: T;
  isActive: boolean | null;
  onTabClick: (value: T) => void;
  className?: string;
  children: React.ReactNode;
};
