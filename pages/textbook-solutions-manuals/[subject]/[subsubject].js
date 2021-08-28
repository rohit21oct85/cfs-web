import Header from '../../../components/website/home/header'
import Navbar from '../../../components/website/home/navbar'
import Footer from '../../../components/website/home/footer'
import Follow from '../../../components/website/home/follow'
import BreadCrumb from '../../../components/website/textbook-solutions-manuals/tbs-breadcrumb'
import BuySubscription from '../../../components/website/all-subjects/buy-subscription'
import AllBooks from '../../../components/website/all-subjects/all-books'
import AddBook from '../../../components/website/all-subjects/add-book'
import StudentViewed from '../../../components/website/all-subjects/students-viewed'
import GetSolManual from '../../../components/website/all-subjects/get-sol-manual'
import {getBooks} from "../../../libs/subsubject"
import { useRouter } from "next/router";
// import {getNavbarData} from "../../../libs/home"
import {useState} from 'react';
import { useQuery } from 'react-query'
import Head from 'next/head'
import { capitalize } from "../../../components/common/make-slug";

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
    const title = `Get Reliable ${capitalize(router.query.subsubject)} Textbook Solutions Manual`
    const description = `Get Access ${capitalize(router.query.subsubject)} Textbook Solutions from Crazy For Study. For ${capitalize(router.query.subsubject)} textbook answers, ${capitalize(router.query.subsubject)} Step-by-step solutions, ${capitalize(router.query.subsubject)} Solutions manual and Assignment Help, try Crazy For Study today!`
    const keywords = `${capitalize(router.query.subsubject)} textbook solutions, ${capitalize(router.query.subsubject)} solutions manual, ${capitalize(router.query.subsubject)} textbook solution manuals`
    const copyright = `Copyright ${new Date().getFullYear()} Crazyforstudy.com`
    const path = process.env.basePath + router.asPath

    const { data, isLoading, error } = useQuery([router.query.subsubject, pageNo], () => getBooks({sub_subject_name: router.query.subsubject, pageno : pageNo}))

    if(isLoading)
        return <div id="loading"></div>

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
                <meta name="keywords" content={keywords}></meta>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="copyright" content={copyright} />
                <meta name="author" content="crazyforstudy.com" />
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href={path}/>
                
                {/* og:Meta Title */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={path} />
                <meta property="og:image" content="#SameAsBookImageURL" />
                <meta property="og:locale" content="en_US" />
                <meta name="og_site_name" property="og:site_name" content="Crazyforstudy.com"/>

                {/* Twitter */}
                <meta name="twitter:widgets:csp" content="on"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description} />
                <meta name="twitter:site" content="@CrazyForStudy1"/>
                <meta name="twitter:image" content="#SameAsBookImageURL" />
            </Head>
            <Header/>
            <Navbar/>
            <BreadCrumb type={"TextBook Manual"} heading={router.query.subsubject} subject={router.query.subject} sub_subject={router.query.subsubject}/>
            <BuySubscription/>
            <AllBooks data={data} setPageNo={setPageNo} pageNo={pageNo}/>
            <AddBook/>
            <StudentViewed/>
            <GetSolManual/>
            <Follow/>
            <Footer/>
        </>
    )
}