import {useState,useEffect} from 'react';
import {searchData} from '../../libs/search'
import BookImage from './book-image'
import Link from 'next/link'

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
            
            <div className="row" style={{display: `${display}`}}>
                <div className="col-md-12">
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
                                            <div className="picking_img1">
                                                <BookImage isbn={item.ISBN13}/>
                                            </div>
                                            <div className="Picking_Cotton">
                                                <h3>{item.BookName}</h3>
                                                <p>{item.Author1}</p>
                                                <p><span>ISBN10 - {item.ISBN10} | ISBN13 - {item.ISBN13}</span></p>
                                            </div>
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
                                            <div className="Picking_Cotton">
                                                <h3>{item.question}</h3>
                                                <p>{item.book_name} | {item.book_isbn}</p>
                                                <p><span>Chapter Name: {item.chapter_name}, Chapter No: {item.chapter_no}</span></p>
                                            </div>
                                        </span>)
                                    })}
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-12 View_All_results">
                        <a href="#">View All results</a> 
                    </div>
                </div>
            </div>
        </>
    )
}