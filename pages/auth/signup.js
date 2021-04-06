import NewNavbar from '../../components/common/new-navbar-login-signup'
import Link from 'next/link'
import { providers, signIn } from 'next-auth/client'
import { useRef, useState } from 'react';
import {setSignUp}  from '../../libs/auth'
import Router from 'next/router'

export default function  SignUp({providers}) {
    const [error, setError] = useState(null);
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const schoolRef = useRef();

    const [loader, setLoader] = useState(false);
    const [disabled, setDisabled] = useState(true)

    const agreePolicy = (e)=>{
		if(e.target.checked){
			setDisabled(false);
		}else{
			setDisabled(true);
		}
	}

    async function SignUp(e) {
        e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const name = nameRef.current.value;
		const school = schoolRef.current.value;

        if(name === ''){
            setError("Please enter name");
			return false;
        }else if(email === ''){
			setError("Please enter email address");
			return false;
		}else if(password === ''){
			setError("Please enter password");
			return false;
		}else if(school === ''){
            setError("Please enter school");
			return false;
        }else{
            setLoader(true);
            const res = await setSignUp(
                    {
                        'fullname':name,
                        'email':email,
                        'password':password,
                        'school':school
                    });
            if(res === 409){
                setError("User with the same email already exists");
                setLoader(false);
			    return false;
            }else if(res && res.status === 200){
                Router.push({
                    pathname: '/auth/signin',
                    query: { signup: true }
                })
            }
        }



    }

    return(
        <>
            <NewNavbar/>
            
            <section className="login_banner pt-5 pb-5"> 
                <div className="container">
                <div className="row"> 
                    <div className="col-md-5 ml-auto text-center">
                    <div className="all_banner_text mt-5 login_banner_text"> 
                        <h2 className="font-30">Only one step away from unlimited Q&A and solutions manual </h2> 
                        <p>Register and verify your details to gain access to step-by-step solutions to over 45000 books. </p>
                        <img src="/images/logo1.png" className="img-fluid" alt="logo"/> 
                    </div>
                    </div>
                    <div className="col-md-5 ml-auto"> 
                    <form className="row form_banner form_banner_login" method="post" onSubmit={SignUp}>
                    <div className="col-md-12 bg_form_login">
                    <div className="col-md-12">
                    <h2><span>Sign Up</span></h2>
                    </div>
                <div className="form-group col-md-12"> 
                    <input type="name" className="form-control" ref={nameRef} placeholder="Full Name"/> 
                </div>
                <div className="form-group col-md-12"> 
                    <input type="email" className="form-control"  ref={emailRef} placeholder="Email"/> 
                </div>
                <div className="form-group col-md-12"> 
                    <input type="password" className="form-control" ref={passwordRef} placeholder="password"/> 
                </div>
                <div className="form-group col-md-12"> 
                    <input type="text" className="form-control" ref={schoolRef} placeholder="College / School"/> 
                </div> 
                
                <div className="form-group col-md-12 text-center signin_btn1"> 
                {error && (<p style={{ color: 'red', margin: '0px' }}>{error}</p>)} 
                    <button type="submit" className="btn form-control" disabled={disabled}>{loader ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Sign Up'}</button> 
                </div>
                
                <div className="form-group col-md-12 trems_privacy text-center"> 
                <div className="form-check">
                <label className="form-check-label">
                <input type="checkbox" className="form-check-input" value="" onChange={agreePolicy}/> By clicking on "Sign In" you're agreeing to ou <span>Terms of Use & Privacy.</span>
                </label>
                </div>
                </div>

                <div className="col-md-12 text-center">
                <div className="or_bodr1">
                <span>or</span>
                </div>
                </div>
                
                <div className="col-md-12 text-center social_link_banner">
                <ul>

                {Object.values(providers).map(provider => (
                        <span key={provider.id}>
                        {provider.id === "credentials" ? <span></span> :
                            <li key={provider.name}>
                                <a href="#" className={`${provider.id}_link`} onClick={(e) => { e.preventDefault(); signIn(provider.id, {callbackUrl : 'http://localhost:3000/dashboard'})}}>
                                    <i className={`fa fa-${provider.id}`}></i> {provider.name}
                                </a>
                            </li>
                        }
                        </span>
                    ))}

                </ul> 
                </div>
                <div className="col-md-12 text-center">
                <div className="sign_up_link">
                Already have an account? <Link href="/auth/signin"><a>Sign In here</a></Link>
                </div>
                </div>
                </div>
                </form>
                    
                    </div>
                </div>
                </div>
                </section>

        </>
    )
}

SignUp.getInitialProps = async (context) => {
    return {
      providers: await providers()
    }
  }
  