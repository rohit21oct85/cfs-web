import Pagination from '../../../../components/common/pagination'
import { Markup } from 'interweave';
import parse from 'html-react-parser';

export default function questions({...props}){
    return(
        <section className="section font_sz text_justify pt-5 pb-4">
            <div className="container">
                <div className="row">
                <div className="col-md-12 pb-4">
                    <div className="text_q_nd_ans">
                        <div className="Qtion_n_Stion_text Recent_text">
                            <h2 className="font-24 mb-3"><span>{props.heading} Questions & Answers</span> </h2>
                            <h3 className="mb-4 font-14">Experts answer in as little as 30 minutes</h3>
                        </div>
                    </div>
                    {props.data && props.data.data.map((item,key)=>{
                        return(
                            <div className="text_q_nd_ans" key={key}>
                                <div className="Qtion_n_Stion_text Recent_text">
                                    <div className="read_more_q">
                                    <span className="qustion_mark1">Q :</span>  
                                        <div className="ques_pl">
                                            <p className="mb-0" dangerouslySetInnerHTML={{__html: parse(item.question.substr(0,200))}}></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="Qtion_n_Stion_text">
                                    <div className="read_more_q">
                                    <span className="answer_mark1">A :</span> 
                                    <div className="ans_pl">
                                        <p className="font-15"><a href="#">View Answer</a></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <div className="col-md-12 mt-2">
                    <div className="next_prew">
                        <ul>
                            <li><a href="#" className="border-left-0 ">Previous</a></li>
                            <li><a href="#" className="active">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">Next</a></li>
                        </ul>
                    </div>
                </div> */}
                {props.data && props.data.data.length>0 && <Pagination setPageNo={props.setPageNo} pageNo={props.pageNo} total={props.data.total}/>}
                </div>
            </div>
        </section>
    )
}