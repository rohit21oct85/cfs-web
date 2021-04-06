import Link from 'next/link'

export default function SubmitAssignment() {
    return(
        <section className="banner_assign_ment">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner_text text_white">
                            <h1>Tough Assignments & No One To Help?</h1>
                            <p className="pt-1 pb-1">Our Assignment Help Services Backed Up By Professional PhD Experts.</p>
                            <ul className="list_banner1">
                                <li><img src="/images/assisment_banner_icon1.png" className="img-fluid" alt=""/> 100% Plagiarism Free </li>
                                <li><img src="/images/assisment_banner_icon2.png" className="img-fluid" alt=""/> 24/7 Live Help </li>
                                <li><img src="/images/assisment_banner_icon3.png" className="img-fluid" alt=""/> On Time Delivery </li>
                                <li><img src="/images/assisment_banner_icon4.png" className="img-fluid" alt=""/> 4.9/5 Star Rating</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <form className="row form_banner">
                            <div className="col-md-12">
                                <h2><span>Submit Your Assignment</span></h2>
                            </div>
                            <div className="form-group col-md-12">
                                <select type="text" className="form-control">
                                    <option>Other Subject</option>
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <textarea className="form-control" rows="5" placeholder="Write Your Question Here.."></textarea>
                            </div>
                            <div className="form-group col-md-12 fill_isbn mb-0">
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <div className="col-sm-12 p-0">
                                            <div className="dynamic-wrap">
                                                <div className="form">
                                                    <div className="entry input-group">
                                                        <input className="form-control isbncls" type="file"/>
                                                            <span className="input-group-btn">
                                                                <button className="btn btn-add btn-add_more" type="button">
                                                                    <span className="fa fa-plus"></span> Add more file
                                                                </button>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-12 submit_btn1">
                                <Link href="online-assignment-help-2"><button type="submit" className="btn form-control">Submit</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}