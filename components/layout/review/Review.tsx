import Image from 'next/image';
import { PostMetaInfo } from '@components/common/meta';
import ButtonGroup from '@components/common/buttongroup';
import RatingGroup from '@components/common/rating';
import { RightButtonModal } from '@components/common/modal';
import { useState } from 'react';

const Review = () => {
  const [isModalState, onChangeSetState] = useState<boolean>(true);
  return (
    <div className="reviewList">
      <article>
        <div>
          <Image src="/assets/common/profile.svg" alt="프로필" width="50" height="50" />
          <PostMetaInfo
            nickname="루시안"
            time={new Date()}
            className="review"
            displayByDate={true}
          ></PostMetaInfo>
          <RatingGroup isEditingMode={false} />
        </div>
        <ButtonGroup className="review" />
        <div>
          <span>최세민 트레이너</span>
          <span>PT | 다이어트</span>
          <Image src="/assets/common/trainer.jpg" alt="프로필" width="200" height="200" />
          <p>제가 만난 최고의 요가 강사님입니다!! 다음에 요가해도 강사님에게 할거에요..</p>
        </div>
      </article>
      <article>
        <div>
          <Image src="/assets/common/profile.svg" alt="프로필" width="50" height="50" />
          <PostMetaInfo
            nickname="루시안"
            time={new Date()}
            className="review"
            displayByDate={true}
          ></PostMetaInfo>
          <RatingGroup isEditingMode={false} />
        </div>
        <ButtonGroup className="review" />
        <div>
          <span>이채령 트레이너</span>
          <span>PT | 다이어트</span>
          <Image src="/assets/common/trainer.jpg" alt="프로필" width="200" height="200" />
          <p>제가 만난 최고의 요가 강사님입니다!! 다음에 요가해도 강사님에게 할거에요..</p>
        </div>
      </article>
      <RightButtonModal
        modalContent="후기를 삭제하시겠습니까?"
        rightButtonContent="후가 삭제 완료"
        onClickedRightBtn={() => console.log('완료!')}
        isModalState={isModalState}
        onChangeSetState={onChangeSetState}
      />
    </div>
  );
};

export default Review;
