import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import BlockHeader from '../../components/website/dashboard/block-header'
import {useState, useEffect} from 'react'  
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import AccessDenied from '../../components/access-denied'
import { useQuery } from 'react-query'
import {getUser} from '../../libs/profile'
import {getNotifications} from '../../libs/question'
import moment from 'moment';

export default function Notifications(){
    const [ session, loading ] = useSession()
    const isRead = false;
    const { data: user, isLoading:userIsLoading, error:userError } = useQuery(['user-profile'], () => getUser({email : session.user.email}),{ staleTime : Infinity, enabled : !!session })
    const { data: notifications, isLoading:notificationsIsLoading, error:notificationsError } = useQuery([`notifications-${isRead}`], () => getNotifications({user_Id : session.user._id, type: 'QA'}, isRead),{ staleTime : Infinity, enabled : !!session })
    
    const calculateTime = (id, eventTime) => {
        const currentTime = new Date().getTime();
        var diffTime = (eventTime + 14400000) - currentTime;
        var duration = moment.duration(diffTime, 'milliseconds');
        var interval = 1000;
        if(currentTime < (eventTime + 14400000)){
            var inter = setInterval(() => {
                duration = moment.duration(duration - interval, 'milliseconds');
                if(document.getElementById(id) !== null){
                    document.getElementById(id).innerHTML="";
                    document.getElementById(id).innerHTML=duration.hours() + ":" + duration.minutes() + ":" + duration.seconds();
                }
                // console.log(id,duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
            }, interval);
        }   
    }
    
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
                                <h2><strong>My</strong> Notifications</h2>
                            </div>
                            <div className="body">
                                <div className="table-responsive tble_scrollN_fx" id="accordion">
                                    <table className="table table-hover m-b-0 my-order-new my_subscrption_table">
                                        <thead>
                                        <tr className="table_title order">
                                            <th className="w-15">S.No</th>
                                            <th className="w-15">Question</th>
                                            <th className="w-15">Type</th>
                                            <th className="w-15">Date</th>
                                            <th className="w-15">Status</th>
                                            <th className="w-15">View</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {notifications && notifications.data.map((item,key)=>{
                                                var utcDate = item.created_at;  // ISO-8601 formatted date returned from server
                                                var localDate = new Date(utcDate);
                                                var currentTime = new Date();

                                                return  ( 
                                                    <tr key={key}>
                                                        <td>{key}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.type}</td>
                                                        <td>{item.created_at.substring(0,10)}</td>
                                                        <td id={`${item.type+key}`}><span className="badge">{currentTime < (localDate.getTime() + 14400000) ? calculateTime(item.type + key, localDate.getTime()) : 'completed'}</span></td>
                                                        <td><button className="btn btn-link collapsed view-reciept-btn" data-toggle="collapse" data-target="#collapse2270" aria-expanded="false" aria-controls="collapse2270">View</button>
                                                        </td>
                                                    </tr>
                                                    )
                                            })}
                                        </tbody>
                                    </table>
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