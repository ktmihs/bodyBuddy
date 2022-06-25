import { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import { FixedBottomButton } from '@components/common/button';
import { Select } from '@components/common/select';
import StepHeader from '@components/layout/signUp/StepHeader';
import { careerStartYear, careerMonth } from '@data';

import plus from '@assets/signUp/plus.svg';

const StyledStep3 = styled.section`
  padding: 40px 0 0 21px;

  label {
    display: block;
    margin-bottom: 10px;
  }

  .career {
    margin-bottom: 20px;
    div {
      display: flex;
    }

    span:first-of-type {
      margin-right: 10px;
    }
  }

  .qualification {
    input {
      width: 286px;
      border: 1px solid ${({ theme }) => theme.lineGray};
      padding: 3px 14px;
      border-radius: 20px;
    }

    .enterInfo {
      width: 90%;
      display: flex;

      button {
        border: none;
        background: transparent;
        padding: 0;
      }
    }

    span {
      margin-top: 10px;
      display: block;
      font-size: 12px;
      color: #818181;
    }
  }
`;

const Step3 = () => {
  const [startYear, setStartYear] = useState('경력 시작 년도');
  const [startMonth, setStartMonth] = useState('경력 시작 달');

  return (
    <>
      <StepHeader
        mainAgent={'trainer'}
        titleStageNumber={3}
        subTitleStageComment={'트레이너님의 경력을 알 수 있는 자격증을 업로드해주세요 :)'}
      />
      <StyledStep3>
        <div className="career">
          <label>경력 시작</label>
          <div>
            <Select
              currentSelectedData={startYear}
              selectData={careerStartYear}
              selectWidth={142}
              onSetCurrentSelected={setStartYear}
            />
            <Select
              currentSelectedData={startMonth}
              selectData={careerMonth}
              selectWidth={100}
              onSetCurrentSelected={setStartMonth}
            />
          </div>
        </div>
        <div className="qualification">
          <label>자격 및 수상</label>
          <div className="enterInfo">
            <input type="text" />
            <button>
              <Image src={plus.src} width="30px" height="30px" alt="추가" />
            </button>
          </div>
          <span>상단 경력 및 수상에 해당하는 자격 및 수상 인증을 업로드해주세요.</span>
        </div>
      </StyledStep3>
      <FixedBottomButton
        isValid={false}
        buttonTitle="회원가입 신청"
        buttonType="button"
        onButtonEvent={() => {}}
      />
    </>
  );
};

export default Step3;
