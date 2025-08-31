import CaseEmpty from '@/assets/svgs/case/case-empty.svg';
import CaseMid from '@/assets/svgs/case/case-mid.svg';
import CaseFull from '@/assets/svgs/case/case-full.svg';
import { Typography } from '@/components/atoms';
import { cn } from '@/lib/utils';

type Variant = 'empty' | 'mid' | 'full';

type CaseProps = {
  variant?: Variant;
  label: string;
  value: string;
};

const variantStyles: Record<Variant, string> = {
  empty: 'text-white text-xl',
  mid: 'text-blue-100 text-[32px]',
  full: 'text-orange-200 text-5xl text-stroke-[6px]',
};

function Case({ variant = 'empty', label, value }: CaseProps) {
  return (
    <div className='relative flex h-[230px] w-[222px] flex-col items-center justify-between'>
      <Typography className='text-xl leading-none text-white'>
        {label}
      </Typography>
      {variant === 'empty' && <CaseEmpty />}
      {variant === 'mid' && <CaseMid />}
      {variant === 'full' && <CaseFull />}
      <Typography
        textStroke='expandedWithShadow'
        className={cn(
          'text-stroke-steel-500 absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap',
          variantStyles[variant]
        )}
      >
        {value}
      </Typography>
    </div>
  );
}

export default Case;
