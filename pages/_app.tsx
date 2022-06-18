import type { AppProps } from 'next/app';
import Layout from '@components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout children={<Component {...pageProps} />} />;
}

export default MyApp;
