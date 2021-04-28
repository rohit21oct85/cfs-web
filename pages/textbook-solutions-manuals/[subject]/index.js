import Header from '../../../components/website/home/header'
import Navbar from '../../../components/website/home/navbar'
import Footer from '../../../components/website/home/footer'
import Follow from '../../../components/website/home/follow'
import AskAnExpert from "../../../components/website/textbook-solutions-manuals/ask-an-expert";
import CollegeTextbooks from "../../../components/website/textbook-solutions-manuals/college-texbooks";
import StepByStep from "../../../components/website/textbook-solutions-manuals/step-by-step";
import QandASearch from '../../../components/website/q-and-a/q-and-a-search'
import WhatStudentsThink from "../../../components/website/assignment-help/what-students-think";
import { useQuery } from 'react-query'
import { useRouter } from "next/router";
import BrowseBySubjects from '../../../components/website/all-subjects/browse-by-subjects';
import InstantAccess from '../../../components/website/all-subjects/instant-access';
import About from '../../../components/website/all-subjects/about';
import {getSubSubject} from '../../../libs/subsubject'
import Head from 'next/head'
import { capitalize } from "../../../components/common/make-slug";

export default function Subject(){
    const router = useRouter();
    const title = `Get Reliable ${capitalize(router.query.subject)} Textbook Solutions Manual`
    const description = `Get Access ${capitalize(router.query.subject)} Textbook Solutions from Crazy For Study. For ${capitalize(router.query.subject)} textbook answers, ${capitalize(router.query.subject)} Step-by-step solutions, ${capitalize(router.query.subject)} Solutions manual and Assignment Help, try Crazy For Study today!`
    const keywords = `${capitalize(router.query.subject)} textbook solutions, ${capitalize(router.query.subject)} solutions manual, ${capitalize(router.query.subject)} textbook solution manuals`
    const copyright = `Copyright ${new Date().getFullYear()} Crazyforstudy.com`
    const path = process.env.basePath + router.asPath

    const { data: subSubjects, isLoading:subSubjectIsLoading, error:subSubjectError } = useQuery([router.query.subject], () => getSubSubject( router.query.subject ),{staleTime:Infinity})
    
    if(subSubjectIsLoading)
        return <div id="loading"></div>;

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
            <BrowseBySubjects data={subSubjects}/>
            <About/>
            <InstantAccess/>
            <WhatStudentsThink/>
            <Follow/>
            <Footer/>
        </>
    )
}