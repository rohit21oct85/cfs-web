import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import Follow from '../components/website/home/follow'
import Faq from '../components/website/book-detail/faq'
import RelatedTbs from '../components/website/book-detail/related-tbs'
import Subscription from '../components/website/book-detail/subscription'
import Description from '../components/website/book-detail/description'
import Details from '../components/website/book-detail/detail'
import Reviews from '../components/website/book-detail/review'
import BreadCrumb from '../components/website/all-subjects/breadcrumb'
import { useRouter } from "next/router";
import { useQuery } from 'react-query'
import {getBook, getChapters, getSections, getExercises, getRelatedBooks, getProblems, getProblemsDirectly, searchQuestions} from '../libs/book'
import {useState, useEffect} from 'react';
import BookInfo from '../components/website/book-detail/book-info'

export default function Book(){
    const router = useRouter();
    const [chapter, setChapter] = useState();
    const [section, setSection] = useState();
    const [exercise, setExercise] = useState();
    const [relatedBook, setRelatedBook] = useState();
    const [directProblem, setDirectProblem] = useState(false);
    const [search, setSearch] = useState();
    const [display, setDisplay] = useState();
    const [colMd6, setColMd6] = useState();
    const [searchedItems, setSearchedItems] = useState();
    
    const { data: books, isLoading:bookIsLoading, error:bookError } = useQuery([router.query.book], () => getBook({book_isbn: router.query.book}),{staleTime:Infinity})
    const { data: chapters, isLoading: chapterIsLoading, error:chapterError } = useQuery([`${router.query.book}-chapter`], () => getChapters({book_isbn: router.query.book}),{staleTime:Infinity})
    const { data: sections, isLoading: sectionIsLoading, error:sectionError } = useQuery([`${router.query.book}-${chapter}`], () => getSections({book_isbn: router.query.book,chapter_no: chapter}),{staleTime:Infinity})
    const { data: exercises, isLoading: exerciseIsLoading, error:exerciseError } = useQuery([`${router.query.book}-${chapter}-${section}`], () => getExercises({book_isbn: router.query.book,chapter_no: chapter, section_no:section}),{staleTime:Infinity})
    const { data: problems, isLoading: problemIsLoading, error:problemError } = useQuery([`${router.query.book}-${section}-${exercise}`], () => getProblems({book_isbn: router.query.book,chapter_no: chapter, section_no:section, exercise_no:exercise}),{staleTime:Infinity})
    
    const { data: problemsDirect, isLoading: problemDirectIsLoading, error:problemDirectError } = useQuery([`${router.query.book}-${chapter}-${directProblem}`], () => getProblemsDirectly({book_isbn: router.query.book,chapter_no: chapter}),{staleTime:Infinity,enabled:directProblem})
    
    const { data: relatedBooks, isLoading: relatedBooksIsLoading, error:relatedBooksError } = useQuery([`${relatedBook}-related-books`], () => getRelatedBooks({sub_subject: relatedBook}),{staleTime:Infinity})
    
    // const { data: searchedItems, isLoading: searchIsLoading, error:searchError } = useQuery([search], () => searchQuestions({book_isbn:router.query.book,search:search}),{staleTime:Infinity})

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
        if(books && books.length>0){
            setRelatedBook(books[0].sub_subject_name)
        }
        return () => {}
    }, [books])

    useEffect(() => {
        if(chapters && chapters.length>0){
            setChapter(chapters[0].chapter_no)
        }
        return () => {}
    }, [chapters])

    useEffect(() => {
        if(sections && sections.length>0){
            if(sections[0] && sections[0].section_no != ""){
                setSection(sections[0].section_no)
                setDirectProblem(false);
                setDisplay('block')
                setColMd6('');
            }
        }else{
            setDirectProblem(true)
            setDisplay('none')
            setColMd6('col-md-6')
        }
        return () => {}
    }, [sections])

    useEffect(() => {
        if(exercises && exercises.length>0){
            setExercise(exercises[0].excerise)
        }
        return () => {}
    }, [exercises])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if(search && search.length > 3 && search != ''){
                openSearch(router.query.book, search);
            }else if(search === ""){
                setSearchedItems(null);
            }
          }, 1000);
        return () => clearTimeout(delayDebounceFn)
    },[search]);

    async function openSearch (bookIsbn,e){
        const data = await searchQuestions(bookIsbn, e);
        setSearchedItems(data.problems)
    }

    if(chapterIsLoading)
    return <div id="loading"></div>;

    return(
        <>
            <Header/>
            <Navbar/>
            <BreadCrumb heading={books && books[0] && books[0].BookName} subject={books && books[0] && books[0].subject_name} sub_subject={books && books[0] && books[0].sub_subject_name}/>
            <BookInfo bookData={books && books[0]}/> 

            <section className="section font_sz text_justify pt-5">
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-md-12">
                            <div className="bg_chapter">
                                <div className="row"> 
                                    <div className={`col-md-3 ${colMd6}`}>
                                        <div className="chapter">
                                            <label>Chapter</label>
                                            <select className="form-control" onChange={handleChapter}>
                                            {chapters && chapters.map((item,key)=>{
                                                return (<option key={key} value={item.chapter_no}>{item.chapter_no} - {item.chapter_name}</option>)
                                            })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3"  style={{display: `${display}`}}>
                                        <div className="chapter">
                                            <label>Section</label>
                                            <select className="form-control" onChange={handleSection}>
                                            {sections && sections.map((item,key)=>{
                                                return(<option key={key} value={item.section_no}>{item.section_no} - {item.section_name}</option>)
                                            })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3"  style={{display: `${display}`}}>
                                        <div className="chapter">
                                                <label>Exercise</label>
                                                <select className="form-control" onChange={handleExercise}>
                                                {exercises && exercises.map((item,key)=>{
                                                    return(<option key={key} value={item.excerise}>{item.excerise}</option>)
                                                })}
                                                </select>
                                        </div>
                                    </div>
                                    <div className={`col-md-3 ${colMd6}`}>
                                        <div className="chapter">
                                                <label>Question</label>
                                                <select className="form-control">
                                                
                                                {sections && problems && problems.map((item,key)=>{
                                                    return(<option key={key} value={item.problem}>{item.problem_no} - {item.question}</option>)
                                                })}

                                                {problemsDirect && problemsDirect.map((item,key)=>{
                                                    return(<option key={key} value={item.problem}>{item.problem_no}</option>)
                                                })}
                                                </select>
                                        </div>
                                    </div>
                                </div>

                            <form>
                                <input type="text" placeholder="Search for Questions..." className="form-control" onChange={(e)=>{setSearch(e.target.value)}}/>
                            </form>
                        
                                {/* <div className="row" >
                                    <div className="col-md-12">
                                        <div className="books_bg1">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="books_bg2">
                                                        <div className="books_titles">
                                                            Books
                                                        </div>
                                                            <span>
                                                                <div className="picking_img1">
                                                                </div>
                                                                <div className="Picking_Cotton">
                                                                    <h3></h3>
                                                                    <p></p>
                                                                    <p><span></span></p>
                                                                </div>
                                                            </span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="books_bg2">
                                                        <div className="books_titles">
                                                            TextBook Question
                                                        </div>
                                                        <span>
                                                                <div className="Picking_Cotton">
                                                                    <h3></h3>
                                                                    <p></p>
                                                                    <p><span>Chapter Name: </span></p>
                                                                </div>
                                                            </span>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="col-md-12 View_All_results">
                                            <a href="#">View All results</a> 
                                        </div>
                                    </div>
                                </div>   */}
                                
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
                                {searchedItems ? 
                                    <div className="col-md-12 pb-4">
                                        <div className="Qtion_n_Stion_text Qtion_n_Stion_text_scroll">
                                            {searchedItems && searchedItems.length>0 ? searchedItems.map((item,key) => {
                                                return(
                                                    <div className="bg_yellow_qa" key={key}> <strong>Q :</strong> {item.question} : {item.problem_no}</div>
                                                )
                                            }): <div> <strong>No Results Found</strong></div>}
                                        </div>
                                    </div> 
                                    :    
                                    <div className="col-md-12 pb-4">
                                        <div className="Qtion_n_Stion_text Qtion_n_Stion_text_scroll">
                                        {problemIsLoading ? 'loading...' :
                                            problems && problems.map((item,key)=>{
                                                return(
                                                    <div className="bg_yellow_qa" key={key}> <strong>Q :</strong> {item.question} : {item.problem_no}</div>
                                                )
                                            })}
                                        {problemDirectIsLoading ? 'loading...' :
                                            problemsDirect && problemsDirect.map((item,key)=>{
                                                return(
                                                    <div className="bg_yellow_qa" key={key}> <strong>Q :</strong> {item.question} : {item.problem_no}</div>
                                                )
                                            })}
                                        </div>
                                    </div> 
                                }

                                {/* <div className="col-md-12 pb-4">
                                    <div className="Qtion_n_Stion_text Qtion_n_Stion_text_scroll">
                                    {problemIsLoading ? 'loading...' :
                                    problems && problems.map((item,key)=>{
                                        return(
                                            <div className="bg_yellow_qa" key={key}> <strong>Q :</strong> {item.question} : {item.problem_no}</div>
                                        )
                                    })}
                                    {problemDirectIsLoading ? 'loading...' :
                                    problemsDirect && problemsDirect.map((item,key)=>{
                                        return(
                                            <div className="bg_yellow_qa" key={key}> <strong>Q :</strong> {item.question} : {item.problem_no}</div>
                                        )
                                    })}
                                    </div>
                                </div> */}

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

            <Subscription/>
            <Description/>
            <Details/>
            <Reviews reviews={books && books[0].reviews}/>
            <RelatedTbs data={relatedBooks}/>
            <Faq/>
            <Follow/>
            <Footer/>
        </>
    )
}