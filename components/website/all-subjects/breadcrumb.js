export default function BreadCrumb({...props}){

    function createMarkup() {
        return {__html: '&sol;'};
    }
    
    return(
        <section className="bg_banner_color pt-0 pb-0"> 
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12 text-left">
                        <div className="all_banner_text"> 
                            <h2>{props.heading}</h2>
                            <ul className="breadcrumb">
                                <li><a href="#">Home   </a><span dangerouslySetInnerHTML={createMarkup()}/></li>
                                <li><a href="#"> TextBook Manual </a> <span dangerouslySetInnerHTML={createMarkup()}/></li>
                                <li><a href="#">Maths   </a> <span dangerouslySetInnerHTML={createMarkup()}/></li> 
                                <li> Advanced Math</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}