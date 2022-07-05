import Image from 'next/image';
import Link from 'next/link';
import {
  StyledGradientBackground,
  DisabledFixedLinkButton,
  StyledFixedLinkButton,
  StyledSocialButton,
  StyledTopButton,
  StyledFixedBottomButton,
  StyledDisabledBottomButton,
} from './styledButton';

import NaverLogo from '@assets/signUp/naver.svg';
import KakaoLogo from '@assets/signUp/kakao.svg';
import { useEffect, useRef } from 'react';
import { throttle } from 'lodash';

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

export const FixedBottomButton = ({
  isValid,
  buttonTitle,
  buttonType,
  onButtonEvent,
}: IsValidButtonProps) => {
  return (
    <>
      {isValid ? (
        <StyledFixedBottomButton type={buttonType} onClick={() => onButtonEvent()}>
          {buttonTitle}
        </StyledFixedBottomButton>
      ) : (
        <StyledDisabledBottomButton disabled>{buttonTitle}</StyledDisabledBottomButton>
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

export const TopButton = ({ containerRef }: TopButtonProps) => {
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const HandleScroll = throttle(() => {
      if (!button.current) return;
      button.current.style.display = containerRef?.current.scrollTop > 100 ? 'block' : 'none';
    }, 300);

    const GoToTop = () => containerRef.current.scroll({ top: 0, behavior: 'smooth' });

    containerRef.current.addEventListener('scroll', HandleScroll);
    button.current?.addEventListener('click', GoToTop);

    return () => {
      containerRef.current.removeEventListener('scroll', HandleScroll);
      button.current?.removeEventListener('click', GoToTop);
    };
  }, []);

  return (
    <StyledTopButton ref={button}>
      <div id="polygon"></div>
      <div>TOP</div>
    </StyledTopButton>
  );
};
