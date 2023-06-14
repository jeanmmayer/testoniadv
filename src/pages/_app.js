import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="https://testoniadvogadas.com.br/icon.png"
        />

        <title>Testoni Advogadas - Consultoria Jurídica em Joinville</title>
        <meta
          name="title"
          content="Testoni Advogadas - Consultoria Jurídica em Joinville"
        />
        <meta
          name="description"
          content="Consultoria jurídica em Joinville. Serviço personalizado e eficaz."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.testoniadvogadas.com.br/"
        />
        <meta
          property="og:title"
          content="Testoni Advogadas - Consultoria Jurídica em Joinville"
        />
        <meta
          property="og:description"
          content="Consultoria jurídica em Joinville. Serviço personalizado e eficaz."
        />
        <meta
          property="og:image"
          content="https://www.testoniadvogadas.com.br/og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.testoniadvogadas.com.br/"
        />
        <meta
          property="twitter:title"
          content="Testoni Advogadas - Consultoria Jurídica em Joinville"
        />
        <meta
          property="twitter:description"
          content="Consultoria jurídica em Joinville. Serviço personalizado e eficaz."
        />
        <meta
          property="twitter:image"
          content="https://www.testoniadvogadas.com.br/og.png"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
