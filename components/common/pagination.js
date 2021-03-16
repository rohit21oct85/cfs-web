export default function  Pagination({...props}) {
    
    const handleClick = (e) => {
        e.preventDefault();
        props.setPageNo(e.target.innerText - 1);
    }

    const handlePrev = (e) => {
        e.preventDefault();
        console.log(props.pageNo)
        if(props.pageNo >= 0){
            props.setPageNo(props.pageNo - 1)
        }
    }

    const handleNext = (e) => {
        e.preventDefault();
        console.log(props.pageNo)
        props.setPageNo(props.pageNo + 1)
    }
    return(
        <div className="col-md-12 mt-4">
            <div className="next_prew">
                <ul>
                    <li><a href="#" className="border-left-0 " onClick={handlePrev}>Previous</a></li>
                    <li><a href="#" className="active" onClick={handleClick}>1</a></li>
                    <li><a href="#" className="" onClick={handleClick}>2</a></li>
                    <li><a href="#" className="" onClick={handleClick}>3</a></li>
                    <li><a href="#" className="" onClick={handleClick}>4</a></li>
                    <li><a href="#" className="" onClick={handleClick}>5</a></li>
                    <li><a href="#" onClick={handleNext}>Next</a></li>
                </ul>
            </div>
        </div>
    )
}