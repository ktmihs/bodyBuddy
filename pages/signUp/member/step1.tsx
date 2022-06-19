import StepHeader from '@components/layout/signUp/stepHeader';

const Step1 = () => {
  return (
    <>
      <StepHeader
        mainAgent={'member'}
        titleStageNumber={1}
        subTitleStageComment={'간단한 기본 정보를 입력해주세요 :)'}
      />
    </>
  );
};

export default Step1;
