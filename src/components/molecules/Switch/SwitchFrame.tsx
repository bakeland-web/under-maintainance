import type { FrameProps } from './Switch.types';

function SwitchFrame({ colorStyles }: FrameProps) {
  return (
    <div
      style={{ boxShadow: 'inset 0 -2px rgba(0,0,0,0.25)' }}
      className={`clip-frame h-11 w-full will-change-transform ${colorStyles.frame}`}
    ></div>
  );
}

export default SwitchFrame;
