import FieldSmall from '@/assets/svgs/fields/field-small.svg';
import FieldMedium from '@/assets/svgs/fields/field-medium.svg';
import FieldLarge from '@/assets/svgs/fields/field-large.svg';
import { cn } from '@/lib/utils';

type FieldProps = {
  variant?: 'small' | 'medium' | 'large';
  className?: string;
};

function Field({ variant = 'small', className }: FieldProps) {
  return (
    <div className={cn('w-40', className)}>
      {variant === 'small' && <FieldSmall />}
      {variant === 'medium' && <FieldMedium />}
      {variant === 'large' && <FieldLarge />}
    </div>
  );
}

export default Field;
