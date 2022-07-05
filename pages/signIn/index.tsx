import { SocialLinkButton } from '@components/common/button';
import styled from '@emotion/styled';
import Image from 'next/image';

import fullLogo from '/public/assets/fullLogo.svg';

const BodyBuddyLogo = styled.h1`
  padding-top: 45%;
  text-align: center;
`;

const LoginGuide = styled.span`
  width: 100%;
  display: block;
  position: absolute;
  bottom: 150px;
  text-align: center;
  color: #626262;
  font-size: 13px;
`;

const REDIRECT_URI = 'http://localhost:3000/oauth/kakao';
const SignIn = () => {
  return (
    <>
      <BodyBuddyLogo>
        <span className="srOnly">바디버디</span>
        <Image
          src={fullLogo}
          title="바디버디"
          alt="바디버디 로고"
          width={'193.57.px'}
          height={'132px'}
        />
      </BodyBuddyLogo>
      <LoginGuide>SNS로 간편하게 로그인 혹은 가입하세요 !</LoginGuide>
      <SocialLinkButton
        NaverLink="/"
        KakaoLink={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API}&redirect_uri=${REDIRECT_URI}`}
        purpose="signIn"
        absoluteBottomPercent={5}
      />
    </>
  );
};

export default SignIn;
