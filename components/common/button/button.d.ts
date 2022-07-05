interface LinkButtonProps {
  link: string;
  buttonTitle: string;
}

interface ButtonProps {
  isValid?: boolean;
  buttonTitle: string;
  buttonType?: 'button' | 'submit' | 'reset';
}

interface GradientButtonProps extends LinkButtonProps {
  bottomPercent: number;
}

interface IsValidLinkButtonProps extends LinkButtonProps {
  isValid: boolean;
}

interface IsValidButtonProps extends ButtonProps {
  onButtonEvent: MouseEventHandler<HTMLButtonElement>;
}

interface SocialLinkButtonProps {
  NaverLink: string;
  KakaoLink: string;
  purpose: string;
  absoluteBottomPercent: number;
}

interface TopButtonProps {
  containerRef: Ref<HTMLDivElement>;
}
