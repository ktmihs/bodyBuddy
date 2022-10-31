import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Image from 'next/image';
import logo from 'public/assets/index/logo.svg';
import myPage from 'public/assets/index/mypage.svg';

import { TopButton } from '@components/common/button';
import DetailOptionModal from '@components/layout/index/DetailOption';
import OptionList from '@components/layout/index/Option';
import TrainerItem from '@components/layout/index/TrainerItem';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import NoContent from '@components/common/noContent';
import { getAllTrainerData } from '@api/firebase';
import { getCareer } from '@components/common/career';

const Home: NextPage = () => {
  // 로그인 여부
  const hasLogin = true;
  const name = '손흥민';
  let getOptions: {
    city: any;
    district: any;
    gender: any;
    field: any;
    purpose: any;
    price: any;
    career: any;
  };

  const [trainerList, setTrainerList] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hasLogin) document.location.href = '/onBoarding';

    const localOptions = sessionStorage?.getItem('options');
    getOptions = localOptions && JSON.parse(localOptions);

    const testTrainer = getAllTrainerData();
    testTrainer.then((test) => {
      const allTrainer = test?.map(([trainer, id]) => {
        if (typeof trainer === 'string') return;
        return {
          id: id,
          name: trainer.name,
          phoneNumber: trainer.phoneNumber,
          images: trainer.images,
          field: trainer.field,
          purpose: trainer.purpose,
          address: trainer.address,
          gender: trainer.gender,
          city: trainer.address.split(' ')[0],
          district: trainer.address.split(' ')[1],
          gymImage: trainer.gymImage,
          careers: trainer.careers.map((career: object) => JSON.stringify(career)),
          price: trainer.price,
          careerStartYear: trainer.careerStartYear,
          careerStartMonth: trainer.careerStartMonth,
          introduction: trainer.introduction,
          isOnline: trainer.inOnline,
        };
      });

      if (!allTrainer) return setTrainerList([]);
      if (getOptions) {
        setOptions(getOptions);
        const { city, district, gender, field, purpose, price, career } = getOptions;

        return setTrainerList(
          allTrainer.filter((trainer) => {
            const trainerCareer = getCareer(trainer?.careerStartYear, trainer?.careerStartMonth);
            if (city && !trainer?.city.includes(city.slice(0, 2))) return;
            if (district && trainer?.district !== district) return;
            if ((gender === 'man' && !trainer?.gender) || (gender === 'woman' && trainer?.gender))
              return;
            if (field.length && !field.some((f: string) => f === trainer?.field)) return;
            if (purpose.length && !purpose.some((f: string) => f === trainer?.purpose)) return;
            if (price[0] * 10000 > trainer?.price || price[1] * 10000 < trainer?.price) return;
            if (career[0] > trainerCareer || career[1] < trainerCareer) return;
            return trainer;
          })
        );
      } else return setTrainerList(allTrainer);
    });
    setLoading(true);
  }, []);

  const [options, setOptions] = useState({
    city: '',
    district: '',
    gender: '',
    field: [],
    purpose: [],
    price: [],
    career: [],
  });

  // 로그인한 대상이 트레이너 여부에 따라 마이페이지 링크 다르게 해주기
  const isTrainer = true;
  const id = '456789123';

  const MYPAGE_LINK = isTrainer ? `/trainer/${id}/edit` : `/mypage/${id}`;
  const [isModalState, setIsModalState] = useState<boolean>(false);

  const containerRef = useRef(null);

  const handleClick = () => setIsModalState((state) => !state);

  const Index = styled.div`
    background: #ececec;
    overflow-x: hidden;
    overflow-y: auto;
    height: 770px;

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  const Header = styled.header`
    padding: 55px 20px 0 20px;
  `;

  const IconWrapper = styled.section`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    span:last-of-type {
      cursor: pointer;
    }
  `;

  const IntroMessage = styled.div`
    padding-top: 40px;
    font-weight: 800;
    font-size: 26px;
    line-height: 36px;
  `;

  const UserName = styled.span`
    color: ${(props) => props.theme.purple};
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

  const TrainerWrapper = styled.div`
    height: 497px;
    background-color: #ffffff;
  `;

  const TrainerList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #ffffff;
    padding: 10px 0 10px 15px;
  `;

  const NoContentWrapper = styled.div`
    position: relative;
    width: 390px;
    height: 480px;
    background-color: #ffffff;
  `;

  return hasLogin && loading ? (
    <>
      {isModalState && (
        <DetailOptionModal
          options={options}
          handleSetOptions={setOptions}
          onChangeSetState={handleClick}
        />
      )}
      <Index ref={containerRef}>
        <Header>
          <h1 className="srOnly">index page</h1>
          <IconWrapper>
            <Image src={logo} title="바디버디" alt="바디버디 로고" width={25} height={30} />
            <Link href={MYPAGE_LINK}>
              <div>
                <Image src={myPage} title="마이페이지" alt="마이페이지" width={30} height={30} />
              </div>
            </Link>
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
          <TrainerWrapper>
            <TrainerList>
              {trainerList.length ? (
                trainerList.map((trainer: any) => (
                  <TrainerItem key={trainer.id} trainer={trainer} />
                ))
              ) : (
                <NoContentWrapper>
                  <NoContent title={'트레이너가 없습니다'} subTitle={'옵션을 다시 선택해주세요'} />
                </NoContentWrapper>
              )}
            </TrainerList>
          </TrainerWrapper>
        </Main>
        <TopButton containerRef={containerRef} />
      </Index>
    </>
  ) : (
    <></>
  );
};

export default Home;
