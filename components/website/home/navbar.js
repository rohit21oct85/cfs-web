import {useState} from 'react';
import Link from 'next/link'

export default function Navbar() {

    const [showMenu,setShowMenu] = useState(false);
    const [showAMenu,setShowAMenu] = useState(false);
    const [classname, setClassname] = useState('');
    
    const openMenu = ()=>{
        setShowMenu(true);
        setShowAMenu(false);
        setClassname('show');
    }

    const openMenuA = ()=>{
        setShowAMenu(true);
        setShowMenu(false);
        setClassname('show');
    }

    const hideMenuA = ()=>{
        setShowAMenu(false);
        setClassname('show');
    }

    const hideMenu = ()=>{
        setShowMenu(false);
        setClassname('show');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container">
                <Link href="/"><a className="navbar-brand"><img src="../images/logo.png" className="img-fluid" alt="logo"/></a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile_nav" aria-controls="mobile_nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> 
                </button>
                <div className="collapse navbar-collapse" id="mobile_nav">
            
                <ul className="navbar-nav navbar-light ml-auto">
                    <li className="nav-item">
                        <Link href="/q-and-a">
                            <a className="nav-link">Q and A</a>
                        </Link>
                    </li>  
                    <li className="nav-item dropdown megamenu-li dmenu" onMouseEnter={()=>{openMenu()}}>
                        <a className="nav-link dropdown-toggle" href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions Manual  </a>
                        {showMenu &&
                        <div className={`dropdown-menu megamenu sm-menu border-top ${classname}`} aria-labelledby="dropdown01"  onMouseLeave={()=>hideMenu()}>
                            <div className="row">
                                <div className="col-sm-6 nav_pding col-lg-2 border-right mb-4">
                                    <h6>Business <img src="../images/nav-icons/bussiness.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
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
                                    <h6>Engineering <img src="../images/nav-icons/engineering.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
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
                                    <h6>Maths <img src="../images/nav-icons/maths.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
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
                                    <h6>Science <img src="../images/nav-icons/science.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                                    <a className="dropdown-item" href="#">Advanced Physics</a>
                                    <a className="dropdown-item" href="#">Biochemistry</a>
                                    <a className="dropdown-item" href="#">Biology</a>
                                    <a className="dropdown-item" href="#">Chemistry</a>
                                    <a className="dropdown-item" href="#">Earth Science</a>
                                    <a className="dropdown-item" href="#">Health & Nutrition</a>
                                    <a className="dropdown-item" href="#">Nursing</a>
                                    <a className="dropdown-item" href="#">Physics</a>
                                    <a className="dropdown-item" href="#">Other</a>
                                </div>
                                
                                <div className="col-sm-6 nav_pding col-lg-2 border-right mb-4">
                                    <h6>Social Science <img src="../images/nav-icons/social-science.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                                    <a className="dropdown-item" href="#">Anthropology</a>
                                    <a className="dropdown-item" href="#">Psychology</a>
                                    <a className="dropdown-item" href="#">Sociology</a>
                                    <a className="dropdown-item" href="#">Other</a>
                                    <a className="dropdown-item" href="#">Music</a>
                                </div>
                                
                                <div className="col-sm-6 col-lg-2 nav_pding nav_sm_menu_bg mb-4">
                                    <h6>Law <img src="../images/nav-icons/law.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                                    <a className="dropdown-item" href="#">Criminal Law</a>
                                    <a className="dropdown-item" href="#">Other</a>
                                </div>
                            </div>
                        </div>
                        }
                    </li> 
                    <li className="nav-item dmenu dropdown" onMouseEnter={()=>{openMenuA()}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Writing Help
                        </a>
                        {showAMenu && 
                        <div className={`dropdown-menu sm-menu ${classname}`} aria-labelledby="navbarDropdown" onMouseLeave={()=>hideMenuA()}>
                            <a className="dropdown-item" href="#"><img src="../images/nav-icons/online-assignment-help.png" className="img-fluid" alt=""/> Assignment Help </a> 
                        </div>}
                    </li>
                    <li className="nav-item login_signup_top"><Link href="/login"><a className="nav-link">Login / Signup <i className="fa fa-user"></i></a></Link></li> 
        
                </ul>
                </div>
            </div>
        </nav> 
    )
}
  