import {useState} from 'react';

export default function Search({...props}){

    const [ display, setDisplay ] = useState('none');

    const openSearch =(e)=>{
        if(e.target.value===""){
            setDisplay('none');
        }else{
            setDisplay('block');
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
                                    <div className="books_titles">
                                        Books
                                    </div>
                                    <div className="picking_img1">
                                        <img src="/images/search-img/picking_img1.jpg" className="img-fluid" alt=""/>
                                    </div>
                                    <div className="Picking_Cotton">
                                        <h3>Picking Cotton</h3>
                                        <p>Our Memoir of Injustice and Redemption</p>
                                        <p><span>Thompson-Cannino,  Jennifer  ISBN 0312599536,   ISBN13 - 9780312599539</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="books_bg2">
                                    <div className="books_titles">
                                        Books
                                    </div>
                                    <div className="picking_img1">
                                        <img src="/images/search-img/picking_img1.jpg" className="img-fluid" alt=""/>
                                    </div>
                                    <div className="Picking_Cotton">
                                        <h3>Picking Cotton</h3>
                                        <p>Our Memoir of Injustice and Redemption</p>
                                        <p><span>Thompson-Cannino,  Jennifer  ISBN 0312599536,   ISBN13 - 9780312599539</span></p>
                                    </div>
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