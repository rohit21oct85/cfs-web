import BookImage from '../all-subjects/book-image'

export default function SingleBook({...props}){
    return(
        <div className="w-20 width_product">
            <div className="our_popular_text">
                <div className="our_popular_img">
                    <img src={props.image} className="img-fluid" alt=""/>
                    {/* <BookImage isbn={props.isbn}/> */}
                </div>
                <div className="our_popular_title">
                   {props.bookname}
                </div>
                <div className="our_popular_isbn_no">
                    ISBN: <span>{props.isbn}</span>
                </div>
                <div className="star_rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-empty"></i>
                </div>
            </div>
        </div>
    )
}