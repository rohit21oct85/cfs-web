import {useState,useEffect} from 'react';
import {searchData} from '../../libs/search'
import BookImage from './book-image'
import Link from 'next/link'
import {MakeSlug} from '../common/make-slug'

export default function SearchComp({...props}){

    const [ display, setDisplay ] = useState('none');
    const [ searchedQuestions, setSearchedQuestions ] = useState(null);
    const [ searchedBooks, setSearchedBooks ] = useState(null);
    const [ search, setSearch ] = useState(null);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if(search && search.length > 3 && search != ''){
                setDisplay('block');
                openSearch(search);
            }else if(search === ""){
                setDisplay('none');
                setSearchedBooks(null)
                setSearchedQuestions(null)
            }
          }, 1000);
        return () => clearTimeout(delayDebounceFn)
    },[search]);

    async function openSearch (e){
        
        const data = await searchData({search:e,limit:3});
        if(data){
            setSearchedBooks(data.data2.books);
            setSearchedQuestions(data.data1.questions);
            if(data && data.data1.questions.length == 0 && data.data2.books.length == 0){
                setDisplay('none');
            }
        }
    }

    return (
        <>
            <form>
                <input type="text" placeholder={props.placeholder} className="form-control" onChange={(e)=>{setSearch(e.target.value)}}/>
                    <Link href={`/search/${search}`}><button type="submit" className="search_btn">{props.btnText}</button></Link>
            </form>
            
            <div className="search_prodt1" style={{display: `${display}`}}>
                <div className="">
                    <div className="books_bg1">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="books_bg2">
                                    {searchedBooks && searchedBooks.length != 0 &&
                                    <div className="books_titles">
                                        Books
                                    </div>}
                                    {searchedBooks && searchedBooks.map((item,key)=>{
                                    return(<span key={key}>
                                        <Link href={`/textbook-solutions-manuals/isbn-${item.ISBN13}-${MakeSlug(item.BookName)}-${MakeSlug(item.Edition)}`}><a>
                                            <div className="picking_img1">
                                                <BookImage isbn={item.ISBN13}/>
                                            </div>
                                            <div className="Picking_Cotton">
                                                <h3>{item.BookName}</h3>
                                                <p>{item.Author1}</p>
                                                <p><span>ISBN10 - {item.ISBN10} | ISBN13 - {item.ISBN13}</span></p>
                                            </div></a>
                                        </Link>
                                        </span>)
                                    })}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="books_bg2">
                                    {searchedQuestions && searchedQuestions.length != 0 &&
                                    <div className="books_titles">
                                        TextBook Question
                                    </div>
                                    }
                                    {searchedQuestions && searchedQuestions.map((item,key)=>{
                                    return(<span key={key}>
                                        {/* router.push(`/textbook-solutions-manuals/${MakeSlug(questionValue)}-chapter-${chapter}-problem-${MakeSlug(e.target.value)}-solutions-${ISBN13}`, undefined, { shallow: true }) */}
                                        <Link href={`/textbook-solutions-manuals/${MakeSlug(item.question.substring(0,50))}-chapter-${item.chapter_no}-problem-${MakeSlug(item.problem_no)}-solutions-${item.book_isbn}`}><a>
                                        {/* <Link href={{pathname: `/textbook-solutions-manuals/${MakeSlug(item.question.substring(0,50))}-chapter-${item.chapter_no}-problem-${MakeSlug(item.problem_no)}-solutions-${item.book_isbn}`, query: { section_no: `${MakeSlug(item.section_no)}`, excerise: `${MakeSlug(item.excerise)}`  }}}><a> */}
                                            <div className="Picking_Cotton">
                                                <h3>{item.question}</h3>{console.log(item)}
                                                <p>{item.book_name} | {item.book_isbn}</p>
                                                <p><span>Chapter Name: {item.chapter_name}, Chapter No: {item.chapter_no}</span></p>
                                            </div></a>
                                        </Link>
                                        </span>)
                                    })}
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-12 View_All_results">
                    <Link href={`/search/${search}`}><a>View All results</a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}