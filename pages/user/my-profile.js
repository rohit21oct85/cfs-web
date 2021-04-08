import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import Link from 'next/link'
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
    if (!session) { return  (<><AccessDenied/></>) }
    

    return (
        <>
            <DashboardNavbar/>
            <SideBar/>
            {/* <Link href="#"><a onClick={SignOut}>SignOut</a></Link> */}
            <aside id="leftsidebar" className="sidebar">
                <ul className="nav nav-tabs">
                    <li className="nav-item"><Link href="/dashboard"><a className="nav-link" data-toggle="tab" href="" target="_blank"><i className="zmdi zmdi-home"></i></a></Link></li>
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#user">profProfile</a></li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane stretchLeft active" id="user">
                    <div className="menu">
                        <ul className="list">
                            <li>
                                <div className="user-info m-b-20 p-b-15">
                                {/* <!--<div className="image"><a href="#"><img src="assets/images/profile_av.jpg" alt="User"/></a></div>--> */}
                                    <div className="image circle">
                                <a href=""><img src="/images/my-pics.jpg" className="profile-pic" alt="User"/></a>
                                <div className="profile_pic_change">
                                <div className="p-image">
                                    <i className="fa fa-camera upload-button"></i>
                                    <input className="file-upload" type="file" accept="image/*"/>
                                </div>
                                </div>
                            </div>
                                <div className="detail">
                                    <h4>Shalini</h4>
                                </div>
                                <div className="row">
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
                                </div>
                                </div>
                            </li>
                            <li>
                                <small className="text-muted">Location: </small>
                                <p>Noida, India</p>
                                <hr/>
                                <small className="text-muted">Email address: </small>
                                <p>Shalini@example.com</p>
                                <hr/>
                                <small className="text-muted">Phone: </small>
                                <p>+ 202-555-0191</p>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </aside>
            <section className="content user profile-page">
                <div className="block-header">
                    <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h2>Profile
                            <small>Welcome to All Assignment Services</small>
                        </h2>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <button className="btn btn-white btn-icon btn-round float-right m-l-10" type="button">
                        <i className="zmdi zmdi-edit"></i>
                        </button>
                        <ul className="breadcrumb float-md-right">
                            <li className="breadcrumb-item"><Link href="/dashboard"><a> Dashboard</a></Link></li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix mt-4">
                    <div className="col-lg-4 col-md-12">
                        <div className="card profile-header">
                            <div className="body text-center">
                                <div className="profile-image">
                                <div className="user-info">
                                    <div className="image circle">

                                <a href=""><img src="/images/my-pics.jpg" className="profile-pic circle" alt="User"/></a>
                                <div className="profile_pic_change">
                                <div className="p-image p-image2">
                                    <i className="fa fa-camera upload-button"></i>
                                    <input className="file-upload" type="file" accept="image/*"/>
                                </div>
                                </div>
                            </div>

                                    <div className="detail">
                                        <h4> Shalini</h4>
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
                            <ul className="nav nav-tabs">
                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Account">Account</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane body active" id="Account">
                                {/* <!--<div className="form-group">
                                    <input type="password" className="form-control" placeholder="Current Password">
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="New Password">
                                </div> --> */}
                                <button className="btn btn-info btn-round" id="changepass"> Changes Password</button>

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
                                        <label>First Name</label>
                                            <input type="text" className="form-control" placeholder="Shalini"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Last Name</label>
                                            <input type="text" className="form-control" placeholder="Deao"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>DOB</label>
                                            <input type="text" className="form-control" name="dob" value="27/06/1987" placeholder="Enter Your Date of Birth"/>
                                        </div>
                                    </div>
                                        <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Email Id</label>
                                            <input type="text" className="form-control" placeholder="Shalini@gmail.com" readOnly/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Level of education</label>
                                        <select name="education" required className="form-control">
                                            <option value="">-Select Academic-</option>
                                            <option value="1">Undergraduate</option>
                                            <option value="2">Master</option>
                                            <option value="3">Specialized</option>
                                            <option value="4">PhD</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>College</label>
                                            <input type="text" className="form-control" placeholder="ipex College"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Facebook Id</label>
                                            <input type="text" className="form-control" placeholder="Facebook Id"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Twitter Id</label>
                                            <input type="text" className="form-control" placeholder="Twitter Id"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Instagram Id</label>
                                            <input type="text" className="form-control" placeholder="Instagram Id"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                        <label>Country</label>
                                            <input type="text" className="form-control" placeholder="Indonesia"/>
                                        </div>
                                    </div>

                                    {/* <!--  <div className="col-md-12">
                                        <div className="checkbox">
                                            <input id="procheck2" type="checkbox"/>
                                            <label for="procheck2">New task notifications</label>
                                        </div>
                                    </div>--> */}
                                    <div className="col-md-12">
                                        <button className="btn btn-primary btn-round" >Update Changes</button>
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