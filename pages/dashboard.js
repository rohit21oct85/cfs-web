import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import Follow from '../components/website/home/follow'
import Link from 'next/link'
import {useEffect, useState} from 'react';
import Router from 'next/router'
import { useSession } from 'next-auth/client'
import AccessDenied from '../components/access-denied'
import { signOut } from 'next-auth/client'

async function SignOut () {
    localStorage.removeItem('access_token_student')
    localStorage.removeItem('refresh_token_student')
    localStorage.removeItem('student_name')
    localStorage.removeItem('student_email')
    // Router.push('login')
    // signOut({ callbackUrl: 'http://localhost:3000/auth/signin' });
    const data = await signOut({redirect: false, callbackUrl: "/auth/signin"})
    Router.push(data.url)
}



export default function  Dashboard() {
    const [ session, loading ] = useSession()

    if (!session) { return  (<><AccessDenied/></>) }
    
    return (
        <>
            <Header/>
            <Navbar/>
            <h1>Dashboard</h1>
            <Link href="#"><a onClick={SignOut}>SignOut</a></Link>
            <Follow/>
            <Footer/>
        </>
    )
}