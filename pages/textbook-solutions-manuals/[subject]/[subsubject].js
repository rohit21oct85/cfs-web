import { useRouter } from "next/router";
import Header from '../../../components/website/home/header'
import Navbar from '../../../components/website/home/navbar'
import Footer from '../../../components/website/home/footer'
import Follow from '../../../components/website/home/follow'
import BreadCrumb from '../../../components/website/all-subjects/breadcrumb'
import BuySubscription from '../../../components/website/all-subjects/buy-subscription'
import AllBooks from '../../../components/website/all-subjects/all-books'
import {getBooks} from "../../../libs/subsubject"
// import {getNavbarData} from "../../../libs/home"
import {useState} from 'react';
import { useQuery } from 'react-query'

// export async  function getServerSideProps(context){
//     const data = await getBooks(context.params.subsubject);
//     return {
//         props: {
//             data: data,
//         },
//     };
// }

export default function SubSubject(){
    const [pageNo, setPageNo] = useState(0);
    const router = useRouter();

    const { data, isLoading, error } = useQuery([router.query.subsubject, pageNo], () => getBooks({sub_subject_name: router.query.subsubject, pageno : pageNo}))

    if(isLoading)
        return <div id="loading"></div>

    return (
        <>
            <Header/>
            <Navbar/>
            <BreadCrumb heading={router.query.subsubject} subject={router.query.subject} sub_subject={router.query.subsubject}/>
            <BuySubscription/>
            <AllBooks data={data} setPageNo={setPageNo} pageNo={pageNo}/>
            <Follow/>
            <Footer/>
        </>
    )
}