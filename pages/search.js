import Head from 'next/head'
import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import Follow from '../components/website/home/follow'
import SearchTab from '../components/website/search/search-tab'
import ResultsNotFound from '../components/website/search/result-not-found'
import BuySubscription from '../components/website/search/buy-subscription'
import HowItWorks from '../components/common/how-it-works'

export default function Search() {
    return(
        <>
            <Head>
                <title>Crazy For Study</title>
            </Head>
            <Header/>
            <Navbar/>
            <SearchTab/>
            <ResultsNotFound/>
            <BuySubscription/>
            <HowItWorks/>
            <Follow/>
            <Footer/>
        </>
    )
}