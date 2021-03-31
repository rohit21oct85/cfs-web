import Head from 'next/head'
import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import SubmitForm from '../../components/website/assignment-help-2/submit-form'
import HowItWorks from '../../components/website/assignment-help-2/how-it-works'

export default function OnlineAssignmentHelp2() {
  return (
    <>
        <Head>
            <title>Crazy For Study</title>
        </Head>
        <Header/>
        <Navbar/>
        <SubmitForm/>
        <HowItWorks/>
        <Footer/>
    </>
  )
}
