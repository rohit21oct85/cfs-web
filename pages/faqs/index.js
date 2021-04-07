import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import Follow from '../../components/website/home/follow'
import SearchComp from '../../components/common/search-comp'
// import Breadcrumb from '../../components/website/all-subjects/breadcrumb'
import { getFaqCategory } from '../../libs/faq'
import { useQuery } from 'react-query'
import Link from 'next/link'
import BreadCrumb from '../../components/website/all-subjects/breadcrumb'

export default function Faq(){
    const { data: faqs, isLoading:faqIsLoading, error:faqError } = useQuery(['faq-category'], () => getFaqCategory(),{staleTime:Infinity})
    
    if(faqIsLoading)
        return <div id="loading"></div>;

    return(
        <>
        <Header/>
        <Navbar/>
        <BreadCrumb type={"Frequently Asked Questions"} heading={"Frequently Asked Questions"} subject={""} sub_subject={""}/>
        <section className="faq_n_p">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8 ml-auto mr-auto">
                                <div className="all_banner_text">
                                <SearchComp btnText="Search" placeholder="Search Here..... ISBN / Textbook Name"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="col-md-12 dynamic_boxes">
                        <ul>
                            {faqs && faqs.data.map((item,key)=>{
                                return(
                                    <li key={key}> 
                                        <Link href={'/faqs/'+`${item.faq_category}`}>
                                            <a>
                                            <div className="col-md-12 icon_dyanamic text-center"> <img className="img-fluid" alt="Academic Intregrity" src={item.faq_image}/> </div>
                                            <div className="faq_dyanamic_text text-center">
                                                <h5>{item.faq_category}</h5>
                                            </div>
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Follow/>
        <Footer/>
        </>
    )
}