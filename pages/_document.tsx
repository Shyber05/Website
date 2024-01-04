import { Html, Head, Main, NextScript } from 'next/document'
//NOTE
//side note on the facivon, needs to be in the public folder and called "icon" to render

export default function Document() {
  const meta = {
    title: 'Personal Website',
    description: 'Personal portfolio/blog website',
    image: '/favicon.png',
  }
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="icon" href="/icon.ico" />                  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
