import SingleBook from '../all-subjects/single-book'
import Pagination from '../../common/pagination'
import InputSearch from '../../common/input-search'
import {useState} from 'react';

export default function AllBooks({...props}) {

    return(
        <section className="section">
            <div className="container">
                <div className="row">
                    <InputSearch/>

                    {props.data && props.data.data.map((item, key)=>{
                        return ( <SingleBook key={key} image={"/images/our-popular/img1.jpg"} bookname={item.BookName} isbn={item.ISBN13}/> )
                    })}

                    <Pagination setPageNo={props.setPageNo} pageNo={props.pageNo}/>
                </div>
            </div>
        </section>
    )
}