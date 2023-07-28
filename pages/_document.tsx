import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="shortcut icon mask-icon"
          href="https://cdn.auth0.com/website/auth0_favicon.svg"
          color="#000000"
        />
        <link
          rel="shortcut icon"
          href="https://cdn.auth0.com/website/new-homepage/dark-favicon.png"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Learn how to add user authentication to Next.js web apps easily."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
