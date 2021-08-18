import Link from 'next/link';

export default function BlockHeader({...props}){
    return(
        <div className="block-header">
            <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12">
            <h2>Hi, {props.data && props.data.fullname} 
                    <small>Student, {props.data && props.data.college}</small>
                </h2>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
                <ul className="breadcrumb float-md-right">
                    <li className="breadcrumb-item"><Link href="/dashboard"><a> Dashboard</a></Link></li>
                    <li className="breadcrumb-item active">Offer</li>
                </ul>
            </div>
            </div>
        </div>
    )
}