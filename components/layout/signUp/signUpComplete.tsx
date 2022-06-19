import { GradientButton } from '@components/common/button';
import styled from '@emotion/styled';

import RightSideCircleImg from '/public/assets/signUp/RightSideCircle.svg';

const RightSideCircle = styled.div`
  width: 500px;
  height: 675px;
`;

const SignUpComplete = ({ mainAgent }: { mainAgent: string }) => {
  return (
    <div>
      {mainAgent === 'member' ? (
        <>
          <div>바디버디의</div>
          <div>일원이 되신걸</div>
          <div>{`축하드려요 :)`}</div>
        </>
      ) : (
        <>
          <div>
            <span>가입 승인까지</span>
            <span>평균 2~5일 걸립니다.</span>
          </div>
          <div>바디버디를</div>
          <div>선택해주셔서</div>
          <div>{`감사합니다 :)`} </div>
        </>
      )}
      <GradientButton link={'/'} buttonTitle={'홈으로 이동하기'} />
      <RightSideCircle />
    </div>
  );
};

export default SignUpComplete;
