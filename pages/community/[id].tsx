import type { NextPage } from 'next';
import Image from 'next/image';
import styled from '@emotion/styled';
import { TitleBar } from '@components/common/title';
import { CommentCount, PostMetaInfo } from '@components/common/meta';
import Comments from '@components/layout/community/Comment';
import { useCallback, useState } from 'react';
import { RightButtonModal } from '@components/common/modal';
import EditorGroup from '@components/common/buttongroup';
import { field } from '@data';
import { useRouter } from 'next/router';

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

const PostingDetail: NextPage = () => {
  const router = useRouter();
  let { post } = router.query;
  post = JSON.parse(post);

  const mockdata = [
    {
      id: '1',
      communityId: 'ZuDYupb7g2UYVDfSKOIH',
      content: '염분기 없는 닭가슴살이면 ㄱㅊ',
      creationDate: '2022-07-03T00:00:10.792Z',
      userId: '그만먹고싶닭',
    },
    {
      id: '2',
      communityId: 'ZuDYupb7g2UYVDfSKOIH',
      content: '감사합니다!',
      creationDate: '2022-07-03T02:00:10.792Z',
      userId: '밍망디',
    },
    {
      id: '3',
      communityId: 'ZuDYupb7g2UYVDfSKOIH',
      content: '한번 선물했더니 그 다음부턴 헬스장에서 마주칠 때마다 인사해 주더라고요!',
      creationDate: '2022-07-03T06:36:10.792Z',
      userId: '상여자',
    },
    {
      id: '4',
      communityId: 'ZuDYupb7g2UYVDfSKOIH',
      content: '답글 남겨 주신 모든 분들 감사합니다!',
      creationDate: '2022-07-03T06:37:10.792Z',
      userId: '밍망디',
    },
  ];

  const userId = '밍망디';
  const [isDeleteMode, onChangeDeleteMode] = useState<boolean>(false);
  const [comments, setComments] = useState(mockdata);

  const deletePost = useCallback(() => {
    sessionStorage.removeItem('selected');
    // 서버로 post delete 요청
    onChangeDeleteMode(false);
    window.location.href = '/community';
  }, []);

  const left = { link: '/community', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
  return (
    <section>
      <h2 className="srOnly">게시물 보기</h2>
      <TitleBar left={left} centerTitle={field[+post.fieldId] + ' 게시판'} />
      <UserProfile>
        <Image src="/assets/common/profile.svg" alt="프로필" width="50" height="50" />
        <PostMetaInfo
          nickname={post.userId}
          dateTime={new Date(post.creationDate)}
          className="post"
        ></PostMetaInfo>
        {userId === post.userId ? (
          <EditorGroup
            className="post"
            selectedItem={post.id}
            EditorURL="/community/posting"
            lastEdited={post}
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
        <p>{post.title}</p>
        <p>{post.content}</p>
        {post.images.length ? (
          <UploadImage>
            {post.images.map((src, index) => (
              <Image key={index} src={src} alt="첨부한 사진" width="250" height="150" />
            ))}
          </UploadImage>
        ) : (
          ''
        )}
        <CommentCount comment={comments.length}></CommentCount>
      </MainText>
      <Comments comments={comments} setComments={setComments} />
    </section>
  );
};

export default PostingDetail;
