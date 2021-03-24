import {useState} from 'react';
import {searchData} from '../../libs/search'
import BookImage from '../../components/common/book-image'

export default function Search({...props}){

    const [ display, setDisplay ] = useState('none');
    const [ searchedQuestions, setSearchedQuestions ] = useState(null);
    const [ searchedBooks, setSearchedBooks ] = useState(null);
    async function openSearch (e){
        if(e.target.value === ""){
            setDisplay('none');
            setSearchedBooks(null)
            setSearchedQuestions(null)
        }else {
            const debounce = setTimeout(async() => {
                if(e.target.value.length >= 3){
                    setDisplay('block');
                    const data = await searchData(e.target.value);
                    if(data){
                        setSearchedBooks(data.data2.books);
                        setSearchedQuestions(data.data1.questions);
                    }
                }
                clearTimeout(debounce);
            }, 1000);
        }   
    }

    return (
        <>
            <form>
                <input type="text" placeholder={props.placeholder} className="form-control" onKeyUp={(e)=>{openSearch(e)}}/>
                <button type="submit" className="search_btn">{props.btnText}</button>
            </form>
            
            <div className="row" style={{display: `${display}`}}>
                <div className="col-md-12">
                    <div className="books_bg1">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="books_bg2">
                                    {searchedBooks && 
                                    <div className="books_titles">
                                        Books
                                    </div>}
                                    {searchedBooks && searchedBooks.map((item,key)=>{
                                    return(<span key={key}>
                                            <div className="picking_img1">
                                                {/* <img src="/images/search-img/picking_img1.jpg" className="img-fluid" alt=""/> */}
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
                                    {searchedQuestions && 
                                    <div className="books_titles">
                                        TextBook Question
                                    </div>
                                    }
                                    {searchedQuestions && searchedQuestions.map((item,key)=>{
                                    return(<span key={key}>
                                            <div className="picking_img1">
                                                {/* <img src="/images/search-img/picking_img1.jpg" className="img-fluid" alt=""/> */}
                                            </div>
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