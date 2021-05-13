import Link from 'next/link'
import { useRouter } from "next/router";

export default function SideBar({...props}){
    const router = useRouter();
    
    return (
        <aside id="leftsidebar" className="sidebar sidebar_color sidebar_left">
            <div className="tab-content">
                <div className="tab-pane stretchRight active" id="dashboard">
                    <div className="menu">
                        <ul className="list profile_left">
                            <li className="mb-0 border-bottom-0">
                                <div className="user-info  border-bottom-0">
                                    <div className="image circle">
                                        <a href="#"><img src={props.data && props.data.img ? props.data.img : "/images/profile_av.jpg"} className="profile-pic" alt="User"/></a>
                                        <div className="profile_pic_change">
                                            <div className="p-image">
                                                <i className="fa fa-camera upload-button"></i>
                                                <input className="file-upload" type="file" accept="image/*"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <h4> {props.data && props.data.fullname} <span>Student</span></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="rs_mual1"><a href="#" className="menu-toggle waves-effect waves-block"><span>Solutions Manual</span> </a>
                                <ul className="" style={{display: "none"}}> 
                                    <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/bussiness.png" className="img-fluid" alt=""/> <span>Business</span> </a>
                                        <ul className="ml-menu"style={{display: "none"}}>
                                            <li><a href="#" className=" waves-effect waves-block">Accounting</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Economics</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Finance</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Leadership</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Management</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Marketing</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Operations Management</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Other</a> </li> 
                                        </ul>
                                    </li>

                                    <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/engineering.png" className="img-fluid" alt=""/> <span>Engineering  </span> </a>
                                        <ul className="ml-menu" style={{display: "none"}}>
                                            <li><a href="#" className=" waves-effect waves-block">Bioengineering</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Chemical Engineering</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Civil Engineering</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Computer Engineering</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Computer Science</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Electrical Engineering</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Mechanical Engineering</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Other</a> </li> 
                                        </ul>
                                    </li>

                                    <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/maths.png" className="img-fluid" alt=""/> <span>Maths    </span> </a>
                                        <ul className="ml-menu" style={{display: "none"}}>
                                            <li><a href="#" className=" waves-effect waves-block">Advanced Math</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Algebra</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Calculus</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Geometry</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Probability</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Statistics</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Trigonometry</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Other</a> </li> 
                                        </ul>
                                    </li>

                                    <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/science.png" className="img-fluid" alt=""/> <span>Science     </span> </a>
                                        <ul className="ml-menu" style={{display: "none"}}>
                                            <li><a href="#" className=" waves-effect waves-block">Advanced Physics</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Biochemistry</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Biology</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Chemistry</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Earth Science</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Health & Nutrition</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Nursing</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Physics</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Other</a> </li> 
                                        </ul>
                                    </li>

                                    <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/social-science.png" className="img-fluid" alt=""/> <span>Social Science  </span> </a>
                                        <ul className="ml-menu" style={{display: "none"}}>
                                            <li><a href="#" className=" waves-effect waves-block">Anthropology</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Psychology</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Sociology</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Other</a> </li>
                                            <li><a href="#" className=" waves-effect waves-block">Music</a> </li> 
                                        </ul>
                                    </li>  

                                    <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/law.png" className="img-fluid" alt=""/> <span>Law  </span> </a>
                                        <ul className="ml-menu" style={{display: "none"}}>
                                            <ul className="list profile_left">
                                                <li className="mb-0 border-bottom-0">
                                                    <div className="user-info  border-bottom-0">
                                                        <div className="image circle">
                                                            <a href="#"><img src="/images/my-pics.jpg" className="profile-pic" alt="User"/></a>
                                                            <div className="profile_pic_change">
                                                                <div className="p-image">
                                                                    <i className="fa fa-camera upload-button"></i>
                                                                    <input className="file-upload" type="file" accept="image/*"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="detail">
                                                            <h4> Ashton Cox <span>Student</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                                <li className="rs_mual1"><a href="#" className="menu-toggle waves-effect waves-block"><span>Solutions Manual</span> </a>
                                                    <ul className="" style={{display: "none"}}> 
                                                        <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/bussiness.png" className="img-fluid" alt=""/> <span>Business</span> </a>
                                                            <ul className="ml-menu" style={{display: "none"}}>
                                                                <li><a href="#" className=" waves-effect waves-block">Accounting</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Economics</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Finance</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Leadership</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Management</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Marketing</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Operations Management</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Other</a> </li> 
                                                            </ul>
                                                        </li>
                                                        <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/engineering.png" className="img-fluid" alt=""/> <span>Engineering  </span> </a>
                                                            <ul className="ml-menu" style={{display: "none"}}>
                                                                <li><a href="#" className=" waves-effect waves-block">Bioengineering</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Chemical Engineering</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Civil Engineering</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Computer Engineering</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Computer Science</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Electrical Engineering</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Mechanical Engineering</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Other</a> </li> 
                                                            </ul>
                                                        </li>
                                                        <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/maths.png" className="img-fluid" alt=""/> <span>Maths    </span> </a>
                                                            <ul className="ml-menu" style={{display: "none"}}>
                                                                <li><a href="#" className=" waves-effect waves-block">Advanced Math</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Algebra</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Calculus</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Geometry</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Probability</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Statistics</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Trigonometry</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Other</a> </li> 
                                                            </ul>
                                                        </li>
                                                        <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/science.png" className="img-fluid" alt=""/> <span>Science     </span> </a>
                                                            <ul className="ml-menu" style={{display: "none"}}>
                                                                <li><a href="#" className=" waves-effect waves-block">Advanced Physics</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Biochemistry</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Biology</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Chemistry</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Earth Science</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Health & Nutrition</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Nursing</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Physics</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Other</a> </li> 
                                                            </ul>
                                                        </li>  
                                                        <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/social-science.png" className="img-fluid" alt=""/> <span>Social Science  </span> </a>
                                                            <ul className="ml-menu" style={{display: "none"}}>
                                                                <li><a href="#" className=" waves-effect waves-block">Anthropology</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Psychology</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Sociology</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Other</a> </li>
                                                                <li><a href="#" className=" waves-effect waves-block">Music</a> </li> 
                                                            </ul>
                                                        </li>   
                                                        <li><a href="#" className="menu-toggle waves-effect waves-block"><img src="/images/nav-icons/law.png" className="img-fluid" alt=""/> <span>Law  </span> </a>
                                                            <ul className="ml-menu" style={{display: "none"}}>
                                                                <li><a href="#" className=" waves-effect waves-block">Criminal Law</a> </li> 
                                                                <li><a href="#" className=" waves-effect waves-block">Other</a> </li> 
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="active open"><a href="myaccount.php"><i className="fa fa-home"></i><span>Dashboard</span></a></li>
                                                <li><a href="my-order.php"><i className="fas fa-paste"></i><span>My Order</span> </a></li>
                                                <li><a href="profile.php"><i className="fa fa-user-circle"></i><span>My Profile</span> </a></li>
                                                <li><a href="my-textbook.php"><i className="fas fa-map"></i><span>My Textbook</span> </a></li>
                                                <li><a href="my-subscription.php"><i className="fas fa-id-card"></i><span>My Subscription</span> </a></li>
                                                <li><a href="#"><i className="fas fa-question-circle"></i><span>Ask a Question</span> </a></li>
                                                <li><a href="my_question.php"><i className="fas fa-comments"></i><span>My Question</span> </a></li>
                                                <li><a href="#"><i className="fas fa-question"></i><span>FAQ</span> </a></li>
                                            </ul>
                                            <li><a href="#" className=" waves-effect waves-block">Criminal Law</a> </li> 
                                            <li><a href="#" className=" waves-effect waves-block">Other</a> </li> 
                                        </ul>
                                    </li>
                                </ul>
                            </li> 
                            <Link href="/dashboard"><li className={router.pathname == '/dashboard' ? 'active open' : ''}><a href=""><i className="fa fa-home"></i><span>Dashboard</span></a></li></Link>
                            <Link href="/user/my-orders"><li className={router.pathname == '/user/my-orders' ? 'active open' : ''}><a href=""><i className="fa fa-paste"></i><span>My Order</span> </a></li></Link>
                            <Link href="/user/my-profile"><li className={router.pathname == '/user/my-profile' ? 'active open' : ''}><a href=""><i className="fa fa-user-circle"></i><span>My Profile</span> </a></li></Link>
                            <Link href="/user/my-tbs"><li className={router.pathname == '/user/my-tbs' ? 'active open' : ''}><a href=""><i className="fa fa-map"></i><span>My Textbook</span> </a></li></Link>
                            <Link href="/user/my-subs"><li className={router.pathname == '/user/my-subs' ? 'active open' : ''}><a href=""><i className="fa fa-id-card"></i><span>My Subscription</span> </a></li></Link>
                            <Link href="/user/ask-a-question"><li className={router.pathname == '/user/ask-a-question' ? 'active open' : ''}><a href=""><i className="fa fa-question-circle"></i><span>Ask a Question</span> </a></li></Link>
                            <Link href="/user/my-question"><li className={router.pathname == '/user/my-question' ? 'active open' : ''}><a href=""><i className="fa fa-comments"></i><span>My Question</span> </a></li></Link>
                            <Link href="/faqs"><li className={router.pathname == '/faqs' ? 'active open' : ''}><a href=""><i className="fa fa-question"></i><span>FAQ</span> </a></li></Link>
                        </ul>
                    </div>
                </div>
                <div className="tab-pane stretchLeft" id="user">
                    <div className="menu">
                        <ul className="list"> 
                            <li>
                                <div className="user-info m-b-20 p-b-15">
                                    <div className="image"><a href="#">
                                        <img src="/images/profile_av.jpg" alt="User"/></a>
                                    </div>
                                    <div className="detail">
                                        <h4>Charlotte</h4>
                                        <small>Choose Profile</small>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <a title="facebook" href="#"><i className="zmdi zmdi-facebook"></i></a>
                                            <a title="twitter" href="#"><i className="zmdi zmdi-twitter"></i></a>
                                            <a title="instagram" href="#"><i className="zmdi zmdi-instagram"></i></a>
                                        </div>
                                        <div className="col-4 p-r-0">
                                            <h5 className="m-b-5">$ 13</h5>
                                            <small>Reward</small>
                                        </div>
                                        <div className="col-4">
                                            <h5 className="m-b-5">$ 33</h5>
                                            <small>Cashback</small>
                                        </div>
                                        <div className="col-4 p-l-0">
                                            <h5 className="m-b-5">37</h5>
                                            <small>Order</small>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <small className="text-muted">Location: </small>
                                <p>{props.data && props.data.Country}</p>
                                <hr/>
                                <small className="text-muted">Email address: </small>
                                <p>{props.data&& props.data.email}</p>
                                <hr/>
                                <small className="text-muted">Phone: </small>
                                <p>{props.data&& props.data.Contact}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}