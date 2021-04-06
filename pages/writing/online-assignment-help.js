import Head from 'next/head'
import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import  SubmitAssignment  from "../../components/website/assignment-help/submit-assignment";
import Help from "../../components/website/assignment-help/help"
import Features from "../../components/website/assignment-help/features"
import About from "../../components/website/assignment-help/about"
import MultipleHelp from "../../components/website/assignment-help/multiple-help"
import Reviews from "../../components/website/assignment-help/reviews"
import WhyChoose from "../../components/website/assignment-help/why-choose"
import WhatStudentsThink from "../../components/website/assignment-help/what-students-think"
import StudyHelp from '../../components/common/study-help'

export default function OnlineAssignmentHelp() {
  return (
    <>
      <Head>
        <title>Crazy For Study</title>
      </Head>
      <Header/>
      <Navbar/>
      <SubmitAssignment/>
      <Help/>
      <Features/>
      <Reviews/>
      <About/>
      <MultipleHelp/>
      <WhyChoose/>
      <WhatStudentsThink/>
      <StudyHelp/>
      <Footer/>
    </>
  )
}
