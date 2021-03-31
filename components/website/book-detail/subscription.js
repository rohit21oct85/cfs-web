import { createMarkup } from '../../common/make-slug'

export default function Subscription(){
    return(
        <section className="section bg_light_blu mt-4  pt-0 pb-0">
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-6 pl-0 text-left"><span><img src="/images/product_left_img.png" className="img-fluid" alt=""/></span></div>
        <div className="col-md-5 mr-auto">
        <div className="Text_title detail_text_price pb-2 pt-4">
        
        <h2><span className="price">$7.00</span> / <span className="month">month</span></h2>
        <p>Private, 1-on-1 lessons with the tutors instructor of your choice. </p>
        <ul className="include_list">
        <li><span dangerouslySetInnerHTML={createMarkup('&quest;')}/> <div className="q_text"> <h4>Ask a question</h4> 
                                            <p>Ask 50 New Homework Questions</p></div> </li>
        <li><span dangerouslySetInnerHTML={createMarkup('&dollar;')}/> <div className="q_text"> <h4>Homework Q&A </h4> 
                                            <p>Unlimited Access to pre-existing Homework Q&A </p></div></li>
        <li><span dangerouslySetInnerHTML={createMarkup('&check;')}/> <div className="q_text"> <h4>Unlimited Textbook</h4> 
                                            <p>Unlimited Textbook Solutions Manual   </p></div> </li>
        </ul>
        <div className="btn1">
        <a href="#" className="text-black"> Subscribe Now</a>
        </div>
        </div>
        </div>
        </div> 
        </div>
        </section>
    )
}