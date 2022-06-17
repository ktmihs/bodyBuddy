import type { NextPage } from 'next';
import styled from "@emotion/styled";

const Home: NextPage = () => {

  const Index = styled.div`
    background: #ECECEC;
  `;

  const Header = styled.header`
    padding-top: 55px;
  `;

  const Main = styled.main`
    background-color: #ECECEC;
  `;

  return (
    <Index>
      <Header>
      </Header>
      <Main>
      </Main>
    </Index>
  );
};

export default Home;
