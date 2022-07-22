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

  .money {
    margin-bottom: 20px;
    position: relative;

    .front,
    .won {
      position: absolute;
      top: 32px;
      color: ${({ theme }) => theme.gray};
    }

    .front {
      left: 10px;
    }
    .won {
      right: 50px;
    }

    input {
      color: ${({ theme }) => theme.purple};
      box-sizing: border-box;
      border: 1px solid ${({ theme }) => theme.lineGray};
      width: 90%;
      border-radius: 10px;
      padding: 6px 10px 6px 60px;
    }
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
  }
`;

const Step3 = () => {
  const [startYear, setStartYear] = useState('경력 시작 년도');
  const [startMonth, setStartMonth] = useState('경력 시작 월');

  return (
    <>
      <StepHeader
        mainAgent={'trainer'}
        titleStageNumber={3}
        subTitleStageComment={'트레이너님의 경력을 알 수 있는 자격증을 업로드해주세요 :)'}
      />
      <StyledStep3>
        <div className="money">
          <label>1:1 트레이닝 비용</label>
          <span className="front">1회당</span>
          <input />
          <span className="won">원</span>
        </div>
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
              selectWidth={120}
              onSetCurrentSelected={setStartMonth}
            />
          </div>
        </div>
        <div className="qualification">
          <label>자격 및 수상</label>
        </div>
      </StyledStep3>
      {/* <FixedBottomButton
        isValid={false}
        buttonTitle="회원가입 신청"
        buttonType="button"
        onButtonEvent={() => {}}
      /> */}
    </>
  );
};

export default Step3;
