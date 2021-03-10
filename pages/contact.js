import Head from 'next/head'
import Header from '../components/website/home/header'
import Footer from '../components/website/home/footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Crazy For Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <h1>CFS contact</h1>
      <Footer/>
    </>
  )
}
