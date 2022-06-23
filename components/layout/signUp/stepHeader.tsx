import styled from '@emotion/styled';

type props = {
  mainAgent: string;
  titleStageNumber: number;
  subTitleStageComment: string;
};

const StyledStepHeader = styled.header<{ mainAgent: string }>`
  .greeting {
    padding: 54px 0 0 21px;
    font-weight: 700;
    line-height: 1.2;
    font-size: 29px;
    position: relative;
  }

  .greeting-highlight {
    background: rgba(133, 143, 241, 0.6);
    width: ${({ mainAgent }) => (mainAgent === 'member' ? '109px' : '83px')};
    height: 8px;
    position: absolute;
    left: 19px;
    top: ${({ mainAgent }) => (mainAgent === 'member' ? '112px' : '80px')};
  }

  h3 {
    padding-left: 21px;
    margin: ${({ mainAgent }) => (mainAgent === 'member' ? '69px 0 10px 0' : ' 37px 0 10px 0')};
    font-size: 35px;
    font-weight: 700;
    color: ${({ theme }) => theme.purple};
  }

  .subTitle {
    padding-left: 21px;
    color: #7d7d7d;
  }
`;

const StepHeader = ({ mainAgent, titleStageNumber, subTitleStageComment }: props) => {
  return (
    <StyledStepHeader mainAgent={mainAgent}>
      <h2 className="srOnly">회원가입</h2>
      {mainAgent === 'member' ? (
        <div className="greeting">
          <div className="greeting-highlight" />
          <div>가장 쉬운</div>
          트레이닝시작해볼까요?
        </div>
      ) : (
        <div className="greeting">
          <div className="greeting-highlight" />
          <div>훌륭한 트레이너님</div>
          <span>{`반가습니다 :)`}</span>
        </div>
      )}
      <h3>STEP {titleStageNumber}</h3>
      <span className="subTitle">{subTitleStageComment}</span>
    </StyledStepHeader>
  );
};

export default StepHeader;
