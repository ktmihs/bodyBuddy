import { PostMetaInfo } from '@components/common/meta';
import styled from '@emotion/styled';
import Image from 'next/image';
import ButtonGroup from '../../common/buttongroup';

const WriteComment = styled.form`
  padding-left: 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  textarea {
    width: calc(100% - 50px);
    padding: 2% 5% 10% 2%;
    border-color: ${({ theme }) => theme.lineGray};
    resize: none;
  }
  button {
    width: 50px;
    height: 30px;
    margin: 10px 20px;
    background-color: ${({ theme }) => theme.purple};
    color: white;
    border: none;
    align-self: flex-end;
    cursor: pointer;
  }
`;

const CommenGroup = styled.div`
  padding-bottom: 20px;
  div[role~='none'] {
    margin-top: 5%;
    border-top: 1px solid ${({ theme }) => theme.lineGray};
  }

  h3 {
    margin-left: 20px;
    font-weight: bold;
    padding: 5% 0;
  }
`;

const ImageContainer = styled.div`
  margin-left: 20px;
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
    margin-left: 20px;
    line-height: 1.3;
    padding-bottom: 1%;
  }
  &[class~='myComment'] {
    background-color: ${({ theme }) => theme.lightPurple};
    padding-bottom: 20px;

    div:nth-of-type(n + 2) {
      width: 30%;
    }
    button {
      line-height: 1.6;
    }
  }
`;

const Comments = () => {
  return (
    <CommenGroup>
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
        <PostMetaInfo
          nickname="길에서 숨쉰 채 발견"
          time={new Date()}
          className="comment"
        ></PostMetaInfo>

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
        <PostMetaInfo nickname="밍망디" time={new Date()} className="comment"></PostMetaInfo>
        <ButtonGroup className="edit" />
        <WriteComment>
          <textarea placeholder="댓글을 작성하세요" />
        </WriteComment>
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
        <PostMetaInfo nickname="그만먹고싶닭" time={new Date()} className="comment"></PostMetaInfo>
        <p>한번 선물했더니 그 다음부턴 헬스장에서 마주칠 때마다 인사해 주더라고요!</p>
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
        <PostMetaInfo nickname="밍망디" time={new Date()} className="comment"></PostMetaInfo>
        <ButtonGroup className="comment" />
        <p>답글 남겨 주신 모든 분들 감사합니다!</p>
      </Commentor>
      <WriteComment>
        <textarea placeholder="댓글을 작성하세요" />
        <button>게시</button>
      </WriteComment>
    </CommenGroup>
  );
};

export default Comments;
