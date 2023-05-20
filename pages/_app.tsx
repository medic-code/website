import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import { NextSeo } from 'next-seo';

import GlobalStyles from '../design_system/lib/index';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouterChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouterChange);
    };
  }, [router.events]);
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      )}

      <GlobalStyles />
      <NextSeo
        title="Aaron Smith Blog"
        defaultTitle="Aaron Smith Blog"
        description="A full stack developer and Doctor who is passionate creating products"
        canonical="https://www.aaron-smith.dev"
        twitter={{
          handle: '@aaronsmithdev',
          site: '@aaronsmithdev',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'google-site-verification',
            content: 'RuCNrntZGHodQN8JdUDZhCydqJ-paSyP8S4cW_Tq6eo',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
