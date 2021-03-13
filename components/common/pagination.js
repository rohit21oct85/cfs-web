export default function  Pagination() {
    return(
        <div className="col-md-12 mt-4">
            <div className="next_prew">
                <ul>
                    <li><a href="#" className="border-left-0 ">Previous</a></li>
                    <li><a href="#" className="active">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">Next</a></li>
                </ul>
            </div>
        </div>
    )
}