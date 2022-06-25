import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Image from 'next/image';
import logo from 'public/assets/index/logo.svg';
import myPage from 'public/assets/index/mypage.svg';

import DetailOptionModal from '@components/layout/index/DetailOption';
import OptionList from '@components/layout/index/Option';
import TrainerItem from '@components/layout/index/TrainerItem';
import { useState } from 'react';

const Home: NextPage = () => {
  // 로그인 여부를 확인
  // 로그인이 되어 있다면, 현재 로그인 된 유저의 정보를 가져옴
  // 로그인이 되어 있지 않다면, 온보딩 페이지를 보여주기

  const name = '손흥민';
  const options = [
    '서울시 강남구',
    '서울시 강남구',
    '서울시 강남구',
    '여성',
    '요가',
    'PT',
    '경력 신입 ~ 5년 이상',
  ];
  const trainerList = [
    {
      id: 456789123,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789124,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789125,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: true,
    },
    {
      id: 456789126,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789127,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789128,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789129,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789130,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
  ];

  const [isModalState, setIsModalState] = useState<boolean>(false);

  const handleClick = () => {
    setIsModalState((state) => !state);
    console.log(isModalState);
  };

  const Index = styled.div`
    background: #ececec;
  `;

  const Header = styled.header`
    padding: 55px 20px 0 20px;
  `;

  const IconWrapper = styled.section`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  `;

  const IntroMessage = styled.div`
    padding-top: 40px;
    font-weight: 800;
    font-size: 26px;
    line-height: 36px;
  `;

  const UserName = styled.span`
    color: #858ff1;
  `;

  const Main = styled.main`
    background-color: #ececec;
  `;

  const Option = styled.article`
    position: sticky;
    top: 0px;
    background-color: #ececec;
    padding-top: 20px;
    z-index: 100;
  `;

  const OptionWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0px 15px;
    align-items: center;
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
    background: #ffffff;
    border-radius: 30px 30px 0 0;
  `;

  const DetailOption = styled.section`
    margin-top: 10px;
    cursor: pointer;

    span {
      background-color: #fff;
      display: inline-block;
      padding-right: 4px;
    }

    span::after {
      content: url(/assets/index/addoption.svg);
      display: inline-block;
      width: 13px;
      height: 13px;
      margin-left: 4px;
      vertical-align: middle;
    }
  `;

  const TrainerList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: space-between;
    background: #ffffff;
    padding: 10px 10px;
  `;

  return (
    <>
      {isModalState && (
        <DetailOptionModal isModalState={isModalState} onChangeSetState={handleClick} />
      )}
      <Index>
        <Header>
          <h1 className="srOnly">index page</h1>
          <IconWrapper>
            <Image src={logo} title="바디버디" alt="바디버디 로고" width={25} height={30} />
            <Image src={myPage} title="마이페이지" alt="마이페이지" width={20} height={20} />
          </IconWrapper>
          <IntroMessage>
            <p>
              <UserName>{name}</UserName>님
            </p>
            <p>반갑습니다.</p>
          </IntroMessage>
        </Header>
        <Main>
          <Option>
            <OptionWrapper>
              <OptionList options={options} />
              <DetailOption onClick={handleClick}>
                <span>상세 옵션</span>
              </DetailOption>
            </OptionWrapper>
          </Option>
          <TrainerList>
            {trainerList.map((trainer: any) => (
              <TrainerItem key={trainer.id} trainer={trainer} />
            ))}
          </TrainerList>
        </Main>
      </Index>
    </>
  );
};

export default Home;
