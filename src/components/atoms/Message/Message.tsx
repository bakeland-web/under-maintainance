import Typography from '@/components/atoms/Typography';
import { cn } from '@/lib/utils';
import type { Font } from '@/types';

type MessageProps = {
  variant: 'success' | 'fail';
  font?: Font;
  className?: string;
  children: React.ReactNode;
};

function Message({ variant, font, className, children }: MessageProps) {
  return (
    <Typography
      font={font}
      textStroke='normal'
      className={cn(
        'text-xs',
        variant === 'success'
          ? 'text-stroke-green-300 text-stroke-[1px] text-green-100'
          : 'text-stroke-red-400 text-stroke-[1px] text-red-100',
        className
      )}
    >
      {children}
    </Typography>
  );
}

export default Message;
