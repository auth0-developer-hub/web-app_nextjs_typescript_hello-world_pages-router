import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Auth0 Next.js Sample</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
