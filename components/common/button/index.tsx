import Image from 'next/image';
import Link from 'next/link';
import {
  StyledGradientBackground,
  DisabledFixedLinkButton,
  StyledFixedLinkButton,
  StyledSocialButton,
  StyledTopButton,
} from './styledButton';

import NaverLogo from '@assets/signUp/naver.svg';
import KakaoLogo from '@assets/signUp/kakao.svg';

export const GradientButton = ({ link, buttonTitle, bottomPercent }: GradientButtonProps) => {
  return (
    <Link href={link}>
      <StyledGradientBackground bottom={bottomPercent}>
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

export const SocialLinkButton = ({
  KakaoLink,
  NaverLink,
  purpose,
  absoluteBottomPercent,
}: SocialLinkButtonProps) => {
  return (
    <StyledSocialButton bottom={absoluteBottomPercent}>
      <Link href={KakaoLink}>
        <a className="kakao">
          <Image src={KakaoLogo} alt="카카오 로고" />
          <span>카카오로 {purpose === 'signIn' ? '로그인하기' : '시작하기'}</span>
        </a>
      </Link>
      <Link href={NaverLink}>
        <a className="naver">
          <Image src={NaverLogo} alt="네이버 로고" />
          <span>네이버로 {purpose === 'signIn' ? '로그인하기' : '시작하기'}</span>
        </a>
      </Link>
    </StyledSocialButton>
  );
};

export const TopButton = () => {
  return (
    <StyledTopButton>
      <div id="polygon"></div>
      <div>TOP</div>
    </StyledTopButton>
  );
};
