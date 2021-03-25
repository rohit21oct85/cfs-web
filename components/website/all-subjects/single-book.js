import BookImage from '../../common/book-image'
import Link from 'next/link'

export default function SingleBook({...props}){
    return(
        <div className="col-md-3 pbtm">
            <div className="our_popular_text">
                <div className="our_popular_img">
                    {/* <img src={props.image} className="img-fluid" alt=""/> */}
                    <BookImage isbn={props.isbn}/>
                </div>
                <div className="our_popular_title">
                    {props.bookname} 
                </div>
                <div className="our_popular_isbn_no">
                ISBN: <span>{props.isbn}</span>
                </div>
                <div className="star_rating">
                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-empty"></i>
                </div>
                <div className="view_detail_btn">
                    <Link href={`/${props.isbn}`}><a>View Detail</a></Link>
                </div>
            </div>
        </div>
        )
}