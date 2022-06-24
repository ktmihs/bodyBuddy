import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import SEO from '@components/layout/SEO';
import { global } from '@styles/globals';
import theme from '@styles/theme';

const StyledLayout = styled.div`
  width: 390px;
  margin: 0 auto;
  background-color: white;
  color: ${({ theme }) => theme.black};
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
`;

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <SEO />
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <StyledLayout>{children}</StyledLayout>
      </ThemeProvider>
    </>
  );
}
