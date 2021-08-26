import Link from 'next/link'
import { MakeSlug } from '../../common/make-slug'

export default function BrowseBySubjects3({...props}){
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
                            <div className="col-md-4 col-lg-3" key={key}>
								<div className="books1 animated wow fadeIn">
									<img src="/images/tbs-books/economics.jpg" className="img-fluid" alt=""/>
									<div className="overlay_books bottom-overlay"> 
										<div className="books_text1">
                                            <Link href={'/q-and-a/'+item.subject+'/'+MakeSlug(item.sub_subject)+"/"+MakeSlug(item.chield_subject)}><a> {item.chield_subject}</a></Link>
										</div>
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