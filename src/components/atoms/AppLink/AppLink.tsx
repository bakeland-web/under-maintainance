import Link, { type LinkProps } from 'next/link';
import Typography from '../Typography';
import { cn } from '@/lib/utils';

type NextLink = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    children?: React.ReactNode | undefined;
  } & React.RefAttributes<HTMLAnchorElement>;

type AppLinkProps = {
  fontSize?: 'xs' | 'xl';
} & NextLink;

function AppLink({ fontSize = 'xs', children, ...linkProps }: AppLinkProps) {
  return (
    <Link {...linkProps} className='group'>
      <Typography
        className={cn(
          'text-stroke-green-400 text-stroke hover:text-stroke-expanded-shadow text-white transition-[filter] duration-50 ease-out group-active:text-green-200',
          fontSize === 'xs'
            ? 'text-stroke-[1px] text-xs'
            : 'text-stroke-[2px] text-xl'
        )}
      >
        {children}
      </Typography>
    </Link>
  );
}

export default AppLink;
