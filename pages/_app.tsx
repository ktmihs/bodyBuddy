import type { AppProps } from 'next/app';
import Layout from '@components/layout/Layout';

declare global {
  interface Window {
    kakao: any;
    naver: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout children={<Component {...pageProps} />} />;
}

export default MyApp;
