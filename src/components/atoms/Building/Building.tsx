import { cn } from '@/lib/utils';
import type { Chain } from '@/types';
import BaseBarn from '@/assets/svgs/buildings/base-barn.svg';
import BaseHouse from '@/assets/svgs/buildings/base-house.svg';
import BaseShed from '@/assets/svgs/buildings/base-shed.svg';
import BeraBarn from '@/assets/svgs/buildings/bera-barn.svg';
import BeraHouse from '@/assets/svgs/buildings/bera-house.svg';
import BeraShed from '@/assets/svgs/buildings/bera-shed.svg';
import MonadBarn from '@/assets/svgs/buildings/monad-barn.svg';
import MonadHouse from '@/assets/svgs/buildings/monad-house.svg';
import MonadShed from '@/assets/svgs/buildings/monad-shed.svg';
import SolanaBarn from '@/assets/svgs/buildings/solana-barn.svg';
import SolanaHouse from '@/assets/svgs/buildings/solana-house.svg';
import SolanaShed from '@/assets/svgs/buildings/solana-shed.svg';

type Size = 'shed' | 'house' | 'barn';

type BuildingProps = {
  variant: Chain;
  size?: Size;
  className?: string;
};

const buildingVariant: Record<
  Chain,
  Record<Size, React.FC<React.SVGProps<SVGElement>>>
> = {
  base: {
    barn: BaseBarn,
    house: BaseHouse,
    shed: BaseShed,
  },
  bera: {
    barn: BeraBarn,
    house: BeraHouse,
    shed: BeraShed,
  },
  monad: {
    barn: MonadBarn,
    house: MonadHouse,
    shed: MonadShed,
  },
  solana: {
    barn: SolanaBarn,
    house: SolanaHouse,
    shed: SolanaShed,
  },
};

function Building({ variant, size = 'shed', className }: BuildingProps) {
  const BuildingSVG = buildingVariant[variant][size];
  return (
    <div className={cn('w-[166px]', className)}>
      <BuildingSVG />
    </div>
  );
}

export default Building;
