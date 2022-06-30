import RatingGroup from '@components/common/rating';
import { TitleBar } from '@components/common/title';
import { NextPage } from 'next/types';
import { RightButtonModal } from '@components/common/modal';
import { Select } from '@components/common/select';
import { service } from '@data';
import { useState } from 'react';
import Image from 'next/image';

const Review: NextPage = () => {
  const [category, setCategory] = useState('상담');
  const right = { link: '/profile', src: '/assets/common/closeButton.svg', alt: '뒤로가기' };
  const [isModalState, onChangeSetState] = useState<boolean>(true);
  return (
    <section>
      <h2 className="srOnly">후기 작성</h2>
      <TitleBar right={right} />
      <div>
        <Image src="/assets/common/trainer.jpg" width={50} height={50}></Image>
        <div>
          <span>PT | 최세민트레이너</span>
          <p>다이어트, 매번 어려우셨나요? 이번엔 쉬운 길을 선택하세요</p>
        </div>
      </div>
      <RatingGroup isEditingMode={true} />
      <Select
        currentSelectedData={category}
        onSetCurrentSelected={setCategory}
        selectData={service}
        selectWidth={100}
      />
      <form>
        <fieldset>
          <legend className="srOnly">후기</legend>
          <textarea placeholder="후기에 대해 상세히 남겨주세요. 정성스러운 후기는 다른 회원 및 트레이너에게 도움이 됩니다!"></textarea>
          <span className="hint">최소 글자 10자</span>
          <input type="checkbox" id="isPrivateReview" name="isPrivateReview" />
          <label htmlFor="isPrivateReview">트레이너에게만 모이기</label>
          <button>후기 작성 완료</button>
        </fieldset>
      </form>
      <RightButtonModal
        modalContent="후기 작성을 완료하시겠습니까?"
        rightButtonContent="후기 작성 완료"
        onClickedRightBtn={() => console.log('완료!')}
        isModalState={isModalState}
        onChangeSetState={onChangeSetState}
      />
    </section>
  );
};

export default Review;
