import BookImage from '../../common/book-image'

export default function BookInfo({...props}){
    return (
        <section className="section font_sz text_justify pt-5 pb-4">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-3 text-center">
                        <div className="prduct_details_img">
                            <ul>
                                <li><span><BookImage isbn={props.bookData && props.bookData.ISBN13}/></span></li>
                                <li className="buy_with_amazon"><i className="fa fa-shopping-bag"></i> BUY WITH AMAZON</li>
                            </ul>
                        </div>
                    </div>

            <div className="col-md-8 ml-auto pd_b_left">
                <div className="prduct_details_text">
                    <h3>{props.bookData && props.bookData.BookName} ({props.bookData && props.bookData.sub_subject_name}) </h3>
                        <p> 
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </p>
                            <ul className="rating">
                                <li className="pl-0 border-left-0">{props.bookData && props.bookData.ratingAv ? props.bookData.ratingAv : 0 }/5 Rating</li>
                                <li> {props.bookData && props.bookData.totalReviews} Reviews</li>
                            </ul>
            
                            <ul className="books_wtext">
                                <li className="pl-0 border-left-0"><img src="/images/book1.jpg" className="img-fluid" alt=""/> Edition: <span>{props.bookData && props.bookData.Edition},</span></li>
                                <li><img src="/images/book2.jpg" className="img-fluid" alt=""/> Author: <span>{props.bookData && props.bookData.Author1},</span></li>
                                <li><img src="/images/book3.jpg" className="img-fluid" alt=""/> ISBN: <span>{props.bookData && props.bookData.ISBN13}</span></li>
                            </ul>
                
                            <div className="subscription-box-points">
                                <div className="book-subscription-box">
                                    <h4>$7/month
                                    <span>Subscription</span></h4>
                                </div>
                                <div className="book-subscription-box">
                                    <img src="/images/subscribe-arrow.png" className="img-fluid" alt=""/>
                                </div>
                                <div className="book-subscription-box">
                                    <ul>
                                        <li><img src="/images/check.png" className="img-fluid" alt=""/> 797 step-by-step solutions</li>
                                        <li><img src="/images/check.png" className="img-fluid" alt=""/>  Solved by professors & experts </li>
                                        <li><img src="/images/check.png" className="img-fluid" alt=""/>  iOS, Android, & web </li>
                                    </ul>
                                </div>
                            
                                <div className="book-subscription-box">
                                    <button type="submit" className="buybook_btn text-center">Get This Solutions </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}