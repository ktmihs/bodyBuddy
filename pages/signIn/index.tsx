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
      <LoginGuide>SNS로 간편하게 로그인 하세요 !</LoginGuide>
      <SocialLinkButton NaverLink="/" KakaoLink="/" purpose="signIn" absoluteBottomPercent={5} />
    </>
  );
};

export default SignIn;
