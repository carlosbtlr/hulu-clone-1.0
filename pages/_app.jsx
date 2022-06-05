import '../styles/globals.css'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <div className="text-white">
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App
