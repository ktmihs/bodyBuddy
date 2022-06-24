import { FixedBottomLinkButton } from '@components/common/button';
import { KakaoMap } from '@components/common/map';
import StepHeader from '@components/layout/signUp/StepHeader';
import styled from '@emotion/styled';

const StyledStep2 = styled.section`
  padding: 40px 0 100px 21px;

  label {
    display: block;
    margin-bottom: 10px;
  }

  .pic,
  .location {
    margin-top: 20px;
  }

  .name,
  .location {
    input {
      border: 1px solid ${({ theme }) => theme.lineGray};
      width: 321px;
      height: 32px;
      padding: 0px 6px;
      border-radius: 10px;
    }
  }

  .pic {
    span {
      font-size: 12px;
      color: #888787;
    }
  }

  .location {
    position: relative;

    button {
      position: absolute;
      top: 30px;
      right: 40px;
      border: none;
      background-color: ${({ theme }) => theme.purple};
      padding: 5px 8px;
      border-radius: 5px;
      color: white;
    }
  }
`;

const Step2 = () => {
  return (
    <>
      <StepHeader
        mainAgent={'trainer'}
        titleStageNumber={2}
        subTitleStageComment={'근무하시는 트레이닝장 위치를 적어주세요 !'}
      />

      <StyledStep2>
        <div className="name">
          <label>트레이닝장 이름</label>
          <input type="text" />
        </div>
        <div className="pic">
          <label>트레닝장 대표 사진</label>
          <span>회원들에게 시설을 보여줄 수 있는 사진으로 업로드해주세요 {`:)`}</span>
        </div>
        <div className="location">
          <label>트레이닝장 위치</label>
          <input />
          <button>검색</button>
          <KakaoMap />
        </div>
      </StyledStep2>
      <FixedBottomLinkButton isValid={true} link="/signUp/trainer/step3" buttonTitle={'다음'} />
    </>
  );
};

export default Step2;
