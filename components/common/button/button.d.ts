interface LinkButtonProps {
  link: string;
  buttonTitle: string;
}

interface IsValidLinkButtonProps extends LinkButtonProps {
  isValid: boolean;
}

interface SocialLinkButtonProps {
  NaverLink: string;
  KakaoLink: string;
  purpose: string;
}
