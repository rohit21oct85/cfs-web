import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import Follow from '../../components/website/home/follow'
import BreadCrumb from '../../components/website/all-subjects/breadcrumb'
import { getCategoryFaqs } from '../../libs/faq'
import { useQuery } from 'react-query'
import Link from 'next/link'
import { useRouter } from "next/router";
import {useState} from 'react';

export default function faqId(){
    const router = useRouter();
    const [whichCollapse, setWhichCollapse] = useState()

    const openCollapse = (string) =>{
        setWhichCollapse(string)
    }

    const { data: faqContent, isLoading:faqIsLoading, error:faqError } = useQuery(['faq-category-'+`${router.query.id}`], () => getCategoryFaqs(router.query.id),{staleTime:Infinity})

    return(
        <>
        <Header/>
        <Navbar/>
        <BreadCrumb type={"Frequently Asked Questions"} heading={router.query.id} subject={router.query.id} sub_subject={""}/>
        <section className="faq faq_bg_sctn">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12 text-center mb-5">
                        <div className="Content_Covered_title pb-1">
                            <h2>FAQ's</h2>
                            <p>Get answers to the most frequently asked questions from students and make your decision to get better grades.</p>
                        </div>
                    </div>
                    <div className="col-md-9 m-auto">
                        <ul className="faq-list">
                            {faqContent && faqContent.data.map((item,key)=>{
                                return(<li key={key}>
                                    <a data-toggle="collapse" className="collapsed bdr_3" href="#faq1" onClick={()=>{openCollapse(`faq${key}`)}}>{item.question} <i className="fa fa-angle-up"></i></a>
                                    <div id="faq1" className={"collapse sub_text1 " + (whichCollapse == 'faq'+`${key}` ? 'show' : '' )} data-parent=".faq-list">
                                        <p className="first-para"><strong>Answer : </strong>{item.answer}</p>
                                    </div>
                                </li>)
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