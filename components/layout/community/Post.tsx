import styled from '@emotion/styled';
import Image from 'next/image';
import { CommentCount, PostMetaInfo } from '@components/common/meta';

interface PostListProps {
  selectedItem: string;
}

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
  const posts = [
    {
      content: '요만한건데',
      creationDate: '2021-06-14T06:30:10.792Z',
      fieldId: 'QrcJU3p8uWBbL0J6mjNL',
      image: '/assets/community/blank.svg',
      title: '트쌤한테 먹을거 줘도 돼?',
      totalComments: 5,
      totalLiked: 25,
      userId: 'ReBwBbk6bhMIcJWPmJCU',
    },
    {
      content: '죽겠어요 원래 이런가요... 덕분에 저는 다리를 잃었고',
      creationDate: '2021-06-21T06:30:10.792Z',
      fieldId: 'QrcJU3p8uWBbL0J6mjNL',
      image: '',
      title: '트레이너가 하체만 시켜요',
      totalComments: 3,
      totalLiked: 1,
      userId: 'ReBwBbk6bhMIcJWPmJCU',
    },
    {
      content: 'ㅠㅠ',
      creationDate: '2021-06-27T13:30:10.792Z',
      fieldId: 'QrcJU3p8uWBbL0J6mjNL',
      image: '',
      title: ' 수영하다 기절한 SSUL',
      totalComments: 3,
      totalLiked: 0,
      userId: 'ReBwBbk6bhMIcJWPmJCU',
    },
    {
      content: '사정상 양도합니다',
      creationDate: '2021-06-30T06:30:10.792Z',
      fieldId: 'QrcJU3p8uWBbL0J6mjNL',
      image: '/assets/community/blank.svg',
      title: 'PT 이용권 10회 팝니다',
      totalComments: 0,
      totalLiked: 0,
      userId: 'ReBwBbk6bhMIcJWPmJCU',
    },
    {
      content:
        ' 회원들이 힘들어할 때마다 자기는 행복하다면서 ㄷㄷ... 매일 보고 싶대요. 트레이너 자격에 남의 고통 즐기기 같은 게 있는 건가요? ㅡㅡ',
      creationDate: '2021-07-01T12:00:10.792Z',
      fieldId: 'QrcJU3p8uWBbL0J6mjNL',
      image: '/assets/community/blank.svg',
      title: '트레이너가 이상해요',
      totalComments: 5,
      totalLiked: 8,
      userId: 'ReBwBbk6bhMIcJWPmJCU',
    },
    {
      content: '사정상 양도합니다',
      creationDate: '2021-07-01T18:00:10.792Z',
      fieldId: 'QrcJU3p8uWBbL0J6mjNL',
      image: '/assets/community/blank.svg',
      title: 'PT 이용권 10회 팝니다',
      totalComments: 0,
      totalLiked: 0,
      userId: 'ReBwBbk6bhMIcJWPmJCU',
    },

    {
      content:
        ' 회원들이 힘들어할 때마다 자기는 행복하다면서 ㄷㄷ... 매일 보고 싶대요. 트레이너 자격에 남의 고통 즐기기 같은 게 있는 건가요? ㅡㅡ',
      creationDate: '2021-07-02T15:00:10.792Z',
      fieldId: 'QrcJU3p8uWBbL0J6mjNL',
      image: '/assets/community/blank.svg',
      title: '트레이너가 이상해요',
      totalComments: 5,
      totalLiked: 8,
      userId: 'ReBwBbk6bhMIcJWPmJCU',
    },
    {
      content: '야무지게 먹어야징',
      creationDate: '2021-07-02T16:00:10.792Z',
      fieldId: 'QrcJU3p8uWBbL0J6mjNL',
      image: '',
      title: '치팅메뉴 추천받아요!',
      totalComments: 2,
      totalLiked: 0,
      userId: 'ReBwBbk6bhMIcJWPmJCU',
    },
    {
      content:
        ' 회원들이 힘들어할 때마다 자기는 행복하다면서 ㄷㄷ... 매일 보고 싶대요. 트레이너 자격에 남의 고통 즐기기 같은 게 있는 건가요? ㅡㅡ',
      creationDate: '2021-07-02T16:00:10.792Z',
      fieldId: 'QrcJU3p8uWBbL0J6mjNL',
      image: '/assets/community/blank.svg',
      title: '트레이너가 이상해요',
      totalComments: 5,
      totalLiked: 8,
      userId: 'ReBwBbk6bhMIcJWPmJCU',
    },
  ];
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index}>
          <a href="community/1">
            <p>{post.title}</p>
            <p>{post.content}</p>

            {post.image ? (
              <ImageContainer>
                <Image src={post.image} alt="첨부한 사진" width="100" height="80" />
              </ImageContainer>
            ) : (
              ''
            )}
          </a>
          <MetaContainer>
            <PostMetaInfo
              nickname="울면근손실"
              dateTime={new Date(post.creationDate)}
              className="list"
            />
            <CommentCount comment={post.totalComments} />
          </MetaContainer>
        </Post>
      ))}
    </div>
  );
};

export default PostList;
