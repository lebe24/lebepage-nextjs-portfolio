import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Megrim&family=Pompiere&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name='theme-color' content='#040D20'/>
        
      </Head>
      <body className='bg-[#040D20] text-white '>
        <Main />
        <NextScript />
      </body>
      <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </Html>
  )
}