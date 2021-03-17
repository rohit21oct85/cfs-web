import {useState, useEffect} from 'react';

export default function  Pagination({...props}) {
    
    const handleClick = (e) => {
        e.preventDefault();
        props.setPageNo(e.target.innerText - 1);
    }

    const handlePrev = (e) => {
        e.preventDefault();
        if(props.pageNo > 0){
            props.setPageNo(props.pageNo - 1)
        }
    }

    const handleNext = (e) => {
        e.preventDefault();
        if(props.pageNo < pages-1){
            props.setPageNo(props.pageNo + 1)
        }
    }

    const[pages, setPages] = useState();

    useEffect(() => {
        setPages(Math.floor(props.total / 10));
        return () => {
            
        }
    }, [])

    

    return(
        <div className="col-md-12 mt-4">{console.log(pages)}
            <div className="next_prew">
                <ul>
                    <li><a href="#" className="border-left-0 " onClick={handlePrev}>Previous</a></li>
                    {/* {[...Array(pages)].map((e, i) => 
                        ( i!=0 && i<4 ) &&
                            <li key={i}>
                                <a href="#" className={props.pageNo+1 == i ? 'active':''} onClick={handleClick}>{i}</a>
                                {console.log(props.pageNo+1, i)}
                            </li>
                    )}
                    {[...Array(pages)].map((e, i) => 
                        ( i>pages-4 ) &&
                            <li key={i}>
                                <a href="#" className={props.pageNo+1 == i ? 'active':''} onClick={handleClick}>{i}</a>
                                {console.log(props.pageNo+1, i)}
                            </li>
                    )} */}
                    <li><a href="#" className={props.pageNo+1 == 1 ? 'active':''} onClick={handleClick}>1</a></li>
                    <li><a href="#" className={props.pageNo+1 == 2 ? 'active':''} onClick={handleClick}>2</a></li>
                    <li><a href="#" className={props.pageNo+1 == 3 ? 'active':''} onClick={handleClick}>3</a></li>
                    <li><a href="#" className={props.pageNo+1 == 4 ? 'active':''} onClick={handleClick}>4</a></li>
                    <li><a href="#" className={props.pageNo+1 == 5 ? 'active':''} onClick={handleClick}>5</a></li>
                    <li><a href="#" onClick={handleNext}>Next</a></li>
                </ul>
            </div>
        </div>
    )
}