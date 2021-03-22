import { useState, useEffect } from 'react';
import { getNavbarData } from '../../libs/home'
import Link from 'next/link'
import { useQuery } from 'react-query'

export default function StudyHelp() {

    const { data, isLoading } = useQuery('menus', getNavbarData);
    
    return(
        <section className="section Study_Help_bg mt-5 mb-5 pb-5">
            <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 text-left">
                    <div className="Content_Covered_title">
                        <h2>Study Help </h2>
                    </div>
                </div>

            <div className="col-md-12">
                {data && data.map((item,key)=>{
                    return(  
                        <div className="Study_Help_links" key={key}>
                            <ul>
                                <li><strong>{item.subject}:</strong></li>
                                {item.sub_subject.map((it,key)=>{
                                    return  <li key={key}><Link href={{pathname:`${'textbook-solutions-manuals/'+item.subject.toLowerCase().replace(/ /g,"-")+'/'+it.sub_subject.toLowerCase().replace(/ /g,"-")}`}}><a className={`${key === 0 ? 'border-left-0' : ''}`}>{it.sub_subject}</a></Link></li>
                                })}
                            </ul>
                        </div>
                    )
                })}
                
            </div>

            </div>
            </div>
        </section>
    )
}