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

export default function TextbookSolutionsManuals(){
    return(
        <>
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