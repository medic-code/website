import type { AppProps } from 'next/app';
import GlobalStyles from '../design_system/lib/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
