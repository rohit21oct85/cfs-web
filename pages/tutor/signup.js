import React, {useState, useEffect, useRef, useContext} from 'react';
// import {useHistory} from 'react-router-dom';
import  {setSignup}  from '../api/auth'
import Link from 'next/link'
import Router from 'next/router'

export default function SignUp(){
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();
    const lnameRef = useRef();
    const fnameRef = useRef();

    // const history = useHistory();

    async function submitForm(e){
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const lname = lnameRef.current.value;
        const fname = fnameRef.current.value;
        if(email === ''){
            setError("Please enter email address");
            return false;
        }else if(password === ''){
            setError("Please enter password");
            return false;
        }else if(fname === ''){
            setError("Please enter first name");
            return false;
        }else if(lname === ''){
            setError("Please enter last name");
            return false;
        }else{
            setLoading(true);
            const formData = {  email: emailRef.current.value , password: passwordRef.current.value,
                                lname : lnameRef.current.value, fname : fnameRef.current.value
                            };
            const response = await setSignup(formData)
            if(response.status === 200){
                Router.push('/');
                setLoading(true);
            }
            if(response.status === 409){
                setLoading(true);
                setError("User with same email already present");
            }
        }    
    }

    useEffect( () => {
        let timer1 = setTimeout(() => setError(null), 2500);
        return () => {
        clearTimeout(timer1)
        }
    },[error]);

    return(
        <div className="container">
            <div className="row col-md-4" style={{ margin: '15vh auto' }}>
                <div className="card p-3">
                <h4 className="mt-1 mb-1">Register</h4>
                <hr className="mt-1 mb-2"/>
                <form onSubmit={submitForm}>
                    {error && (<p style={{ color: 'red', margin: '0px' }}>{error}</p>)}
                    <div className="mb-3">
                        <label htmlFor="exampleInputFname1" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="exampleInputFname1" aria-describedby="fnameHelp" ref={fnameRef}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputLname1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="exampleInputLname1" aria-describedby="lnameHelp" ref={lnameRef}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef}/>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">{loading ? <span>signing in...</span> : 'Signup'}</button>
                        <span style={{float:"right"}}>Already have an account? <Link href="/tutor/login" style={{textDecoration: "none"}}>Login</Link></span>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}