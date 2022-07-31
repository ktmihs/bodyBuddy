import Image from 'next/image';
import { PostMetaInfo } from '@components/common/meta';
import RatingGroup from '@components/common/rating';
import { RightButtonModal } from '@components/common/modal';
import { useState } from 'react';
import NoContent from '@components/common/noContent';
import { EditorGroup } from '@components/common/buttongroup';
import { deleteReview } from '@api/firebase';
import { MainText, RatingContainer, Reveiw, ReviewGroup, TrainerInfo } from './styledReview';

const Review = ({ reviews, setReviews, isEditable }: ReviewProps) => {
  const userId = '루시안';

  const [isDeleteMode, onChangeDeleteMode] = useState<boolean>(false);

  const [selectedReview, onChangeSelectedReview] = useState<string>('');

  const changeSelectedReview = (id: string) => {
    onChangeSelectedReview(id);
  };

  const deleteMyReview = () => {
    deleteReview(selectedReview);
    setReviews(reviews.filter(({ id }) => id !== selectedReview));
    onChangeDeleteMode(false);
  };

  return (
    <ReviewGroup className="reviewList">
      {reviews.length ? (
        reviews.map((review, index) => (
          <Reveiw key={index} onClick={() => changeSelectedReview(review.id)}>
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
              {isEditable ? (
                <EditorGroup
                  className="review"
                  EditorURL="/review"
                  lastEdited={review}
                  onChangeDeleteMode={onChangeDeleteMode}
                />
              ) : (
                ''
              )}
            </div>
            <MainText>
              <TrainerInfo>
                <span>{review.name} 트레이너</span>
                <span>
                  {review.fieldId} | {review.purposeId}
                </span>
              </TrainerInfo>
              <Image src={review.images[0]} alt="프로필" width="100" height="100" />
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
          onClickedRightBtn={deleteMyReview}
          isModalState={isDeleteMode}
          onChangeSetState={onChangeDeleteMode}
        />
      ) : (
        ''
      )}
    </ReviewGroup>
  );
};

export default Review;
