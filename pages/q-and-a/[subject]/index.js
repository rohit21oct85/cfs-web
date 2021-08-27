import Head from 'next/head'
import Header from '../../../components/website/home/header'
import Navbar from '../../../components/website/home/navbar'
import Footer from '../../../components/website/home/footer'
import Follow from '../../../components/website/home/follow'
import QandASearch from '../../../components/website/q-and-a/q-and-a-search'
import AskExpert2 from '../../../components/website/q-and-a/ask-an-expert2'
import CollegeHomework from '../../../components/website/q-and-a/college-homework'
import StepByStep from '../../../components/website/q-and-a/step-by-step'
import BrowseBySubjects2 from '../../../components/website/q-and-a/browse-by-subjects2'
import BusinessHomework from '../../../components/website/q-and-a/business-homework'
import Services from '../../../components/website/q-and-a/services'
import { useQuery } from 'react-query'
import {getSubSubject} from '../../../libs/subsubject'
import { useRouter } from "next/router";
import Answer from './answer'

export default function QandACategory() {
    const router = useRouter();

    const regex = /\d{6}/g; //

    const data = router.query.subject != undefined ? router.query.subject.match(regex) : router.query.subject;
    const OLD_QID = data ? data[0] : null; 

    const { data: subsubjects, isLoading:subsubjectsIsLoading, error:subsubjectsError } = useQuery([router.query.subject], () => getSubSubject(router.query.subject),{staleTime:Infinity, enabled: !!router.query.subject}) //only called when subject would be present
    if(OLD_QID)
        return <Answer/>

    return(
        <>
            <Head>
                <title>Crazy For Study</title>
            </Head>
            <Header/>
            <Navbar/>
            <QandASearch/>
            {/* <AskExpert2/> */}
            {/* <CollegeHomework/> */}
            <StepByStep/>
            <BrowseBySubjects2 data={subsubjects}/>
            <BusinessHomework/>
            <Services/>
            <Follow/>
            <Footer/>
        </>
    )
}