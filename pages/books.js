import Head from 'next/head'
import Header from '../components/website/home/header'
import Footer from '../components/website/home/footer'

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
