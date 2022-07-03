import Image from 'next/image';
import profile from '@assets/common/profile.svg';
import styled from '@emotion/styled';

export const TrainerBody = ({ careers, reviews, address, images }: BodyProps) => {
  const BodySection = styled.section`
    margin: 10px 20px;

    h2 {
      font-weight: 800;
      font-size: 14px;
      line-height: 14px;
      color: #858ff1;
    }

    ul {
      list-style: disc;
      padding: 10px 20px;

      li {
        font-size: 14px;
        line-height: 19px;
      }
    }
  `;

  return (
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
        <div>
          {images.length ? (
            images.map((image, index) => (
              <Image key={index} src={image} alt={'강사 사진'} width={100} height={100} />
            ))
          ) : (
            <Image src={profile} alt={'이미지 없음'} width={100} height={100} />
          )}
        </div>
      </BodySection>
    </main>
  );
};
