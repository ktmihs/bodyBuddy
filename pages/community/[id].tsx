import type { NextPage } from 'next';
import Image from 'next/image';
import styled from '@emotion/styled';
import { TitleBar } from '@components/common/title';
import { LikeAndCommentCount, PostMetaInfo } from '@components/common/meta';
import { useState } from 'react';
import ButtonGroup from '@components/common/buttongroup';
import Comments from '@components/layout/community/Comment';

const UserProfile = styled.div`
  display: flex;
  padding: 0 0 15px 20px;
  gap: 10px;
`;

const MainText = styled.div`
  padding-left: 20px;

  p {
    padding: 2% 0;
    &:nth-of-type(1) {
      font-weight: bold;
      font-size: 16px;
    }
    &:nth-of-type(2) {
      margin-bottom: 5%;
    }
  }
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
  const [liked, toggleLiked] = useState(false);
  const left = { link: '/community', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
  return (
    <section>
      <h2 className="srOnly">게시물 보기</h2>
      <TitleBar left={left} centerTitle="PT 게시판" />
      <UserProfile>
        <Image src="/assets/common/profile.svg" alt="프로필" width="50" height="50" />
        <PostMetaInfo
          nickname="밍망디"
          dateTime={new Date('2021-06-14T06:30:10.792Z')}
          className="post"
        ></PostMetaInfo>
        <ButtonGroup className="post" />
      </UserProfile>
      <MainText>
        <p>트쌤한테</p>
        <p>먹을 거 줘도 돼요? 요만한 건데</p>
        <UploadImage>
          <Image src="/assets/community/blank.svg" alt="첨부한 사진" width="250" height="150" />
          <Image src="/assets/community/blank.svg" alt="첨부한 사진" width="250" height="150" />
        </UploadImage>
        <LikeAndCommentCount
          like={1}
          comment={3}
          isClicked={liked}
          toggleLiked={toggleLiked}
        ></LikeAndCommentCount>
      </MainText>
      <Comments />
    </section>
  );
};

export default PostingDetail;
