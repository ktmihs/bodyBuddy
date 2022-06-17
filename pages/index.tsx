import type { NextPage } from 'next';
import styled from "@emotion/styled";
import Image from 'next/image';
import logo from '@assets/logo.svg';
import myPage from '@assets/mypage.svg';

const Home: NextPage = () => {
  const name = '손흥민';

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
        
      </Main>
    </Index>
  );
};

export default Home;
