import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      
      <Head>
      <meta name="description" content="proyecto Curso React | Nextjs | Consumo de API Strapi | GuitarLA Store "/>
      <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"/>
      <link rel="icon" href="../public/favicon.ico"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
    </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
