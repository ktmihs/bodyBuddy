import { SocialLinkButton } from '@components/common/button';
import Image from 'next/image';

import fullLogo from '/public/assets/fullLogo.svg';

const SignIn = () => {
  return (
    <>
      <h1>
        <span className="srOnly">바디버디</span>
        <Image
          src={fullLogo}
          title="바디버디"
          alt="바디버디 로고"
          width={'193.57.px'}
          height={'132px'}
        />
      </h1>
      <span>SNS로 간편하게 로그인 하세요 !</span>
      <SocialLinkButton NaverLink="/" KakaoLink="/" purpose="signIn" />
    </>
  );
};

export default SignIn;
