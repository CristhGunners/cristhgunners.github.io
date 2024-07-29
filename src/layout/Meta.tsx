import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  post?: {
    image: string;
    date: string;
    modified_date: string;
  };
  refresh?: boolean;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <link rel="manifest" href={`${router.basePath}/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${router.basePath}/safari-pinned-tab.svg`}
          color="#0a0a0a"
        />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="theme-color" content="#0a0a0a" />
        <title>{`${props.title} - ${AppConfig.site_name}`}</title>
        {props.refresh ? (
          <meta http-equiv="refresh" content={`0; URL=${AppConfig.url}`} />
        ) : (
          ''
        )}
      </Head>
    </>
  );
};

export { Meta };
