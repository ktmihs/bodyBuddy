import { FixedBottomLinkButton } from '@components/common/button';
import StepHeader from '@components/layout/signUp/stepHeader';

const Step1 = () => {
  return (
    <>
      <StepHeader
        mainAgent={'member'}
        titleStageNumber={1}
        subTitleStageComment={'간단한 기본 정보를 입력해주세요 :)'}
      />
      <div>
        <label>닉네임</label>
        <span>좋은 닉네임이에요!</span>
        <div>
          <span>중복된 닉네임이 있습니다!</span>
          <span>닉네임은 특수문자 제외 5자 이내에요.</span>
        </div>
        <input type="text" placeholder="특수 문자 제외 5자 이내" />
      </div>
      <div>
        <label>관심 지역</label>
      </div>
      <FixedBottomLinkButton
        isValid={true}
        link={'/signUp/member/complete'}
        buttonTitle={'회원가입 완료'}
      />
    </>
  );
};

export default Step1;
