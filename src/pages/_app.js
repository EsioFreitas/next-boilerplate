import Head from 'next/head';

import GlobalStyles from 'assets/styles/global';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
