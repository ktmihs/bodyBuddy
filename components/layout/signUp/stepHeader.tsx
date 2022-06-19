type props = {
  mainAgent: string;
  titleStageNumber: number;
  subTitleStageComment: string;
};

const StepHeader = ({ mainAgent, titleStageNumber, subTitleStageComment }: props) => {
  return (
    <header>
      <h2 className="srOnly">회원가입</h2>
      {mainAgent === 'member' ? (
        <div>
          <div>가장 쉬운</div>
          <span>트레이닝</span> 시작해볼까요?
        </div>
      ) : (
        <div>
          <div>
            <span>훌륭한</span>트레이너님
          </div>
          <span>{`반가습니다 :)`}</span>
        </div>
      )}
      <h3>STEP {titleStageNumber}</h3>
      <span>{subTitleStageComment}</span>
    </header>
  );
};

export default StepHeader;
