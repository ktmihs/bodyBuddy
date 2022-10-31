import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.section`
  display: flex;
  margin-bottom: 15px;
  padding-top: 21px;
  align-items: start;
`;

const Content = styled.section`
  display: flex;
  margin-left: 30px;

  img {
    width: 77px;
    height: 77px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 6px;

    span {
      &.type {
        margin-right: auto;
        margin-bottom: 10px;
        padding: 3px 10px;
        border-radius: 10px;
        color: ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme.purple};
        font-size: 10px;
      }

      &.name {
        b {
          font-weight: 700;
        }
        font-size: 13px;
      }
    }
  }
`;

const TrainerInfo = () => {
  const router = useRouter();

  return (
    <Container>
      <button onClick={() => router.back()}>
        <Image src={'/assets/common/arrow-left-purple.svg'} alt="뒤로가기" width={30} height={30} />
      </button>
      <Content>
        <img src="/assets/common/trainer.jpg" alt={'트레이너'} />
        <div>
          <span className="type">다이어트</span>
          <span className="name">
            <b>PT</b> | 최세민트레이너
          </span>
        </div>
      </Content>
    </Container>
  );
};

export default TrainerInfo;
