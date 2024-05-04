import { Html, Head, Main, NextScript } from "next/document";
import TopNav from "./top-nav";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="https://davecutter.com/portfolio/public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://davecutter.com/portfolio/public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://davecutter.com/portfolio/public/favicon-16x16.png" />
      </Head>
      <body>
        <TopNav />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
