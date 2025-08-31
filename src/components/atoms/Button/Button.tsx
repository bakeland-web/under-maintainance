'use client';

import { cn } from '@/lib/utils';
import { useMemo, useState } from 'react';
import ButtonBase from './ButtonBase';
import ButtonFrame from './ButtonFrame';
import ButtonSurface from './ButtonSurface';
import { baseColorVariants, colorVariants } from './Button.utils';
import type { MotionVariant, ButtonProps } from './Button.types';
import { motion } from 'motion/react';
import Typography from '@/components/atoms/Typography';

function Button({
  variant = 'primary',
  color = 'green',
  baseColor = 'wood',
  className,
  children,
  ...props
}: ButtonProps) {
  const [variantName, setVariantName] = useState<MotionVariant>('initial');
  const baseColorStyles = useMemo(
    () => baseColorVariants[baseColor],
    [baseColor]
  );
  const colorStyles = useMemo(() => colorVariants[color], [color]);

  return (
    <motion.button
      initial='initial'
      animate={variantName}
      onHoverStart={() => setVariantName('hover')}
      onHoverEnd={() => setVariantName('initial')}
      onTapStart={() => setVariantName('tap')}
      onTap={() => setVariantName('hoverWithDelay')}
      whileFocus='hover'
      className={cn(
        'relative flex h-[2.8em] cursor-pointer items-end px-[0.1em] pb-[0.2em] text-xl leading-none outline-white/80 focus-visible:outline-4',
        className
      )}
      {...props}
    >
      <ButtonFrame variant={variant} colorStyles={colorStyles}>
        <ButtonSurface colorStyles={colorStyles}>
          {variant === 'icon' ? (
            <div
              className={`grid h-[1.3em] w-[1.2em] place-items-center ${colorStyles.stroke.icon}`}
            >
              {children}
            </div>
          ) : (
            <Typography
              font='pixellari'
              textStroke={
                variant === 'primary' ? 'expandedWithShadow' : 'expanded'
              }
              className={`inline-block pb-[0.1em] whitespace-nowrap text-white ${colorStyles.stroke.text}`}
            >
              {children}
            </Typography>
          )}
        </ButtonSurface>
      </ButtonFrame>
      <ButtonBase baseColorStyles={baseColorStyles} />
    </motion.button>
  );
}

export default Button;
