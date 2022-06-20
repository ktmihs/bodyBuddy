import styled from '@emotion/styled';
import Link from 'next/link';

import { SocialLinkButton } from '@components/common/button';
import exercise from '@assets/signUp/signUpExercise.svg';
import rightSideCircle from '@assets/signUp/rightSideCircle.svg';
import leftSideCircle from '@assets/signUp/leftSideCircle.svg';

const StyledSignUp = styled.div`
  .greeting {
    font-size: 37px;
    position: absolute;
    top: 18%;
    left: 21px;
    z-index: 100;

    > span {
      display: block;
      margin-bottom: 8px;
    }

    .greeting-purple {
      color: ${({ theme }) => theme.purple};
    }
  }

  .signUp-trainer {
    width: 220px;
    font-size: 15px;
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
  }

  .leftCircle {
    position: absolute;
    left: 0;
    top: 195px;
    width: 60px;
    height: 316px;
    background-image: url(${leftSideCircle.src});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .rightCircle {
    position: absolute;
    right: 0;
    top: 35px;
    width: 123px;
    height: 339px;
    background-image: url(${rightSideCircle.src});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .exercise {
    width: 100%;
    height: 400px;
    background-image: url(${exercise.src});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 25%;
  }
`;

const SignUp = () => {
  return (
    <StyledSignUp>
      <h2 className="sr-only">회원가입</h2>
      <div className="greeting">
        <span>쉬운 1:1</span>
        <span className="greeting-purple">트레이닝의 시작</span>
      </div>
      <SocialLinkButton NaverLink="/" KakaoLink="/" purpose="signUP" />
      <div className="signUp-trainer">
        <span>혹시 강사님이신가요?</span>{' '}
        <Link href="">
          <a>강사님 가입</a>
        </Link>
      </div>
      <div className="leftCircle" />
      <div className="exercise" />
      <div className="rightCircle" />
    </StyledSignUp>
  );
};

export default SignUp;
