import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import Link from 'next/link'
import {useState } from 'react'
import dynamic from 'next/dynamic';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const CKEditor = dynamic(() => import("@ckeditor/ckeditor5-react"), { ssr: false })
// const  ClassicEditor  = dynamic(() => import("@ckeditor/ckeditor5-build-classic"), { ssr: false })

export default function AskQuestion(){
   const [display, setDisplay] = useState(false);
   
   const [modalClass, setModalClass] = useState(false);
   const openDialog =  () => {
      setDisplay('block')
      setModalClass('show')
      if (document.body.style.overflow !== "hidden") {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "scroll";
      }
   }

   const closeDialog = () => {
      setModalClass('none')
      setDisplay('')
      if (document.body.style.overflow !== "scroll") {
          document.body.style.overflow = "scroll";
      } else {
          document.body.style.overflow = "hidden";
      }
   }

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
                  <li className="breadcrumb-item"><Link href="/dashboard"><a> Dashboard</a></Link></li>
                  <li className="breadcrumb-item active">Ask a Question</li>
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
                           <a className="active-nav font-weight-bold page-nav-menu" href="ask-user-question.php">Ask a Question</a>
                        </div>
                        <div className="col-md-6 text-left">
                              <Link href="/user/my-question"><a className="font-weight-bold page-nav-menu">My Question Status</a></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12 mt-4 your_subscription ask_qus">
                     <h2>Ask a Question </h2>
                     <p>50 questions left for you to ask before the end of the cycle. Ask away!
                        <span className="end_date1">Your cycle ends on 2022-01-31</span>
                     </p>
                     <p>Post your homework question and get notified when it has been answered. <span className="few_hours">We don’t take more than a few hours.</span></p>
                  </div>
                  <div className="col-md-12 mt-4 your_subscription ask_qus">
                     <div className="row">
                        <div className="col-md-12">
                           <form>
                              <div className="form-row">
                                 <div className="col-sm-6 col-md-6 form-group">
                                    <label className="mb-0">Main Subject</label>
                                    <select className="form-control">
                                       <option value=""> Select Subject</option>
                                       <option value="">Accounting</option>
                                       <option value="">Science/Math</option>
                                       <option value="">Finance</option>
                                       <option value="">Engineering</option>
                                       <option value="">Computer Science</option>
                                       <option value="">Humanities</option>
                                       <option value="">Economics</option>
                                       <option value="">Management</option>
                                       <option value="">Writing</option>
                                       <option value="">Statistics </option>
                                    </select>
                                 </div>
                                 <div className="col-sm-6 col-md-6 form-group">
                                    <label className="mb-0">Sub Subject</label>
                                    <select className="form-control">
                                       <option value=" "> Select One </option>
                                       <option value=""> Physics </option>
                                       <option value=""> Biology </option>
                                       <option value=""> Advanced Mathematics </option>
                                       <option value=""> Math </option>
                                       <option value=""> Earth Science </option>
                                       <option value=""> Chemistry</option>
                                       <option value=""> Medical / Nursing</option>
                                    </select>
                                 </div>
                                 <div className="col-sm-6 col-md-6 form-group">
                                 {/* <CKEditor
                                    editor={ ClassicEditor }
                                    data="<p>Hello from CKEditor 5!</p>"
                                    onReady={ editor => {
                                          // You can store the "editor" and use when it is needed.
                                          console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                          const data = editor.getData();
                                          console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                          console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                          console.log( 'Focus.', editor );
                                    } }
                                 /> */}
                                    {/* <label className="mb-0">Question</label>
                                    <textarea name="editor1"></textarea> */}
                                 </div>
                                 <div className="col-md-6 col-sm-6">
                                    <div className="row">
                                       <div className="col-sm-12 col-md-12 form-group">
                                          <label className="mb-0">Child Sub Subject</label>
                                          <select className="form-control">
                                             <option value=" "> Select One </option>
                                             <option value=""> Data Modeling</option>
                                             <option value=""> Bessel Functions</option>
                                             <option value=""> Differential Equation</option>
                                             <option value=""> String Theory</option>
                                             <option value=""> Matrix Algebra</option>
                                             <option value=""> Abstract/Modern Algebra</option>
                                             <option value=""> Integral Equation</option>
                                             <option value=""> Advanced Geometry</option>
                                             <option value=""> Engineering Mathematics</option>
                                             <option value=""> Others</option>
                                          </select>
                                       </div>
                                       <div className="col-sm-12 col-md-12 form-group">
                                          <div className="row upld_img_dbd">
                                             <div className="col-md-12">
                                                <label className="mb-0">Upload Images</label>
                                                <div className="col-md-12 p-0 image_quest">
                                                   <span> <i className="fa fa-image"></i> 0/2 images</span>
                                                </div>
                                             </div>
                                             <div className="col-md-6 pr-0">
                                                <div className="images_pikar1">
                                                   <div className="upload-image">
                                                      <span className="pkr_img1"><i className="fa fa-camera"></i></span>
                                                      <input type='file' className="imgInp" data-id='img1' />
                                                   </div>
                                                   <div className="upload_img_icon">
                                                      <img id="img1" src="/images/img-icon.jpg" alt="your image"/>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="col-md-6 pl-0">
                                                <div className="images_pikar1">
                                                   <div className="upload-image"> 
                                                      <span className="pkr_img2"><i className="fa fa-camera"></i></span>
                                                      <input type='file' className="imgInp"  data-id='img2' />
                                                   </div>
                                                   <div className="upload_img_icon">
                                                      <img id="img2" src="/images/img-icon.jpg" alt="your image" />
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-sm-12 col-md-12 form-group">
                                    <button type="submit" className="btn btn-info">Post a Question</button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <section className="section how_it_bg_img pt-4 pb-4">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-5 pl-0 text-center"><span><img src="/images/how_it_bg.jpg" className="img-fluid" alt=""/></span></div>
                           <div className="col-md-7">
                              <div className="Text_title text_tb_center3 pb-3">
                                 <h2>How It Work</h2>
                                 <ul className="include_list">
                                    <li><i className="fa fa-check-circle"></i> Post one question at a time.</li>
                                    <li><i className="fa fa-check-circle"></i> Keep questions specific and do not forget to add the necessary details.</li>
                                    <li><i className="fa fa-check-circle"></i> Our experts will work on your question.  </li>
                                    <li><i className="fa fa-check-circle"></i> You get notified once your answer is ready.</li>
                                    <li><i className="fa fa-check-circle"></i> Access the answer from 'My Question Status. </li>
                                 </ul>
                                 <div className="believe_pera">
                                    <p>We believe in working with honesty and integrity, just like you…” Learn more about our <a href="#" data-toggle="modal" data-target="#modal_CFSA" onClick={openDialog}>honor code</a></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </div>
   </section>
   <div className={`modal fade ${modalClass}`} id="modal_CFSA" style={{display: `${display}`, overflowY: "scroll"}}>
      <div className="modal-dialog modal-lg">
         <div className="modal-content">
               <div className="modal-header"> 
                  <button type="button" className="close" data-dismiss="modal" onClick={closeDialog}>&times;</button>
               </div>
               <div className="modal-body container pt-0 mt-4">
                  <div className="row">
                     <div className="col-md-12 pop_content_12">
                           <p>Crazy for Study is your academic search engine and has always got your back. We feel your pain and understand have an understanding of the academic pressure a student faces. We also know that you believe in working with honesty and integrity and will never indulge in any misuse of the materials and services provided by Crazy for Study.</p>
                           <h4>Misuse of material and services include:</h4>
                           <ul>
                           <li><strong>Copying:</strong> We do not expect you to copy any of the answers present on this website for your assignments and homework and present them as your work. Doing so means that you would be stealing someone else’s work.</li>
                           <li> <strong>Cheating:</strong> We strongly advise you to not use Crazy for Study’s services for getting your graded assignments completed. Doing so would be unfair and will give you an unfair advantage over others.</li>
                           <li><strong> Unfair gain:</strong> Using the materials, solutions, and assignments provided to you by Crazy for Study for unfair gains is wrong and one must not do it. We strictly prohibit our users from selling study material provided by CFS for their gain.</li>
                           <p>Any user found guilty of misusing the content provided by Crazy for Study will have to face dreaded consequences. The violater’s account will be taken down. Students must not indulge in any unethical practices.</p>
                           </ul>
                     </div>
                  </div>
               </div>
            <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeDialog}>Close</button>
            </div>
         </div>
      </div>
   </div>
         </>
      )
}