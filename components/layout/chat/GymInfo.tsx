import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  padding-bottom: 11.5px;
  border-bottom: 1px solid ${({ theme }) => theme.lineGray};
  margin-bottom: 11.5px;

  img {
    border-radius: 10px;
  }
`;

const Content = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 10px;
  margin-left: 10px;

  .bold {
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.realBlack};
  }

  .meeting > button {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.purple};
    padding: 2px;
    border-radius: 3px;
    border: none;
    font-size: 10px;
  }
`;

interface GymInfoProps {
  img: string;
  name: string;
  address: string;
}

const GymInfo = ({ img, name, address }: GymInfoProps) => {
  return (
    <Container>
      <Image src="/assets/common/trainer.jpg" alt={name} width={50} height={50} />
      <Content>
        <span className="bold">{name}</span>
        <address>{address}</address>
        <span className="meeting">
          📅 <button>약속잡기</button>
        </span>
      </Content>
    </Container>
  );
};

export default GymInfo;
