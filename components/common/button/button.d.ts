interface LinkButtonProps {
  link: string;
  buttonTitle: string;
}

interface GradientButtonProps extends LinkButtonProps {
  bottomPercent: number;
}

interface IsValidLinkButtonProps extends LinkButtonProps {
  isValid: boolean;
}

interface SocialLinkButtonProps {
  NaverLink: string;
  KakaoLink: string;
  purpose: string;
  absoluteBottomPercent: number;
}
