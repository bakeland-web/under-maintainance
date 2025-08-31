import { cn } from '@/lib/utils';
import type { CardProps } from './Card.types';
import { colorVariants } from './Card.utils';
import CardDecorTopLeft from '@/assets/svgs/card/decor-top-left.svg';
import CardDecorTopRight from '@/assets/svgs/card/decor-top-right.svg';
import CardDecorBottomLeft from '@/assets/svgs/card/decor-bottom-left.svg';

function Card({
  variant = 'wood',
  className,
  innerStyles,
  children,
}: CardProps) {
  const { background, corners, shadows } = colorVariants[variant];

  return (
    <div className={cn('clip-frame bg-black p-0.5', className)}>
      <div
        style={{
          boxShadow: `inset 0 2px ${shadows.light}, inset -2px 0 ${shadows.dark}, inset 0 -2px ${shadows.dark},inset 0 -4px ${shadows.medium}, inset 2px 0 ${shadows.light}`,
        }}
        className={cn(
          `clip-frame relative h-full w-full p-0.5 before:absolute before:top-[2px] before:left-[2px] before:inline-block before:h-[2px] before:w-[2px] before:content-[""] ${corners.light} after:absolute after:right-[2px] after:bottom-[4px] after:inline-block after:h-[2px] after:w-[2px] after:content-[""] ${corners.dark}`,
          background,
          innerStyles
        )}
      >
        <CardDecorTopLeft
          fill={shadows.medium}
          className='absolute top-1 left-0.5'
        />
        <CardDecorTopRight
          fill={shadows.medium}
          className='absolute top-1 right-0.5'
        />
        <CardDecorBottomLeft
          fill={shadows.medium}
          className='absolute bottom-2 left-0.5'
        />
        {children}
      </div>
    </div>
  );
}

export default Card;
