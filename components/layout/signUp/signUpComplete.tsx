import { GradientButton } from '@components/common/button';
import styled from '@emotion/styled';

import exercise from '@assets/signUp/signUpExercise.svg';
import rightSideCircle from '@assets/signUp/rightSideCircle.svg';
import leftSideCircle from '@assets/signUp/leftSideCircle.svg';

const StyledSignUpComplete = styled.div`
  .member-greeting,
  .trainer-greeting {
    z-index: 100;
    font-size: 48px;
    font-weight: 600;
    > span {
      display: block;
      margin-bottom: 4px;
    }
  }

  .member-greeting {
    position: absolute;
    top: 14%;
    left: 21px;
  }

  .trainer {
    position: absolute;
    top: 10%;
    left: 21px;
  }

  .trainer-guide {
    color: ${({ theme }) => theme.purple};
    margin-bottom: 15px;

    > span {
      display: block;
      margin-bottom: 8px;
    }
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
    width: 120%;
    height: 400px;
    background-image: url(${exercise.src});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 15%;
  }
`;

const SignUpComplete = ({ mainAgent }: { mainAgent: string }) => {
  return (
    <StyledSignUpComplete>
      {mainAgent === 'member' ? (
        <div className="member-greeting">
          <span>바디버디의</span>
          <span>일원이 되신걸</span>
          <span>{`축하드려요 :)`}</span>
        </div>
      ) : (
        <div className="trainer">
          <div className="trainer-guide">
            <span>가입 승인까지</span>
            <span>평균 2~5일 걸립니다.</span>
          </div>
          <div className="trainer-greeting">
            <span>바디버디를</span>
            <span>선택해주셔서</span>
            <span>{`감사합니다 :)`} </span>
          </div>
        </div>
      )}
      <GradientButton link={'/'} buttonTitle={'홈으로 이동하기'} bottomPercent={4} />
      <div className="leftCircle" />
      <div className="exercise" />
      <div className="rightCircle" />
    </StyledSignUpComplete>
  );
};

export default SignUpComplete;
