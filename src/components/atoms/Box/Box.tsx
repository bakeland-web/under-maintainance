import { cn } from '@/lib/utils';
import type { Props } from './Box.types';
import { sizeVariants, colorVariants } from './Box.utils';

function Box({
  variant = 'wood',
  size = 'sm',
  isSelected = false,
  className,
  innerStyles,
  children,
}: Props) {
  const sizeStyles = sizeVariants[size];
  const { backgrounds, corner, shadow } = colorVariants[variant];

  return (
    <div
      className={cn(
        'clip-frame p-0.5 hover:bg-white',
        backgrounds.outer,
        { 'bg-white': isSelected },
        sizeStyles,
        className
      )}
    >
      <div
        style={{ boxShadow: `inset 0 2px ${shadow}, inset 2px 0 ${shadow}` }}
        className={cn(
          `clip-frame relative grid h-full w-full place-items-center p-0.5 before:absolute before:top-[2px] before:left-[2px] before:inline-block before:h-[2px] before:w-[2px] before:content-[""] ${corner}`,
          backgrounds.inner,
          innerStyles
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Box;
