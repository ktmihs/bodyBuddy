import RatingGroup from '@components/common/rating';
import { TitleBar } from '@components/common/title';
import { NextPage } from 'next/types';
import { RightButtonModal } from '@components/common/modal';
import { Select } from '@components/common/select';
import { service } from '@data';
import { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const ServiceGroup = styled.div`
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  margin: 20px;
  padding-top: 20px;
  display: flex;
  gap: 20px;
  & > span:nth-of-type(1) {
    align-self: center;
  }
  span {
    font-size: 13px;
    color: ${({ theme }) => theme.black};
  }
`;

const TrainerRating = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
`;
const TrainerProfile = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  img {
    border-radius: 50%;
  }
`;
const TrainerInfo = styled.div`
  flex-grow: 1;
  span:nth-of-type(1),
  span:nth-of-type(2) {
    line-height: 1.4;
  }
  span:nth-of-type(1) {
    font-weight: bold;
  }
  span:nth-of-type(2)::before {
    content: '|';
    display: inline-block;
    margin: 0 10px 0 10px;
  }
  p {
    margin-top: 15px;
    line-height: 1.2;
    color: #5a5858;
  }
`;

const MainText = styled.div`
  padding-left: 20px;
  position: relative;
  width: 80%;
  height: 250px;
  textarea {
    padding: 3%;
    line-height: 1.6;
    width: 100%;
    height: 100%;
    resize: none;
    color: #5a5858;
    border-style: none;
    border-radius: 10px;
    background-color: #f2f2f2;
  }
  span:nth-of-type(1) {
    position: absolute;
    line-height: 1.6;
    bottom: 0;
    right: 0;
    color: #5a5858;
  }
`;
const Option = styled.div`
  margin: 30px 0 30px 20px;
  label:nth-of-type(1) {
    display: inline-block;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    background: url('/assets/common/checkboxSquare.svg') no-repeat;
  }
  input {
    display: none;
    &:checked + label:nth-of-type(1) {
      background: url('/assets/common/checkboxSquare-checked.svg') no-repeat;
      background-position-y: -5px;
    }
    &:checked ~ label:nth-of-type(2) {
      color: ${({ theme }) => theme.purple};
    }
  }
`;

const SubmitButton = styled.button`
  width: 300px;
  height: 50px;
  margin-left: 50%;
  margin-bottom: 20px;
  transform: translateX(-50%);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.purple};
  border-style: none;
  color: white;
  cursor: pointer;
`;

const Review: NextPage = () => {
  const [category, setCategory] = useState('상담');
  const right = { link: '/profile', src: '/assets/common/closeButton.svg', alt: '뒤로가기' };
  const [isModalState, onChangeSetState] = useState<boolean>(true);
  return (
    <section>
      <h2 className="srOnly">후기 작성</h2>
      <TitleBar right={right} />
      <TrainerProfile>
        <Image src="/assets/common/trainer.jpg" width={100} height={100}></Image>
        <TrainerInfo>
          <span>PT</span>
          <span>최세민 트레이너</span>
          <p>
            다이어트, 매번 어려우셨나요? <br />
            이번엔 쉬운 길을 선택하세요
          </p>
        </TrainerInfo>
      </TrainerProfile>
      <TrainerRating>
        <RatingGroup isEditingMode={true} width={15} height={15} />
      </TrainerRating>
      <ServiceGroup>
        <span>분류</span>
        <Select
          currentSelectedData={category}
          onSetCurrentSelected={setCategory}
          selectData={service}
          selectWidth={100}
        />
      </ServiceGroup>
      <form>
        <fieldset>
          <legend className="srOnly">후기</legend>
          <MainText>
            <textarea
              placeholder="후기에 대해 상세히 남겨주세요. :) &#13;&#10;정성스러운 후기는 다른 회원 및 트레이너에게 도움이 됩니다!"
            ></textarea>
            <span className="hint">최소 글자 10자</span>
          </MainText>
          <Option>
            <input type="checkbox" id="isPrivateReview" name="isPrivateReview" />
            <label htmlFor="isPrivateReview"></label>
            <label htmlFor="isPrivateReview">트레이너에게만 보이기</label>
          </Option>
          <SubmitButton>후기 작성 완료</SubmitButton>
        </fieldset>
      </form>
      {/* <RightButtonModal
        modalContent="후기 작성을 완료하시겠습니까?"
        rightButtonContent="후기 작성 완료"
        onClickedRightBtn={() => console.log('완료!')}
        isModalState={isModalState}
        onChangeSetState={onChangeSetState}
      /> */}
    </section>
  );
};

export default Review;
