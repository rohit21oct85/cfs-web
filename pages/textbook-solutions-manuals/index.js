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

export default function TextbookSolutionsManuals(){
    
    const router = useRouter();
    const title = "Step-by-step Textbook Solutions Manual & Textbook Answers"
    const description = "Struggling with textbook solutions? We have all the textbook answers that you need! Get step-by-step textbook solutions manual by our experts."
    const keywords = "Textbook Solutions, Textbook Solutions Manual, Textbook Solutions Manuals, Textbook Solution Manual, Textbook Solution Manuals, Free Textbook Solutions, Textbook Answers, Textbook Solution"
    const copyright = `Copyright ${new Date().getFullYear()} Crazyforstudy.com`
    const path = process.env.basePath + router.pathname
    
    return(
        <>  
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
                <meta name="keywords" content={keywords}></meta>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="copyright" content={copyright} />
                <meta name="author" content="crazyforstudy.com" />
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href={path}/>
                
                {/* og:Meta Title */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={path} />
                <meta property="og:image" content="#SameAsBookImageURL" />
                <meta property="og:locale" content="en_US" />
                <meta name="og_site_name" property="og:site_name" content="Crazyforstudy.com"/>

                {/* Twitter */}
                <meta name="twitter:widgets:csp" content="on"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description} />
                <meta name="twitter:site" content="@CrazyForStudy1"/>
                <meta name="twitter:image" content="#SameAsBookImageURL" />
            </Head>
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