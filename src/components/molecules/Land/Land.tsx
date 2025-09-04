import LandWithRocks from '@/assets/svgs/lands/landWithRocks.svg';
import LandWithBush from '@/assets/svgs/lands/landWithBush.svg';
import LandWithTree from '@/assets/svgs/lands/landWithTree.svg';
import type { Chain } from '@/types';
import { Field, Building, Pin } from '@/components/atoms';
import { cn } from '@/lib/utils';

type Position = 'left' | 'right';

type LandProps = {
  variant: 'rocks' | 'bush' | 'tree';
  chain?: Chain;
  field?: {
    type: NonNullable<React.ComponentProps<typeof Field>['variant']>;
    position: Position;
    className?: string;
  };
  building?: {
    size: NonNullable<React.ComponentProps<typeof Building>['size']>;
    position: Position;
    className?: string;
  };
  pin?: { show: boolean; href?: string; className?: string };
  className?: string;
};

const buildingPositionVariants: Record<
  NonNullable<React.ComponentProps<typeof Building>['size']>,
  Record<Position, string>
> = {
  shed: {
    left: 'left-0.5 bottom-[67px] -scale-x-100',
    right: 'right-1 bottom-[74px]',
  },
  house: {
    left: 'left-0.5 bottom-[67px] -scale-x-100',
    right: 'right-1 bottom-[68px]',
  },
  barn: {
    left: 'left-[14px] bottom-[60px]',
    right: 'right-[14px] bottom-[60px] -scale-x-100',
  },
};

function Land({ variant, field, building, chain, pin, className }: LandProps) {
  return (
    <div className={cn('relative w-[372px]', className)}>
      {variant === 'rocks' && <LandWithRocks />}
      {variant === 'bush' && <LandWithBush />}
      {variant === 'tree' && <LandWithTree />}
      {field && (
        <Field
          variant={field.type}
          className={cn(
            'absolute bottom-12',
            field.position === 'left' ? 'left-[30px]' : 'right-[30px]',
            field.className
          )}
        />
      )}
      {building && chain && (
        <Building
          variant={chain}
          size={building.size}
          className={cn(
            'absolute bottom-12 z-20',
            buildingPositionVariants[building.size][building.position],
            building.className
          )}
        />
      )}
      {pin?.show && chain && (
        <Pin
          variant={chain}
          href={pin.href}
          className={cn(
            'absolute left-[41.66%] z-10',
            variant === 'tree' ? 'top-[14%]' : 'top-[-20.45%]',
            pin.className
          )}
        />
      )}
    </div>
  );
}

export default Land;
