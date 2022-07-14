import NoContent from '@components/common/noContent';
import CommunityHeader from '@components/layout/profile/CommunityHeader';

const CommentList = () => {
  return (
    <>
      <CommunityHeader current="comments" />
      <NoContent title={'게시글이 없어요'} />
    </>
  );
};

export default CommentList;
