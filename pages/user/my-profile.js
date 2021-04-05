import DashboardNavbar from '../../components/website/dashboard/dashobard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import Link from 'next/link'
import {useEffect, useState} from 'react';
import Router from 'next/router'
import { useSession } from 'next-auth/client'
import AccessDenied from '../../components/access-denied'
import { signOut } from 'next-auth/client'

async function SignOut () {
    console.log("removing...")
    localStorage.removeItem('access_token_student')
    localStorage.removeItem('refresh_token_student')
    localStorage.removeItem('student_name')
    localStorage.removeItem('student_email')
    // Router.push('login')
    // signOut({ callbackUrl: 'http://localhost:3000/auth/signin' });
    const data = await signOut({redirect: false, callbackUrl: "/auth/signin"})
    Router.push(data.url)
}



export default function  MyProfile() {
    const [ session, loading ] = useSession()
    console.log(session)
    // const [user,setUser] = useState(null);
    
    // useEffect(() => {
    //     setUser(localStorage.getItem('access_token_student'))
    //     return () => {
    //     }
    // }, [])

    // Server-render loading state
    // if (!user) {
    //     return <span>Loading...</span>
    // }
    if (!session) { return  (<><AccessDenied/></>) }
    

    return (
        <>
            <DashboardNavbar/>
            <SideBar/>
            <h1>Profile</h1>
            <Link href="#"><a onClick={SignOut}>SignOut</a></Link>

        </>
    )
}