import { useEffect, useState } from "react";

export default function BlockHeader({...props}){

    const [name, setName] = useState();

    useEffect(()=>{
        setName(localStorage.getItem('tutor_name'))
    },[])

    return (
        <div className="block-header">
            <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 Referral_Points">
                    <h2>Hi, {name}</h2>
                    <p className="mt-2">Lorem ipsum dolor sit amet,</p>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 Earn_Referral ml-auto text-right">
                    <ul className="breadcrumb breadcrumb2 float-md-right pt-0 pb-0">
                    <li className="breadcrumb-item breadcrumb_cuspom"><a href="#"><i className="zmdi zmdi-home"></i> Home  </a></li>
                    <li className="breadcrumb-item breadcrumb_cuspom"><a href="start-answer.php"> Start Answer  </a></li>
                    <li className="breadcrumb-item active breadcrumb_cuspom">Question List</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}