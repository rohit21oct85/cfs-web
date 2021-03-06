import { csrfToken, Provider } from 'next-auth/client'
import { providers, signIn } from 'next-auth/client'
import { useRef, useState } from 'react';
import NewNavbar from '../../components/common/new-navbar-login-signup'
import {useEffect} from 'react'
import { useSession } from 'next-auth/client'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import {sendResetEmail, verifyOtp, changePassword} from '../../libs/auth'
export default function SignIn({ csrfToken, providers }) {
	
	const [ session, loading ] = useSession();
	const [success, setSuccess] = useState(null);
	const [loader, setLoader] = useState(false);
	const [disabled, setDisabled] = useState(false)
	const [error, setError] = useState(null);
	const [userid, setUserId] = useState(null);
	const [whichSegment, setWhichSegment] = useState('signin');
	const [otp, setOtp] = useState();
	const [checkedState, setCheckedState] = useState(true);
	const [code, setCode] = useState({
		1: "",
		2: "",
		3: "",
		4: "",
	  });

	const router = useRouter()
	const emailRef = useRef();
	const passwordRef = useRef();
	const forgotEmailRef = useRef();
	const chPRef = useRef();
	const conchPRef = useRef();
 	
	useEffect(() => {
		// console.log(session)
		// if (session && session.expires){
		// 	Router.push('/dashboard')
		// }
	}, [session])

	useEffect(() => {
		let timerError = setTimeout(() => setError(''), 3000);
		return () => {
			clearTimeout(timerError);
		}
	}, [error])

	let redirectUrl = `${process.env.NEXTAUTH_URL}/dashboard`;
	console.log('redirect-url',redirectUrl);
	useEffect(() => {
		const url = new URL(location.href);
		redirectUrl = url.searchParams.get("callbackUrl");
	});

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
			const response = await signIn('credentials',{ email, password, callbackUrl : redirectUrl})
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

	const forgot = (e) =>{
		setWhichSegment('email-link')
	}

	const agreePolicy = (e)=>{
		console.log(e.target.checked)
		if(e.target.checked){
			setCheckedState(true)
			setDisabled(false);
		}else{
			setCheckedState(false)
			setDisabled(true);
		}
	}

	const sendForgotEmail = async (e) =>{
		e.preventDefault();
		const email = forgotEmailRef.current.value;
		const res = await sendResetEmail(email);
		if(res.status == 200){
			setWhichSegment('otp');
			setError("Reset Code Sent to your Email Id");
		}else{
			setError("User Email not Found");
		}
	}
	const onchangeReset = (e) =>{
		setCode({...code , [e.target.name] : e.target.value})
	}

	const handleResetCode = async (e) =>{
		e.preventDefault();
		setOtp(code['1']+code['2']+code['3']+code['4'])
		const res = await verifyOtp(otp);
		if(res.status == 200){
			setUserId(res.data.userId);
			setWhichSegment('change-p');
			setError("OTP matched");
		}else{
			setError("otp doesnt match");
		}
	}

	const changePasswordT = async(e) =>{
		e.preventDefault();
		const changeP = chPRef.current.value;
		const confirmchangeP = conchPRef.current.value;
		var n = changeP.localeCompare(confirmchangeP);
		if(n != 0){
			setError('password mismatch')
		}else{
			const res =  await changePassword(changeP, userid, otp)
			if(res.status == 200){
				setWhichSegment('success');
				setError("password chnaged successfully");
			}else{
				setError("password couldnt be changed");
			}
		}
	}

	const setSignin = async()=>{
		setWhichSegment('signin')
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
					<div className="col-md-5 ml-auto" style={{display: whichSegment == 'signin' ? 'block' : 'none' }}> 
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
											<a href="#" onClick={()=>{forgot()}}>Forgot password?</a> 
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
										<input type="checkbox" className="form-check-input" checked={checkedState} onChange={agreePolicy}/> By Signing in you agree to our <span> Conditions of Use and Privacy Notice.</span>
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
												{/* <a href="#" className={`${provider.id}_link`} onClick={(e) => { e.preventDefault(); signIn(provider.id, {callbackUrl : `${process.env.NEXTAUTH_URL}/dashboard`})}}> */}
												{console.log(redirectUrl)}
												<a href="#" className={`${provider.id}_link`} onClick={(e) => { e.preventDefault(); signIn(provider.id,{ callbackUrl : redirectUrl })}}>
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
					<div id="forGotPass1" className="show_signin col-md-5 ml-auto" style={{display: whichSegment == 'email-link' ? 'block' : 'none',marginBottom:"70px"}}>
							<div className="bg_clr_frgot"> 
								<h4  className="modal-title text-center">Forgot<span> password?</span> </h4>
								<p className="sub_headings text-center">Please Enter Your Registered Email ID</p>
								<form action="" onSubmit={sendForgotEmail} method="post" className="login-register cool-b4-form" style={{float:"inherit"}}>
									<div className="row">
										<div className="col-md-12">
											<div className="form-group bdr_log_up mb-3"> 
													<input type="email" ref={forgotEmailRef} className="form-control" required placeholder="Enter Your Email ID"/> 
													<span  className="error">{error}</span>
											</div>
										</div>
										<div className="col-md-12 mt-4">
											<button type="submit" className="btn btn-block btn-danger btn-login buttons" id="submitMobile" >Submit</button>
										</div>
									</div>
								</form>
							</div>
						</div>

						<div id="verifyOTPdata" onSubmit={handleResetCode} className="show_signin" style={{display:whichSegment == 'otp' ? 'block' : 'none',marginBottom:"15px"}}>
							<div className="bg_clr_frgot">
								<h4  className="modal-title text-center">Verify Your <span> Email ID</span> </h4>
								<p className="sub_headings text-center">4 digit Verification Code has been sent to <br/> Your registered Email ID</p>
								<form action="" className="login-register cool-b4-form" style={{float:"inherit"}}>
									<div className="row">
									<div className="col-md-12 mb-3">
										<div className="form-group otpVerify">
											<input type="text" required className="" maxLength="1" id="one" placeholder="" name="1" onChange={(e)=>onchangeReset(e)}/>
											<input type="text" required className="" maxLength="1" id="two" placeholder="" name="2" onChange={(e)=>onchangeReset(e)}/>
											<input type="text" required className="" maxLength="1" id="three" placeholder="" name="3" onChange={(e)=>onchangeReset(e)}/>
											<input type="text" required className="" maxLength="1" id="four" placeholder="" name="4" onChange={(e)=>onchangeReset(e)}/>
										</div>
										<span className="error">{error}</span>
									</div>
									<div className="col-md-12">
										<button type="submit" className="btn btn-block btn-danger btn-login buttons" id="submitCode">Submit</button>
									</div>
									<div className="col-md-12">
										<p className="text-center resendOtp"><a href="" className="link-anchor">Resend Verification Code</a></p>
									</div>
									</div>
								</form>
							</div>
						</div>

						<div id="changePassword" onSubmit={changePasswordT} className="show_signin" style={{display:whichSegment == 'change-p' ? 'block' : 'none',marginBottom:"15px"}}>
							<div className="bg_clr_frgot">
								<h4  className="modal-title text-center"> Change<span> Password?</span> </h4>
								<p className="sub_headings text-center">Please Enter New Password</p>
								<form action="" className="login-register cool-b4-form" style={{float:"inherit"}}>
									<div className="row">
										<div className="col-md-12">
											<div className="form-group bdr_log_up"> 
												<input type="password" className="form-control" name="chnageP" ref={chPRef} required placeholder="New Password"/>  
												{/* <span  className="error">Please Enter Password</span> */}
												<span className="fa fa-eye field-icon toggle-password"></span>
											</div>
										</div>
										<div className="col-md-12 mb-4">
											<div className="form-group bdr_log_up"> 
												<input type="password" className="form-control" name="confirmchangeP" required ref={conchPRef} placeholder="Confirm Password"/> 
												<span  className="error">{error}</span>
												<span className="fa fa-eye field-icon toggle-password"></span>
											</div>
										</div>
										<div className="col-md-12 mt-4">
											<button type="submit" className="btn btn-block btn-danger btn-login buttons" id="confirmPass">Submit</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div id="successChanged" className="show_signin" style={{display:whichSegment == 'success' ? 'block' : 'none',marginBottom:"15px"}}>
							<div className="bg_clr_frgot">
								<div className="congratulation_text text-center">
									<img src="/images/like.png" className="img-fluid mb-2" alt=""/>
									<h4  className="modal-title text-center">Password Changed <span>Successfully </span></h4>
									<div className="col-md-12">
										<button type="button" className="btn btn-block btn-danger btn-login buttons" id="LoginAgain" style={{margin:"13px 0px",textTransform: "none"}} onClick={setSignin}>Click here to Login</button>
									</div>
								</div>              
							</div>
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

// export async function getServerSideProps(context){
// 	const providers = await providers()
// 	return {
// 	  props: { providers }
// 	}
// }