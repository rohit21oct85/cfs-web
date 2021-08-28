import Link from 'next/link'
import { MakeSlug,GetName,capitalize, MakeSlug2 } from '../../common/make-slug'
import router from 'next/router'

export default function BrowseBySubjects3({...props}){
    return(
        <>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 Content_Covered_title mb-4 pb-2  text-center get-homework">
                        <h2>Browse by subjects in {capitalize(GetName(props?.heading))}</h2>
                    </div>
					{props.data && props.data.data.length > 0 ? props.data.data.map((item,key)=>{
						let child = "";
						if(item.chield_subject.includes('-')){
							child = item.chield_subject
						}else{
							child = MakeSlug2(item.chield_subject)
						}
						return(
                            <div className="col-md-4 col-lg-3" key={key}>
								<div className="books1 animated wow fadeIn">
									<img src="/images/tbs-books/economics.jpg" className="img-fluid" alt=""/>
									<div className="overlay_books bottom-overlay"> 
										<div className="books_text1">
                                            <Link href={'/q-and-a/'+item.subject+'/'+router.query.subsubject+"/"+child}><a> {capitalize(GetName(item.chield_subject))}</a></Link>
										</div>
									</div>
								</div>
							</div>
						)
					}): <div className="col-lg-12 text-center">
							<span>No Subjects Found</span>
						</div>}
          		</div>
        	</div>
      	</section>
      	</>
    	)
}