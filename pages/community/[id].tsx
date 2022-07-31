import type { NextPage } from 'next';
import Image from 'next/image';
import styled from '@emotion/styled';
import { TitleBar } from '@components/common/title';
import { CommentCount, PostMetaInfo } from '@components/common/meta';
import Comments from '@components/layout/community/Comment';
import { useCallback, useState } from 'react';
import { RightButtonModal } from '@components/common/modal';
import { EditorGroup } from '@components/common/buttongroup';
import Router from 'next/router';
import { fetchPostingDetailById, fetchCommentsById, deleteCommunityPosting } from '@api/firebase';
import NoContent from '@components/common/noContent';

const UserProfile = styled.div`
  display: flex;
  width: 90%;
  padding: 0 0 15px 20px;
  gap: 10px;
`;

const MainText = styled.div`
  padding-left: 20px;

  p {
    width: 90%;
    padding: 2% 0;
    &:nth-of-type(1) {
      font-weight: bold;
      font-size: 16px;
    }
    &:nth-of-type(2) {
      line-height: 1.2;
      margin-bottom: 5%;
    }
  }
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const UploadImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-bottom: 20px;

  gap: 15px;
  img {
    object-fit: cover;
  }
`;

const PostingDetail: NextPage = ({ data }: any) => {
  const userId = 'mqcMcOXqvJwGR20waScC';
  const [isDeleteMode, onChangeDeleteMode] = useState<boolean>(false);
  const [comments, setComments] = useState(data.comments);

  const deletePost = useCallback(() => {
    onChangeDeleteMode(false);
    deleteCommunityPosting(data.id);
    Router.push('/community');
  }, []);

  const left = { link: '/community', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
  return (
    <section>
      {data ? (
        <>
          <h2 className="srOnly">게시물 보기</h2>
          <TitleBar left={left} centerTitle={data.field + ' 게시판'} />
          <UserProfile>
            <Image src="/assets/common/profile.svg" alt="프로필" width="50" height="50" />
            <PostMetaInfo
              nickname={data.nickname}
              dateTime={new Date(data.creationDate)}
              className="post"
            ></PostMetaInfo>
            {userId === data.userId ? (
              <EditorGroup
                className="post"
                EditorURL="/community/posting"
                lastEdited={data}
                onChangeDeleteMode={onChangeDeleteMode}
              />
            ) : (
              ''
            )}
            {isDeleteMode ? (
              <ModalContainer>
                <RightButtonModal
                  modalContent="게시물을 삭제하시겠습니까?"
                  rightButtonContent="게시물 삭제"
                  onClickedRightBtn={() => deletePost()}
                  isModalState={isDeleteMode}
                  onChangeSetState={onChangeDeleteMode}
                />
              </ModalContainer>
            ) : (
              ''
            )}
          </UserProfile>
          <MainText>
            <p>{data.title}</p>
            <p>{data.content}</p>
            {data.images.length ? (
              <UploadImage>
                {data.images.map((src: string, index: number) => (
                  <Image key={index} src={src} alt="첨부한 사진" width="250" height="150" />
                ))}
              </UploadImage>
            ) : (
              ''
            )}
            <CommentCount comment={comments.length}></CommentCount>
          </MainText>
          <Comments postId={data.id} comments={comments} setComments={setComments} />
        </>
      ) : (
        <>
          <TitleBar left={left} centerTitle={'돌아가기'} />
          <NoContent title="이런!" subTitle="게시물이 삭제되었거나 잘못된 경로예요" />
        </>
      )}
    </section>
  );
};

export const getServerSideProps = async (context: { params: { id: string } }) => {
  const { id } = context.params;

  const fetchedPost = await fetchPostingDetailById(id);
  const res = fetchedPost ? await fetchCommentsById(id) : [];
  const comments = res?.map((key) => ({ ...key, creationDate: key.creationDate + '' }));

  const data = fetchedPost
    ? {
        id,
        ...fetchedPost,
        comments: comments ? comments : [],
      }
    : '';

  return {
    props: {
      data,
    },
  };
};
export default PostingDetail;
