import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import BlockHeader from '../../components/website/dashboard/block-header'
import SideBar from '../../components/website/dashboard/sidebar'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import AccessDenied from '../../components/access-denied'
import { signOut } from 'next-auth/client'
import Router from 'next/router'
import {useState ,useEffect} from 'react'
import { useQuery } from 'react-query'
import {getCountries,getUser,editUserProfile} from '../../libs/profile'

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
    const [loader, setLoader ] = useState()
    const [formData, setFormData] = useState({
        fullname: '',
        dob:'',
        Country: '',
        Zipcode: '',
        Address: '',
        college: '',
        Contact: '',
        img:"",
    });
    const { data: user, isLoading:userIsLoading, error:userError } = useQuery(['user-profile'], () => getUser({email:session.user.email}),{staleTime:Infinity, enabled: !!session})
    const { data: countries, isLoading:countriesIsLoading, error:countriesError } = useQuery(['country-list'], () => getCountries(),{staleTime:Infinity})
    
    useEffect(()=>{
        if(user){
            setFormData({
                ...formData,
                ['fullname']: user.fullname,
                ['email']: user.email,
                ['Country']: user.Country,
                ['dob']: user.dob,
                ['Zipcode']: user.Zipcode,
                ['Address']: user.Address,
                ['college']: user.college,
                ['Contact']: user.Contact,
                ['img']: user.img,
            });
        }
    },[user])

    if (!session) { return  (<><AccessDenied/></>) }

    const handleProfile = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const saveForm = async (e) => {
        setLoader(true);
        setFormData({ ...formData, ['email']: session.user.email})
        const res = await editUserProfile(formData);
        if(res){
            
        }setLoader(false)
    }

    return (
        <>
            <DashboardNavbar data={formData}/>
            {/* <SideBar data={formData}/> */}
            <aside id="leftsidebar" className="sidebar">
                <ul className="nav nav-tabs">
                    <li className="nav-item"><Link href="/dashboard"><a className="nav-link" data-toggle="tab" href="" target="_blank"><i className="zmdi zmdi-home"></i></a></Link></li>
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#user">Profile</a></li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane stretchLeft active" id="user">
                    <div className="menu">
                        <ul className="list">
                            <li>
                                <div className="user-info m-b-20 p-b-15">
                                    <div className="image circle">
                                <a href=""><img src={formData && formData.img} className="profile-pic" alt="User"/></a>
                                <div className="profile_pic_change">
                                <div className="p-image">
                                    <i className="fa fa-camera upload-button"></i>
                                    <input className="file-upload" type="file" accept="image/*"/>
                                </div>
                                </div>
                            </div>
                                <div className="detail">
                                    <h4>{formData &&formData.fullname}</h4>
                                </div>
                                {/* <div className="row">
                                    <div className="col-12">
                                        <a title="facebook" href=""><i className="zmdi zmdi-facebook"></i></a>
                                        <a title="twitter" href=""><i className="zmdi zmdi-twitter"></i></a>
                                        <a title="instagram" href=""><i className="zmdi zmdi-instagram"></i></a>
                                    </div>
                                    <div className="col-4 p-r-0">
                                        <h5 className="m-b-5">$ 13</h5>
                                        <small>Reward</small>
                                    </div>
                                    <div className="col-4">
                                        <h5 className="m-b-5">$ 33</h5>
                                        <small>Cashback</small>
                                    </div>
                                    <div className="col-4 p-l-0">
                                        <h5 className="m-b-5">37</h5>
                                        <small>Order</small>
                                    </div>
                                </div> */}
                                </div>
                            </li>
                            <li>
                                <small className="text-muted">Location: </small>
                                <p>{formData && formData.Country}</p>
                                <hr/>
                                <small className="text-muted">Email address: </small>
                                <p>{formData && formData.email}</p>
                                <hr/>
                                <small className="text-muted">Phone: </small>
                                <p>{formData && formData.Contact}</p>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </aside>
            <section className="content user profile-page">
                <BlockHeader data={formData}/>
                {/* <div className="block-header">
                    <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h2>Profile
                            <small>Welcome to All Assignment Services</small>
                        </h2>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <ul className="breadcrumb float-md-right">
                            <li className="breadcrumb-item"><Link href="/dashboard"><a> Dashboard</a></Link></li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ul>
                    </div>
                    </div>
                </div> */}
                <div className="container-fluid">
                    <div className="row clearfix mt-4">
                    <div className="col-lg-4 col-md-12">
                        <div className="card profile-header">
                            <div className="body text-center">
                                <div className="profile-image">
                                <div className="user-info">
                                    <div className="image circle">

                                <a href=""><img src={formData && formData.img} className="profile-pic circle" alt="User"/></a>
                                <div className="profile_pic_change">
                                <div className="p-image p-image2">
                                    <i className="fa fa-camera upload-button"></i>
                                    <input className="file-upload" type="file" accept="image/*"/>
                                </div>
                                </div>
                            </div>

                                    <div className="detail">
                                        <h4>{formData && formData.fullname}</h4>
                                    </div>
                                </div>
                                </div>
                                <div>
                                {/* <!--<div className="row clearfix">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <form action="/file-upload" className="dropzone">
                                            <div className="dz-message">
                                            <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                            <p>click to upload image</p>
                                            </div>
                                            <div className="fallback">
                                            <input name="file" type="file" multiple />
                                            </div>
                                        </form>
                                    </div>
                                    </div>--> */}
                                <div className="tab-pane body" id="friends">
                                    <ul className="new_friend_list list-unstyled row">
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic1.png" className="img-thumbnail" alt="User Image"/>
                                            </a>
                                        </li>
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic2.png" className="img-thumbnail" alt="User Image"/>
                                            </a>
                                        </li>
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic3.png" className="img-thumbnail" alt="User Image"/>
                                            </a>
                                        </li>
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic4.png" className="img-thumbnail" alt="User Image"/>
                                            </a>
                                        </li>
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic5.png" className="img-thumbnail" alt="User Image"/>
                                            </a>
                                        </li>
                                        <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                            <img src="/images/pic6.png" className="img-thumbnail" alt="User Image"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="card">
                            {/* <ul className="nav nav-tabs profile_editbtn">
                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Account"><i className="fa fa-edit"></i></a></li>
                            </ul> */}
                            
                            <ul className="nav nav-tabs profile_editbtn">
                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Account">Account</a></li>
                                <li className="nav-item"><a className="nav-link " href=""><i className="zmdi zmdi-edit"></i></a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane body active" id="Account">
                                {/* <!--<div className="form-group">
                                    <input type="password" className="form-control" placeholder="Current Password">
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="New Password">
                                </div> --> */}
                                {/* <button className="btn btn-info btn-round" id="changepass"> Changes Password</button> */}

                                <div className="row clearfix" id="changepass2" style={{display:"none"}}>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>New Password</label>
                                            <input type="text" className="form-control" placeholder="New Password"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Confirm Password</label>
                                            <input type="text" className="form-control" placeholder="Confirm Password"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-primary btn-round" id="successProfileUpdatebtn" >Submit</button>
                                    </div>
                                    </div>


                                <hr/>

                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Name</label>
                                            <input type="text" className="form-control" name="fullname" placeholder="first name" onChange={handleProfile} defaultValue={formData && formData.fullname}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>DOB</label>
                                            <input type="text" className="form-control" name="dob" placeholder="Enter Your Date of Birth" onChange={handleProfile} defaultValue={formData && formData.dob}/>
                                        </div>
                                    </div>
                                        <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Email Id</label>
                                            <input type="text" className="form-control" placeholder="email" defaultValue={formData && formData.email} readOnly/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>College</label>
                                            <input type="text" className="form-control" name="college" placeholder="College name" defaultValue={formData && formData.college} onChange={handleProfile}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Phone no</label>
                                            <input type="text" className="form-control" name="Contact" placeholder="phone no" defaultValue={formData && formData.Contact}  onChange={handleProfile}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Address</label>
                                            <input type="text" className="form-control" name="Address" placeholder="Address" defaultValue={formData && formData.Address}  onChange={handleProfile}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Zipcode</label>
                                            <input type="text" className="form-control" name="Zipcode" placeholder="Zipcode" defaultValue={formData && formData.Zipcode}  onChange={handleProfile}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Country</label>
                                        <select name="education" required className="form-control" name="Country"  onChange={handleProfile} value={formData && formData.Country}>
                                            <option value="">Select Country</option>
                                            {countries && countries.map((item,key)=>{
                                                return (
                                                    <option key={key} value={item.slug}>{item.title}</option>
                                                )
                                            })}
                                            </select>
                                        </div>
                                    </div>

                                    {/* <!--  <div className="col-md-12">
                                        <div className="checkbox">
                                            <input id="procheck2" type="checkbox"/>
                                            <label for="procheck2">New task notifications</label>
                                        </div>
                                    </div>--> */}
                                    <div className="col-md-12">
                                        <button onClick={saveForm} className="btn btn-primary btn-round" >{loading ? "updating" : "Update Changes"}</button>
                                    </div>
                                </div>
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