import styled from '@emotion/styled';
import Image from 'next/image';
import mypage from 'public/assets/index/mypage.svg';

const Trainer = ({ trainer }: any) => {
  const TrainerItem = styled.li`
    width: 172px;
    height: 246px;
    margin-bottom: 8px;
    background: #f3f2f2;
    border-radius: 10px;
    position: relative;
  `;

  const ImageWrapper = styled.div`
    background-color: transparent;
    position: absolute;
    top: 30px;
    left: 30px;

    img {
      border-radius: 50%;
    }
  `;

  const TrainerItemTop = styled.div`
    box-sizing: border-box;
    width: 172px;
    height: 103px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    span {
      display: inline-block;
      font-style: normal;
      line-height: 15px;
      height: 14px;
    }

    span:first-of-type::before {
      content: '★';
      margin-right: 4px;
    }

    span:first-of-type {
      font-weight: 700;
      font-size: 10px;
      width: 37px;
      background: #ffd600;
      border-radius: 2px;
      text-align: center;
    }

    span:last-of-type {
      background-color: transparent;
      font-weight: 400;
      font-size: 12px;
    }
  `;

  const TrainerItemBottom = styled.div`
    box-sizing: border-box;
    border-radius: 10px;
    background: linear-gradient(
      180deg,
      rgba(112, 180, 224, 0.88) 0%,
      rgba(133, 143, 241, 0.88) 100%
    );
    width: 172px;
    height: 143px;
    padding: 42px 10px 0px 10px;
    text-align: center;
  `;

  const TrainerPurpose = styled.div`
    margin: 2px auto;
    border-radius: 10px;
    width: 55px;
    background: #ffffff;
    color: #858ff1;
    line-height: 15px;
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    text-align: center;
  `;

  const TrainerFieldContainer = styled.span`
    color: #fff;
    background-color: transparent;
    font-style: normal;
    line-height: 14px;

    span:first-of-type {
      background-color: transparent;
      font-weight: 800;
      font-size: 12px;
    }
    span:first-of-type::after {
      content: '|';
      margin: 0 6px;
    }

    span:last-of-type::before {
      content: url(/assets/index/careericon.svg);
      display: inline-block;
      width: 8px;
      line-height: 10px;
      margin-right: 4px;
      vertical-align: middle;
    }

    span:last-of-type {
      background-color: transparent;
      font-weight: 400;
      font-size: 10px;
    }
  `;

  const TrainerIntroduction = styled.div`
    box-sizing: border-box;
    background-color: transparent;
    width: 140px;
    height: 30px;
    margin: 10px auto 0 auto;

    p {
      display: inline-block;
      color: #fff;
      background-color: transparent;
      font-size: 10px;
      line-height: 14px;
    }
  `;

  const TrainerPositionAndPrice = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    span {
      background-color: transparent;
    }

    span:first-of-type::before {
      content: url(/assets/index/locationpin.svg);
      display: inline-block;
      height: 14px;
      width: 14px;
      vertical-align: middle;
    }

    span:first-of-type {
      color: #fff;
      font-size: 8px;
    }

    span:last-of-type::before {
      content: '₩';
      margin-right: 2px;
    }

    span:last-of-type {
      color: #ffe660;
      font-size: 10px;
      font-weight: 800;
    }
  `;

  return (
    <TrainerItem key={trainer.id}>
      <ImageWrapper>
        <Image src={mypage} alt={trainer.name} title={trainer.name} width={112} height={112} />
      </ImageWrapper>
      <TrainerItemTop>
        <span>5.0</span>
        <span>{trainer.name}</span>
      </TrainerItemTop>
      <TrainerItemBottom>
        <TrainerPurpose>다이어트</TrainerPurpose>
        <TrainerFieldContainer>
          <span>PT</span>
          <span>경력 {trainer.totalCareer}년</span>
        </TrainerFieldContainer>
        <TrainerIntroduction>
          <p>{trainer.introduction}</p>
        </TrainerIntroduction>
        <TrainerPositionAndPrice>
          <span>
            {trainer.city} {trainer.district}
          </span>
          <span>{trainer.price.toLocaleString()}</span>
        </TrainerPositionAndPrice>
      </TrainerItemBottom>
    </TrainerItem>
  );
};

export default Trainer;
