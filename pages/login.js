import { useRef, useState } from 'react';
import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import Follow from '../components/website/home/follow'
import { setLogin } from '../libs/auth'
import Router from 'next/router'

export default function Login() {
    const [error, setError] = useState(null);
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(email === ''){
            setError("Please enter email address");
            return false;
        }else if(password === ''){
            setError("Please enter password");
            return false;
        }else{
            setLoading(true);
            const formData = {email: emailRef.current.value , password: passwordRef.current.value};

            const response = await setLogin(formData);
            console.log(response)
            if(response.response && response.response.status !=200 ){
                setError("Email or password not matched");
                setLoading(false);
            }else{            
                // let isLoggedIn = true;
                localStorage.setItem('access_token_student', response.data.accessToken)
                localStorage.setItem('refresh_token_student', response.data.refreshToken);
                localStorage.setItem('student_name', response.data.student.fullname);
                localStorage.setItem('student_email', email);
                console.log(localStorage.getItem('access_token_student'));
                setTimeout(()=>{
                    Router.push('dashboard')
                },4000);
            }
        }
        
    }
    
    return(
        <>
            <Header/>
            <Navbar/>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" ref={emailRef} id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" ref={passwordRef} id="exampleInputPassword1" name="password"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                {error && (<p style={{ color: 'red', margin: '0px' }}>{error}</p>)} 
                <button type="submit" className="btn btn-primary">
                    {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Submit'}
                </button>
            </form>
            <Follow/>
            <Footer/>
        </>
    )
}