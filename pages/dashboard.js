import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import Follow from '../components/website/home/follow'
import Link from 'next/link'
import {useEffect, useState} from 'react';
import Router from 'next/router'

const SignOut = () => {
    console.log("removing...")
    localStorage.removeItem('access_token_student')
    localStorage.removeItem('refresh_token_student')
    localStorage.removeItem('student_name')
    localStorage.removeItem('student_email')
    Router.push('login')
}



export default function  Dashboard() {
    
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