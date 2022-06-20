import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';

import onBoardingImg from '@assets/onBoarding/onBoardingImg.svg';
import { GradientButton } from '@components/common/button';

const OnBoarding = () => {
  return (
    <div>
      <div>
        <Image src={onBoardingImg} />
        <span>혼자서는 힘든 운동</span>
        <span>바디버디에서 전문가를 찾아보세요</span>
      </div>
      <GradientButton link="/signUp" buttonTitle="바디버디 시작하기" />
      <div>
        <span>이미 바디버디의 회원이라면,</span>
        <Link href="/signIn">
          <a>로그인</a>
        </Link>
      </div>
    </div>
  );
};

export default OnBoarding;
