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

export default function Subject(){
    const router = useRouter();
    const { data: subSubjects, isLoading:subSubjectIsLoading, error:subSubjectError } = useQuery([router.query.subject], () => getSubSubject( router.query.subject ),{staleTime:Infinity})
    
    if(subSubjectIsLoading)
        return <div id="loading"></div>;

    return(
        <>
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