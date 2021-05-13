import Link from 'next/link'
import { useState, useEffect } from 'react';
import { getNavbarData } from '../../../libs/home'
import { useQuery } from 'react-query'
import { MakeSlug } from '../../common/make-slug'
import { signOut } from 'next-auth/client'
import Router from 'next/router'
import { useSession } from 'next-auth/client'
import {getNotifications} from '../../../libs/question'

export default function DashboardNavbar({...props}){
    const [ showNotification, setShowNotification ] = useState(false);
    const [ showDropdown, setShowDropdown ] = useState(false);
    const [ classname, setClassname ] = useState('');
    const [showMenu,setShowMenu] = useState(false);
    const [showAMenu,setShowAMenu] = useState(false);
    const [ session, loading ] = useSession();
    
    async function SignOut () {
        localStorage.removeItem('access_token_student')
        localStorage.removeItem('refresh_token_student')
        localStorage.removeItem('student_name')
        localStorage.removeItem('student_email')
        // Router.push('login')
        // signOut({ callbackUrl: 'http://localhost:3000/auth/signin' });
        const data = await signOut({redirect: false, callbackUrl: "api/auth/signin"})
        Router.push(data.url)
    }

    const openNotification = () => {
        setShowNotification(true);
        setShowDropdown(false);
        setShowAMenu(false);
        setShowMenu(false);
        setClassname('show');   
    }

    const openDropdown = () => {
        setShowNotification(false);
        setShowDropdown(true);
        setShowAMenu(false);
        setShowMenu(false);
        setClassname('show');   
    }

    const openMenu = ()=>{
        setShowMenu(true);
        setShowAMenu(false);
        setShowNotification(false);
        setShowDropdown(false);
        setClassname('show');
    }

    const openMenuA = ()=>{
        setShowAMenu(true);
        setShowMenu(false);
        setShowNotification(false);
        setShowDropdown(false);
        setClassname('show');
    }

    const hideMenuA = ()=>{
        setShowAMenu(false);
        setClassname('show');
    }

    const hideDropdown = ()=>{
        setShowDropdown(false);
        setClassname('show');
    }

    const hideNotification = ()=>{
        setShowNotification(false);
        setClassname('show');
    }
  
    const hideMenu = ()=>{
        setShowMenu(false);
        setClassname('show');
    }

    const handleClick =()=>{
        hideMenu()
    }
    const isRead = 'all';
    const { data, isLoading } = useQuery('menus', getNavbarData,{ staleTime:Infinity})
    const { data: notifications, isLoading:notificationsIsLoading, error:notificationsError } = useQuery([`notifications-${isRead}`], () => getNotifications({user_Id : session.user._id, type: 'QA'}, isRead),{ staleTime : Infinity, enabled : !!session })

    return( <>
            <nav className="navbar navbar_dashboard1 p-l-5 p-r-5">
                <ul className="nav navbar-nav navbar-left nav_left1 mr-auto">
                    <li>
                        <div className="navbar-header">
                            {/* <Link href="/dashboard"><a href="#" className="bars"></a></Link> */}
                            <Link href="/"><a className="navbar-brand"><span className="m-l-60"><img src="/images/logo.png" className="img-fluid" alt="logo" width="100"/></span></a></Link>
                        </div>
                    </li>      
                </ul>
   
                <ul className="nav navbar-nav navbar-left nav_right1 ml-auto">
                    <li className="dp_n">
                        <Link href="/q-and-a">
                            <a className="mega-menu">Q and A</a>
                        </Link>           
                    </li>
                    <li className="nav-item megamenu-li dmenu dp_n" onMouseEnter={()=>{openMenu()}}>
                        <Link href="/textbook-solutions-manuals"><a className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions Manual  </a></Link>
                        {showMenu &&
                        <div className={`dropdown-menu megamenu sm-menu border-top ${classname}`} aria-labelledby="dropdown01"  onMouseLeave={()=>hideMenu()}>
                            <div className="row">
                                {data && data.map((item,key)=>{
                                    return(  
                                        <div className={`col-sm-6 nav_pding ${key % 2 == 1 ? 'nav_sm_menu_bg' : ''} col-lg-2 border-right mb-4`} key={key}>
                                            <Link href={`/textbook-solutions-manuals/${MakeSlug(item.subject)}`}><a><h6>{item.subject} <img src={`/images/nav-icons/${MakeSlug(item.subject)}.png`} className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6></a></Link>
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
                    <li className="nav-item dmenu Writing_help_top dp_n" onMouseEnter={()=>{openMenuA()}}>
                        <Link href="/writing-help"><a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Writing Help
                        </a></Link>
                        {showAMenu && 
                        <div className={`dropdown-menu sm-menu ${classname}`} aria-labelledby="navbarDropdown" onMouseLeave={()=>hideMenuA()}>
                            <Link href="/writing/online-assignment-help"><a className="dropdown-item"><img src="/images/nav-icons/online-assignment-help.png" className="img-fluid" alt=""/> Assignment Help </a></Link>
                        </div>}
                    </li>
                    <li className={`nav-item dmenu float-right pt_sty dropdown ${classname}`} onMouseEnter={openDropdown}>
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="my_pics_img m-r-60 mt-0"><img src={props.data && props.data.img ? props.data.img : "/images/profile_av.jpg"} alt="User" className="img-fluid"/></span></a>
                        {showDropdown && <><div className={`dropdown-menu sm-menu ${classname}`} aria-labelledby="navbarDropdown" onMouseLeave={()=>{hideDropdown()}}>
                            <Link href="/dashboard"><a className="dropdown-item" href="#"> Dashboard</a></Link>
                            <Link href="/user/my-orders"><a className="dropdown-item" href="#"> My Orders</a></Link>
                            <Link href="/user/my-profile"><a className="dropdown-item" href="#"> My Profile</a></Link>
                            <a className="dropdown-item" href="#" onClick={SignOut}><i className="fas fa-sign-out-alt"></i> Logout </a>
                        </div></>}
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
                    
                    <li className={`dropdown float-right pt_sty ${classname}`}>
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" onMouseEnter={()=>{openNotification()}}>
                            <i className="fa fa-bell zmdi zmdi-notifications"></i> 
                        </a>
                        {showNotification &&
                        <ul className={`dropdown-menu pullDown ${classname}`} onMouseLeave={()=>{hideNotification()}}>
                            <li className="body">
                                <ul className="menu list-unstyled">
                                    {notifications && notifications.data.map((item,key)=>{
                                        return(
                                            <li key={key}>
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
                                        )
                                    })}
                                </ul>
                            </li>
                            <li className="footer"> <a href="#">View All</a> </li>
                        </ul>}
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