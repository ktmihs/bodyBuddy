import Link from 'next/link';
import {
  StyledGradientBackground,
  DisabledFixedLinkButton,
  StyledFixedLinkButton,
  StyledSocialButton,
  StyledTopButton,
} from './styledButton';

export const GradientButton = ({ link, buttonTitle }: LinkButtonProps) => {
  return (
    <Link href={link}>
      <StyledGradientBackground>
        <span>{buttonTitle}</span>
      </StyledGradientBackground>
    </Link>
  );
};

export const FixedBottomLinkButton = ({ isValid, link, buttonTitle }: IsValidLinkButtonProps) => {
  return (
    <>
      {isValid ? (
        <Link href={link}>
          <StyledFixedLinkButton>{buttonTitle}</StyledFixedLinkButton>
        </Link>
      ) : (
        <DisabledFixedLinkButton>{buttonTitle}</DisabledFixedLinkButton>
      )}
    </>
  );
};

export const SocialLinkButton = ({ KakaoLink, NaverLink, purpose }: SocialLinkButtonProps) => {
  return (
    <div>
      <Link href={KakaoLink}>
        <a>카카오로 {purpose === 'signIn' ? '로그인하기' : '시작하기'}</a>
      </Link>
      <Link href={NaverLink}>
        <a>네이버로 {purpose === 'signIn' ? '로그인하기' : '시작하기'} </a>
      </Link>
    </div>
  );
};

export const TobButton = () => {
  return (
    <StyledTopButton>
      <div id="polygon"></div>
      <div>TOP</div>
    </StyledTopButton>
  );
};
