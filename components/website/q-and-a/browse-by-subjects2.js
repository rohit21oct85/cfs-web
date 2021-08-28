import Link from 'next/link'
import { capitalize, MakeSlug } from '../../common/make-slug'
import { useRouter } from "next/router";

export default function BrowseBySubjects2({...props}){
    const router = useRouter();
    
    return(
        <>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 Content_Covered_title mb-4 pb-2  text-center get-homework">
                        <h2>Browse by subjects in {capitalize(props?.heading)}</h2>
                    </div>
					{props.data && props.data.data.length>0 ? props.data.data.map((item,key)=>{
						return(
							<div className="col-md-3 pbtm" key={key}>
								<div className="our_popular_text">
                                    <div className="our_popular_img">
                                        <img src="../images/books/economics.jpg" className="img-fluid" alt=""/>
                                    </div>
                                    <div className="our_popular_title">
                                        <Link href={'/q-and-a/'+item.subject+'/'+MakeSlug(item.sub_subject)}><a> {item.sub_subject}</a></Link>
                                    </div>
								</div>
							</div>
						)
					}):
                        <div className="col-lg-12 text-center">
                            <span>No Subjects Found</span>
                        </div>
                    }
          		</div>
        	</div>
      	</section>
      	</>
    	)
}