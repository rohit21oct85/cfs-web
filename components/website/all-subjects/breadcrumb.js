import {GetName, createMarkup,capitalize} from '../../common/make-slug'

export default function BreadCrumb({...props}){

    
    
    return(
        <section className="bg_banner_color pt-0 pb-0">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12 text-left">
                        <div className="all_banner_text"> 
                            <h2>{GetName(props.heading)}</h2>
                            <ul className="breadcrumb">
                                <li><a href="#">Home   </a><span dangerouslySetInnerHTML={createMarkup('&sol;')}/></li>
                                <li><a href="#"> TextBook Manual </a> <span dangerouslySetInnerHTML={createMarkup('&sol;')}/></li>
                                <li><a href="#">{capitalize(props.subject)} </a> <span dangerouslySetInnerHTML={createMarkup('&sol;')}/></li> 
                                <li>{capitalize(props.sub_subject)}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}