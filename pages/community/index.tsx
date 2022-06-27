import { ItemGroup } from '@components/common/itemgroup';
import { TopButton } from '@components/common/button';
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from '@emotion/styled';
import { LikeAndCommentCount, PostMetaInfo } from '@components/common/meta';
import { useState } from 'react';

const CommunityPage = styled.section`
  &:nth-of-type(1) {
    padding-top: 15%;
  }
`;

const Post = styled.article`
  position: relative;
  height: 100px;
  padding: 3%;
  margin-left: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    width: calc(100% - 120px);
    height: 80%;
    &:visited,
    & {
      color: inherit;
    }

    p:nth-of-type(1) {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 5%;
    }
    p:nth-of-type(2) {
      display: -webkit-box;
      word-wrap: break-word;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  img {
    object-fit: cover;
  }
`;
const MetaContainer = styled.div`
  display: flex;
  margin-bottom: 0;

  div:nth-of-type(1) {
    width: 40%;
    align-self: flex-end;
  }
`;

const PostButton = styled.div`
  position: fixed;
  bottom: calc(77px + 5%);
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 40px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.lineGray};
  border-radius: 30px;

  a {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    margin-left: 10px;
    padding: 3%;
    width: 100%;
    height: 100%;
    span {
      line-height: 2.4;
      /* background-color: pink; */
    }
    img {
      /* background-color: red; */
    }
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Community: NextPage = () => {
  const [selectedItem, changeSelectedItem] = useState('0');

  return (
    <CommunityPage>
      <h2 className="srOnly">커뮤니티 게시판</h2>
      <ItemGroup changeSelectedItem={changeSelectedItem} />
      <div>
        <Post>
          <a href="community/1">
            <p>트레이너가 하체만 시켜요</p>
            <p>죽겠어요 원래 이런가요... 덕분에 저는 다리를 잃었고</p>
            <ImageContainer>
              <Image src="/assets/community/blank.svg" alt="첨부한 사진" width="100" height="80" />
            </ImageContainer>
          </a>
          <MetaContainer>
            <PostMetaInfo nickname="울면근손실" time={new Date()} className="list" />
            <LikeAndCommentCount like={1} comment={3} isClickable={false} isClicked={true} />
          </MetaContainer>
        </Post>
        <Post>
          <a href="community/2">
            <p>수영하다 기절한 SSUL</p>
            <p>ㅠㅠ</p>
          </a>
          <MetaContainer>
            <PostMetaInfo nickname="밍망디" time={new Date()} className="list" />
            <LikeAndCommentCount like={1} comment={3} isClickable={false} isClicked={false} />
          </MetaContainer>
        </Post>
        <Post>
          <a href="community/3">
            <p>PT 이용권 10회 팝니다</p>
            <p>사정상 양도합니다</p>
            <ImageContainer>
              <Image src="/assets/community/blank.svg" alt="첨부한 사진" width="100" height="80" />
            </ImageContainer>
          </a>
          <MetaContainer>
            <PostMetaInfo nickname="육회랑연어" time={new Date()} className="list" />
            <LikeAndCommentCount like={0} comment={0} isClickable={false} isClicked={false} />
          </MetaContainer>
        </Post>
        <Post>
          <a href="community/4">
            <p>수영하다 기절한 SSUL</p>
            <p>ㅠㅠ</p>
          </a>
          <MetaContainer>
            <PostMetaInfo nickname="밍망디" time={new Date()} className="list" />
            <LikeAndCommentCount like={1} comment={3} isClickable={false} isClicked={true} />
          </MetaContainer>
        </Post>
        <Post>
          <a href="community/5">
            <p>트레이너가 이상해요</p>
            <p>
              회원들이 힘들어할 때마다 자기는 행복하다면서 ㄷㄷ... 매일 보고 싶대요. 트레이너 자격에
              남의 고통 즐기기 같은 게 있는 건가요? ㅡㅡ;
            </p>
          </a>
          <MetaContainer>
            <PostMetaInfo nickname="삐약이" time={new Date()} className="list" />
            <LikeAndCommentCount like={5} comment={3} isClickable={false} isClicked={true} />
          </MetaContainer>
        </Post>
        <Post>
          <a href="community/6">
            <p>치팅데이 메뉴 추천받아요</p>
            <p>마구 먹어야지~!</p>
          </a>
          <MetaContainer>
            <PostMetaInfo nickname="돼지KIN" time={new Date()} className="list" />
            <LikeAndCommentCount like={0} comment={5} isClickable={false} isClicked={false} />
          </MetaContainer>
        </Post>
        <Post>
          <a href="community/7">
            <p>데드리프트..봐주세요</p>
            <p>데드리프트 할 때마다 허리가 아픈데 이게 맞는지 모르겠어요 ㅜㅜ</p>
            <ImageContainer>
              <Image src="/assets/community/blank.svg" alt="첨부한 사진" width="100" height="80" />
            </ImageContainer>
          </a>
          <MetaContainer>
            <PostMetaInfo nickname="먹고싶당" time={new Date()} className="list" />
            <LikeAndCommentCount like={0} comment={3} isClickable={false} isClicked={false} />
          </MetaContainer>
        </Post>
        <Post>
          <a href="community/8">
            <p>상여자특:비와도 운동감</p>
            <p>저는 하여자입니다</p>
          </a>
          <MetaContainer>
            <PostMetaInfo nickname="맘스터치" time={new Date()} className="list" />
            <LikeAndCommentCount like={4} comment={1} isClickable={false} isClicked={false} />
          </MetaContainer>
        </Post>
      </div>
      <PostButton>
        <a href="community/posting">
          <Image src="/assets/community/pencil.svg" alt="글쓰기" width={15} height={15}></Image>
          <span>글쓰기</span>
        </a>
      </PostButton>
      <TopButton />
    </CommunityPage>
  );
};

export default Community;
