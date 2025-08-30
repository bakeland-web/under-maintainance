import type { Props } from './Typography.types';
import { fontVariants, textStrokeVariants } from './Typography.utils';

function Typography({
  font = 'pixellari',
  as: Component = 'span',
  textStroke = 'none',
  className,
  children,
}: Props) {
  const fontStyles = fontVariants[font];
  const textStrokeStyles = textStrokeVariants[textStroke];

  return (
    <Component className={`${fontStyles} ${textStrokeStyles} ${className}`}>
      {children}
    </Component>
  );
}

export default Typography;
