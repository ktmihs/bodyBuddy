import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';

import onBoardingImg from '@assets/onBoarding/onBoardingImg.svg';
import { GradientButton } from '@components/common/button';

const StyledOnBoarding = styled.div`
  .greeting {
    text-align: center;
    padding-top: 20%;

    span {
      display: block;
      font-size: 23px;
    }
    .greeting-purple {
      color: ${({ theme }) => theme.purple};
      font-weight: 700;
    }

    .greeting-none {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }

  .login {
    width: 239px;
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    a {
      color: ${({ theme }) => theme.black};
    }
  }
`;

const OnBoarding = () => {
  return (
    <StyledOnBoarding>
      <div className="greeting">
        <Image src={onBoardingImg} />
        <span className="greeting-none">혼자서는 힘든 운동</span>
        <span className="greeting-purple">바디버디에서 전문가를 찾아보세요</span>
      </div>
      <GradientButton link="/signUp" buttonTitle="바디버디 시작하기" bottomPercent={8} />
      <div className="login">
        <span>이미 바디버디의 회원이라면,</span>{' '}
        <Link href="/signIn">
          <a>로그인</a>
        </Link>
      </div>
    </StyledOnBoarding>
  );
};

export default OnBoarding;
