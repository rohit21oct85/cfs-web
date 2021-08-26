import Head from 'next/head'
import Header from '../../../../components/website/home/header'
import Navbar from '../../../../components/website/home/navbar'
import Footer from '../../../../components/website/home/footer'
import Follow from '../../../../components/website/home/follow'
import QandASearch from '../../../../components/website/q-and-a/q-and-a-search'
import AskExpert2 from '../../../../components/website/q-and-a/ask-an-expert2'
import CollegeHomework from '../../../../components/website/q-and-a/college-homework'
import StepByStep from '../../../../components/website/q-and-a/step-by-step'
import BrowseBySubjects3 from '../../../../components/website/q-and-a/browser-by-subjects3'
import BusinessHomework from '../../../../components/website/q-and-a/business-homework'
import Services from '../../../../components/website/q-and-a/services'
import { useQuery } from 'react-query'
import {getChildSubjects} from '../../../../libs/subsubject'
import { useRouter } from "next/router";

export default function QandASubCategory() {
    const router = useRouter();

    const { data: childsubjects, isLoading:childsubjectsIsLoading, error:childsubjectsError } = useQuery([router.query.subsubject], () => getChildSubjects(router.query.subsubject),{staleTime:Infinity, enabled: !!router.query.subsubject}) //only called when subject would be present

    return(
        <>
            <Head>
                <title>Crazy For Study</title>
            </Head>
            <Header/>
            <Navbar/>
            <QandASearch/>
            {/* <AskExpert2/>
            <CollegeHomework/> */}
            <StepByStep/>
            <BrowseBySubjects3 data={childsubjects}/>
            <BusinessHomework/>
            <Services/>
            <Follow/>
            <Footer/>
        </>
    )
}