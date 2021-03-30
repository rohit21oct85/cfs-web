import Head from 'next/head'
import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import Follow from '../../components/website/home/follow'
import SearchTab from '../../components/website/search/search-tab'
import ResultsNotFound from '../../components/website/search/result-not-found'
import ResultsFound from '../../components/website/search/result-found'
import BuySubscription from '../../components/website/search/buy-subscription'
import HowItWorks from '../../components/common/how-it-works'
import { useRouter } from "next/router";
import { useQuery } from 'react-query'
import { searchData } from '../../libs/search'

export default function Search() {
    const router = useRouter();

    const { data:searchDataBQ, isLoading:searchIsLoading, error:searchError } = useQuery([router.query.search], () => searchData(router.query.search),{staleTime:Infinity})
    console.log(searchDataBQ, searchIsLoading)
    if(searchIsLoading)
        return <div>Loading ...</div> 

    return(
        <>
            <Head>
                <title>Crazy For Study</title>{console.log("in search")}
            </Head>
            <Header/>
            <Navbar/>
            <SearchTab/>
            {searchDataBQ && <ResultsFound data={searchDataBQ} resultsFor={router.query.search}/>}
            {/* {!searchDataBQ && <ResultsNotFound/>} */}
            <BuySubscription/>
            <HowItWorks/>
            <Follow/>
            <Footer/>
        </>
    )
}