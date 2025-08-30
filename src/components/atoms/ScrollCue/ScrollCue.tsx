'use client';

import { cn } from '@/lib/utils';
import Typography from '../Typography';
import IconArrowDownWood from '@/assets/icons/arrow-down-wood.svg';
import IconArrowDownSteel from '@/assets/icons/arrow-down-steel.svg';
import { motion } from 'motion/react';
import { SPRING_CONFIGS } from '@/lib/motion';

type ScrollCueProps = {
  variant?: 'wood' | 'steel';
  className?: string;
};

function ScrollCue({ variant = 'wood', className }: ScrollCueProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 10 }}
      transition={{
        ...SPRING_CONFIGS.smooth,
        repeat: Infinity,
        repeatDelay: 0.1,
        repeatType: 'mirror',
      }}
      className={cn('flex w-16 flex-col items-center gap-1', className)}
    >
      <Typography
        textStroke='expanded'
        className={`inline-block pb-[0.1em] text-xl leading-none text-white ${variant === 'wood' ? 'text-stroke-wood-600' : 'text-stroke-steel-500'}`}
      >
        Scroll
      </Typography>
      {variant === 'wood' ? <IconArrowDownWood /> : <IconArrowDownSteel />}
    </motion.div>
  );
}

export default ScrollCue;
