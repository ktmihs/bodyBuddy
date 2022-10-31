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
import React, { useEffect, useRef } from 'react';
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
  const onFixedButton = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onButtonEvent();
  };
  return (
    <>
      {isValid ? (
        <StyledFixedBottomButton type={buttonType} onClick={onFixedButton}>
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
  purpose,
  absoluteBottomPercent,
}: SocialLinkButtonProps) => {
  const initializeNaverLogin = () => {
    const naver = (window as any).naver;

    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/oauth/naver',
      callbackHandle: true,
      loginButton: {
        color: 'green',
        type: 1,
        height: 30,
      },
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <StyledSocialButton bottom={absoluteBottomPercent}>
      <Link href={KakaoLink}>
        <a className="kakao">
          <Image src={KakaoLogo} alt="카카오 로고" />
          <span>카카오로 {purpose === 'signIn' ? '로그인하기' : '시작하기'}</span>
        </a>
      </Link>
      <section className="naver">
        <div id="naverIdLogin" />
        <span>네이버로 {purpose === 'signIn' ? '로그인하기' : '시작하기'}</span>
      </section>
    </StyledSocialButton>
  );
};

export const TopButton = ({ containerRef }: TopButtonProps) => {
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!containerRef || !button) return;
    const HandleScroll = throttle(() => {
      if (!button.current) return;
      button.current.style.display = containerRef?.current.scrollTop > 100 ? 'block' : 'none';
    }, 300);

    const GoToTop = () => containerRef.current.scroll({ top: 0, behavior: 'smooth' });
    containerRef.current.addEventListener('scroll', HandleScroll);
    button.current?.addEventListener('click', GoToTop);
  }, []);

  return (
    <StyledTopButton ref={button}>
      <div id="polygon"></div>
      <div>TOP</div>
    </StyledTopButton>
  );
};
