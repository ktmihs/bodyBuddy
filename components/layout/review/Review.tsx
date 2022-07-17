import Image from 'next/image';
import { PostMetaInfo } from '@components/common/meta';
import RatingGroup from '@components/common/rating';
import { RightButtonModal } from '@components/common/modal';
import { useState } from 'react';
import styled from '@emotion/styled';
import NoContent from '@components/common/noContent';
import { healthPurpose, field } from '@data';
import { EditorGroup } from '@components/common/buttongroup';

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

  div:nth-of-type(2) {
    margin-left: 0;
  }
`;

const MainText = styled.div`
  margin: 3% 0;
  img {
    border-radius: 15px;
  }
  p {
    font-size: 14px;
    margin: 10px 0;
    line-height: 1.3;
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
  const userId = '루시안';
  // review + trainer 테이블 결합
  const mockdata = [
    {
      id: '1',
      category: '상담',
      content: '제가 만난 최고의 요가 강사님입니다!! 다음에 요가해도 강사님에게 할거에요..',
      creationDate: '2022-07-03T00:00:10.792Z',
      isActivation: true,
      rating: 4,
      userId: '1',
      trainerId: '1',
      name: '최세민',
      fieldId: '0',
      images: '/assets/common/trainer.jpg',
      introduction: '다이어트, 매번 어려우셨나요? 이번엔 쉬운 길을 선택하세요',
      purposeId: '0',
    },
    {
      id: '2',
      category: '수업',
      content: '제가 만난 최고의 요가 강사님입니다!! 다음에 요가해도 강사님에게 할거에요..',
      creationDate: '2022-07-05T00:00:10.792Z',
      isActivation: true,
      rating: 5,
      userId: '1',
      trainerId: '2',
      name: '이채령',
      fieldId: '0',
      introduction: '다이어트, 매번 어려우셨나요? 이번엔 쉬운 길을 선택하세요',
      images: '/assets/common/trainer.jpg',
      purposeId: '0',
    },
  ];

  const [isDeleteMode, onChangeDeleteMode] = useState<boolean>(false);
  const [reviews, setReviews] = useState(mockdata);

  const deleteReview = () => {
    const item = sessionStorage.getItem('selected');
    // 서버로 review delete 요청
    setReviews(reviews.filter(({ id }) => id !== item));
    onChangeDeleteMode(false);
    sessionStorage.removeItem('selected');
  };

  return (
    <ReviewGroup className="reviewList">
      {reviews.length ? (
        reviews.map((review, index) => (
          <Reveiw key={index}>
            <div>
              <Image src="/assets/common/profile.svg" alt="프로필" width="30" height="30" />
              <RatingContainer>
                <PostMetaInfo
                  nickname={userId}
                  dateTime={new Date(review.creationDate)}
                  className="review"
                ></PostMetaInfo>
                <RatingGroup isEditingMode={false} star={review.rating} width={15} height={15} />
              </RatingContainer>
              <EditorGroup
                className="review"
                EditorURL="/review"
                lastEdited={review}
                onChangeDeleteMode={onChangeDeleteMode}
              />
            </div>
            <MainText>
              <TrainerInfo>
                <span>{review.name} 트레이너</span>
                <span>
                  {field[+review.fieldId]} | {healthPurpose[+review.purposeId]}
                </span>
              </TrainerInfo>
              <Image src={review.images} alt="프로필" width="100" height="100" />
              <p>{review.content}</p>
            </MainText>
          </Reveiw>
        ))
      ) : (
        <NoContent
          title="작성한 후기가 없어요!"
          subTitle="작성한 후기는 트레이너님과 버디들에게 도움이 됩니다."
        />
      )}

      {isDeleteMode ? (
        <RightButtonModal
          modalContent="후기를 삭제하시겠습니까?"
          rightButtonContent="후가 삭제"
          onClickedRightBtn={deleteReview}
          isModalState={isDeleteMode}
          onChangeSetState={onChangeDeleteMode}
        />
      ) : (
        ''
      )}
    </ReviewGroup>
  );
};

export default MyReview;
