export default function DashboardNavbar(){
    return( <>
            <nav className="navbar navbar_dashboard1 p-l-5 p-r-5">
                <ul className="nav navbar-nav navbar-left nav_left1 mr-auto">
                    <li>
                        <div className="navbar-header">
                            <a href="#" className="bars"></a>
                            <a className="navbar-brand" href="#"><span className="m-l-60"><img src="/images/logo.png" className="img-fluid" alt="logo" width="100"/></span></a>
                        </div>
                    </li>      
                </ul>
   
                <ul className="nav navbar-nav navbar-left nav_right1 ml-auto">
                    <li className="dp_n">
                        <a href="#" className="mega-menu">Q and A   </a>           
                    </li>
                    <li className="nav-item megamenu-li dmenu dp_n">
                        <a className="nav-link dropdown-toggle" href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions Manual</a>
                        <div className="dropdown-menu megamenu sm-menu border-top" aria-labelledby="dropdown01">
                            <div className="row">
                                <div className="col-sm-6 nav_pding col-lg-2 border-right mb-4">
                                    <h6>Business <img src="/images/nav-icons/bussiness.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                                    <a className="dropdown-item" href="#"> Accounting</a>
                                    <a className="dropdown-item" href="#">Economics</a>
                                    <a className="dropdown-item" href="#">Finance</a>
                                    <a className="dropdown-item" href="#">Leadership</a>
                                    <a className="dropdown-item" href="#">Management</a>
                                    <a className="dropdown-item" href="#">Marketing</a>
                                    <a className="dropdown-item" href="#">Operations Management</a>
                                    <a className="dropdown-item" href="#">Other</a>
                                </div>
                                <div className="col-sm-6 nav_pding nav_sm_menu_bg col-lg-2 border-right mb-4">
                                    <h6>Engineering <img src="/images/nav-icons/engineering.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                                    <a className="dropdown-item" href="#">Bioengineering</a>
                                    <a className="dropdown-item" href="#">Chemical Engineering</a>
                                    <a className="dropdown-item" href="#">Civil Engineering</a>
                                    <a className="dropdown-item" href="#">Computer Engineering</a>
                                    <a className="dropdown-item" href="#">Computer Science</a>
                                    <a className="dropdown-item" href="#">Electrical Engineering</a>
                                    <a className="dropdown-item" href="#">Mechanical Engineering</a>
                                    <a className="dropdown-item" href="#">Other</a>
                                </div>
                                <div className="col-sm-6 nav_pding col-lg-2 border-right mb-4">
                                    <h6>Maths <img src="/images/nav-icons/maths.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                                    <a className="dropdown-item" href="#">Advanced Math</a>
                                    <a className="dropdown-item" href="#">Algebra</a>
                                    <a className="dropdown-item" href="#">Calculus</a>
                                    <a className="dropdown-item" href="#">Geometry</a>
                                    <a className="dropdown-item" href="#">Probability</a>
                                    <a className="dropdown-item" href="#">Statistics</a>
                                    <a className="dropdown-item" href="#">Trigonometry</a>
                                    <a className="dropdown-item" href="#">Other</a>
                                </div>
                                <div className="col-sm-6 nav_pding nav_sm_menu_bg col-lg-2 border-right mb-4">
                                    <h6>Science <img src="/images/nav-icons/science.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                                    <a className="dropdown-item" href="#">Advanced Physics</a>
                                <a className="dropdown-item" href="#">Biochemistry</a>
                                <a className="dropdown-item" href="#">Biology</a>
                                <a className="dropdown-item" href="#">Chemistry</a>
                                <a className="dropdown-item" href="#">Earth Science</a>
                                <a className="dropdown-item" href="#">Health &amp; Nutrition</a>
                                <a className="dropdown-item" href="#">Nursing</a>
                                <a className="dropdown-item" href="#">Physics</a>
                                <a className="dropdown-item" href="#">Other</a>
                                </div>
                                <div className="col-sm-6 nav_pding col-lg-2 border-right mb-4">
                                    <h6>Social Science <img src="/images/nav-icons/social-science.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                                    <a className="dropdown-item" href="#">Anthropology</a>
                                    <a className="dropdown-item" href="#">Psychology</a>
                                    <a className="dropdown-item" href="#">Sociology</a>
                                    <a className="dropdown-item" href="#">Other</a>
                                    <a className="dropdown-item" href="#">Music</a>
                                </div>
                                <div className="col-sm-6 col-lg-2 nav_pding nav_sm_menu_bg mb-4">
                                    <h6>Law <img src="/images/nav-icons/law.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                                    <a className="dropdown-item" href="#">Criminal Law</a>
                                    <a className="dropdown-item" href="#">Other</a>
                                </div>
                            </div>
                        </div>
                    </li> 
                    <li className="nav-item dmenu Writing_help_top dp_n">
                        <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Writing Help  </a>
                        <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#"><img src="/images/nav-icons/online-assignment-help.png" className="img-fluid" alt=""/> Assignment Help </a> 
                        </div>
                    </li>
                    <li className="nav-item dmenu float-right pt_sty dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="my_pics_img m-r-60 mt-0"><img src="/images/my-pics.jpg" alt="User" className="img-fluid"/></span></a>
                        <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#"> Dashboard</a>
                            <a className="dropdown-item" href="#"> My Orders</a>
                            <a className="dropdown-item" href="#"> My Profile</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt"></i> Logout </a> 
                        </div>
                    </li>

                    <div className="navbar_search" style={{display:"none"}}>
                        <form className="search-form">
                            <div className="input-group ml-0 pt-0">
                                <input type="text" className="form_search_control" placeholder="Search ISBN, textbook name or homework question here"/>
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                                </div>
                            </div>
                        </form><i className="fa fa-close close_btn_top"></i> 
                    </div>
            
                    <li className="dropdown float-right pt_sty">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                            <i className="zmdi zmdi-notifications"></i> 
                        </a>
                        <ul className="dropdown-menu pullDown">
                            <li className="body">
                                <ul className="menu list-unstyled">
                                    <li>
                                        <a href="#">
                                            <div className="media">
                                            <img className="media-object" src="/images/pic2.png" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Ashton Cox <span className="time">30min ago</span></span>
                                                    <span className="message">There are many variations of passages</span>                                        
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="media">
                                            <img className="media-object" src="/images/pic6.png" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Sophia <span className="time">31min ago</span></span>
                                                    <span className="message">There are many variations of passages of Lorem Ipsum</span>                                        
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="media">
                                            <img className="media-object" src="/images/pic4.png" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Isabella <span className="time">35min ago</span></span>
                                                    <span className="message">There are many variations of passages</span>                                        
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="media">
                                            <img className="media-object" src="/images/pic3.png" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Alexander <span className="time">35min ago</span></span>
                                                    <span className="message">Contrary to popular belief, Lorem Ipsum random</span>                                        
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="media">
                                            <img className="media-object" src="/images/pic1.png" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Grayson <span className="time">1hr ago</span></span>
                                                    <span className="message">There are many variations of passages</span>                                        
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="footer"> <a href="#">View All</a> </li>
                        </ul>
                    </li>
                    <li className="float-right search_btn_top">
                        <a href="#" className="mega-menu" data-close="true"><span className=""><i className="fa fa-search"></i></span></a>           
                    </li> 
                </ul>
            </nav>

            <div className="chat-launcher">
            </div>

            <div className="chat-wrapper">
                <div className="card">
                    <div className="header">
                        <ul className="list-unstyled team-info margin-0">
                            <li className="m-r-15">
                                <h2> Alexander</h2>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="chat-widget">
                            <ul className="chat-scroll-list clearfix">
                                <li className="left float-left">
                                    <img src="/images/pic1.png" className="rounded-circle" alt=""/>
                                    <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br/> John <br/> What are you doing?</span></div>
                                </li>
                                <li className="right">
                                    <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br/> How are you!</span> </div>
                                </li>
                                <li className="right">
                                    <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
                                </li>
                                <li className="left float-left">
                                    <img src="/images/pic1.png" className="rounded-circle" alt=""/>
                                    <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br/> John <br/> What are you doing?</span> </div>
                                </li>
                                <li className="left float-left">
                                    <img src="/images/pic2.png" className="rounded-circle" alt=""/>
                                    <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
                                </li>
                                <li className="right">
                                    <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br/>Michael</span> </div>
                                </li>
                            </ul>
                        </div>
                        <div className="input-group p-t-15">
                            <input type="text" className="form-control" placeholder="Enter text here..."/>
                            <span className="input-group-addon"><i className="zmdi zmdi-mail-send"></i></span>
                        </div>
                    </div>
                </div>
            </div>
	  </>
    )
}