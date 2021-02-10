import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import { DatePicker, Button } from 'antd';
import 'antd/dist/antd.css';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to connect-smart-2!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to connect-smart-2!</h1>
        </header>
        <main>
          <div style={{ marginTop: 50 }}>
            <DatePicker></DatePicker>
            <Button>Search</Button>
          </div>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
