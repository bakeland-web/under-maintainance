import { cn } from '@/lib/utils';
import type { Chain } from '@/types';
import { useId } from 'react';

type PinProps = {
  variant: Chain;
  href?: string;
  className?: string;
};

const colorVariant: Record<Chain, { light: string; dark: string }> = {
  base: { light: 'var(--color-blue-200)', dark: 'var(--color-blue-300)' },
  bera: { light: '#F37E5D', dark: '#CC4E2E' },
  monad: {
    light: 'var(--color-lavender-200)',
    dark: 'var(--color-lavender-300)',
  },
  solana: { light: 'var(--color-grey-300)', dark: 'var(--color-grey-400)' },
};

function Pin({ variant, href, className }: PinProps) {
  const uid = useId();
  const ids = {
    clip: `${uid}-clip`,
    filter: `${uid}-filter`,
    pattern: `${uid}-pattern`,
    image: `${uid}-image`,
  };
  const colorStyles = colorVariant[variant];

  return (
    <div className={cn('w-[62px]', className)}>
      <svg
        viewBox='0 0 62 92'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <g clipPath={`url(#${ids.clip})`}>
          <path
            fill={colorStyles.light}
            d='M34 2h-4v12h4zm-4 0h-2v14h2zm-2 2h-2v14h2zm-2 0h-2v16h2zm-2 2h-2v16h2zm-2 0h-2v20h2zm-2 2h-2v54h2zm-2 2h-2v48h2zm-2 2h-2v42h2zm-2 2h-2v36h2zm-2 4h-2v28h2zm-2 4H8v20h2zm24 26h-2v42h2zm-2 0h-2v38h2zm-2-2h-2v36h2zm-2-2h-2v34h2zm-2-2h-2v32h2zm-2-2h-2v30h2zm-2-4h-2v30h2z'
          />
          <path
            fill='#150300'
            d='M30 86h2v4h-2zm8 0h-2v4h2zm-14 0h2v4h-2zm4-4h2v4h-2zm12 0h-2v4h2zm-18 0h2v4h-2zm4-4h2v4h-2zm16 0h-2v4h2zm-22 0h2v4h-2zm4-4h2v4h-2zm20 0h-2v4h2zm-26 0h2v4h-2zm4-4h2v4h-2zm24 0h-2v4h2zm-30 0h2v4h-2zm4-4h2v4h-2zm28 0h-2v4h2zm-34 0h2v4h-2zm4-4h2v4h-2zm32 0h-2v4h2zm-38 0h2v4h-2zm4-4h2v4h-2zm36 0h-2v4h2zm-42 0h2v4h-2zm4-4h2v4h-2zm40 0h-2v4h2zM8 54h2v4H8zm4-4h2v4h-2zm44 0h-2v4h2zM6 50h2v4H6zm4-4h2v4h-2zm48 0h-2v4h2zM4 46h2v4H4zm4-4h2v4H8zm52 0h-2v4h2zM8 18h2v4H8zm52 0h-2v4h2zm-50-4h2v4h-2zm48 0h-2v4h2zm-46-2h2v2h-2zm44 0h-2v2h2zm-42-2h2v2h-2zm40 0h-2v2h2zM16 8h2v2h-2zm36 0h-2v2h2zM18 6h2v2h-2zm32 0h-2v2h2zM30 16h-2v2h2zm0 30h-2v-2h2zm8-30h2v2h-2zm0 30h2v-2h-2zM28 18h-2v2h2zm0 26h-2v-2h2zm12-26h2v2h-2zm0 26h2v-2h-2zM26 20h-2v2h2zm0 22h-2v-2h2zm16-22h2v2h-2zm0 22h2v-2h-2zM24 22h-2v4h2zm0 18h-2v-4h2zm-2-14h-2v10h2zm26 0h-2v10h2zm-4-4h2v4h-2zm0 18h2v-4h-2zm-6-26h-8v2h8zm0 34h-8v-2h8zM20 4h4v2h-4zM6 22h2v20H6zm54 0h2v20h-2zM2 42h2v4H2zm0-24h2v4H2zm2-4h2v4H4zm2-2h2v2H6zm2-2h2v2H8zm2-2h2v2h-2zm2-2h2v2h-2zm2-2h4v2h-4zm4-2h4v2h-4zm22 0h4v2h-4zm4 2h4v2h-4zM22 0h18v2H22zm2 2h4v2h-4zM0 22h2v20H0zm26 68h10v2H26z'
          />
          <path
            fill={colorStyles.dark}
            d='M34 2h4v12h-4zm4 0h2v14h-2zm2 2h2v14h-2zm2 0h2v16h-2zm2 2h2v16h-2zm2 0h2v20h-2zm2 2h2v54h-2zm2 2h2v48h-2zm2 2h2v42h-2zm2 2h2v36h-2zm2 4h2v28h-2zm2 4h2v20h-2zM34 48h2v42h-2zm2 0h2v38h-2zm2-2h2v36h-2zm2-2h2v34h-2zm2-2h2v32h-2zm2-2h2v30h-2zm2-4h2v30h-2zM22 2h2v2h-2zm-4 2h2v2h-2zm-4 2h4v2h-4zm-2 2h4v2h-4zm-2 2h4v2h-4zm-2 2h4v2H8zm-2 2h4v2H6zm-2 4h4v2H4zm-2 4h4v2H2zm0 4h4v2H2zm0 4h4v2H2zm0 4h4v2H2zm0 4h4v2H2zm2 4h4v2H4zm2 4h4v2H6zm2 4h4v2H8zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zM6 16h4v2H6zm-2 4h4v2H4zm-2 4h4v2H2zm0 4h4v2H2zm0 4h4v2H2zm0 4h4v2H2zm0 4h4v2H2zm2 4h4v2H4zm2 4h4v2H6zm2 4h4v2H8zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4zm2 4h4v2h-4z'
          />
          <g filter={`url(#${ids.filter})`} shapeRendering='crispEdges'>
            <path
              d='M50 36h-2v4h-2v2h-2v2h-2v2h-2v2H28v-2h-2v-2h-2v-2h-2v-2h-2v-4h-2V26h2v-4h2v-2h2v-2h2v-2h2v-2h12v2h2v2h2v2h2v2h2v4h2z'
              fill={`url(#${ids.pattern})`}
            />
          </g>
        </g>
        <defs>
          <pattern
            id={ids.pattern}
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use
              xlinkHref={`#${ids.image}`}
              transform='matrix(.00213 0 0 .002 -.031 0)'
            />
          </pattern>
          <clipPath id={ids.clip}>
            <path fill='#fff' d='M0 0h62v92H0z' />
          </clipPath>
          <filter
            id={ids.filter}
            x='14'
            y='14'
            width='40'
            height='42'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='2' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
            <feBlend
              in2='BackgroundImageFix'
              result='effect1_dropShadow_3444_171589'
            />
            <feBlend
              in='SourceGraphic'
              in2='effect1_dropShadow_3444_171589'
              result='shape'
            />
          </filter>
          <image
            id={ids.image}
            width='500'
            height='500'
            preserveAspectRatio='none'
            xlinkHref={href}
          />
        </defs>
      </svg>
    </div>
  );
}

export default Pin;
