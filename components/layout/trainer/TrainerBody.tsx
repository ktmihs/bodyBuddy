import Image from 'next/image';
import profile from '@assets/common/profile.svg';
import styled from '@emotion/styled';
import { TrainerImages } from './TrainerImages';
import { MouseEvent, useState } from 'react';

export const TrainerBody = ({ careers, reviews, address, images }: BodyProps) => {
  const [modal, setModal] = useState(false);
  const [initialslider, setInitialslider] = useState<number>(0);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setModal((state) => !state);
    setInitialslider(+e.currentTarget.id);
  };

  const BodySection = styled.section`
    margin: 10px 20px;

    h2 {
      font-weight: 800;
      font-size: 14px;
      line-height: 14px;
      color: #858ff1;
      margin-bottom: 10px;
    }

    ul {
      list-style: disc;
      padding: 0 20px 5px 20px;

      li {
        font-size: 14px;
        line-height: 20px;
      }
    }
  `;

  const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
  `;

  const ImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: #d9d9d9;
    cursor: pointer;
  `;

  return (
    <>
      {modal && (
        <TrainerImages images={images} initialslider={initialslider} onClickSetModal={setModal} />
      )}
      <main>
        <BodySection>
          <h2>자격 및 수상 경력</h2>
          <ul>
            {careers.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </BodySection>
        <BodySection>
          <h2>후기</h2>
          <ul>
            {reviews.length ? (
              reviews.map((review, index) => (
                <li key={index}>
                  <div>{review.content}</div>
                </li>
              ))
            ) : (
              <div>작성된 후기가 없습니다.</div>
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
          <ImageContainer>
            {images.length ? (
              images.map((image, index) => (
                <ImageWrapper key={index} id={String(index)} onClick={handleClick}>
                  <Image src={image} alt={'강사 사진'} width={100} height={100} />
                </ImageWrapper>
              ))
            ) : (
              <Image src={profile} alt={'이미지 없음'} width={100} height={100} />
            )}
          </ImageContainer>
        </BodySection>
      </main>
    </>
  );
};
