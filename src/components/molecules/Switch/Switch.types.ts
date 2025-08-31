export type ActiveOption = 'left' | 'right';

export type Options = Record<ActiveOption, string>;

export type BaseColor = 'wood' | 'steel';

export type Color = 'green' | 'red';

export type BaseColorVariant = {
  background: string;
  shadow: string;
  corner: string;
};

export type ColorVariant = {
  frame: string;
  stroke: string;
  surface: { leftSection: string; rightSection: string };
  shadows: {
    leftSection: { light: string; medium: string; dark: string };
    rightSection: { light: string; medium: string; dark: string };
  };
  corners: { light: string; dark: string };
};

export type Props = {
  activeOption: ActiveOption;
  options: Options;
  color?: Color;
  baseColor?: BaseColor;
  onSwitch: (option: ActiveOption) => void;
} & React.ComponentProps<'button'>;

export type BaseProps = {
  baseColorStyles: BaseColorVariant;
};

export type FrameProps = {
  colorStyles: ColorVariant;
};

export type SurfaceProps = {
  activeOption: ActiveOption;
  colorStyles: ColorVariant;
};
