import Head from 'next/head'
import Header from '../components/website/header'
import Navbar from '../components/website/navbar'
import Footer from '../components/website/footer'
import Banner from '../components/website/banner'
import ContentCovered from '../components/website/content-covered'
import FindTbs from '../components/website/find-tbs'
import AssignmentHelp from '../components/website/get-assignment-help'
import AskExpert from '../components/website/ask-an-expert'
import BuySubscription from '../components/website/buy-subscription'
import SubjectsWeCover from '../components/website/subjects-we-cover'
import PopularTbs from '../components/website/popular-tbs'
import SubscribeHere from '../components/website/subscribe-here'
import TutorCollege from '../components/website/tutor-college'
import Follow from '../components/website/follow'

export default function Home() {
  return (
    <>
      <Head>
        <title>Crazy For Study</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
        {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> */}
      </Head>
      <Header/>
      <Navbar/>
      <Banner/>
      <ContentCovered/>
      <FindTbs/>
      <AssignmentHelp/>
      <AskExpert/>
      <BuySubscription/>
      <SubjectsWeCover/>
      <PopularTbs/>
      <SubscribeHere/>
      <TutorCollege/>
      <Follow/>
      <Footer/>
    </>
  )
}
