import Image from 'next/image';
import { PostMetaInfo } from '@components/common/meta';
import ButtonGroup from '@components/common/buttongroup';
import RatingGroup from '@components/common/rating';
import { RightButtonModal } from '@components/common/modal';
import { useState } from 'react';
import styled from '@emotion/styled';
import NoContent from '@components/common/noContent';

const ReviewGroup = styled.div`
  margin-left: 20px;
  padding: 1%;
`;

const Reveiw = styled.article`
  width: 90%;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 5% 0;
  & > div:nth-of-type(1) {
    display: flex;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  gap: 5px;
  margin-left: 10px;
  time,
  span {
    font-size: 14px;
  }
  div:nth-of-type(1) {
    flex-grow: 1;
  }
`;

const MainText = styled.div`
  margin: 3% 0;
  img {
    border-radius: 15px;
  }
  p {
    margin: 10px 0;
  }
`;

const TrainerInfo = styled.div`
  padding: 15px 0;
  span {
    font-size: 14px;
    margin-right: 15px;
  }

  span:nth-of-type(2) {
    background-color: ${({ theme }) => theme.purple};
    color: white;
    padding: 2%;
    border-radius: 15px;
  }
`;

const MyReview = () => {
  const [isModalState, onChangeSetState] = useState<boolean>(true);
  return (
    <ReviewGroup className="reviewList">
      <Reveiw>
        <div>
          <Image src="/assets/common/profile.svg" alt="프로필" width="30" height="30" />
          <RatingContainer>
            <PostMetaInfo nickname="루시안" time={new Date()} className="review"></PostMetaInfo>
            <RatingGroup isEditingMode={false} width={15} height={15} />
          </RatingContainer>
          <ButtonGroup className="review" />
        </div>
        <MainText>
          <TrainerInfo>
            <span>최세민 트레이너</span>
            <span>PT | 다이어트</span>
          </TrainerInfo>
          <Image src="/assets/common/trainer.jpg" alt="프로필" width="100" height="100" />
          <p>제가 만난 최고의 요가 강사님입니다!! 다음에 요가해도 강사님에게 할거에요..</p>
        </MainText>
      </Reveiw>
      <Reveiw>
        <div>
          <Image src="/assets/common/profile.svg" alt="프로필" width="30" height="30" />
          <RatingContainer>
            <PostMetaInfo nickname="루시안" time={new Date()} className="review"></PostMetaInfo>
            <RatingGroup isEditingMode={false} width={15} height={15} />
          </RatingContainer>
          <ButtonGroup className="review" />
        </div>
        <MainText>
          <TrainerInfo>
            <span>이채령 트레이너</span>
            <span>요가 | 다이어트</span>
          </TrainerInfo>
          <Image src="/assets/common/trainer.jpg" alt="프로필" width="100" height="100" />
          <p>제가 만난 최고의 요가 강사님입니다!! 다음에 요가해도 강사님에게 할거에요..</p>
        </MainText>
      </Reveiw>
      {/* 
      <RightButtonModal
        modalContent="후기를 삭제하시겠습니까?"
        rightButtonContent="후가 삭제 완료"
        onClickedRightBtn={() => console.log('완료!')}
        isModalState={isModalState}
        onChangeSetState={onChangeSetState}
      /> */}
      {/* <NoContent
        title="작성한 후기가 없어요!"
        subTitle="작성한 후기는 트레이너님과 버디들에게 도움이 됩니다."
      /> */}
    </ReviewGroup>
  );
};

export default MyReview;
