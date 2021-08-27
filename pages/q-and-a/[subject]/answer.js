import Head from 'next/head'
import Header from '../../../components/website/home/header'
import Navbar from '../../../components/website/home/navbar'
import Footer from '../../../components/website/home/footer'
import Follow from '../../../components/website/home/follow'
import BreadCrumb from '../../../components/website/all-subjects/breadcrumb'
import Answer from '../../../components/website/q-and-a/answer/answer'
import { useQuery } from 'react-query'
import { getQandAnswer } from '../../../libs/subsubject'
import { useRouter } from "next/router";
import { useState } from 'react'
// import { GetName, capitalize } from '../../../components/common/make-slug'

export default function QuestionsAndAnswers() {
    const router = useRouter();

    const regex = /\d{6}/g; //

    const data = router.query.subject != undefined ? router.query.subject.match(regex) : router.query.subject;
    const old_qid = data ? data[0] : null; 
    const getHighlight = router.query.subject?.substr(0, router.query.subject.length-6);
    const abstrophy = unescape(getHighlight)

    const { data: answer, isLoading:answerIsLoading, error:answerSubjectsError } = useQuery([old_qid], () => getQandAnswer(old_qid),{staleTime:Infinity, enabled: !!old_qid}) //only called when subject would be present

    return(
        <>
            <Head>
                <title>Crazy For Study</title>
            </Head>
            <Header/>
            <Navbar/>
            <BreadCrumb type={"Q & A"} heading={abstrophy} subject={router.query.subject} sub_subject={router.query.subsubject} sub_sub_subject={router.query.chieldsubject}/>
            <Answer data={answer}/>
            <Follow/>
            <Footer/>
        </>
    )
}