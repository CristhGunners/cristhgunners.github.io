import React, { useEffect } from 'react';

import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/prism-a11y-dark.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark';
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
