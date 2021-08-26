import Link from 'next/link'
import { MakeSlug } from '../../common/make-slug'

export default function BrowseBySubjects2({...props}){
    return(
        <>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 Content_Covered_title mb-4 pb-2  text-center get-homework">
                        <h2>Browse by subjects in Business</h2>
                    </div>
					{props.data && props.data.data.map((item,key)=>{
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
					})}
          		</div>
        	</div>
      	</section>
      	</>
    	)
}