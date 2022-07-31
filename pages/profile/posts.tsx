import { TitleBar } from '@components/common/title';
import Review from '@components/common/review';
import { service } from '@data';
import { useState } from 'react';
import { Select } from '@components/common/select';
import styled from '@emotion/styled';

const ServiceGroup = styled.div`
  margin-left: 20px;
  margin-bottom: 5%;
  display: flex;
  gap: 20px;
  & > span:nth-of-type(1) {
    align-self: center;
  }
  span {
    font-size: 13px;
    color: ${({ theme }) => theme.black};
  }
  span:nth-of-type(2) {
    span {
      margin-left: 5px;
    }
  }
`;

const PostList = () => {
  const [category, setCategory] = useState('상담');
  const left = { link: '/profile', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
  const review = [
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
      fieldId: 'PT',
      images: ['/assets/common/trainer.jpg'],
      introduction: '다이어트, 매번 어려우셨나요? 이번엔 쉬운 길을 선택하세요',
      purposeId: '다이어트',
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
      fieldId: '요가',
      introduction: '다이어트, 매번 어려우셨나요? 이번엔 쉬운 길을 선택하세요',
      images: ['/assets/common/trainer.jpg'],
      purposeId: '다이어트',
    },
  ];

  const [reviews, setReviews] = useState(review);

  return (
    <section>
      <h2 className="srOnly">리뷰 목록</h2>
      <TitleBar left={left} centerTitle={'내가 작성한 리뷰'} />
      <ServiceGroup>
        <span>분류</span>
        <Select
          currentSelectedData={category}
          onSetCurrentSelected={setCategory}
          selectData={service}
          selectWidth={100}
        />
      </ServiceGroup>
      <Review reviews={reviews} setReviews={setReviews} isEditable={true} />
    </section>
  );
};

export default PostList;
