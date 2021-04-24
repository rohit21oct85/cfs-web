import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import { getNavbarData } from '../../../libs/home'
import { useQuery } from 'react-query'
import { MakeSlug } from '../../common/make-slug'
import { useSession } from 'next-auth/client'

export default function Navbar() {
    const router = useRouter();
    const [showMenu,setShowMenu] = useState(false);
    const [showAMenu,setShowAMenu] = useState(false);
    const [classname, setClassname] = useState('');
    const [mobileMenuClass, setMobileMenuClass] = useState('');
    const [ session, loading ] = useSession();

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
        if(router.pathname !== '/' && router.pathname !== '/paynow'){
            setHomePClass('bg_white_nav')
            setHomePImage('logo_w.jpg')
        }
        return () => {
        }
    }, [])    

    const { data, isLoading } = useQuery('menus', getNavbarData, {staleTime:Infinity})
    
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
                        <Link href="/textbook-solutions-manuals"><a className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions Manual  </a></Link>
                        {showMenu &&
                        <div className={`dropdown-menu megamenu sm-menu border-top ${classname}`} aria-labelledby="dropdown01"  onMouseLeave={()=>hideMenu()}>
                            <div className="row">
                                {data && data.map((item,key)=>{
                                    return(  
                                        <div className={`col-sm-6 nav_pding ${key % 2 == 1 ? 'nav_sm_menu_bg' : ''} col-lg-2 border-right mb-4`} key={key}>
                                            {/* <h6>{item.subject} <img src={`/images/nav-icons/${item.subject.toLowerCase().replace(/ /g,"-")}.png`} className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6> */}
                                            <Link href={`/textbook-solutions-manuals/${MakeSlug(item.subject)}`}><a><h6>{item.subject} <img src={`/images/nav-icons/${item.subject.toLowerCase().replace(/ /g,"-")}.png`} className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6></a></Link>
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
                        <Link href="/writing-help"><a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Writing Help
                        </a></Link>
                        {showAMenu && 
                        <div className={`dropdown-menu sm-menu ${classname}`} aria-labelledby="navbarDropdown" onMouseLeave={()=>hideMenuA()}>
                            <Link href="/writing/online-assignment-help"><a className="dropdown-item"><img src="/images/nav-icons/online-assignment-help.png" className="img-fluid" alt=""/> Assignment Help </a></Link>
                        </div>}
                    </li>
                    {session !== undefined && !session 
                    ?
                    <li className="nav-item login_signup_top"><Link href="/auth/signin"><a className="nav-link">Login / Signup <i className="fa fa-user"></i></a></Link></li>
                    : 
                    <li className="nav-item login_signup_top"><Link href="/user/my-profile"><a className="nav-link">My Profile <i className="fa fa-user"></i></a></Link></li>
                    } 
                </ul>
                </div>
            </div>
        </nav> 
        </>
    )
}
  