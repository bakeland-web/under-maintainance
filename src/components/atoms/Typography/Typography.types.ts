import type { Font } from '@/types';

export type TextStroke =
  | 'none'
  | 'normal'
  | 'normalWithShadow'
  | 'expanded'
  | 'expandedWithShadow';

export type Props = {
  font?: Font;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  textStroke?: TextStroke;
  className?: string;
  children: React.ReactNode;
};
