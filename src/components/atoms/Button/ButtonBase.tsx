import type { BaseProps } from './Button.types';

function ButtonBase({ baseColorStyles }: BaseProps) {
  return (
    <div
      style={{ boxShadow: `inset 0 -0.1em ${baseColorStyles.shadow}` }}
      className={`clip-frame absolute top-[0.6em] right-0 bottom-0 left-0 -z-10 ${baseColorStyles.background} before:absolute before:bottom-[0.1em] before:left-0 before:inline-block before:h-[0.1em] before:w-[0.1em] before:content-[""] after:absolute after:right-0 after:bottom-[0.1em] after:inline-block after:h-[0.1em] after:w-[0.1em] after:content-[""] ${baseColorStyles.corner}`}
    ></div>
  );
}

export default ButtonBase;
