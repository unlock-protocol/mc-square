import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-cover		bg-auto	bg-clip-border bg-[url('/bg.jpg')] bg-repeat">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
