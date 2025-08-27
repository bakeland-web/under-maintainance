'use client';

import { motion } from 'motion/react';
import type { FrameProps } from './Button.types';
import { motionVariants } from './Button.utils';

function ButtonFrame({ variant, colorStyles, children }: FrameProps) {
  const variants = motionVariants(variant);

  return (
    <motion.div
      variants={variants}
      style={{ boxShadow: 'inset 0 -0.1em rgba(0,0,0,0.25)' }}
      className={`clip-frame p-[0.1em] will-change-transform ${colorStyles.frame}`}
    >
      {children}
    </motion.div>
  );
}

export default ButtonFrame;
