import { Global } from '@emotion/react';
import { global } from '../styles/globals';

import SEO from '@components/SEO';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Global styles={global} />
      <SEO />
      <div>{children}</div>
    </>
  );
}
