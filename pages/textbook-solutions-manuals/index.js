import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import Follow from '../../components/website/home/follow'
import QandASearch from '../../components/website/q-and-a/q-and-a-search'
import BuySubscription from '../../components/website/q-and-a/buy-subscription'
import HowItWorks from '../../components/common/how-it-works'
import StudyHelp from '../../components/common/study-help'
import WhatStudentsThink from "../../components/website/assignment-help/what-students-think";
import WhyChooseOnline from "../../components/website/textbook-solutions-manuals/why-choose-online";
import About from "../../components/website/textbook-solutions-manuals/about";
import AskAnExpert from "../../components/website/textbook-solutions-manuals/ask-an-expert";
import CollegeTextbooks from "../../components/website/textbook-solutions-manuals/college-texbooks";
import StepByStep from "../../components/website/textbook-solutions-manuals/step-by-step";
import Head from 'next/head'
import { useRouter } from "next/router";
import Seo from '../../components/common/seo'

export default function TextbookSolutionsManuals(){
    
    const router = useRouter();
    const title = "Step-by-step Textbook Solutions Manual & Textbook Answers"
    const description = "Struggling with textbook solutions? We have all the textbook answers that you need! Get step-by-step textbook solutions manual by our experts."
    const keywords = "Textbook Solutions, Textbook Solutions Manual, Textbook Solutions Manuals, Textbook Solution Manual, Textbook Solution Manuals, Free Textbook Solutions, Textbook Answers, Textbook Solution"
    const path = process.env.basePath + router.pathname
    
    return(
        <>  
            <Seo path={path} title={title} description={description} keywords={keywords}/>
            <Header/>
            <Navbar/>
            <QandASearch/>
            <AskAnExpert/>
            <CollegeTextbooks/>         
            <StepByStep/>
            <HowItWorks/>
            <BuySubscription/>
            <About/>
            <StudyHelp/>
            <WhyChooseOnline/>
            <WhatStudentsThink/>
            <Follow/>
            <Footer/>
        </>
    )
}