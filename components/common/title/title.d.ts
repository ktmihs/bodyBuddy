interface IconProps {
  src: string;
  alt: string;
  link?: string;
  handler?: Dispatch<SetStateAction<boolean>>;
  width?: number;
  height?: number;
}

interface TitleBarProps {
  left?: IconProps;
  right?: IconProps;
  centerTitle?: string;
}
