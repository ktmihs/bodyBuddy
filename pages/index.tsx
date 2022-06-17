import type { NextPage } from 'next';
import styled from "@emotion/styled";
import Image from 'next/image';
import logo from '@assets/logo.svg';
import myPage from '@assets/mypage.svg';
import addOption from '@assets/addoption.svg';

import OptionList from '@components/Option';

const Home: NextPage = () => {
  const name = '손흥민';
  const options = ['서울시 강남구','서울시 강남구','서울시 강남구', '여성', '요가', 'PT', '경력 신입 ~ 5년 이상'];

  const Index = styled.div`
    background: #ECECEC;
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
    color: #858FF1;
  `;

  const Main = styled.main`
    /* background-color: #ECECEC; */
  `;

  const Option = styled.article`
    position: sticky;
    top: 0px;
    background-color: #ECECEC;
    padding-top: 20px;
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
    background: #FFFFFF;
    border-radius: 30px 30px 0 0;
  `;

  const DetailOption = styled.section`
    margin-top: 10px;
    span{
      display: inline-block;
      padding-right: 4px;
      vertical-align:middle;
    }
  `;

  return (
    <Index>
      <Header>
        <h1 className="srOnly">index page</h1>
        <IconWrapper>
          <Image src={logo} title="바디버디" alt="바디버디 로고" width={25} height={30} />
          <Image src={myPage} title="마이페이지" alt="마이페이지" width={20} height={20} />
        </IconWrapper>
        <IntroMessage>
          <p><UserName>{name}</UserName>님</p>
          <p>반갑습니다.</p>
        </IntroMessage>
      </Header>
      <Main>
        <Option>
          <OptionWrapper>
            <OptionList options={options} />
            <DetailOption>
              <span>상세 옵션</span>
              <span>
                <Image src={addOption} title="상세 옵션" alt="상세 옵션"/>
              </span>
            </DetailOption>
          </OptionWrapper>
        </Option>
        
      </Main>
    </Index>
  );
};

export default Home;
