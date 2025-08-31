'use client';

import { cn } from '@/lib/utils';
import type { SurfaceProps } from './Switch.types';
import { motion } from 'motion/react';
import { springConfigs } from './Switch.utils';

function SwitchSurface({
  activeOption,
  colorStyles: { frame, surface, shadows, corners },
}: SurfaceProps) {
  return (
    <div className='absolute top-1 left-0.5 z-10 grid h-10 w-[calc(100%_-_theme(spacing.1))] grid-cols-2'>
      {/* Left Section */}
      <div className='grid h-full grid-cols-[14px_1fr_1fr]'>
        {/* Left Rectangle */}
        <motion.div
          initial={false}
          animate={activeOption === 'left' ? { y: 0 } : { y: -4 }}
          transition={springConfigs.snappy}
          className={cn('clip-frame-left pt-0.5 pl-0.5', frame)}
        >
          <div
            style={{
              boxShadow: `inset 0 2px ${shadows.leftSection.light}, inset 0 -2px ${shadows.leftSection.medium}, inset 2px 0 ${shadows.leftSection.light}`,
            }}
            className={`clip-frame-left relative h-full w-full ${surface.leftSection} before:absolute before:top-0.5 before:left-0.5 before:inline-block before:h-0.5 before:w-0.5 before:content-[""] ${corners.light}`}
          ></div>
        </motion.div>

        {/* Center Rectangle */}
        <motion.div
          initial={false}
          animate={activeOption === 'left' ? { y: 0 } : { y: -2 }}
          transition={springConfigs.snappy}
          style={{
            boxShadow: `inset 0 2px ${shadows.leftSection.dark}, inset 0 4px ${shadows.leftSection.light}, inset 0 -2px ${shadows.leftSection.medium}`,
          }}
          className={surface.leftSection}
        ></motion.div>

        {/* Right Rectangle */}
        <div
          style={{
            boxShadow: `inset 0 2px ${shadows.leftSection.dark}, inset 0 4px ${shadows.leftSection.light}, inset 0 -2px ${shadows.leftSection.medium}`,
          }}
          className={surface.leftSection}
        ></div>
      </div>

      {/* Right Section */}
      <div className='grid h-full grid-cols-[1fr_1fr_14px]'>
        {/* Left Rectangle */}
        <div
          style={{
            boxShadow: `inset 0 2px ${shadows.rightSection.dark}, inset 0 4px ${shadows.rightSection.light}, inset 0 -2px ${shadows.rightSection.medium}`,
          }}
          className={surface.rightSection}
        ></div>

        {/* Center Rectangle */}
        <motion.div
          initial={false}
          animate={activeOption === 'right' ? { y: 0 } : { y: -2 }}
          transition={springConfigs.snappy}
          style={{
            boxShadow: `inset 0 2px ${shadows.rightSection.dark}, inset 0 4px ${shadows.rightSection.light}, inset 0 -2px ${shadows.rightSection.medium}`,
          }}
          className={surface.rightSection}
        ></motion.div>

        {/* Right Rectangle */}
        <motion.div
          initial={false}
          animate={activeOption === 'right' ? { y: 0 } : { y: -4 }}
          transition={springConfigs.snappy}
          className={cn('clip-frame-right pt-0.5 pr-0.5', frame)}
        >
          <div
            style={{
              boxShadow: `inset 0 2px ${shadows.rightSection.light}, inset 0 -2px ${shadows.rightSection.medium}, inset -2px 0 ${shadows.rightSection.medium}`,
            }}
            className={`clip-frame-right relative h-full w-full ${surface.rightSection} after:absolute after:right-0.5 after:bottom-0.5 after:inline-block after:h-0.5 after:w-0.5 after:content-[""] ${corners.dark}`}
          ></div>
        </motion.div>
      </div>
    </div>
  );
}

export default SwitchSurface;
