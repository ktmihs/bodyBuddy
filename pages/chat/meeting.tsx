import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.article`
  padding-top: 20px;

  .title {
    height: 31px;
    position: relative;
    padding-bottom: 28px;
    border-bottom: 1px solid ${({ theme }) => theme.lineGray};

    button {
      position: absolute;
      left: 42px;
    }

    h2 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(50%);
      font-size: 18px;
      font-weight: 700;
    }
  }

  .meeting-time {
    padding: 15px 25px;
    border-bottom: 1px solid ${({ theme }) => theme.lineGray};

    div {
      display: flex;
      justify-content: space-between;

      span {
        font-size: 16px;
        font-weight: 700;
        color: ${({ theme }) => theme.purple};
      }
    }

    time {
      display: inline-block;
      margin: 10px 0;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

const Meeting = () => {
  const router = useRouter();

  return (
    <Container>
      <section className="title">
        <button onClick={() => router.back()}>
          <Image
            src={'/assets/common/arrow-left-purple.svg'}
            alt="뒤로가기"
            width={30}
            height={30}
          />
        </button>
        <h2>약속 잡기</h2>
      </section>
      <section className="meeting-time">
        <div>
          <span>약속시간</span>
          <button>
            <Image src={'/assets/common/arrow-bottom.svg'} alt="펼치기" width={19} height={23} />
          </button>
        </div>
        <time>2022.06.15 오후 3:30</time>
      </section>
    </Container>
  );
};

export default Meeting;
