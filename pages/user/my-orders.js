import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import BlockHeader from '../../components/website/dashboard/block-header'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import AccessDenied from '../../components/access-denied'
import { useQuery } from 'react-query'
import {getUser} from '../../libs/profile'

export default function MyOrders(){
   const [ session, loading ] = useSession()
   const { data: user, isLoading:userIsLoading, error:userError } = useQuery(['user-profile'], () => getUser({email:session.user.email}),{staleTime:Infinity, enabled: !!session})

   if (!session) { return  (<><AccessDenied/></>) }

    return(
        <>
        <DashboardNavbar data={user}/>
        <SideBar data={user}/>
        <section className="content user profile-page">
   <BlockHeader data={user}/>
   <div className="container-fluid">
      <div className="row clearfix mt-4">
         <div className="col-md-12">
            <div className="card student-list">
               <div className="header">
                  <h2><strong>My</strong> Orders</h2>
               </div>
               <div className="body">
                  <div className="table-responsive" id="accordion">
                     <table className="table table-hover m-b-0 my-order-new my_subscrption_table">
                        <thead>
                           <tr className="table_title order">
                              <th className="w-25">S.No</th>
                              <th className="w-25">Order ID</th>
                              <th className="w-25">Date</th>
                              <th className="w-25">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td colSpan="4" style={{padding:"0px"}}>
                                 <div className="card-header pl-0 pr-0">
                                    <table style={{width: "100%"}}>
                                       <tbody>
                                          <tr>
                                             <td className="w-25"><span>1</span></td>
                                             <td className="w-25"><span className="textbook-t">2270</span></td>
                                             <td className="w-25">
                                                <span>26/03/2021</span>
                                             </td>
                                             <td className="w-25">
                                                <button className="btn btn-link collapsed view-reciept-btn" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                                View Receipt
                                                </button>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <div id="collapse1" className="collapse accod_tab" aria-labelledby="headingTwo2270" data-parent="#accordion">
                                    <div className="card-body">
                                       <div className="row">
                                          <div className="col-md-4">
                                             <div className="d-md-flex align-items-center">
                                                <div className="receipt-img">
                                                   <img className="order-book-img" src="/images/cfs-dumt-img.png" draggable="false"/>
                                                </div>
                                                <div className="receipt-txt">
                                                   <h4 className="order-type-collpse">testedtestedtestedtestedtestedtestedtestedtestedtestedt..</h4>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-md-2 mt-auto mb-auto collapse-order-data text-left">
                                             <p className="item-type-order">Item Type</p>
                                             <h3>Assignment Help</h3>
                                          </div>
                                          <div className="col-md-1 mt-auto mb-auto collapse-order-data text-left">
                                             <p className="item-type-order">Amount</p>
                                             <h3>$5.00</h3>
                                          </div>
                                          <div className="col-md-2 mt-auto mb-auto collapse-order-data text-left">
                                             <p className="item-type-order">Status</p>
                                             <h3>															Payment Pending
                                             </h3>
                                          </div>
                                          <div className="col-md-3 mt-auto mb-auto ml-auto">
                                             <a href="my-order-detail.php" className="order-sub-cancel">Pay 50% in Advance</a>
                                             <a href="my-order-detail.php" className="order-sub-cancel">View Now</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td colSpan="4" style={{padding:"0px"}}>
                                 <div className="card-header pl-0 pr-0">
                                    <table style={{width: "100%"}}>
                                       <tbody>
                                          <tr>
                                             <td className="w-25"><span>1</span></td>
                                             <td className="w-25"><span className="textbook-t">2270</span></td>
                                             <td className="w-25">
                                                <span>26/03/2021</span>
                                             </td>
                                             <td className="w-25">
                                                <button className="btn btn-link collapsed view-reciept-btn" data-toggle="collapse" data-target="#collapse2270" aria-expanded="false" aria-controls="collapse2270">
                                                View Receipt
                                                </button>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <div id="collapse2270" className="collapse accod_tab" aria-labelledby="headingTwo2270" data-parent="#accordion">
                                    <div className="card-body">
                                       <div className="row">
                                          <div className="col-md-4">
                                             <div className="d-md-flex align-items-center">
                                                <div className="receipt-img">
                                                   <img className="order-book-img" src="/images/cfs-dumt-img.png" draggable="false"/>
                                                </div>
                                                <div className="receipt-txt">
                                                   <h4 className="order-type-collpse">testedtestedtestedtestedtestedtestedtestedtestedtestedt..</h4>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-md-2 mt-auto mb-auto collapse-order-data text-left">
                                             <p className="item-type-order">Item Type</p>
                                             <h3>Assignment Help</h3>
                                          </div>
                                          <div className="col-md-1 mt-auto mb-auto collapse-order-data text-left">
                                             <p className="item-type-order">Amount</p>
                                             <h3>$5.00</h3>
                                          </div>
                                          <div className="col-md-2 mt-auto mb-auto collapse-order-data text-left">
                                             <p className="item-type-order">Status</p>
                                             <h3>															Payment Pending
                                             </h3>
                                          </div>
                                          <div className="col-md-3 mt-auto mb-auto ml-auto">
                                             <a href="my-order-detail.php" className="order-sub-cancel">Pay 50% in Advance</a>
                                             <a href="my-order-detail.php" className="order-sub-cancel">View Now</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<div className="modal fade " id="defaultModal" tabIndex="-1" role="dialog">
   <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content defaultModal1">
         <div className="modal-header">
            <div className="">
               <h4 className="title" id="defaultModalLabel">Receipt</h4>
            </div>
            <button type="button" className="btn btn-danger waves-effect" data-dismiss="modal">x</button>
         </div>
         <div className="modal-body">
            <div className="col-md-12">
               <div className="cus_modal profile_modal">
                  <div className="cus_modal_header clearfix">
                     <h5 className="title">
                        <a className="toggle">
                        <i className="fa fa-user-circle-o"></i> View Receipt
                        </a>
                     </h5>
                  </div>
                  <div className="collapse show" id="collapseExample">
                     <div className="cus_modal_body">
                        <div className="details_box assignment">
                           <div className="row">
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item head_ass">Order Id</p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item head_ass">CFS20023_1_1998</p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">Item Type </p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">Assignment Help</p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">Amount </p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">$5.00</p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">Status </p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">Payment Pending</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <ul className="recipt_m">
                  <li><a href="my-order-detail.php" className="btn ml-auto mt-0 mb-0 aafiate_v">Pay 50% in Advance </a></li>
                  <li><a href="my-order-detail.php" className="btn ml-auto mt-0 mb-0 current_offer">View Now</a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>  
        </>
    )
}