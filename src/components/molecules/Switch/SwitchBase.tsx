import type { SwitchBaseProps } from './Switch.types';

function SwitchBase({ baseColorStyles }: SwitchBaseProps) {
  return (
    <div
      style={{ boxShadow: `inset 0 -2px ${baseColorStyles.shadow}` }}
      className={`clip-frame absolute top-2 right-0 bottom-0 left-0 -z-10 ${baseColorStyles.background} before:absolute before:bottom-0.5 before:left-0 before:inline-block before:h-0.5 before:w-0.5 before:content-[""] after:absolute after:right-0 after:bottom-0.5 after:inline-block after:h-0.5 after:w-0.5 after:content-[""] ${baseColorStyles.corner}`}
    ></div>
  );
}

export default SwitchBase;
