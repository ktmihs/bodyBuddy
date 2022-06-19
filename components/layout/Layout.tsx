import { Global } from '@emotion/react';
import { global } from '../../styles/globals';

import SEO from '@components/layout/SEO';
import styled from '@emotion/styled';

const StyledLayout = styled.div`
  width: 390px;
  margin: 0 auto;
  background-color: white;
  height: 100vh;
`;

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Global styles={global} />
      <SEO />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}
