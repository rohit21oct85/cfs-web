import Link from 'next/link'

export default function BrowseBySubjects({...props}){
    return(
        <>
        <section className="section pt-5 pb-5">
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
											<Link href={item.subject+'/'+item.sub_subject}><a> {item.sub_subject}</a></Link>
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