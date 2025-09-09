import { Box } from '@/components/atoms';
import { cn } from '@/lib/utils';
import type { Font } from '@/types';

type Variant = 'wood' | 'steel';

type InputProps = {
  variant?: Variant;
  font?: Font;
  type?: 'text' | 'password' | 'email';
  className?: string;
  innerStyles?: string;
  inputStyles?: string;
} & React.ComponentProps<'input'>;

function Input({
  variant = 'wood',
  font = 'pixellari',
  type = 'text',
  className,
  innerStyles,
  inputStyles,
  disabled,
  children,
  ...props
}: InputProps) {
  return (
    <Box
      variant={variant}
      className={cn(
        'h-fit w-fit hover:bg-[none] has-[input:focus]:bg-white',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
      innerStyles={cn(
        'px-2.5 py-2',
        children && 'flex items-center gap-2',
        innerStyles
      )}
    >
      <input
        type={type}
        placeholder='Type something...'
        className={cn(
          'focus:not-placeholder-shown:text-shadow-primary w-full pl-0.5 text-xl leading-[1.1em] text-white outline-none',
          font === 'pixellari' ? 'font-pixellari' : 'font-upheaval-tt',
          variant === 'wood' ? 'placeholder-wood-100' : 'placeholder-steel-100',
          disabled && 'cursor-not-allowed',
          inputStyles
        )}
        disabled={disabled}
        {...props}
      />
      <div className='shrink-0'>{children}</div>
    </Box>
  );
}

export default Input;
