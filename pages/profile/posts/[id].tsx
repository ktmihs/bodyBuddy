import { TitleBar } from '@components/common/title';
import MyReview from '@components/layout/review/Review';
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
`;

const PostList = () => {
  const [category, setCategory] = useState('상담');
  const left = { link: '/profile', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
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
      <MyReview />
    </section>
  );
};

export default PostList;
