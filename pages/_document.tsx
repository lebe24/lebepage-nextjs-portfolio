import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Megrim&family=Pompiere&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name='theme-color' content='#040D20'/>
        
      </Head>
      <body className='bg-[#040D20] text-white '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}