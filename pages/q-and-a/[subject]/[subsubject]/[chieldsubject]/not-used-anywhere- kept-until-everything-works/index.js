import Head from 'next/head'
import Header from '../../../../../../components/website/home/header'
import Navbar from '../../../../../../components/website/home/navbar'
import Footer from '../../../../../../components/website/home/footer'
import Follow from '../../../../../../components/website/home/follow'
import BreadCrumb from '../../../../../../components/website/all-subjects/breadcrumb'
import Answer from '../../../../../../components/website/q-and-a/answer/answer'
import { useQuery } from 'react-query'
import { getQandAnswer } from '../../../../../../libs/subsubject'
import { useRouter } from "next/router";
import { useState } from 'react'
// import { GetName, capitalize } from '../../../../../../components/common/make-slug'

export default function QuestionsAndAnswers() {
    const router = useRouter();

    const regex = /\d{6}/g; //
    let data,old_qid,getHighlight,abstrophy = "";
    // if(router.query.answer != undefined){
    //     data = router.query.answer != undefined ?router.query.answer.match(regex) : router.query.answer;
    //     old_qid = data ? data[0] : null; 
    //     getHighlight = router.query.answer?.substr(0, router.query.answer.length-6);
    //     abstrophy = unescape(getHighlight)
    // }else{
        //case when we got direct to a particula
        data = router.query.subject != undefined ? router.query.subject.match(regex) : router.query.subject;
        old_qid = data ? data[0] : null; 
        getHighlight = router.query.subject?.substr(0, router.query.subject.length-6);
        abstrophy = unescape(getHighlight)
    // }
    
    // console.log(old_qid, "IN ANSWER")
    // console.log(router.query.subject)
    // const abstrophy = getHighlight?.replace(/8217/g, "'");
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