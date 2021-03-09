import Head from 'next/head'
import Header from '../components/website/header'
import Footer from '../components/website/footer'

export default function Books() {
  return (
    <>
      <Head>
        <title>Crazy For Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <h1>CFS books</h1>
      <Footer/>
    </>
  )
}
