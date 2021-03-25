import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import Follow from '../components/website/home/follow'
import BreadCrumb from '../components/website/all-subjects/breadcrumb'
import { createMarkup } from '../components/common/make-slug'
import { useRouter } from "next/router";
import { useQuery, useLazyQuery } from 'react-query'
import {getBook,getChapters,getSections,getExercises} from '../libs/book'
import {useState, useEffect} from 'react';
import BookInfo from '../components/website/book-detail/book-info'

export default function Book(){
    const router = useRouter();
    const [chapter, setChapter] = useState();
    const [section, setSection] = useState();
    const [exercise, setExercise] = useState();

    const { data: book, isLoading:bookIsLoading, error:bookError } = useQuery([router.query.book], () => getBook({book_isbn: router.query.book}),{staleTime:Infinity})
    const { data: chapters, isLoading: chapterIsLoading, error:chapterError } = useQuery([`${router.query.book}-chapter`], () => getChapters({book_isbn: router.query.book}),{staleTime:Infinity})

    const { data: sections, isLoading: sectionIsLoading, error:sectionError } = useQuery([`${router.query.book}-${chapter}`], () => getSections({book_isbn: router.query.book,chapter_no: chapter}),{staleTime:Infinity})
    const { data: exercises, isLoading: exerciseIsLoading, error:exerciseError } = useQuery([`${router.query.book}-${section}`], () => getExercises({book_isbn: router.query.book,chapter_no: chapter, section_no:section}),{staleTime:Infinity})

    const handleChapter = async (e) => {
        setChapter(e.target.value);
    }

    const handleSection = async (e) => {
        setSection(e.target.value);
    }

    const handleExercise = async (e) => {
        setExercise(e.target.value);
    }

    useEffect(() => {
        if(chapters && chapters.length>0){
            setChapter(chapters[0].chapter_no)
        }
        return () => {}
    }, [chapters])

    useEffect(() => {
        if(sections && sections.length>0){
            setSection(sections[0].section_no)
        }
        return () => {}
    }, [sections])

    useEffect(() => {
        if(exercises && exercises.length>0){
            setExercise(exercises[0].exercise)
        }
        return () => {}
    }, [exercises])

    if(bookIsLoading)
    return <span>Loading</span>;

    return(<>
        <Header/>
        <Navbar/>
        <BreadCrumb heading={book[0].BookName} subject={book[0].subject_name} sub_subject={book[0].sub_subject_name}/>
        
        <BookInfo bookData={book[0]}/> 

        <section className="section font_sz text_justify pt-5">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12">
                        <div className="bg_chapter">
                            <div className="row"> 
                                <div className="col-md-3">
                                    <div className="chapter">
                                        <label>Chapter</label>
                                        <select className="form-control" onChange={handleChapter}>
                                        {chapters && chapters.map((item,key)=>{
                                            return (<option key={key} value={item.chapter_no}>{item.chapter_name}</option>)
                                        })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="chapter">
                                        <label>Section</label>
                                        <select className="form-control" onChange={handleSection}>
                                        {sections && sections.map((item,key)=>{
                                            return(<option key={key} value={item.section_no}>{item.section_name}</option>)
                                        })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="chapter">
                                            <label>Exercise</label>
                                            <select className="form-control" onChange={handleExercise}>
                                            {exercises && exercises.map((item,key)=>{
                                                return(<option key={key} value={item.excerise}>{item.excerise}</option>)
                                            })}
                                            </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="chapter">
                                            <label>Question</label>
                                            <select className="form-control">
                                                <option>Question 1QA - Provide two exam...</option>
                                            </select>
                                    </div>
                                </div>
                            </div>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section font_sz text_justify pb-4">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12">
                        <div className="bg_qand_ans">  
                            <div className="col-md-12 pb-4">
                                <div className="Qtion_n_Stion_text">
                                    <h3 className="mb-4"><span>Question and Solution </span></h3>  
                                </div>
                            </div> 

                            <div className="col-md-12 pb-4">
                                <div className="Qtion_n_Stion_text Qtion_n_Stion_text_scroll">
                                    <div className="bg_yellow_qa"> <strong>Q :</strong> Question : 1RE</div>
                                    <div className="bg_yellow_qa"> <strong>Q :</strong> Question : 1RE</div>
                                    <div className="bg_yellow_qa"> <strong>Q :</strong> Question : 1RE</div>
                                    <div className="bg_yellow_qa"> <strong>Q :</strong> Question : 1RE</div>
                                    <div className="bg_yellow_qa"> <strong>Q :</strong> Question : 1RE</div>
                                    <div className="bg_yellow_qa"> <strong>Q :</strong> Question : 1RE</div>
                                    <div className="bg_yellow_qa"> <strong>Q :</strong> Question : 1RE</div>
                                    <div className="bg_yellow_qa"> <strong>Q :</strong> Question : 1RE</div>
                                    <div className="bg_yellow_qa"> <strong>Q :</strong> Question : 1RE</div>
                                    <div className="bg_yellow_qa"> <strong>Q :</strong> Question : 1RE</div>
                                </div>
                            </div>

                            <div className="bg_qand_ans box_sdw_n pl-0 pr-0">  
                                <div className="col-md-12 pb-4">
                                    <div className="Qtion_n_Stion_text">
                                        <h3 className="mb-4"><span>Question and Solution </span></h3>
                                        <div className="read_more_q">  
                                            <span className="qustion_mark">Q:</span>  
                                            <div className="read_more_text">Your conversation with Mr. Gerrard, which took place in February 2011 (see Case 6.28), continued as follows:<br/>
                                                <p className="mb-0">Mr. Gerrard: Iâ€™ve been talking with my accountant about our capital expansion needs, which will be considerable during the next couple of years. To stay in a strong competitive position, weâ€™re constantly buying new pieces of earthmoving Mr. Gerrard: Iâ€™ve been talking with my accountant about our capital expansion needs, which will be considerable during the next couple of years. To stay in a strong competitive position, weâ€™re constantly buying new pieces of earthmoving</p> 
                                            </div> 
                                        </div> 
                                    </div>
                                </div> 
                                <div className="col-md-12 pb-4">
                                    <div className="Qtion_n_Stion_text Qtion_n_Stion_text_scroll">
                                        <h3 className="mb-2 mt-3 font-14"><i className="fa fa-check-circle"></i> Expert Answer </h3>
                                        <div className="read_more_q">  
                                            <span className="qustion_mark">A:</span> 
                                            <div className="read_more_text_a"><p className="font-15">Assets acquired under capital leases are treated very much like other long-term depreciable assets, and capital lease liabilities are treated very much like long-term notes payable.  The only difference is that in a capital lease transaction, the leasee company (i.e., the company having use and enjoyment of the asset during the lease term) does not have actual ownership of the leased asset.  Yet, since the lessee does control the majority of economic benefits to be derived from the use of the asset, it is regarded “in substance” as being the owner of the asset.  Thus, on the lessee’s books, Equipment is debited and a long-term interest-bearing liability called “Capital Lease Liability” is credited for the present value of future lease payments (which is used as a substitute for the asset’s purchase price).  The leased equipment is then depreciated in the same manner as purchased equipment would be depreciated.  Likewise, the initial capital lease liability amount is amortized over the lease term as monthly, quarterly, or annual lease payments are made.  Part of each lease payment is recorded as interest expense, based on the carrying value of the capital lease liability at the beginning of each payment period; the remaining part of each payment is treated as a reduction in the capital lease liability account (i.e., principal amount).</p> 
                                                <p className="font-15">In effect, capital leases result in the same accounting treatment as do long-term assets such as equipment) that are purchased using 100% bank financing (i.e., notes payable).  Long-term assets and long-term liabilities are recorded initially for like amounts on the balance sheet.  The long-term asset is depreciated over its useful life while the long-term liability is amortized over the loan term, resulting in depreciation expense and interest expense being recorded in the company’s income statements for several years.</p>  
                                                <div className="Qtion_n_Stion_text"> 
                                                    <div className="read_more_q">  
                                                        <span><img src="/images/balance-sheet.jpg" className="img-fluid" alt=""/></span>
                                                    </div>
                                                </div>
                                                <p className="font-15">
                                                Retained earnings is increased by net income and decreased by dividends (or by net losses) and thus is not the same as cash.  Net income (and thus retained earnings) is determined using the accrual basis of accounting which results in an amount that is different than operating cash flows.  Most of Gerrard Construction Co.’s retained earnings have been invested in property, plant and equipment.</p>

                                                <p className="font-15"><strong>d.</strong> Bonds payable represents a liability to the firm and is payable at pre-specified times.  Interest is a fixed claim to the company’s income and must be paid in accordance with the terms of the bond agreement.  Likewise, the maturity value of bonds is a fixed claim to the company’s assets.  If any interest or principal payments are missed, the company will face legal action, and could possibly be forced into bankruptcy</p>

                                                <p className="font-15">Bonds are usually callable and may be convertible.  Interest is a deductible expense for income tax purposes.</p>

                                                <p className="font-15">Preferred stock is an owners’ equity element in the firm’s balance sheet, but has many characteristics that are more <br/>
                                                similar to bonds payable than to common stock.  Although preferred stock dividends represent a fixed claim to income, there is no requirement that they must be declared or paid.  Thus
                                                </p>

                                            </div> 
                                        </div>
                                    </div>
                                </div> 
                            </div>
                    
                            <div className="bg_qand_ans box_sdw_n pl-0 pr-0">    
                                <div className="col-md-12 pb-4">
                                    <div className="Qtion_n_Stion_text">
                                        <h3 className="mb-4"><span>Question and Solution</span></h3>
                                        <div className="read_more_q">  
                                            <span className="qustion_mark">Q:</span>  <div className="read_more_text">Question 4QA - Describe how pharmacogenomics will influence the treatment of human diseases which will be considerable during the next couple of years. To stay in a strong competitive position, weâ€™re constantly buying new pieces of earthmoving Mr. Gerrard: Iâ€™ve been talking with my accountant about our capital expansion needs, which will be considerable during the next couple of years. To stay in a strong competitive position, weâ€™re constantly buying new pieces of earthmoving </div> 
                                        </div> 
                                    </div>
                                </div> 
                                <div className="col-md-12 pb-4">
                                    <div className="Qtion_n_Stion_text"> 
                                        <div className="read_more_q">  
                                            <div className="read_more_text_a bg_text_img">   
                                                <div className="Get_Answer_text m-auto">
                                                    <p>This problem has been <span>solved!</span></p>
                                                    <div className="btn1 Get_Answer_btn">
                                                        <a href="#" className="red_text1">Click to Get Answer</a>
                                                    </div>
                                                </div>    
                                            </div> 
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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

        <section className="section Book_Description text_justify mt-5">
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <div className="Book_Description_text">
        <h2 className="font-24">Book Description</h2>
        <p>About the Book: Collage Botany: Vol-III This Voume includes Plant Anataomy, Reproduction in Flowering Plants, BioChemistry, Plant Physiology, Biotechnology, Ecology, Economic Botany, Cell Biology, and Genetics, for Degree m Honours and Post Graduate Students. Contents UNIT-I: Plant Anatomy UNIT-2: Reproduction in Flowering Plants UNIT- 3: Biochemistry UNIT-4: Plant Physiology UNIT-5: Biotechnology UNIT- 6: Ecology UNIT-7: Utilization of Plants (Economic Botany) UNIT-8: Cell Biology UNIT-9 : Genetics-Continuity of Life </p>
        <a href="#">Read More</a>
        </div>
        </div>
        </div>
        </div>
        </section>

        <section className="section Book_Description text_justify mt-4">
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <div className="Book_Details_text">
        <h2 className="font-17">Book Details</h2>
        <ul>
        <li><span>ISBN-13</span>  9788121939003   </li>
        <li><span>Language</span> English </li>
        <li><span>Binding</span> Paper Back   </li>
        <li><span>Publisher</span> S Chand & Company Pvt Ltd - He   </li> 
        </ul>
        <ul> 
        <li><span>Publishing</span> Date  2015   </li>
        <li><span>Product Edition</span> 1</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        </section>

        <section className="section Reviews_Ratings text_justify mt-4">
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <div className="Reviews_bg">
        <div className="row">
        <div className="col-md-4">
        <div className="Reviews_Ratings_text">
        <h3 className="">Reviews & Ratings</h3>
        <p className="start_review_pr"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <span className="ml-1">4 out of 5 stars</span></p>
        
        <ul>
        <li>5 <i className="fa fa-star"></i> <span className="line_rating span5"></span> 0</li>
        <li>4 <i className="fa fa-star"></i> <span className="line_rating span4"></span> 18</li>
        <li>3 <i className="fa fa-star"></i> <span className="line_rating span3"></span> 10</li>
        <li>2 <i className="fa fa-star"></i> <span className="line_rating span2"></span> 0</li>
        <li>1 <i className="fa fa-star"></i> <span className="line_rating span1"></span> 0</li>
        <li><a href="#"><i className="fa fa-pencil"></i> WRITE YOUR REVIEW</a></li>
        </ul>
        </div>
        </div>
        <div className="col-md-8">
        <div className="user_icon1_bg">
        <div className="user_icon1_text text-center">
        <ul>
        <li><span className="img"><img src="/images/user_icon1.png" className="img-fluid" alt=""/></span></li>
        <li><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></li>
        <li>Rated <span>4.5/5</span></li>
        </ul>
        </div>
        <div className="Dre_Brandell">
        <p className="font-16"><strong>Dre Brandell</strong></p>
        <p>
        MyMathLab for Bittinger Algebra Foundations MyMathLab for Bittinger Algebra Foundations Solutions Manual is an interesting book. My concepts were clear after reading this book. All fundamentals are deeply explained with examples. I highly recommend this book to all students for step by step textbook solutions. </p>
        </div>
        </div>
        <div className="user_icon1_bg">
        <div className="user_icon1_text text-center">
        <ul>
        <li><span className="img"><img src="/images/user_icon1.png" className="img-fluid" alt=""/></span></li>
        <li><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></li>
        <li>Rated <span>4.5/5</span></li>
        </ul>
        </div>
        <div className="Dre_Brandell">
        <p className="font-16"><strong>Dre Brandell</strong></p>
        <p>
        MyMathLab for Bittinger Algebra Foundations MyMathLab for Bittinger Algebra Foundations Solutions Manual is an interesting book. My concepts were clear after reading this book. All fundamentals are deeply explained with examples. I highly recommend this book to all students for step by step textbook solutions. </p>
        </div>
        </div>
        <div className="user_icon1_bg">
        <div className="user_icon1_text text-center">
        <ul>
        <li><span className="img"><img src="/images/user_icon1.png" className="img-fluid" alt=""/></span></li>
        <li><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></li>
        <li>Rated <span>4.5/5</span></li>
        </ul>
        </div>
        <div className="Dre_Brandell">
        <p className="font-16"><strong>Dre Brandell</strong></p>
        <p>
        MyMathLab for Bittinger Algebra Foundations MyMathLab for Bittinger Algebra Foundations Solutions Manual is an interesting book. My concepts were clear after reading this book. All fundamentals are deeply explained with examples. I highly recommend this book to all students for step by step textbook solutions. </p>
        </div>
        </div>
        <div className="btn1 text-right pr-4 pb-3">
        <a href="#" className="text-black rev-btn">View all</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div> 
        </section>

        <section className="section  pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <div className="Content_Covered_title pb-3">
                            <h2>Students who viewed this book also checked out</h2> 
                        </div>
                    </div>
                    <div className="col-md-3 pbtm">
                        <div className="our_popular_text">
                            <div className="our_popular_img">
                                <img src="/images/our-popular/img1.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div className="our_popular_title">Elementary Principles of Chemical Processes, Binder
                            </div>
                            <div className="our_popular_isbn_no">ISBN: <span>97801762666322 </span>
                            </div>
                            <div className="star_rating">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-empty"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 pbtm">
                        <div className="our_popular_text">
                            <div className="our_popular_img">
                                <img src="/images/our-popular/img2.jpg" className="img-fluid" alt=""/>
                            </div>
                        <div className="our_popular_title">
                        FUNDAMENTALS OF BIOCHEM.(LL)W/WILEYPLUS
                        </div>
                        <div className="our_popular_isbn_no">
                        ISBN: <span>9781119238263  </span>
                        </div>
                        <div className="star_rating">
                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-empty"></i>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 pbtm">
                        <div className="our_popular_text">
                        <div className="our_popular_img">
                        <img src="/images/our-popular/img3.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="our_popular_title">
                        FUNAMENTALS OF BIOLCHEM WILEY PLUS
                        </div>
                        <div className="our_popular_isbn_no">
                        ISBN: <span>9781119325604 </span>
                        </div>
                        <div className="star_rating">
                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-empty"></i>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 pbtm">
                        <div className="our_popular_text">
                        <div className="our_popular_img">
                        <img src="/images/our-popular/img4.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="our_popular_title">
                        FUNDAMENTALS OF BIOCHEM.-WILEYPLUS CARD
                        </div>
                        <div className="our_popular_isbn_no">
                        ISBN: <span>9781118918425 </span>
                        </div>
                        <div className="star_rating">
                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-empty"></i>
                        </div>
                        </div>
                    </div>
        
                </div>
            </div>
        </section>

        <section className="faq faq_bg_sctn">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5">
                            <div className="Content_Covered_title pb-3">
                                <h2>CrazyForStudy Frequently asked questions</h2> 
                            </div>
                        </div>

                        <div className="col-md-6 ml-auto">
                            <ul className="faq-list">
                                <li>
                                    <a data-toggle="collapse" className="collapsed" href="#faq1">What are CrazyForStudy step-by-step Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition Solutions Manuals? <i className="fa fa-arrow-up"></i></a>
                                    <div id="faq1" className="collapse" data-parent=".faq-list" >
                                        <p className="first-para"><strong>Answer : </strong>CrazyForStudy Solution Manuals are written by vetted CrazyForStudy 18 experts, and rated by students - so you know you're getting high quality answers. Solutions Manuals are available for thousands of the most popular college and high school textbooks in subjects such as Math, Science (<a href="#">Physics</a>, <a href="#">Chemistry</a>, <a href="#">Biology</a>), Engineering (<a href="#">Mechanical</a>, <a href="#">Electrical</a>, <a href="#">Civil</a>), <a href="#">Business</a> and more. Understanding Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition homework has never been easier than with CrazyForStudy.</p>
                                    </div>
                                </li>
                                <li>
                                    <a data-toggle="collapse" href="#faq2" className="collapsed">Why is CrazyForStudy better than downloaded Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition PDF solution manuals? <i className="fa fa-arrow-up"></i></a>
                                    <div id="faq2" className="collapse" data-parent=".faq-list">
                                        <p><strong>Answer : </strong>It's easier to figure out tough problems faster using CrazyForStudy. Unlike static PDF Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition solution manuals or printed answer keys, our experts show you how to solve each problem step-by-step. No need to wait for office hours or assignments to be graded to find out where you took a wrong turn. You can check your reasoning as you tackle a problem using our interactive solutions viewer.</p>
                                    </div>
                                </li>
                                <li>
                                    <a data-toggle="collapse" href="#faq3" className="collapsed"> How is CrazyForStudy better than a printed Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition student solution manual from the bookstore? <i className="fa fa-arrow-up"></i></a>
                                    <div id="faq3" className="collapse" data-parent=".faq-list">
                                        <p><strong>Answer : </strong>Our interactive player makes it easy to find solutions to Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition problems you're working on - just go to the chapter for your book. Hit a particularly tricky question? Bookmark it to easily review again before an exam. <br/><br/> The best part? As a CrazyForStudy subscriber, you can view available interactive solutions manuals for each of your classNamees for one low monthly price. Why buy extra books when you can get all the homework help you need in one place?</p>
                                    </div>
                                </li>
                                <li>
                                    <a data-toggle="collapse" href="#faq4" className="collapsed">Can I get help with questions outside of textbook solution manuals? <i className="fa fa-arrow-up"></i></a>
                                    <div id="faq4" className="collapse" data-parent=".faq-list">
                                        <p><strong>Answer : </strong>You bet! CrazyForStudy Expert Q&amp;A is a great place to find help on problem sets and 18 study guides. Just post a question you need help with, and one of our experts will provide a custom solution. You can also find solutions immediately by searching the millions of fully answered study questions in our archive.</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="500" className="aos-init aos-animate">
                                    <a data-toggle="collapse" href="#faq5" className="collapsed">   How do I view solution manuals on my smartphone? <i className="fa fa-arrow-up"></i></a>
                                    <div id="faq5" className="collapse" data-parent=".faq-list">
                                        <p><strong>Answer : </strong>You can <a target="_blank" href="">download</a> our homework help app on iOS to access solutions manuals on your mobile device. Asking a study question in a snap - just take a pic.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-5 faq_img">
                            <span><img src="/images/faq_img.png" className="img-fluid"/></span>
                        </div>

                    </div>
                </div>
            </section>
            
        <Follow/>
        <Footer/>
    </>
    )
}