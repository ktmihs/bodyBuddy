import Image from 'next/image';
import styled from '@emotion/styled';
import { TrainerImages } from './TrainerImages';
import { MouseEvent, useState } from 'react';
import RatingGroup from '@components/common/rating';
import { ImageViewer } from './ImageViewer';
import Link from 'next/link';

export const TrainerBody = ({ id, trainer, reviews }: BodyProps) => {
  const { careers, address, images } = trainer;

  const [modal, setModal] = useState(false);
  const [initialslider, setInitialslider] = useState<number>(0);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setModal((state) => !state);
    setInitialslider(+e.currentTarget.id);
  };

  const handleDeleteReview = () => {
    console.log('delete');
  };

  const handleEditReview = () => {
    console.log('edit');
  };

  const BodySection = styled.section`
    position: relative;
    margin: 10px 20px;

    h2 {
      font-weight: 800;
      font-size: 14px;
      line-height: 14px;
      color: #858ff1;
      margin-bottom: 10px;
    }
  `;

  const Careers = styled.ul`
    list-style: disc;
    padding: 0 20px 5px 20px;

    li {
      font-size: 14px;
      line-height: 20px;
    }
  `;

  const TotalReviews = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    border-bottom: 1px solid #ededed;
    padding-bottom: 5px;
    width: 100%;

    p {
      float: right;
      width: fit-content;
      cursor: pointer;
      padding: 2px;
      font-size: 11px;
      color: #9c9c9c;
    }
  `;

  const ReviewContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 5px 0 10px 0;
    border-bottom: 1px solid #ededed;
  `;

  const ReviewHeader = styled.div`
    box-sizing: border-box;
    width: 100px;
    display: flex;
    flex-flow: column nowrap;
    padding-top: 5px;
    gap: 10px;

    p {
      font-weight: 700;
      font-size: 8px;
      line-height: 10px;
      text-align: center;
      color: #5a5858;
    }
  `;

  const ReviewBody = styled.div`
    text-align: right;
    width: 100%;

    p {
      text-align: left;
      margin: 10px 0 5px 5px;
      font-size: 10px;
      line-height: 14px;
      color: #626161;
    }
  `;

  const SecretMode = styled.div`
    text-align: center;
    padding-top: 18px;

    & > p {
      margin: 7px 0;
      text-align: center;
      color: #8f8d8d;
    }
  `;

  const NoReview = styled.div`
    padding: 20px 0;
  `;

  const EditReview = styled.span`
    position: absolute;
    bottom: 10px;
    right: 18px;
    font-size: 9px;
    color: #9c9c9c;
    cursor: pointer;
    padding: 2px;

    &::after {
      content: '|';
      padding: 0 5px;
      cursor: default;
    }
  `;

  const DeleteReview = styled.span`
    position: absolute;
    bottom: 10px;
    right: 0;
    font-size: 9px;
    color: #9c9c9c;
    cursor: pointer;
    padding: 2px;
  `;

  return (
    trainer && (
      <>
        {modal && (
          <TrainerImages images={images} initialslider={initialslider} onClickSetModal={setModal} />
        )}
        <main>
          <BodySection>
            <h2>자격 및 수상 경력</h2>
            <Careers>
              {careers && careers.map((career, index) => <li key={index}>{career.content}</li>)}
            </Careers>
          </BodySection>
          <BodySection>
            <h2>후기</h2>
            <ul>
              {reviews.length ? (
                <>
                  <TotalReviews>
                    <Link href={`reviews/${reviews[0].trainerId}`}>
                      <p>더보기</p>
                    </Link>
                  </TotalReviews>
                  {reviews.map((review, index) => {
                    // review.userId로 유저 정보 받아오기
                    const profile = ''; // images[0]
                    const nickname = '루시안';

                    return (
                      <li key={index}>
                        <ReviewContainer>
                          <ReviewHeader>
                            <Image
                              src={profile || '/assets/common/profile.svg'}
                              width={50}
                              height={50}
                            />
                            <p>{nickname}</p>
                          </ReviewHeader>
                          {review.isActivation || review.userId === id ? (
                            <ReviewBody>
                              <RatingGroup
                                isEditingMode={false}
                                star={review.rating}
                                width={11}
                                height={11}
                              />
                              <div>
                                <p>{review.content}</p>
                                {/* {review.image.length ? <ImageViewer images={images} len={60} /> : <></>} */}
                              </div>
                              {review.userId === id ? (
                                <div>
                                  <EditReview onClick={handleEditReview}>수정</EditReview>
                                  <DeleteReview onClick={handleDeleteReview}>삭제</DeleteReview>
                                </div>
                              ) : (
                                <></>
                              )}
                            </ReviewBody>
                          ) : (
                            <ReviewBody>
                              <SecretMode>
                                <Image
                                  src={'/assets/common/padlock.svg'}
                                  alt={'비밀글'}
                                  width={18}
                                  height={18}
                                />
                                <p>트레이너에게만 공개된 후기입니다.</p>
                              </SecretMode>
                            </ReviewBody>
                          )}
                        </ReviewContainer>
                      </li>
                    );
                  })}
                </>
              ) : (
                <NoReview>작성된 후기가 없습니다.</NoReview>
              )}
            </ul>
          </BodySection>
          <BodySection>
            <h2>위치</h2>
            <div>{address}</div>
            {/* 지도 가져오기 */}
          </BodySection>
          <BodySection>
            <h2>사진</h2>
            <ImageViewer images={images} handleClick={handleClick} len={100} />
          </BodySection>
        </main>
      </>
    )
  );
};
