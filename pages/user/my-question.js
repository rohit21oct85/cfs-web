import Link from 'next/link'
import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'

export default function MyQuestion(){

    return(
        <>
        <DashboardNavbar/>
        <SideBar/>
        <section className="content user profile-page">
   <div className="block-header">
      <div className="row">
         <div className="col-lg-7 col-md-6 col-sm-12">
           <h2>Hi,  Ashton Cox 
               <small>Student, ipex College</small>
            </h2>
         </div>
         <div className="col-lg-5 col-md-6 col-sm-12">
            <ul className="breadcrumb float-md-right">
               <li className="breadcrumb-item"><a href="myaccount.php"> Dashboard</a></li>
               <li className="breadcrumb-item active">Offer</li>
            </ul>
         </div>
      </div>
   </div>
   <div className="container-fluid">
      <div className="row clearfix mt-4">
         <div className="col-md-12">
            <div className="card student-list">
               <div className="col-md-12 pt-3" style={{boxShadow: "-1px 3px 6px #f4750436"}}>
                  <div className="row page-nav-menu-row">
                     <div className="col-md-6 text-right">
                        <Link href="/user/ask-a-question"><a className="font-weight-bold page-nav-menu" >Ask a Question</a></Link>
                     </div>
                     <div className="col-md-6 text-left">
                        <a className="active-nav  font-weight-bold page-nav-menu" href="my_question.php">My Question Status</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-12 mt-4 your_subscription pd_lr">
                  <h2>Your Subscription has expired.  <button className="subscription-reciept-btn">Activate Subscription</button></h2>
               </div>
               <div className="col-md-12 filter_title mt-3 pt-3 bdr_top pd_lr">
                  <p><span><i className="fa fa-filter"></i>  Filter By </span></p>
                  <form>
                     <div className="form-check-inline">
                        <label className="form-check-label filter_icon_text">
                        <i className="fa fa-filter"></i>  Filter By 
                        </label>
                     </div>
                     <div className="form-check-inline">
                        <label className="form-check-label" for="radio1">
                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" /> All Question 
                        </label>
                     </div>
                     <div className="form-check-inline">
                        <label className="form-check-label" for="radio2">
                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/> Pending Question  
                        </label>
                     </div>
                     <div className="form-check-inline">
                        <label className="form-check-label" for="radio3">
                        <input type="radio" className="form-check-input" id="radio3" name="optradio" value="Answered Question "/> Answered Question  
                        </label>
                     </div>
                     <div className="form-check-inline">
                        <label className="form-check-label" for="radio4">
                        <input type="radio" className="form-check-input" id="radio4" name="optradio" value="Rejected Question"/> Rejected Question       
                        </label>
                     </div>
                  </form>
               </div>
               <div className="col-md-12 nav_account1 mt-3 pt-3 bdr_top pd_lr">
                  <ul>
                     <li><a href="">Accounting </a> <i className="fa fa-angle-right"></i></li>
                     <li><a href="">Financial Accounting </a> <i className="fa fa-angle-right"></i></li>
                     <li><a href="">Financial Analysis</a></li>
                  </ul>
               </div>
               <div className="col-md-12 nav_account1 mt-3 pt-3 pd_lr">
                  <h2>Ons left for you to ask before the end of the cycleons left</h2>
               </div>
               <div className="col-md-12 nav_account1 mt-3 pt-3 bdr_top pd_lr">
                  <button className="btn" id="like"><i className="fa fa-thumbs-up fa-lg" aria-hidden="true"></i> like</button>
                  <button className="btn" id="deslike"><i className="fa fa-thumbs-down fa-lg" aria-hidden="true"></i> deslike</button>
               </div>
               <div className="col-md-12 nav_account1 pd_lr">
                  <h4 className="ans_s">Question:</h4>
                  <p>Ons left for you to ask before the end of the cycleons left for you to ask before the end cycleon left for you to ask before the end of the cycle</p>
               </div>
               <div className="col-md-12 nav_account1 answer_1 mt-3 mb-5 pd_lr">
                  <h4 className="ans_s"><i className="fa fa-check-circle"></i> Answer and Explanation:</h4>
                  <p className="dtal_pr"><span className="name_ans">Sumit Verma</span> answered this  <span className="float-right bookmark_right"><i className="fa fa-bookmark-o"></i> bookmark</span></p>
                  <p>Ons left for you to ask before the end of the cycleons left for you to ask before the end cycleon left for you to ask before the end of the cycle Ons left for you to ask before the end of the cycleons left for you to ask before the end cycleon left for you to ask before </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
            </>
    )
}