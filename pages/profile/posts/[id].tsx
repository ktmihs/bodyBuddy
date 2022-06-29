import { TitleBar } from '@components/common/title';
import Review from '@components/review/Review';
import { ServiceGroup } from '@components/common/itemgroup';

const PostList = () => {
  const left = { link: '/profile', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
  return (
    <section>
      <h2 className="srOnly">리뷰 목록</h2>
      <TitleBar left={left} centerTitle={'내가 작성한 리뷰'} />
      <ServiceGroup />
      <Review />
    </section>
  );
};

export default PostList;
