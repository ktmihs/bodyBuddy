interface IconProps {
  link: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface TitleBarProps {
  left?: IconProps;
  right?: IconProps;
  centerTitle?: string;
}
