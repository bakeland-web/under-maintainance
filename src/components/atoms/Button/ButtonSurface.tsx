import type { ButtonSurfaceProps } from './Button.types';

function ButtonSurface({ colorStyles, children }: ButtonSurfaceProps) {
  return (
    <div
      style={{
        boxShadow: `inset 0 0.1em ${colorStyles.shadows.light}, inset 0.1em 0 ${colorStyles.shadows.light}, inset 0 -0.1em ${colorStyles.shadows.dark}, inset -0.1em 0 ${colorStyles.shadows.dark}`,
      }}
      className={`clip-frame relative px-[0.5em] py-[0.3375em] ${colorStyles.surface} before:absolute before:top-[0.1em] before:left-[0.1em] before:inline-block before:h-[0.1em] before:w-[0.1em] before:content-[""] ${colorStyles.corners.light} after:absolute after:right-[0.1em] after:bottom-[0.1em] after:inline-block after:h-[0.1em] after:w-[0.1em] after:content-[""] ${colorStyles.corners.dark}`}
    >
      {children}
    </div>
  );
}

export default ButtonSurface;
