import DashboardNavbar from '../components/website/dashboard/dashboard-navbar'
import SideBar from '../components/website/dashboard/sidebar'
import { useSession } from 'next-auth/client'
import AccessDenied from '../components/access-denied'
import Router from 'next/router'
import { useEffect } from 'react';
import BlockHeader from '../components/website/dashboard/block-header'
import Link from 'next/link'
export default function  Dashboard() {

    const [ session, loading ] = useSession()
    
    if (!session) { return  (<><AccessDenied/></>) }
    
    return (
        <>  
            
            {/* <Header/> */}
            <DashboardNavbar/>
            <SideBar/>
            <section className="content user profile-page">
                <BlockHeader/>                
                <div className="container-fluid">
                    <div className="row clearfix mt-4">
                        <div className="col-xl-12">
                            <div className="banner banner-color mt-0">
                                <div className="row img_bannet_ft" style={{width:"100%"}}>
                                    <div className="col-xl-2 col-sm-12 col-lg-2 col-md-3">
                                        <img src="/images/college_assignment_img.png" alt="image" className="image"/> 
                                    </div>
                                    <div className="page-content col-xl-7 col-sm-12 col-lg-7 col-md-7">
                                        <h4 className="mt-0 my_acc">Stuck With Your College Assignment?</h4>
                                        <p className="mb-1 add_more_power my_ac">Get An Amazing Winter Offer on Assignment help </p>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-sm-12 col-md-3 text-right Earn_Referral d-block mt-auto mb-auto">  
                                        <a href="#" className="btn ml-auto offers_k">Get Assignment </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
               <div className="container-fluid"> 
                    <div className="col-lg-12 col-md-12 mb-4">
                        <div className="row progress_bar_dshbd">
                            <div className="col-md-3">
                                <ul>
                                    <li className="Complete_Your_Profile pt-2"><a href="#">Complete Your Profile</a></li>
                                </ul>
                            </div>
                            
                            <div className="col-md-9 progress_bar_eddit">
                                <ul>
                                    <li>
                                        <div className="pl-0">
                                            <span>
                                                <p className="file_prsn">Your profile is 20% completed <Link href="/user/my-profile"><a  className="float-right"><i className="fa fa-pencil-square"></i> Edit Profile</a></Link></p>
                                            </span>
                                            <div className="progress progress_wdth">
                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                                </div>
                                            </div>
                                        </div>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
                
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-md-12">
                            <section id="Commission" className="Commission">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 d-flex align-items-stretch">
                                            <img src="/images/commission_girl.png" className="img-fluid" alt=""/> 
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="Refer_Your_Friend">
                                                <h2>Get quick access to your college
                                                <span>Question?</span></h2>
                                                <p>Add your Books Here</p>
                                                <a href="#" className="btn ">Add</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>  
                    
                <div className="container-fluid">
                    <div className="row clearfix mt-5"> 
                        <div className="col-xl-12 text-left col-lg-12 col-md-12">
                            <div className="bg_home_work"> 
                                <div className="col-lg-7 col-md-7 pl-0">
                                    <div className="home_work_text">
                                        <h2 className="mt-0 my_acc">Stuck on your Homework <span>Question?</span> </h2>
                                        <p className="">Ask your homework question directly to the professor. Our expert will provide you (step-by-step) solutions.  </p>
                                        <a href="#">Ask a Question</a>
                                        <small>50 of 50 Homework Questions left </small>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid">
                    <div className="row clearfix mt-5">  
                        <div className="col-xl-12 col-lg-12 col-md-12 notification_text1">
                            <div className="card">
                                <div className="header">
                                    <h3><i className="fa fa-bell"></i> Notification </h3>
                                    <ul className="header-dropdown">
                                        <li> <a href="#" className=""> Read All </a> </li> 
                                    </ul>
                                </div>
                                <div className="body">
                                    <ul className="row list-unstyled c_review">
                                        <li className="col-12 border_btm_notify">
                                            <div className="avatar">
                                                <a href=""><img className="img-fluid" src="/images/avatar-s-10.png" alt="user"/></a>
                                            </div>                                
                                            <div className="comment-action">
                                                <h4 className="c_name">Your Question is solved: How much position tolerance is allowed o... </h4>  
                                                <small className="">Dec 21, 2017</small>
                                            </div>                                
                                        </li>
                                        <li className="col-12 border_btm_notify">
                                            <div className="avatar">
                                                <a href="#"><img className="img-fluid" src="/images/avatar-s-10.png" alt="user"/></a>
                                            </div>                                
                                            <div className="comment-action">
                                                <h4 className="c_name">Please make 50% advance payment, so that our experts can start your assignment</h4>  
                                                <small className="">03.:44PM</small>
                                            </div>                                
                                        </li>
                                        <li className="col-12 border_btm_notify">
                                            <div className="avatar">
                                                <a href="#"><img className="img-fluid" src="/images/avatar-s-10.png" alt="user"/></a>
                                            </div>                                
                                            <div className="comment-action">
                                                <h4 className="c_name">Your Question is solved: 1. How does a project manager price out</h4>  
                                                <small className="">03.:44PM</small>
                                            </div>                                
                                        </li>
                                        <li className="col-12 border_btm_notify">
                                            <div className="avatar">
                                                <a href="#"><img className="img-fluid" src="/images/avatar-s-10.png" alt="user"/></a>
                                            </div>                                
                                            <div className="comment-action">
                                                <h4 className="c_name">Your Question is solved: 1. How does a project manager price out</h4>  
                                                <small className="">03.:44PM</small>
                                            </div>                                
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

            {/* <Follow/> */}
            {/* <Footer/> */}
        </>
    )
}