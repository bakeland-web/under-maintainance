'use client';

import CardDecorTopLeft from '@/assets/svgs/card/decor-top-left.svg';
import CardDecorTopRight from '@/assets/svgs/card/decor-top-right.svg';
import type { TabProps } from './Tab.types';
import { cn } from '@/lib/utils';
import { colorVariants } from './Tab.utils';
import { Typography } from '@/components/atoms';

function Tab<T extends string>({
  variant = 'wood',
  value,
  isActive,
  onTabClick,
  className,
  children,
}: TabProps<T>) {
  const { background, corner, shadows, textStroke } =
    colorVariants[variant][isActive ? 'active' : 'inactive'];

  return (
    <button
      onClick={() => onTabClick(value)}
      className={cn('h-[33px] min-w-[104px] cursor-pointer', className)}
    >
      <div className={cn('clip-frame-half bg-black p-0.5 pb-0', className)}>
        <div
          style={{
            boxShadow: `inset 0 2px ${shadows.light}, inset -2px 0 ${shadows.dark}, inset 2px 0 ${shadows.light} ${isActive ? `, 0 2px ${background.var}` : ''}`,
          }}
          className={cn(
            `clip-frame-half relative h-full w-full px-2.5 pt-0.5 pb-px before:absolute before:top-[2px] before:left-[2px] before:inline-block before:h-[2px] before:w-[2px] before:content-[""] ${corner}`,
            background.class
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
          <Typography
            className={cn(
              'leading relative pb-0.5 text-xl whitespace-nowrap text-white',
              isActive ? 'text-stroke-expanded-shadow -top-px' : 'text-stroke',
              textStroke
            )}
          >
            {children}
          </Typography>
        </div>
      </div>
    </button>
  );
}

export default Tab;
