import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import StudyHelp from '../../components/common/study-help'
import Footer from '../../components/website/home/footer'
import Follow from '../../components/website/home/follow'
import WritingHelpBanner from '../../components/website/writing-help/writing-help-banner'
import WritHelp from '../../components/website/writing-help/writ-help'
import HelpService from '../../components/website/writing-help/help-service'
import WhyChooseOurWriting from '../../components/website/writing-help/why-choose-our-writing'
import PopularHelpServices from '../../components/website/writing-help/popular-help-services'
import BannerBottom from '../../components/website/writing-help/banner-bottom'
import Head from 'next/head'

export default function WritingHelp(){
    return(
        <>
        <Head>
            <title>Crazy For Study | Writing Help</title>
        </Head>
        <Header/>
        <Navbar/>
        <WritingHelpBanner/>
        <BannerBottom/> 
        <WritHelp/>
        <HelpService/>
        <WhyChooseOurWriting/>
        <PopularHelpServices/>
        <StudyHelp/>
        <Follow/>
        <Footer/>
        </>
    )
}
