import Head from 'next/head'
import Header from '../../../../../components/website/home/header'
import Navbar from '../../../../../components/website/home/navbar'
import Footer from '../../../../../components/website/home/footer'
import Follow from '../../../../../components/website/home/follow'
import BreadCrumb from '../../../../../components/website/all-subjects/breadcrumb'
import Questions from '../../../../../components/website/q-and-a/question/questions'
import AskFifty from '../../../../../components/website/q-and-a/question/ask-fifty'
import HomeWork from '../../../../../components/website/q-and-a/question/home-work'
import RelatedTbs from '../../../../../components/website/book-detail/related-tbs'
import { useQuery } from 'react-query'
import {getQandAChildSubjects} from '../../../../../libs/subsubject'
import { useRouter } from "next/router";
import { useState } from 'react'
import { GetName, capitalize } from '../../../../../components/common/make-slug'

export default function QuestionsAndAnswers() {
    const [pageNo, setPageNo] = useState(0);
    const router = useRouter();

    const { data: qandas, isLoading:qandasIsLoading, error:qandassubjectsError } = useQuery([router.query.chieldsubject, pageNo], () => getQandAChildSubjects({child_subject: router.query.chieldsubject, pageno : pageNo}),{staleTime:Infinity, enabled: !!router.query.chieldsubject}) //only called when subject would be present

    return(
        <>
            <Head>
                <title>Crazy For Study</title>
            </Head>
            <Header/>
            <Navbar/>
            <BreadCrumb type={"Q & A"} heading={router.query.chieldsubject} subject={router.query.subject} sub_subject={router.query.subsubject}/>
            <Questions data={qandas} isLoading={qandasIsLoading} heading={capitalize(GetName(router.query.chieldsubject))} setPageNo={setPageNo} pageNo={pageNo}/>
            <AskFifty/>
            <HomeWork/>
            <RelatedTbs heading={"Students who viewed Socialogy Homework Questions and Answers also checked out"} subHeading={`Recently Added Top 4 ${router.query.subject} Textbook Solutions Manual`}/>
            <Follow/>
            <Footer/>
        </>
    )
}