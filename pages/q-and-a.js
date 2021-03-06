import Head from 'next/head'
import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import Follow from '../components/website/home/follow'
import QandASearch from '../components/website/q-and-a/q-and-a-search'
import AskExpert from '../components/website/q-and-a/ask-an-expert'
import TryCrazy from '../components/website/q-and-a/try-crazy-for-study'
import BuySubscription from '../components/website/q-and-a/buy-subscription'
import HowItWorks from '../components/common/how-it-works'
import StudyHelp from '../components/common/study-help'
import About from '../components/website/textbook-solutions-manuals/about'
import WhyChooseOnline from '../components/website/textbook-solutions-manuals/why-choose-online'
import WhatStudentsThink from '../components/website/assignment-help/what-students-think'

export default function QandA() {
    return(
        <>
            <Head>
                <title>Crazy For Study</title>
            </Head>
            <Header/>
            <Navbar/>
            <QandASearch/>
            <AskExpert/>
            <TryCrazy/>
            <BuySubscription/>
            <About/>
            <HowItWorks/>
            <StudyHelp/>
            <WhyChooseOnline/>
            <WhatStudentsThink/>
            <Follow/>
            <Footer/>
        </>
    )
}