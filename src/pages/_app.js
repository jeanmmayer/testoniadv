import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg">
      <Head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
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
