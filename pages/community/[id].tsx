import { TitleBar } from '@components/common/title';
import Image from 'next/image';
import type { NextPage } from 'next';
import styled from '@emotion/styled';

const UserProfile = styled.div`
  display: flex;
  padding: 0 0 3% 5%;
  gap: 10px;
`;

const PostMetaInfo = styled.div`
  display: flex;
  flex-grow: 2;
  gap: 5px;
  &[class~='post'] {
    flex-direction: column;
  }

  span {
    font-weight: bold;
  }
  time {
    font-size: 14px;
    color: ${({ theme }) => theme.gray};
  }
`;

const ButtonGroup = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  &[class~='post'] {
    button {
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.lineGray};
    }
  }

  &[class~='comment'] {
    button {
      color: ${({ theme }) => theme.purple};
      font-weight: bold;
      border: none;
    }
  }

  button {
    padding: 5%;
    align-self: flex-start;
    background-color: transparent;
    cursor: pointer;
  }
`;

const MainText = styled.div`
  padding-left: 5%;

  p {
    padding: 2% 0;
    &:nth-child(1) {
      font-weight: bold;
      font-size: 16px;
    }
    &:nth-child(2) {
      margin-bottom: 5%;
    }
  }
`;

const LikeCount = styled.div`
  display: flex;
  width: 20%;
  margin-bottom: 5%;
  * {
    flex-grow: 1;
  }
  button {
    height: 100%;
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
const Comments = styled.div`
  margin-bottom: 20px;
  div[role~='none'] {
    border-top: 1px solid ${({ theme }) => theme.lineGray};
  }

  h3 {
    margin-left: 5%;
    font-weight: bold;
    padding: 5% 0;
  }
`;

const ImageContainer = styled.div`
  margin-left: 5%;
`;

const Commentor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 10px;
  margin: 3% 0;

  div:nth-of-type(2) {
    align-items: center;
  }

  p {
    margin-left: 5%;
    line-height: 1.3;
    padding-bottom: 1%;
  }
  &[class~='myComment'] {
    background-color: ${({ theme }) => theme.lightPurple};
    div:nth-child(1) {
      margin-left: 8%;
    }
    div:nth-child(n + 2) {
      width: 30%;
    }
    p {
      margin-left: 8%;
    }
    button {
      line-height: 1.6;
    }
  }
`;

const PostingDetail: NextPage = () => {
  const left = { link: '/community', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
  return (
    <section>
      <h2 className="srOnly">게시물 보기</h2>
      <TitleBar left={left} centerTitle="PT 게시판" />
      <UserProfile>
        <Image src="/assets/common/profile.svg" alt="프로필" width="50" height="50" />
        <PostMetaInfo className="post">
          <span>밍망디</span>
          <time dateTime="2022-06-17T23:00">1분 전</time>
        </PostMetaInfo>
        <ButtonGroup className="post">
          <button>수정</button>
          <button>삭제</button>
        </ButtonGroup>
      </UserProfile>
      <MainText>
        <p>트쌤한테</p>
        <p>먹을 거 줘도 돼요? 요만한 건데</p>
        <UploadImage>
          <Image src="/assets/community/blank.svg" alt="첨부한 사진" width="250" height="150" />
          <Image src="/assets/community/blank.svg" alt="첨부한 사진" width="250" height="150" />
        </UploadImage>
        <LikeCount>
          <Image src="/assets/common/love-blank.svg" alt="좋아요" width={15} height={15}></Image>
          <span>1</span>
          <Image src="/assets/community/speech.svg" alt="댓글" width={15} height={15}></Image>
          <span>3</span>
        </LikeCount>
      </MainText>
      <Comments>
        <div role="none"></div>
        <h3>댓글</h3>
        <Commentor>
          <ImageContainer>
            <Image
              className="profile"
              src="/assets/common/profile.svg"
              alt="프로필"
              width="30"
              height="30"
            />
          </ImageContainer>

          <PostMetaInfo className="comment">
            <span>길에서 숨쉰 채 발견</span>
            <time dateTime="2022-06-17T23:00">1분 전</time>
          </PostMetaInfo>
          <p>염분기 없는 닭가슴살이면 ㄱㅊ</p>
        </Commentor>
        <Commentor className="myComment">
          <ImageContainer>
            <Image
              className="profile"
              src="/assets/common/profile.svg"
              alt="프로필"
              width="30"
              height="30"
            />
          </ImageContainer>

          <PostMetaInfo className="comment">
            <span>미묘하게 안맞아</span>
            <time dateTime="2022-06-17T23:00">방금</time>
          </PostMetaInfo>
          <ButtonGroup className="comment">
            <button>수정</button>
            <button>삭제</button>
          </ButtonGroup>
          <p>감사합니다!</p>
        </Commentor>
        <Commentor>
          <ImageContainer>
            <Image
              className="profile"
              src="/assets/common/profile.svg"
              alt="프로필"
              width="30"
              height="30"
            />
          </ImageContainer>
          <PostMetaInfo className="comment">
            <span>그만먹고싶닭</span>
            <time dateTime="2022-06-17T23:00">1분 전</time>
          </PostMetaInfo>
          <p>한번 선물했더니 그 다음부턴 헬스장에서 마주칠 때마다 인사해 주더라고요!</p>
        </Commentor>
      </Comments>
    </section>
  );
};

export default PostingDetail;
