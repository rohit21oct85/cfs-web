import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import { getNavbarData } from '../../../libs/home'
import { useQuery } from 'react-query'
import { MakeSlug } from '../../common/make-slug'

export default function Navbar() {
    const router = useRouter();
    const [showMenu,setShowMenu] = useState(false);
    const [showAMenu,setShowAMenu] = useState(false);
    const [classname, setClassname] = useState('');
    const [mobileMenuClass, setMobileMenuClass] = useState('');
    
    const showMobileMenu = ()=>{
        if(mobileMenuClass === 'show'){
            setMobileMenuClass('')
        }else{
            setMobileMenuClass('show')
        }
        
    }

    const handleClick =()=>{
        hideMenu()
    }

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
    const [homePClass, setHomePClass] = useState('');
    const [homePImage, setHomePImage] = useState('logo.png');
    
    useEffect(() => {
        if(router.pathname !== '/'){
            setHomePClass('bg_white_nav')
            setHomePImage('logo_w.jpg')
        }
        return () => {
        }
    }, [])    

    const { data, isLoading } = useQuery('menus', getNavbarData,{ staleTime:Infinity})
    
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-light sticky-top ${homePClass}`}>
            <div className="container">
                <Link href="/"><a className="navbar-brand"><img src={`/images/${homePImage}`} className="img-fluid" alt="logo"/></a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={showMobileMenu} data-target="#mobile_nav" aria-controls="mobile_nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> 
                </button>
                <div className={`collapse navbar-collapse ${mobileMenuClass}`} id="mobile_nav">
            
                {/* <ul className="navbar-nav navbar-light ml-auto"> */}
                <ul className="navbar-nav ml-auto">
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
                                {data && data.map((item,key)=>{
                                    return(  
                                        <div className={`col-sm-6 nav_pding ${key % 2 == 1 ? 'nav_sm_menu_bg' : ''} col-lg-2 border-right mb-4`} key={key}>
                                            <h6>{item.subject} <img src={`/images/nav-icons/${item.subject.toLowerCase().replace(/ /g,"-")}.png`} className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                                            {item.sub_subject.map((it,key)=>{
                                                return <Link href={`/textbook-solutions-manuals/${MakeSlug(item.subject)+'/'+MakeSlug(it.sub_subject)}`} key={key}><a className="dropdown-item" onClick={handleClick}>{it.sub_subject}</a></Link>
                                                // return <Link href={{pathname:`${'textbook-solutions-manuals/'+item.subject.toLowerCase().replace(/ /g,"-")+'/'+it.sub_subject.toLowerCase().replace(/ /g,"-")}`}} key={key}><a className="dropdown-item">{it.sub_subject}</a></Link>
                                                // return <Link href={{pathname: 'textbook-solutions-manuals', query: {subject: item.subject.toLowerCase().replace(/ /g,"-"), sub_subject_name:it.sub_subject.toLowerCase().replace(/ /g,"-")} }} key={key}><a className="dropdown-item">{it.sub_subject}</a></Link>
                                            })}
                                        </div> 
                                    )
                                })}
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
                            <Link href="/writing/online-assignment-help"><a className="dropdown-item"><img src="/images/nav-icons/online-assignment-help.png" className="img-fluid" alt=""/> Assignment Help </a></Link>
                        </div>}
                    </li>
                    <li className="nav-item login_signup_top"><Link href="/auth/signin"><a className="nav-link">Login / Signup <i className="fa fa-user"></i></a></Link></li> 
                    
                    {/* <li className="nav-item dmenu float-right pt_sty dropdown">
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
                        </form>
                        <i className="fa fa-close close_btn_top"></i> 
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
                    </li>  */}
                </ul>
                </div>
            </div>
        </nav> 
        </>
    )
}
  