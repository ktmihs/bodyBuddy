import { TitleBar } from '@components/common/title';
import Review from '@components/layout/review/Review';
import { service } from '@data';
import { useState } from 'react';
import { Select } from '@components/common/select';

const PostList = () => {
  const [category, setCategory] = useState('상담');
  const left = { link: '/profile', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
  return (
    <section>
      <h2 className="srOnly">리뷰 목록</h2>
      <TitleBar left={left} centerTitle={'내가 작성한 리뷰'} />
      <Select
        currentSelectedData={category}
        onSetCurrentSelected={setCategory}
        selectData={service}
        selectWidth={100}
      />
      <Review />
    </section>
  );
};

export default PostList;
