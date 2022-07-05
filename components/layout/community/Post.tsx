import styled from '@emotion/styled';
import Image from 'next/image';
import { CommentCount, PostMetaInfo } from '@components/common/meta';
import { TopButton } from '@components/common/button';
import { useRef } from 'react';
import Link from 'next/link';

interface PostListProps {
  selectedItem: string;
}

const PostListContainer = styled.div`
  height: 800px;
  overflow: auto;
`;
const Post = styled.article`
  position: relative;
  height: 100px;
  padding: 3%;
  margin-left: 10px;
  margin-top: 5%;
  display: flex;
  gap: 10px;
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
    p {
      font-size: 16px;
    }

    p:nth-of-type(1) {
      font-weight: bold;
      margin-bottom: 5%;
    }
    p:nth-of-type(2) {
      line-height: 1.1;
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
  right: 20px;
  top: 10px;
  img {
    object-fit: cover;
  }
`;
const MetaContainer = styled.div`
  display: flex;
  margin-bottom: 0;

  div:nth-of-type(1) {
    width: 50%;
    align-self: flex-end;
  }
`;

const PostList = ({ selectedItem }: PostListProps) => {
  const containerRef = useRef(null);
  const posts = [
    {
      content: '야무지게 먹어야징',
      creationDate: '2022-07-03T05:41:10.792Z',
      fieldId: '0',
      images: [],
      title: '치팅메뉴 추천받아요!',
      totalComments: 2,
      userId: '울면근손실',
    },
    {
      content:
        '회원들이 힘들어할 때마다 자기는 행복하다면서 ㄷㄷ... 매일 보고 싶대요. 트레이너 자격에 남의 고통 즐기기 같은 게 있는 건가요? ㅡㅡ',
      creationDate: '2022-07-03T05:38:10.792Z',
      fieldId: '0',
      images: ['/assets/community/blank.svg'],
      title: '트레이너가 이상해요',
      totalComments: 5,
      userId: '그만먹고싶닭',
    },
    {
      content: '정상인가요?ㅜㅜ',
      creationDate: '2022-07-03T04:00:10.792Z',
      fieldId: '0',
      images: ['/assets/community/blank.svg'],
      title: '데드리프트 할 때 허리가 아파요',
      totalComments: 3,
      userId: '작심삼일',
    },
    {
      content: '사정상 양도합니다',
      creationDate: '2022-07-02T15:00:10.792Z',
      fieldId: '1',
      images: ['/assets/community/blank.svg'],
      title: 'PT 이용권 10회 팝니다',
      totalComments: 0,
      userId: '당근당근',
    },
    {
      content:
        ' 회원들이 힘들어할 때마다 자기는 행복하다면서 ㄷㄷ... 매일 보고 싶대요. 트레이너 자격에 남의 고통 즐기기 같은 게 있는 건가요? ㅡㅡ',
      creationDate: '2022-07-01T12:00:10.792Z',
      fieldId: '1',
      images: ['/assets/community/blank.svg'],
      title: '트레이너가 이상해요',
      totalComments: 5,
      userId: '밍망디',
    },

    {
      content: '사정상 양도합니다',
      creationDate: '2022-06-30T06:30:10.792Z',
      fieldId: '1',
      images: ['/assets/community/blank.svg'],
      title: 'PT 이용권 10회 팝니다',
      totalComments: 0,
      userId: '울면근손실',
    },
    {
      content: 'ㅠㅠ',
      creationDate: '2022-06-27T13:30:10.792Z',
      fieldId: '1',
      images: [],
      title: ' 수영하다 기절한 SSUL',
      totalComments: 3,
      userId: '밍망디',
    },
    {
      content: '죽겠어요 원래 이런가요... 덕분에 저는 다리를 잃었고',
      creationDate: '2022-06-26T06:30:10.792Z',
      fieldId: '1',
      images: [],
      title: '트레이너가 하체만 시켜요',
      totalComments: 3,
      userId: '밍망디',
    },
    {
      content: '요만한건데',
      creationDate: '2022-06-14T06:30:10.792Z',
      fieldId: '0',
      images: ['/assets/community/blank.svg'],
      title: '트쌤한테 먹을거 줘도 돼?',
      totalComments: 4,
      userId: '밍망디',
    },
  ];
  return (
    <PostListContainer ref={containerRef}>
      {posts.map((post, index) => (
        <Post key={index}>
          <Link
            href={{
              pathname: `/community/${index}`,
              query: { post: JSON.stringify(post) },
            }}
            as={`/community/${index}`}
          >
            <a>
              <p>{post.title}</p>
              <p>{post.content}</p>

              {post.images.length ? (
                <ImageContainer>
                  <Image src={post.images[0]} alt="첨부한 사진" width="100" height="80" />
                </ImageContainer>
              ) : (
                ''
              )}
            </a>
          </Link>

          <MetaContainer>
            <PostMetaInfo
              nickname={post.userId}
              dateTime={new Date(post.creationDate)}
              className="list"
            />
            <CommentCount comment={post.totalComments} />
          </MetaContainer>
        </Post>
      ))}
      <TopButton containerRef={containerRef} />
    </PostListContainer>
  );
};

export default PostList;
