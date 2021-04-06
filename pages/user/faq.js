import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import Follow from '../../components/website/home/follow'
import SearchComp from '../../components/common/search-comp'
// import Breadcrumb from '../../components/website/all-subjects/breadcrumb'

export default function Faq()
{
    return(
        <>
        <Header/>
        <Navbar/>

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
                            <li> <a href="faq-my-account.php">
                                    <div className="col-md-12 icon_dyanamic text-center"> <img className="img-fluid" alt="My Account" src="/images/gettingstarted.png"/> 
                                    </div>
                                    <div className="faq_dyanamic_text text-center">
                                        <h5>Getting Started</h5>
                                    </div>
                                </a> 
                            </li>
                            <li> <a href="faq-my-account.php">
                                    <div className="col-md-12 icon_dyanamic text-center"> <img className="img-fluid" alt="My Account" src="/images/user_account.png"/> </div>
                                    <div className="faq_dyanamic_text text-center">
                                    <h5>My Account</h5>
                                    </div>
                                </a> 
                            </li>
                            <li> <a href="">
                                <div className="col-md-12 icon_dyanamic text-center"> <img className="img-fluid" alt="Earning & Cashback" src="/images/billing.png"/> </div>
                                <div className="faq_dyanamic_text text-center">
                                <h5>Billing & Subscription</h5>
                                </div>
                                </a> </li>
                            <li> <a href="">
                                <div className="col-md-12 icon_dyanamic text-center"> <img className="img-fluid" alt="Wallet & Payments" src="/images/academics.png"/> </div>
                                <div className="faq_dyanamic_text text-center">
                                <h5>Uploading </h5>
                                </div>
                                </a> </li>
                            <li> <a href="">
                                <div className="col-md-12 icon_dyanamic text-center"> <img className="img-fluid" alt="Writing Help" src="/images/tutorial.png"/> </div>
                                <div className="faq_dyanamic_text text-center">
                                <h5>Assignment Help</h5>
                                </div>
                                </a> </li>
                            <li> <a href="">
                                <div className="col-md-12 icon_dyanamic text-center"> <img className="img-fluid" alt="Tools" src="/images/academics.png"/> </div>
                                <div className="faq_dyanamic_text text-center">
                                <h5>Academic Intregrity </h5>
                                </div>
                                </a> </li>
                            <li> <a href="">
                                <div className="col-md-12 icon_dyanamic text-center"> <img className="img-fluid" alt="Uploading" src="/images/tutor.png"/> </div>
                                <div className="faq_dyanamic_text text-center">
                                <h5>Tutor </h5>
                                </div>
                                </a> </li>
                            <li> <a href="">
                                <div className="col-md-12 icon_dyanamic text-center"> <img className="img-fluid" alt="Academic Intregrity" src="/images/50-new-questions.png"/> </div>
                                <div className="faq_dyanamic_text text-center">
                                <h5>50 New Questions</h5>
                                </div>
                                </a> 
                            </li> 
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