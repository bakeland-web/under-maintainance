import { cn } from '@/lib/utils';
import { useMemo } from 'react';
import SwitchBase from './SwitchBase';
import SwitchFrame from './SwitchFrame';
import SwitchSurface from './SwitchSurface';
import { baseColorVariants, colorVariants } from './Switch.utils';
import type { SwitchProps } from './Switch.types';
import Typography from '@/components/atoms/Typography';

function Switch({
  activeOption,
  options,
  color = 'green',
  baseColor = 'wood',
  className,
  onSwitch,
  onClick,
  ...props
}: SwitchProps) {
  const baseColorStyles = useMemo(
    () => baseColorVariants[baseColor],
    [baseColor]
  );
  const colorStyles = useMemo(
    () => colorVariants[color][activeOption],
    [color, activeOption]
  );

  const handleSwitch = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSwitch?.(activeOption === 'left' ? 'right' : 'left');
    onClick?.(e);
  };

  return (
    <div className='flex items-center gap-2'>
      <Typography
        className={cn(
          'leading relative text-xl whitespace-nowrap text-white',
          activeOption === 'left'
            ? 'text-stroke-expanded-shadow -top-px'
            : 'text-stroke',
          colorStyles.stroke
        )}
      >
        {options.left}
      </Typography>

      <button
        onClick={handleSwitch}
        className={cn(
          'group relative flex h-[52px] w-20 cursor-pointer items-end px-0.5 pb-1 text-xl leading-none outline-white/80 focus-visible:outline-4',
          className
        )}
        {...props}
      >
        <SwitchSurface activeOption={activeOption} colorStyles={colorStyles} />
        <SwitchFrame colorStyles={colorStyles} />
        <SwitchBase baseColorStyles={baseColorStyles} />
      </button>

      <Typography
        className={cn(
          'leading relative text-xl whitespace-nowrap text-white',
          activeOption === 'right'
            ? 'text-stroke-expanded-shadow -top-px'
            : 'text-stroke',
          colorStyles.stroke
        )}
      >
        {options.right}
      </Typography>
    </div>
  );
}

export default Switch;
