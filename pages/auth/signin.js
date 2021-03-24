import { csrfToken, Provider } from 'next-auth/client'
import { providers, signIn } from 'next-auth/client'
import { useRef, useState } from 'react';
import NewNavbar from '../../components/common/new-navbar-login-signup'
import {useEffect} from 'react'
import { useSession } from 'next-auth/client'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'


export default function SignIn({ csrfToken, providers }) {
	const [ session, loading ] = useSession();
	const [success, setSuccess] = useState(null);
	const [loader, setLoader] = useState(false);
	const [disabled, setDisabled] = useState(true)
	const [error, setError] = useState(null);

	const router = useRouter()
	const emailRef = useRef();
	const passwordRef = useRef();
 	
	useEffect(() => {
		if (session && session.expires){
			Router.push('/dashboard')
		}
	}, [session])

	// useEffect(() => {
	// 	
	// 	return () => {
	// 		setSuccess(null);
	// 	}
	// }, [success, router.query])

	

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
			setLoader(true);
			const response = await signIn('credentials',{ email, password, callbackUrl: `${window.location.origin}/dashboard`})
			if(response && response.error != null){
				setError("Email or password not matched");
				setLoader(false);
				// localStorage.setItem('access_token_student', user.accessToken)
				// localStorage.setItem('refresh_token_student', user.refreshToken);
				// localStorage.setItem('student_name', user.student.fullname);
				// localStorage.setItem('student_email', user.student.email);
			}
		}
	}

	const agreePolicy = (e)=>{
		if(e.target.checked){
			setDisabled(false);
		}else{
			setDisabled(true);
		}
	}

return (
    <>
		<NewNavbar/>

		<section className="login_banner pt-5 pb-5"> 
			<div className="container">
				<div className="row"> 
					<div className="col-md-5 ml-auto text-center">
						<div className="all_banner_text mt-5 login_banner_text"> 
							<h2 className="font-30">ONLY ONE STEP AWAY FROM UNLIMITED Q&A, SOLUTIONS MANUAL </h2> 
							<p>Sign In/Sign Up and get instant, Unlimited access to Academic Help at just $7/month!</p>
							<img src="/images/logo1.png" className="img-fluid" alt="logo"/> 
						</div>
					</div>
					<div className="col-md-5 ml-auto"> 
						{/* <form className="row form_banner form_banner_login" method='post' action='/api/auth/callback/credentials'> */}
						<form className="row form_banner form_banner_login" method='post' onSubmit={submitForm}>
							<input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
							<div className="col-md-12 bg_form_login">
								<div className="col-md-12">
									<h2><span>Sign In</span></h2>
								</div>
							
								<div className="form-group col-md-12"> 
									<input type="text" className="form-control" ref={emailRef} placeholder="Email" name="email"/> 
								</div>

								<div className="form-group col-md-12"> 
										<input type="password" className="form-control" ref={passwordRef} placeholder="password" name="password"/> 
								</div>
							
								<div className="col-md-12">
									<div className="row"> 
										<div className="form-group col-md-6 Remember_me"> 
											<div className="form-check">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value=""/>
													<span>Remember me</span>
												</label>
											</div>
										</div>
										<div className="form-group text-right forgot_passw col-md-6"> 
											<a href="#">Forgot password?</a> 
										</div>
									</div> 
								</div>
							
					
							<div className="form-group col-md-12 text-center signin_btn1"> 
							{error && (<p style={{ color: 'red', margin: '0px' }}>{error}</p>)} 
							{success && (<p style={{ color: 'green', margin: '0px' }}>{success}</p>)} 
								<button type="submit" className="btn form-control" disabled={disabled}> {loader ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Sign In'}</button> 
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
									{/* <div key={provider.name}>
										 	<button onClick={() => signIn(provider.id, {callbackUrl : 'http://localhost:3000/dashboard'})}>Sign in with {provider.name}</button>
										</div> */}
									{/* <li><a href="#" className="google_link"><i className="fa fa-google"></i> Google</a></li>
									<li><a href="#" className="facebook_link"><i className="fa fa-facebook"></i> Facebook</a></li> */}
								</ul> 
							</div>
							<div className="col-md-12 text-center">
								<div className="sign_up_link">
									Don't have an account? <Link href="/auth/signup"><a>Sign Up here</a></Link>
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

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context),
    providers: await providers()
  }
}
